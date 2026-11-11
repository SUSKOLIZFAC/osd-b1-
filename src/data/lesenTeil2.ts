import { LesenTeilSet } from '../types';

export const LESEN_TEIL_2_DATA: LesenTeilSet[] = [
  {
    id: 'lesen-t2-set1',
    teil: 2,
    testNumber: 1,
    titleDe: 'Ni Hao, Mama! & WebStamp',
    titleAr: 'مرحباً يا أمي! والطوابع الإلكترونية WebStamp',
    source: 'Zertifikat B1 neu, Test 1, S. 7-8',
    textPassageDe: `Text 1: Ni Hao, Mama!
Wenn Tongchun Jiang von seiner „Mama" schwärmt, denken die anderen Studenten manchmal, der Student rede von seiner Mutter in Shanghai. Dabei meint er Rita Jakobson aus Offenburg, bei der er jeden Sonntag auf dem Sofa sitzt und Sandkuchen isst. Rita und Gerald Jakobson machen bei dem Projekt „Senioren für ausländische Studenten" mit und sind so etwas wie Leiheltern – für Tongchun aus China und drei andere Gaststudenten. Was die Jakobsons mit ihren Schützlingen machen, könnte man einen Crashkurs nennen – in der Kunst des schrecklich normalen deutschen Familienlebens. Sie unternehmen Wanderungen. Sie sitzen im Wohnzimmer und spielen Karten. Und sie fragen Tongchun alles, was Eltern studierende Kinder nun einmal fragen: Wie läuft es an der Uni? Was machen die Noten? „Wenn ich eine gute Note bekomme, rufe ich zuerst Mama an", sagt Tongchun. Für die Jakobsons ist der Informatikstudent aus Shanghai ein Sohn auf Zeit. Dass Offenburger Senioren auf Gaststudenten attraktiver wirken als Szenepartys in Berlin, zeigen die Statistiken. Am Anfang des Aufenthalts wollen nur 20 Prozent der Gaststudenten nach ihrem Abschluss in Deutschland bleiben. Am Ende sind es 80 Prozent. Das sagt alles.`,
    textPassageSecondaryDe: `Text 2: WebStamp: persönliche Briefmarken
Die Schweizerische Post hatte mit der WebStamp, der elektronischen Briefmarke, eine neue, kreative Idee. WebStamp bietet die Möglichkeit, direkt am PC eigene Briefmarken zu gestalten und auszudrucken. Besonders interessant ist diese innovative Online-Frankier-Lösung für Firmen, da Briefe und Mailings mit individuellen Marken auffallen und beim Empfänger für Interesse sorgen. So sendet man auf und mit der Briefmarke auch eine Mini-Reklame und bleibt den Kunden auf jeden Fall in Erinnerung. Die Vorteile von WebStamp lassen sich ganz einfach nutzen. Nach der Anmeldung auf der Webseite der Schweizerischen Post kann's losgehen mit dem Gestalten einer individuellen Briefmarke. Als Sujet ist alles möglich: Fotos, Firmen- und Produktlogos, Grafiken oder sogar Reklamebotschaften. WebStamp funktioniert online und ist kostenlos. Man bezahlt nur das Porto, also den Wert, den die Briefmarke dann hat. Eine 1-Franken-Briefmarke kostet demnach auch nur einen Franken. Diese neuartigen Briefmarken gelten sowohl im Inland als auch im Ausland. Da das alles über Computerprogramme läuft, sind auch verschiedene Druckformate möglich, falls man beispielsweise die Empfängeradresse in die eigene WebStamp integrieren möchte. Adressen können direkt aus Excel importiert werden.`,
    questions: [
      {
        id: 7,
        type: 'multiple_choice',
        questionDe: 'In diesem Text geht es darum, ...',
        questionAr: 'يدور هذا النص حول ...',
        options: [
          { key: 'a', textDe: 'wie gut das Verhältnis zwischen ausländischen Studenten und Deutschen ist.', textAr: 'مدى جودة العلاقة بين الطلاب الأجانب والألمان.' },
          { key: 'b', textDe: 'welche Probleme ein Gaststudent aus China in Deutschland hat.', textAr: 'المشاكل التي يواجهها طالب وافد من الصين في ألمانيا.' },
          { key: 'c', textDe: 'was das Projekt „Senioren für ausländische Studenten" ist.', textAr: 'ماهية مشروع "كبار السن من أجل الطلاب الأجانب".' }
        ],
        correctAnswer: 'c',
        explanationDe: 'Der Text stellt das Projekt "Senioren für ausländische Studenten" am Beispiel von Tongchun und der Familie Jakobson vor.',
        explanationAr: 'يقدم النص المشروع التطوعي "كبار السن للطلاب الأجانب" موضحاً فكرته وأثره الإيجابي.',
        highlightInText: 'Rita und Gerald Jakobson machen bei dem Projekt „Senioren für ausländische Studenten" mit'
      },
      {
        id: 8,
        type: 'multiple_choice',
        questionDe: 'Das Ehepaar Jakobson ...',
        questionAr: 'الزوجان ياكوبسون ...',
        options: [
          { key: 'a', textDe: 'wollte nicht, dass die eigenen Kinder das Haus verlassen.', textAr: 'لم يرغبا في أن يغادر أبناؤهما المنزل.' },
          { key: 'b', textDe: 'sieht seine Gaststudenten regelmäßig.', textAr: 'يلتقيان بالطلاب الضيوف بانتظام.' },
          { key: 'c', textDe: 'machte erst einmal einen Crashkurs in deutscher Kultur.', textAr: 'أخذا أولاً دورة مكثفة في الثقافة الألمانية.' }
        ],
        correctAnswer: 'b',
        explanationDe: 'Im Text: "bei der er jeden Sonntag auf dem Sofa sitzt und Sandkuchen isst... Sie unternehmen Wanderungen. Sie sitzen im Wohnzimmer und spielen Karten."',
        explanationAr: 'يلتقيان به كل يوم أحد بانتظام في منزلهما ويتنزهان ويلعبان الورق معه.',
        highlightInText: 'bei der er jeden Sonntag auf dem Sofa sitzt und Sandkuchen isst.'
      },
      {
        id: 9,
        type: 'multiple_choice',
        questionDe: 'Viele Gaststudenten aus Offenburg ...',
        questionAr: 'العديد من الطلاب الأجانب الضيوف في أوفنبورغ ...',
        options: [
          { key: 'a', textDe: 'würden gern in Deutschland bleiben.', textAr: 'يرغبون في البقاء في ألمانيا بعد التخرج.' },
          { key: 'b', textDe: 'feiern gern Partys in Berlin.', textAr: 'يحبون الاحتفال في برلين.' },
          { key: 'c', textDe: 'haben schlechte Erfahrungen in Deutschland gemacht.', textAr: 'مروا بتجارب سيئة في ألمانيا.' }
        ],
        correctAnswer: 'a',
        explanationDe: 'Im Text: "Am Anfang des Aufenthalts wollen nur 20 Prozent... Am Ende sind es 80 Prozent."',
        explanationAr: 'توضح الإحصائية أن 80% من الطلاب يرغبون في البقاء في ألمانيا بعد إنهاء دراستهم.',
        highlightInText: 'Am Ende sind es 80 Prozent. Das sagt alles.'
      },
      {
        id: 10,
        type: 'multiple_choice',
        questionDe: 'In diesem Text geht es darum, ...',
        questionAr: 'يدور هذا النص حول ...',
        options: [
          { key: 'a', textDe: 'wie die Schweizerische Post funktioniert.', textAr: 'كيفية عمل البريد السويسري.' },
          { key: 'b', textDe: 'dass die Schweizerische Post eine interessante Webseite hat.', textAr: 'أن البريد السويسري يمتلك موقعاً مثيراً.' },
          { key: 'c', textDe: 'dass man eine Briefmarke selbst machen kann.', textAr: 'إمكانية تصميم وطباعة طابع بريدي بنفسك.' }
        ],
        correctAnswer: 'c',
        explanationDe: 'WebStamp bietet die Möglichkeit, direkt am PC eigene Briefmarken zu gestalten und auszudrucken.',
        explanationAr: 'الموضوع الأساسي هو إمكانية تصميم وطباعة طابع بريدي خاص ومخصص بنفسك عبر الكمبيوتر.',
        highlightInText: 'WebStamp bietet die Möglichkeit, direkt am PC eigene Briefmarken zu gestalten und auszudrucken.'
      },
      {
        id: 11,
        type: 'multiple_choice',
        questionDe: 'Die WebStamp ...',
        questionAr: 'طابع الويب (WebStamp) ...',
        options: [
          { key: 'a', textDe: 'hat denselben Preis wie eine normale Briefmarke.', textAr: 'له نفس سعر وقيمة طابع البريد العادي.' },
          { key: 'b', textDe: 'gilt nur in der Schweiz.', textAr: 'يسري صالحاً للاستخدام داخل سويسرا فقط.' },
          { key: 'c', textDe: 'wurde von einer Werbefirma erfunden.', textAr: 'تم اختراعه من قِبل شركة إعلانات.' }
        ],
        correctAnswer: 'a',
        explanationDe: 'Im Text: "Man bezahlt nur das Porto, also den Wert, den die Briefmarke dann hat. Eine 1-Franken-Briefmarke kostet demnach auch nur einen Franken."',
        explanationAr: 'يدفع المشتري قيمة رسوم البريد العادية فقط بدون أية تكلفة إضافية للخدمة.',
        highlightInText: 'Man bezahlt nur das Porto, also den Wert, den die Briefmarke dann hat.'
      },
      {
        id: 12,
        type: 'multiple_choice',
        questionDe: 'Die Adresse des Empfängers ...',
        questionAr: 'عنوان المرسل إليه ...',
        options: [
          { key: 'a', textDe: 'muss auf der WebStamp stehen.', textAr: 'يجب بالضرورة أن يكون مطبوعاً على الطابع.' },
          { key: 'b', textDe: 'kann man aus dem Excel-Programm übernehmen.', textAr: 'يمكن استيراده وتضمينه مباشرة من برنامج Excel.' },
          { key: 'c', textDe: 'wird mit einem extra Programm gedruckt.', textAr: 'تتم طباعته بواسطة برنامج إضافي منفصل.' }
        ],
        correctAnswer: 'b',
        explanationDe: 'Im Text: "Adressen können direkt aus Excel importiert werden."',
        explanationAr: 'يذكر النص صراحة إمكانية استيراد العناوين مباشرة من ملف Excel.',
        highlightInText: 'Adressen können direkt aus Excel importiert werden.'
      }
    ]
  },
  {
    id: 'lesen-t2-set2',
    teil: 2,
    testNumber: 2,
    titleDe: 'Japaner als beste Touristen & Neugierige Mädchen',
    titleAr: 'اليابانيون كأفضل السياح & فتيات فضوليات (Girls’ Day)',
    source: 'Zertifikat B1 neu, Test 2, S. 23-24',
    textPassageDe: `Text 1: Japaner als beste Touristen
Eine internationale Studie, bei der tausend Hotelmanager befragt wurden, hat gezeigt, dass Japaner die beliebtesten Touristen auf der ganzen Welt sind. Um diesen ersten Platz zu gewinnen, muss man als Tourist höflich und freundlich sein sowie Trinkgeld geben. Es hilft auch, wenn man sich bemüht, die Landessprache ein bisschen zu sprechen. Offensichtlich erfüllen die Japaner all diese Voraussetzungen. Als Volk reisen sie viel, gern und weit. Fast jeder Hotelier eines großen Hauses hatte schon einmal japanische Gäste.
Außerdem stellte sich bei der Studie heraus, dass deutsche Touristen für ihre Sauberkeit gelobt wurden und viele Berufstätige im Tourismusbereich sich über die lauten Gäste aus Südeuropa beschwerten. Besonders bemerkt wurde auch, dass Amerikaner und Deutsche sich oft geschmacklos kleideten. Als klassisches Beispiel für diese Angewohnheit der Deutschen wurde erwähnt, dass sie auch im Hochsommer zu Sommerschuhen weiße Socken tragen. Ganz im Gegenteil dazu die Österreicher. Sie machen nämlich nicht besonders auf sich aufmerksam, weder positiv noch negativ.`,
    textPassageSecondaryDe: `Text 2: Neugierige Mädchen
Mädchen und Technik? Interessieren sich Mädchen überhaupt dafür? Diese Frage lässt sich nur bejahen, denn schon seit 9 Jahren wird für Mädchen ab Klasse 5 der „Girl’s Day" durchgeführt. Dieser Tag stößt bei ihnen auf großes Interesse. Der „Girl’s Day" ist dazu gedacht, dass Mädchen für einen Tag in verschiedene Firmen gehen können, um sich dort Berufe anzuschauen, in denen typische „Jungenfächer" wie Naturwissenschaften, Technik oder Informatik wichtig sind. Ziel ist, dass die Schülerinnen herausfinden können, ob sie vielleicht später als Ingenieurin, Physikerin oder Programmiererin arbeiten wollen. Immer noch ist die Realität, dass in Deutschland viel weniger Mädchen als Jungen diese Berufe wählen. Gerade in diesen Bereichen wird nach guten Fachleuten gesucht, also auch nach Frauen, die sich mit Technik auskennen. Um sich über das Programm zu informieren, wurde eine Internetseite eingerichtet. Auf einer Deutschlandkarte kann man sehen, wo es Aktionen gibt.`,
    questions: [
      {
        id: 7,
        type: 'multiple_choice',
        questionDe: 'In diesem Text geht es darum, ...',
        questionAr: 'يدور هذا النص حول ...',
        options: [
          { key: 'a', textDe: 'was für Touristen aus verschiedenen Ländern typisch ist.', textAr: 'السمات النموذجية للسياح من مختلف الدول.' },
          { key: 'b', textDe: 'warum die Japaner gern reisen.', textAr: 'لماذا يحب اليابانيون السفر.' },
          { key: 'c', textDe: 'welche Sprache man als Tourist lernen sollte.', textAr: 'ما هي اللغة التي يجب على السائح تعلمها.' }
        ],
        correctAnswer: 'a',
        explanationDe: 'Die Studie vergleicht Eigenschaften und Gewohnheiten von Touristen aus Japan, Deutschland, den USA, Südeuropa und Österreich.',
        explanationAr: 'يقارن النص نتائج الاستبيان حول طباع وعادات السياح من دول مختلفة.',
        highlightInText: 'Eine internationale Studie, bei der tausend Hotelmanager befragt wurden'
      },
      {
        id: 8,
        type: 'multiple_choice',
        questionDe: 'Die Deutschen erkennt man ...',
        questionAr: 'يمكن التعرف على السياح الألمان من خلال ...',
        options: [
          { key: 'a', textDe: 'an ihrer amerikanischen Kleidung.', textAr: 'ملابسهم الأمريكية.' },
          { key: 'b', textDe: 'an ihren Sommerschuhen.', textAr: 'أحذيتهم الصيفية.' },
          { key: 'c', textDe: 'an der Kombination von Socken und Sommerschuhen.', textAr: 'الجمع بين الجوارب البيضاء والأحذية الصيفية الصندل.' }
        ],
        correctAnswer: 'c',
        explanationDe: 'Im Text: "...dass sie auch im Hochsommer zu Sommerschuhen weiße Socken tragen."',
        explanationAr: 'ذُكر في النص ارتداؤهم للجوارب البيضاء مع الأحذية الصيفية حتى في ذروة الصيف.',
        highlightInText: 'dass sie auch im Hochsommer zu Sommerschuhen weiße Socken tragen.'
      },
      {
        id: 9,
        type: 'multiple_choice',
        questionDe: 'Österreicher ...',
        questionAr: 'السياح النمساويون ...',
        options: [
          { key: 'a', textDe: 'sind bei Hotelmanagern beliebter als Deutsche und Amerikaner.', textAr: 'أكثر شعبية لدى مديري الفنادق من الألمان والأمريكيين.' },
          { key: 'b', textDe: 'machen keinen besonderen Eindruck auf die Hotelmanager.', textAr: 'لا يتركون انطباعاً خاصاً (لا يلفتون الانتباه سلباً ولا إيجاباً).' },
          { key: 'c', textDe: 'haben das Reisen besser gelernt.', textAr: 'تعلموا السفر بطريقة أفضل.' }
        ],
        correctAnswer: 'b',
        explanationDe: 'Im Text: "Sie machen nämlich nicht besonders auf sich aufmerksam, weder positiv noch negativ."',
        explanationAr: 'لا يثيرون الانتباه ولا يتركون بصمة استثنائية سواء بالإيجاب أو بالسلب.',
        highlightInText: 'Sie machen nämlich nicht besonders auf sich aufmerksam, weder positiv noch negativ.'
      },
      {
        id: 10,
        type: 'multiple_choice',
        questionDe: 'In diesem Text steht, dass ...',
        questionAr: 'ورد في هذا النص أن ...',
        options: [
          { key: 'a', textDe: 'Mädchen in technischen Fächern besser als Jungen sind.', textAr: 'الفتيات أفضل من الفتيان في المواد التقنية.' },
          { key: 'b', textDe: 'es in Deutschland gute Ingenieurinnen gibt.', textAr: 'هناك مهندسات ماهرات في ألمانيا.' },
          { key: 'c', textDe: 'der „Girl’s Day" Schülerinnen mit technischen Berufen bekannt machen will.', textAr: 'يوم الفتاة يهدف لتعريف التلميذات بالمهن التقنية.' }
        ],
        correctAnswer: 'c',
        explanationDe: 'Im Text: "Der \'Girl’s Day\' ist dazu gedacht, dass Mädchen für einen Tag in verschiedene Firmen gehen können, um sich dort Berufe anzuschauen..."',
        explanationAr: 'الهدف الرئيسي هو تعريف الفتيات بالمهن التكنولوجية وتشجيعهن على خوضها.',
        highlightInText: 'dass Mädchen für einen Tag in verschiedene Firmen gehen können, um sich dort Berufe anzuschauen'
      },
      {
        id: 11,
        type: 'multiple_choice',
        questionDe: 'Auf der Internetseite von „Girl’s Day" ...',
        questionAr: 'على الموقع الإلكتروني لـ "يوم الفتاة" ...',
        options: [
          { key: 'a', textDe: 'kann man sich über Einzelheiten dieses Tages informieren.', textAr: 'يمكن للمرء الاستعلام عن تفاصيل هذا اليوم والفعاليات.' },
          { key: 'b', textDe: 'gibt es Informationen zum Studium technischer Fächer.', textAr: 'توجد معلومات للدراسة الجامعية للمواد التقنية.' },
          { key: 'c', textDe: 'werden Arbeitsstellen angeboten.', textAr: 'يتم عرض وظائف عمل شاغرة.' }
        ],
        correctAnswer: 'a',
        explanationDe: 'Im Text: "Um sich über das Programm zu informieren, wurde eine Internetseite eingerichtet."',
        explanationAr: 'تم تخصيص الموقع للاطلاع على برنامج الفعالية والشركات المشاركة.',
        highlightInText: 'Um sich über das Programm zu informieren, wurde eine Internetseite eingerichtet'
      },
      {
        id: 12,
        type: 'multiple_choice',
        questionDe: 'In Deutschland ...',
        questionAr: 'في ألمانيا ...',
        options: [
          { key: 'a', textDe: 'studieren viele Mädchen technische Fächer.', textAr: 'تدرس فتيات كثيرات المواد الهندسية.' },
          { key: 'b', textDe: 'braucht man mehr Menschen mit technischer Berufsausbildung.', textAr: 'هناك حاجة ماسة لمزيد من الكفاءات ذات التدريب المهني التقني.' },
          { key: 'c', textDe: 'möchte man, dass Jungen und Mädchen beim „Girl’s Day" mitmachen.', textAr: 'يرغبون في مشاركة الفتيان والفتيات معاً.' }
        ],
        correctAnswer: 'b',
        explanationDe: 'Im Text: "Gerade in diesen Bereichen wird nach guten Fachleuten gesucht, also auch nach Frauen, die sich mit Technik auskennen."',
        explanationAr: 'هناك نقص في الكوادر الفنية ويبحث سوق العمل عن متخصصين تقنيين.',
        highlightInText: 'Gerade in diesen Bereichen wird nach guten Fachleuten gesucht'
      }
    ]
  }
];
