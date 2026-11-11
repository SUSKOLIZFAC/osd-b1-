// Speech Recognition and Microphone Audio Recorder Service for ÖSD B1 Speaking Module

export class SpeechRecorderService {
  private recognition: any = null;
  private mediaRecorder: MediaRecorder | null = null;
  private audioChunks: Blob[] = [];
  private audioBlob: Blob | null = null;
  private audioUrl: string | null = null;
  private stream: MediaStream | null = null;
  private isRecording: boolean = false;
  private audioContext: AudioContext | null = null;
  private analyser: AnalyserNode | null = null;
  private animFrameId: number | null = null;

  public isSupported(): boolean {
    return typeof window !== 'undefined' && ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window);
  }

  public async startRecording(
    onTranscript: (text: string, isFinal: boolean) => void,
    onVolumeChange?: (volume: number) => void,
    onError?: (error: string) => void
  ): Promise<boolean> {
    try {
      this.audioChunks = [];
      this.audioBlob = null;
      if (this.audioUrl) {
        URL.revokeObjectURL(this.audioUrl);
        this.audioUrl = null;
      }

      // Request microphone stream
      this.stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      // Setup audio analyzer for volume level indicator
      if (onVolumeChange) {
        const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
        this.audioContext = new AudioCtx();
        const source = this.audioContext.createMediaStreamSource(this.stream);
        this.analyser = this.audioContext.createAnalyser();
        this.analyser.fftSize = 256;
        source.connect(this.analyser);

        const dataArray = new Uint8Array(this.analyser.frequencyBinCount);
        const checkVolume = () => {
          if (!this.isRecording || !this.analyser) return;
          this.analyser.getByteFrequencyData(dataArray);
          let sum = 0;
          for (let i = 0; i < dataArray.length; i++) {
            sum += dataArray[i];
          }
          const avg = sum / dataArray.length;
          onVolumeChange(Math.min(100, Math.round(avg * 1.5)));
          this.animFrameId = requestAnimationFrame(checkVolume);
        };
        checkVolume();
      }

      // Setup MediaRecorder
      this.mediaRecorder = new MediaRecorder(this.stream);
      this.mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          this.audioChunks.push(e.data);
        }
      };

      this.mediaRecorder.onstop = () => {
        this.audioBlob = new Blob(this.audioChunks, { type: 'audio/webm' });
        this.audioUrl = URL.createObjectURL(this.audioBlob);
      };

      this.mediaRecorder.start();

      // Setup Speech Recognition
      const SpeechRec = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRec) {
        this.recognition = new SpeechRec();
        this.recognition.lang = 'de-DE';
        this.recognition.continuous = true;
        this.recognition.interimResults = true;

        this.recognition.onresult = (event: any) => {
          let interimTranscript = '';
          let finalTranscript = '';

          for (let i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
              finalTranscript += event.results[i][0].transcript + ' ';
            } else {
              interimTranscript += event.results[i][0].transcript;
            }
          }

          onTranscript((finalTranscript + interimTranscript).trim(), false);
        };

        this.recognition.onerror = (e: any) => {
          if (onError && e.error !== 'no-speech') {
            onError(e.error);
          }
        };

        this.recognition.start();
      }

      this.isRecording = true;
      return true;
    } catch (err: any) {
      if (onError) onError(err.message || 'Mikrofonzugriff verweigert.');
      return false;
    }
  }

  public stopRecording(): Promise<{ audioUrl: string | null; audioBlob: Blob | null }> {
    return new Promise((resolve) => {
      this.isRecording = false;

      if (this.animFrameId) {
        cancelAnimationFrame(this.animFrameId);
        this.animFrameId = null;
      }

      if (this.audioContext) {
        this.audioContext.close();
        this.audioContext = null;
      }

      if (this.recognition) {
        try {
          this.recognition.stop();
        } catch (e) {}
      }

      if (this.mediaRecorder && this.mediaRecorder.state !== 'inactive') {
        this.mediaRecorder.onstop = () => {
          this.audioBlob = new Blob(this.audioChunks, { type: 'audio/webm' });
          this.audioUrl = URL.createObjectURL(this.audioBlob);
          if (this.stream) {
            this.stream.getTracks().forEach((track) => track.stop());
            this.stream = null;
          }
          resolve({ audioUrl: this.audioUrl, audioBlob: this.audioBlob });
        };
        this.mediaRecorder.stop();
      } else {
        if (this.stream) {
          this.stream.getTracks().forEach((track) => track.stop());
          this.stream = null;
        }
        resolve({ audioUrl: this.audioUrl, audioBlob: this.audioBlob });
      }
    });
  }

  public getAudioUrl(): string | null {
    return this.audioUrl;
  }
}

export const speechRecorderService = new SpeechRecorderService();
