// Web Speech Audio Synthesizer with Austrian & German voices, chime sound effects, and playback controls

export interface SpeechLine {
  speaker: string;
  textDe: string;
  textAr?: string;
  pauseSec?: number;
}

class AudioService {
  private synth: SpeechSynthesis | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private isPlaying: boolean = false;
  private isPaused: boolean = false;
  private currentLineIndex: number = 0;
  private script: SpeechLine[] = [];
  private rate: number = 1.0;
  private onLineChangeCallback: ((index: number) => void) | null = null;
  private onEndCallback: (() => void) | null = null;
  private onStateChangeCallback: ((state: { isPlaying: boolean; isPaused: boolean; currentLine: number; totalLines: number }) => void) | null = null;
  private germanVoice: SpeechSynthesisVoice | null = null;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
      this.initVoices();
      if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = () => this.initVoices();
      }
    }
  }

  private initVoices() {
    if (!this.synth) return;
    const voices = this.synth.getVoices();
    // Prefer German Austrian / Swiss / German standard voice
    this.germanVoice =
      voices.find(v => v.lang === 'de-AT') ||
      voices.find(v => v.lang === 'de-DE' && (v.name.includes('Natural') || v.name.includes('Google'))) ||
      voices.find(v => v.lang.startsWith('de')) ||
      null;
  }

  // Play realistic exam chime tone using Web Audio API before starting announcements
  public playChime(): Promise<void> {
    return new Promise((resolve) => {
      try {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        if (!AudioContextClass) return resolve();
        const ctx = new AudioContextClass();
        const now = ctx.currentTime;

        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const gain = ctx.createGain();

        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(587.33, now); // D5
        osc1.frequency.exponentialRampToValueAtTime(880, now + 0.3); // A5

        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(440, now);
        osc2.frequency.exponentialRampToValueAtTime(659.25, now + 0.3);

        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);

        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(ctx.destination);

        osc1.start(now);
        osc2.start(now);
        osc1.stop(now + 0.6);
        osc2.stop(now + 0.6);

        setTimeout(() => {
          resolve();
        }, 650);
      } catch (e) {
        resolve();
      }
    });
  }

  public setRate(newRate: number) {
    this.rate = Math.max(0.7, Math.min(1.4, newRate));
    if (this.isPlaying && !this.isPaused) {
      // Re-apply to current line
      this.pause();
      this.resume();
    }
  }

  public getRate(): number {
    return this.rate;
  }

  public async playScript(
    script: SpeechLine[],
    onLineChange?: (index: number) => void,
    onEnd?: () => void,
    playChimeFirst: boolean = true
  ) {
    this.stop();
    this.script = script;
    this.currentLineIndex = 0;
    this.onLineChangeCallback = onLineChange || null;
    this.onEndCallback = onEnd || null;

    if (playChimeFirst) {
      await this.playChime();
    }

    this.isPlaying = true;
    this.isPaused = false;
    this.playNextLine();
  }

  private playNextLine() {
    if (!this.synth || this.currentLineIndex >= this.script.length) {
      this.isPlaying = false;
      this.isPaused = false;
      this.notifyState();
      if (this.onEndCallback) this.onEndCallback();
      return;
    }

    const item = this.script[this.currentLineIndex];
    if (this.onLineChangeCallback) {
      this.onLineChangeCallback(this.currentLineIndex);
    }
    this.notifyState();

    const utterance = new SpeechSynthesisUtterance(item.textDe);
    utterance.lang = 'de-DE';
    utterance.rate = this.rate;

    // Pitch variation based on speaker
    if (item.speaker.toLowerCase().includes('frau') || item.speaker.toLowerCase().includes('sprecherin') || item.speaker.toLowerCase().includes('anna') || item.speaker.toLowerCase().includes('selina') || item.speaker.toLowerCase().includes('iris')) {
      utterance.pitch = 1.15;
    } else if (item.speaker.toLowerCase().includes('herr') || item.speaker.toLowerCase().includes('kai') || item.speaker.toLowerCase().includes('jan') || item.speaker.toLowerCase().includes('lehrer')) {
      utterance.pitch = 0.9;
    } else {
      utterance.pitch = 1.0;
    }

    if (this.germanVoice) {
      utterance.voice = this.germanVoice;
    }

    utterance.onend = () => {
      const pauseDuration = (item.pauseSec || 1) * 1000;
      setTimeout(() => {
        if (this.isPlaying && !this.isPaused) {
          this.currentLineIndex++;
          this.playNextLine();
        }
      }, pauseDuration);
    };

    utterance.onerror = () => {
      this.currentLineIndex++;
      this.playNextLine();
    };

    this.currentUtterance = utterance;
    this.synth.speak(utterance);
  }

  public pause() {
    if (this.synth && this.isPlaying && !this.isPaused) {
      this.synth.pause();
      this.isPaused = true;
      this.notifyState();
    }
  }

  public resume() {
    if (this.synth && this.isPlaying && this.isPaused) {
      this.synth.resume();
      this.isPaused = false;
      this.notifyState();
    }
  }

  public stop() {
    if (this.synth) {
      this.synth.cancel();
    }
    this.isPlaying = false;
    this.isPaused = false;
    this.currentLineIndex = 0;
    this.currentUtterance = null;
    this.notifyState();
  }

  public jumpToLine(index: number) {
    if (index >= 0 && index < this.script.length) {
      if (this.synth) this.synth.cancel();
      this.currentLineIndex = index;
      if (this.isPlaying) {
        this.playNextLine();
      }
    }
  }

  public onStateChange(cb: (state: { isPlaying: boolean; isPaused: boolean; currentLine: number; totalLines: number }) => void) {
    this.onStateChangeCallback = cb;
  }

  private notifyState() {
    if (this.onStateChangeCallback) {
      this.onStateChangeCallback({
        isPlaying: this.isPlaying,
        isPaused: this.isPaused,
        currentLine: this.currentLineIndex,
        totalLines: this.script.length,
      });
    }
  }

  // Single word or phrase pronunciation
  public speakPhrase(text: string, lang: 'de' | 'ar' = 'de'): Promise<void> {
    return new Promise((resolve) => {
      if (!this.synth) return resolve();
      this.synth.cancel();
      const utt = new SpeechSynthesisUtterance(text);
      utt.lang = lang === 'ar' ? 'ar-SA' : 'de-DE';
      utt.rate = 0.95;
      utt.onend = () => resolve();
      utt.onerror = () => resolve();
      this.synth.speak(utt);
    });
  }
}

export const audioService = new AudioService();
