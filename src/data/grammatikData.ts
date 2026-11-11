import { GrammarTopic } from '../types';

export const GRAMMATIK_DATA: GrammarTopic[] = [
  {
    id: 'wechselpraepositionen',
    titleDe: 'Wechselpräpositionen (Akkusativ oder Dativ?)',
    titleAr: 'حروف الجر المشتركة (Wechselpräpositionen): متى نستخدم Akkusativ ومتى Dativ؟',
    rulesDe: [
      'Die 9 Wechselpräpositionen lauten: an, auf, hinter, in, neben, über, unter, vor, zwischen.',
      'Wohin? (Richtung, Ziel, Bewegung) → AKKUSATIV (den / das / die / die). Typische Verben: stellen, legen, setzen, hängen (transitiv), fahren, gehen.',
      'Wo? (Ort, Position, Stillstand) → DATIV (dem / dem / der / den + n). Typische Verben: stehen, liegen, sitzen, hängen (intransitiv), sein, sich befinden.'
    ],
    rulesAr: [
      'حروف الجر التسعة المشتركة هي: an, auf, hinter, in, neben, über, unter, vor, zwischen.',
      'عند السؤال بـ ?Wohin (إلى أين؟ / حركة وتغيير موقع من نقطة إلى أخرى) نستخدم حالة النصب Akkusativ.',
      'عند السؤال بـ ?Wo (أين؟ / سكون وموقع ثابت داخل المكان) نستخدم حالة المجرور Dativ.',
      'أفعال الحركة المتعدية تأخذ أكوزاتيف: stellen (يضع واقفاً), legen (يضع ممدداً), setzen (يُجلس).',
      'أفعال السكون اللازمة تأخذ داتيف: stehen (يقف), liegen (يستلقي/يرقد), sitzen (يجلس).'
    ],
    examples: [
      { de: 'Ich stelle die Vase auf den Tisch. (Wohin? → Akkusativ)', ar: 'أضع المزهرية على الطاولة. (حركة ونقل → Akkusativ)', noteDe: 'auf + den (maskulin Akkusativ)', noteAr: 'auf + den' },
      { de: 'Die Vase steht auf dem Tisch. (Wo? → Dativ)', ar: 'المزهرية تقف على الطاولة. (موقع ثابت → Dativ)', noteDe: 'auf + dem (maskulin Dativ)', noteAr: 'auf + dem' },
      { de: 'Er setzt sich auf den Stuhl. / Er sitzt auf dem Stuhl.', ar: 'هو يجلس نفسه على الكرسي (أكوزاتيف) / هو جالس على الكرسي (داتيف).', noteDe: 'setzen (Akk) vs. sitzen (Dat)', noteAr: 'فعل متعدٍ مقابل فعل سكون' }
    ],
    commonMistakes: [
      {
        wrong: 'Ich lege das Buch auf dem Tisch.',
        right: 'Ich lege das Buch auf den Tisch.',
        whyDe: '"legen" beschreibt eine zielgerichtete Bewegung (Wohin?) und verlangt Akkusativ!',
        whyAr: 'فعل legen يعني وضع الشيء ممدداً، وهو فعل حركة وتغيير مكان (Wohin?) وبالتالي يتطلب Akkusativ (auf den Tisch).'
      },
      {
        wrong: 'Das Bild hängt an die Wand.',
        right: 'Das Bild hängt an der Wand.',
        whyDe: 'Das Bild befindet sich bereits dort (Wo?). Daher Dativ: an der Wand (die Wand → der Wand).',
        whyAr: 'الصورة معلقة أصلاً في مكانها بثبات (Wo?)، لذلك نستخدم الداتيف مع المؤنث: an der Wand.'
      }
    ],
    exercises: [
      {
        id: 'wp-1',
        level: 'B1 Standard',
        question: 'Thomas legt das Wörterbuch auf ______ Schreibtisch.',
        options: ['den', 'dem', 'der', 'des'],
        correctAnswer: 'den',
        explanationDe: 'legen = zielgerichtete Aktion (Wohin?) → Akkusativ maskulin: den.',
        explanationAr: 'فعل legen (يضع أفقياً) حركة تتطلب Akkusativ مع المذكر: den.'
      },
      {
        id: 'wp-2',
        level: 'B1 Standard',
        question: 'Das Wörterbuch liegt auf ______ Schreibtisch.',
        options: ['den', 'dem', 'die', 'des'],
        correctAnswer: 'dem',
        explanationDe: 'liegen = Zustand/Ort (Wo?) → Dativ maskulin: dem.',
        explanationAr: 'فعل liegen (يستلقي/موضوع) حالة سكون تتطلب Dativ مع المذكر: dem.'
      },
      {
        id: 'wp-3',
        level: 'B1 Hard',
        question: 'Während der Prüfung durften keine Taschen unter ______ Tischen liegen.',
        options: ['den', 'die', 'dem', 'der'],
        correctAnswer: 'den',
        explanationDe: 'liegen (Wo?) → Dativ Plural: unter den Tischen (+ n am Nomen).',
        explanationAr: 'حالة سكون ومكان جمع في Dativ: unter den Tischen.'
      },
      {
        id: 'wp-4',
        level: 'B1 Hard',
        question: 'Sie stellte ihr Fahrrad vorsichtig zwischen ______ zwei geparkten Autos.',
        options: ['die', 'den', 'der', 'das'],
        correctAnswer: 'die',
        explanationDe: 'stellen = zielgerichtete Bewegung (Wohin?) → Akkusativ Plural: die.',
        explanationAr: 'فعل stellen حركة وإدخال (Wohin?) يتطلب Akkusativ للجمع: die.'
      },
      {
        id: 'wp-5',
        level: 'B1 Exam Challenge',
        question: 'Der Dozent setzte sich an ______ Pult und begann die Vorlesung.',
        options: ['das', 'dem', 'den', 'des'],
        correctAnswer: 'das',
        explanationDe: 'sich setzen an (Wohin?) → Akkusativ neutral: an das (ans) Pult.',
        explanationAr: 'الفعل الانعكاسي sich setzen يعني الجلوس والانتقال إلى المقعد (Wohin?) → Akkusativ محايد: das.'
      }
    ]
  },
  {
    id: 'nebensaetze-verbstellung',
    titleDe: 'Nebensätze & Verbendstellung (weil, dass, obwohl, wenn, als, da)',
    titleAr: 'الجمل الفرعية (Nebensätze) وموقع الفعل المصرف في نهاية الجملة',
    rulesDe: [
      'In eingeleiteten Nebensätzen (Subjunktionen wie weil, dass, obwohl, wenn, als, da, nachdem, während) steht das finite (konjugierte) Verb IMMER an allerletzter Stelle!',
      'Gibt es zwei Verben (z.B. Modalverb + Infinitiv oder Perfekt mit haben/sein), steht das konjugierte Hilfs- oder Modalverb ganz am Schluss: "...weil er fleißig Deutsch lernen WILL."',
      'Trennbare Verben werden im Nebensatz NICHT getrennt: "...weil der Zug pünktlich ABFÄHRT."'
    ],
    rulesAr: [
      'في الجمل الفرعية التي تبدأ بأداة ربط فرعية (weil, dass, obwohl, wenn, als, da...) يأتي الفعل المصرف دائماً في آخر الجملة تماماً.',
      'إذا كان هناك فعلان (فعل مساعد + مصدر أو فعل كيفي Modalverb)، يوضع الفعل المصرف في نهاية الجملة بعد المصدر: weil ich Deutsch lernen MÖCHTE.',
      'الأفعال المنفصلة (Trennbare Verben) لا تنفصل في الجملة الفرعية بل تتصل وتأتي في النهاية: weil der Kurs morgen ANFÄNGT.'
    ],
    examples: [
      { de: 'Er kann nicht kommen, weil er heute krank ist.', ar: 'هو لا يستطيع الحضور لأنه مريض اليوم.', noteDe: 'ist am Satzende', noteAr: 'الفعل المصرف ist في نهاية الجملة' },
      { de: 'Obwohl das Wetter schlecht war, haben wir einen Ausflug gemacht.', ar: 'على الرغم من سوء الطقس، قمنا برحلة.', noteDe: 'Nebensatz zuerst: Verb im Hauptsatz direkt an Pos. 2', noteAr: 'عندما تبدأ الجملة بـ obwohl يأتي فعل الجملة الرئيسية مباشرة بعد الفاصلة' }
    ],
    commonMistakes: [
      {
        wrong: 'Ich lerne viel, weil ich möchte die ÖSD-Prüfung bestehen.',
        right: 'Ich lerne viel, weil ich die ÖSD-Prüfung bestehen möchte.',
        whyDe: 'Im Nebensatz mit "weil" wandert das konjugierte Modalverb "möchte" ganz ans Ende hinter das Verb im Infinitiv "bestehen"!',
        whyAr: 'في الجملة الفرعية مع weil، يجب أن ينتقل الفعل المساعد المصرف möchte إلى أقصى نهاية الجملة بعد المصدر bestehen.'
      }
    ],
    exercises: [
      {
        id: 'ns-1',
        level: 'B1 Standard',
        question: 'Er freut sich sehr, weil er die B1-Prüfung bestanden ______ .',
        options: ['hat', 'hatte', 'haben', 'wird'],
        correctAnswer: 'hat',
        explanationDe: 'Im Perfekt-Nebensatz mit "weil" steht das Hilfsverb "hat" am Ende.',
        explanationAr: 'في زمن الماضي التام بالجملة الفرعية يوضع الفعل المساعد hat في آخر الجملة بعد اسم المفعول.'
      },
      {
        id: 'ns-2',
        level: 'B1 Hard',
        question: 'Obwohl er sich sehr müde ______ , lernte er bis spät in die Nacht weiter.',
        options: ['fühlte', 'gefühlt hat', 'fühlen', 'fühlt'],
        correctAnswer: 'fühlte',
        explanationDe: 'Konsekutives Präteritum im Nebensatz: fühlte steht am Ende.',
        explanationAr: 'في جملة obwohl في سياق الماضي، يأتي الفعل بصيغة Präteritum في نهاية الجملة: fühlte.'
      },
      {
        id: 'ns-3',
        level: 'B1 Exam Challenge',
        question: 'Ich wusste nicht, dass man sich für diesen Workshop schon Wochen vorher ______ .',
        options: ['anmelden musste', 'musste anmelden', 'anmeldete müssen', 'angemeldet hat'],
        correctAnswer: 'anmelden musste',
        explanationDe: 'Infinitiv + konjugiertes Modalverb am Ende: "anmelden musste".',
        explanationAr: 'القاعدة: المصدر يليه الفعل الكيفي المصرف في النهاية: anmelden musste.'
      }
    ]
  },
  {
    id: 'passiv-b1',
    titleDe: 'Passiv (Vorgangspassiv & Zustandspassiv)',
    titleAr: 'المبني للمجهول في الألمانية (Passiv) – Vorgangspassiv و Zustandspassiv',
    rulesDe: [
      'Vorgangspassiv (Aktion / Prozess): werden + Partizip II. Präsens: wird gemacht. Präteritum: wurde gemacht. Perfekt: ist gemacht worden.',
      'Passiv mit Modalverben: Modalverb (konjugiert) + Partizip II + werden: "Das Formular muss ausgefüllt werden."',
      'Zustandspassiv (Resultat / Zustand nach einer Handlung): sein + Partizip II: "Die Tür ist geöffnet."'
    ],
    rulesAr: [
      'المبني للمجهول الحركي (Vorgangspassiv): يتكون من فعل werden + اسم المفعول Partizip II.',
      'في المضارع: wird repariert. في الماضي البسيط: wurde repariert. في الماضي التام: ist repariert worden.',
      'مع الأفعال المساعدة (Modalverben): الفعل المصرف + اسم المفعول + werden في المصدر: Das Auto muss repariert werden.',
      'المبني للمجهول الوصفي (Zustandspassiv): يصف نتيجة الحدث الثابتة ويتكون من فعل sein + اسم المفعول: Das Geschäft ist geschlossen.'
    ],
    examples: [
      { de: 'Der Mechaniker repariert das Auto. → Das Auto wird repariert.', ar: 'الميكانيكي يصلح السيارة → السيارة تُصلَح (مبني للمجهول)', noteDe: 'Aktiv → Passiv', noteAr: 'تحويل الفاعل إلى مفعول نائب' },
      { de: 'Man musste den Verletzten sofort operieren. → Der Verletzte musste sofort operiert werden.', ar: 'وجب إجراء عملية للجريح فوراً (مع فعل كيفي)', noteDe: 'musste + Partizip II + werden', noteAr: 'ترتيب الفعل الكيفي مع werden' }
    ],
    commonMistakes: [
      {
        wrong: 'Das Haus wurde im Jahr 1990 gebaut geworden.',
        right: 'Das Haus ist im Jahr 1990 gebaut worden. (oder: wurde gebaut)',
        whyDe: 'Im Passiv-Perfekt heißt es "worden", nicht "geworden"! Im Präteritum heißt es einfach "wurde gebaut".',
        whyAr: 'في صيغة المبني للمجهول التام نستخدم worden بدون ge- (ist gebaut worden)، ولا نخلط بينها وبين Präteritum (wurde gebaut).'
      }
    ],
    exercises: [
      {
        id: 'pas-1',
        level: 'B1 Standard',
        question: 'Die Hausaufgaben ______ von den Schülern sorgfältig erledigt.',
        options: ['werden', 'wird', 'worden', 'haben'],
        correctAnswer: 'werden',
        explanationDe: 'Plural Subjekt "Die Hausaufgaben" → "werden erledigt".',
        explanationAr: 'الفاعل جمع (الواجبات المنزلية) في المبني للمجهول المضارع يأخذ werden.'
      },
      {
        id: 'pas-2',
        level: 'B1 Hard',
        question: 'Das historische Gebäude ______ im letzten Jahrhundert komplett renoviert.',
        options: ['wurde', 'worden ist', 'wird', 'war'],
        correctAnswer: 'wurde',
        explanationDe: 'Vergangenheit im Präteritum Passiv: wurde renoviert.',
        explanationAr: 'في صيغة الماضي البسيط للمبني للمجهول نستخدم wurde مع اسم المفعول.'
      },
      {
        id: 'pas-3',
        level: 'B1 Exam Challenge',
        question: 'Die Prüfungsordnung besagt, dass Handys während der Klausur ausgeschaltet ______ .',
        options: ['werden müssen', 'müssen werden', 'worden sind', 'haben müssen'],
        correctAnswer: 'werden müssen',
        explanationDe: 'Im Nebensatz mit Passiv + Modalverb steht das konjugierte Modalverb ganz am Schluss: "Partizip II + werden + müssen".',
        explanationAr: 'في الجملة الفرعية مع المبني للمجهول وفعل المودال: اسم المفعول ثم werden ثم الفعل الكيفي المصرف في النهاية (ausgeschaltet werden müssen).'
      }
    ]
  },
  {
    id: 'konjunktiv-ii',
    titleDe: 'Konjunktiv II (Wünsche, Höflichkeit & irreale Bedingungen)',
    titleAr: 'صيغة الاحتمال والتمني والتهذيب (Konjunktiv II) في مستوى B1',
    rulesDe: [
      'Höfliche Bitten & Fragen: "Könnten Sie mir bitte helfen?", "Würden Sie mir das erklären?", "Ich hätte gern..."',
      'Wünsche und irreale Bedingungen mit wenn: "Wenn ich mehr Zeit hätte, würde ich nach Österreich reisen."',
      'Formen: haben → hätte, sein → wäre, können → könnte, müssen → müsste, dürfen → dürfte, alle anderen Verben: würde + Infinitiv.'
    ],
    rulesAr: [
      'تستخدم صيغة Konjunktiv II للتعبير عن التمني غير الواقعي، النصيحة الودية، والطلبات المهذبة.',
      'أهم الأفعال القياسية: hätte (لو كان لدي), wäre (لو كنت), könnte (لو استطعت), müsste (لو توجب علي), dürfte (لو سمح لي).',
      'بقية الأفعال يُصاغ منها Konjunktiv II باستخدام: würde + المصدر في نهاية الجملة.'
    ],
    examples: [
      { de: 'Wenn ich reich wäre, würde ich um die Welt reisen.', ar: 'لو كنتُ غنياً، لسافرتُ حول العالم.', noteDe: 'irrealer Konditionalsatz', noteAr: 'شرط غير واقعي مع تمنٍ' },
      { de: 'Könnten Sie mir bitte sagen, wo der Bahnhof ist?', ar: 'هل يمكن لحضرتك من فضلك أن تخبرني أين المحطة؟ (طلب في غاية اللباقة)', noteDe: 'höfliche Bitte', noteAr: 'طلب مهذب' }
    ],
    commonMistakes: [
      {
        wrong: 'Wenn ich Zeit habe, würde ich dir helfen.',
        right: 'Wenn ich Zeit hätte, würde ich dir helfen.',
        whyDe: 'In einem irrealen Wunschsatz müssen beide Teile im Konjunktiv II stehen: hätte + würde helfen.',
        whyAr: 'في الجملة الشرطية التخيلية يجب أن يكون كلا شطري الجملة في صيغة Konjunktiv II (hätte في الشرط و würde helfen في الجواب).'
      }
    ],
    exercises: [
      {
        id: 'k2-1',
        level: 'B1 Standard',
        question: 'Entschuldigung, ______ Sie mir bitte sagen, wann der Zug abfährt?',
        options: ['könnten', 'können', 'haben', 'würdet'],
        correctAnswer: 'könnten',
        explanationDe: 'Höfliche Bitte mit Konjunktiv II von können: "Könnten Sie...".',
        explanationAr: 'صيغة الطلب المهذب الرسمي باستخدام فعل können في Konjunktiv II: Könnten Sie.'
      },
      {
        id: 'k2-2',
        level: 'B1 Hard',
        question: 'Wenn das Wetter heute schöner ______ , würden wir im See schwimmen gehen.',
        options: ['wäre', 'sei', 'hätte', 'würde'],
        correctAnswer: 'wäre',
        explanationDe: 'Konjunktiv II von sein für das Wetter: "Wenn das Wetter schöner wäre...".',
        explanationAr: 'صيغة Konjunktiv II لفعل الكينونة sein مع المفرد الغائب هي wäre.'
      },
      {
        id: 'k2-3',
        level: 'B1 Exam Challenge',
        question: 'An deiner Stelle ______ ich mich sofort beim Kursleiter für das Fehlen entschuldigen.',
        options: ['würde', 'werde', 'hätte', 'wäre'],
        correctAnswer: 'würde',
        explanationDe: 'Ratschlag mit "An deiner Stelle würde ich... + Infinitiv".',
        explanationAr: 'تقديم النصيحة بصيغة "لو كنت مكانك لفعلت كذا": An deiner Stelle würde ich... entschuldigen.'
      }
    ]
  },
  {
    id: 'adjektivdeklination',
    titleDe: 'Adjektivdeklination (Bestimmter, unbestimmter & ohne Artikel)',
    titleAr: 'إعراب ونهايات الصفات (Adjektivdeklination) بعد مختلف أدوات التعريف والتنكير',
    rulesDe: [
      '1. Nach bestimmtem Artikel (der, die, das): Im Nominativ Singular -e (der neue Wagen, die junge Frau, das kleine Kind). Im Akkusativ Maskulin und in ALLEN Dativ-/Genitiv- und Pluralformen: IMMER -en!',
      '2. Nach unbestimmtem Artikel (ein, eine, ein / mein, kein): Die Endung spiegelt das Signal des bestimmten Artikels wider (ein neuer Wagen [-er], ein kleines Kind [-es], eine nette Frau [-e]). Dativ/Genitiv/Plural: IMMER -en!',
      '3. Ohne Artikel (Nullartikel): Die Endung übernimmt das Kasussignal des bestimmten Artikels (frische Milch, kaltes Wasser, heißer Tee, mit frischem Brot [-em]).'
    ],
    rulesAr: [
      '1. بعد أداة التعريف (der, die, das): تأخذ الصفة النهاية -e في حالة الفاعل المفرد (der gute Mann, die gute Frau, das gute Kind)، وتأخذ دائماً -en في كل حالات الداتيف والجينيتيف وجمع الأسماء وأكوزاتيف المذكر.',
      '2. بعد أداة التنكير والملكية والنفي (ein, mein, kein): تأخذ الصفة الحرف المميز للأداة في الرفع (ein alter Mann [-er], ein neues Buch [-es], eine schöne Stadt [-e]). وفي الداتيف والجمع تأخذ دائماً -en.',
      '3. بدون أداة (Nullartikel): تأخذ الصفة إعراب أداة التعريف مباشرة (mit kaltem Wasser [-em], frischer Saft [-er]).'
    ],
    examples: [
      { de: 'Der nette Lehrer hilft dem neuen Schüler.', ar: 'المعلم اللطيف يساعد التلميذ الجديد.', noteDe: 'der nett-e / dem neu-en (Dativ)', noteAr: 'der -e / dem -en' },
      { de: 'Er trinkt gern heißen Kaffee mit frischer Milch.', ar: 'هو يحب شرب القهوة الساخنة مع حليب طازج.', noteDe: 'heißen (Akk maskulin ohne Art.) / frischer (Dat feminin ohne Art.)', noteAr: 'إعراب الصفة بدون أداة' }
    ],
    commonMistakes: [
      {
        wrong: 'Ich habe mit einem gut Freund gesprochen.',
        right: 'Ich habe mit einem guten Freund gesprochen.',
        whyDe: 'Nach "mit" (Dativ) und "einem" muss das Adjektiv die Endung "-en" bekommen!',
        whyAr: 'بعد حرف الجر mit (Dativ) وأداة التنكير einem، تأخذ الصفة دائماً النهاية -en (einem guten Freund).'
      }
    ],
    exercises: [
      {
        id: 'adj-1',
        level: 'B1 Standard',
        question: 'Er hat sich ein ______ Auto gekauft.',
        options: ['neues', 'neuer', 'neuen', 'neue'],
        correctAnswer: 'neues',
        explanationDe: 'ein (Akkusativ neutral) → "ein neues Auto" (Signal von "das").',
        explanationAr: 'كلمة Auto محايد (das)، وبعد أداة التنكير ein في الأكوزاتيف تأخذ الصفة النهاية -es: ein neues Auto.'
      },
      {
        id: 'adj-2',
        level: 'B1 Hard',
        question: 'In der Prüfung sprach er mit einer ______ Stimme.',
        options: ['ruhigen', 'ruhige', 'ruhiger', 'ruhigem'],
        correctAnswer: 'ruhigen',
        explanationDe: 'mit einer (Dativ feminin) → Adjektivendung immer "-en".',
        explanationAr: 'حالة داتيف للمؤنث بعد einer، نهاية الصفة تكون حتماً -en: mit einer ruhigen Stimme.'
      },
      {
        id: 'adj-3',
        level: 'B1 Exam Challenge',
        question: 'Wegen des ______ Wetters fand das Konzert in der Halle statt.',
        options: ['schlechten', 'schlechtem', 'schlechtes', 'schlechter'],
        correctAnswer: 'schlechten',
        explanationDe: 'Wegen des (Genitiv neutral) → Adjektivendung "-en".',
        explanationAr: 'بعد أداة الجينيتيف des، تأخذ الصفة النهاية -en دائماً: wegen des schlechten Wetters.'
      }
    ]
  },
  {
    id: 'relativsaetze',
    titleDe: 'Relativsätze (der, die, das, welche & mit Präpositionen)',
    titleAr: 'جمل الوصل والصلة (Relativsätze) وحروف الجر مع ضمائر الوصل',
    rulesDe: [
      'Das Relativpronomen richtet sich im Genus (maskulin, feminin, neutral) und Numerus (Singular, Plural) nach dem Bezugswort im Hauptsatz.',
      'Der Kasus (Nominativ, Akkusativ, Dativ) richtet sich nach der grammatischen Funktion des Relativpronomens im Relativsatz!',
      'Steht eine Präposition vor dem Relativpronomen, bestimmt die Präposition den Kasus: "Der Freund, mit DEM ich gelernt habe."',
      'Im Relativsatz steht das konjugierte Verb immer am ENDE!'
    ],
    rulesAr: [
      'ضمير الوصل يتبع الكلمة الموصوفة من حيث الجنس (مذكر/مؤنث/محايد) والعدد (مفرد/جمع).',
      'حالة ضمير الوصل الإعرابية (مرفوع، منصوب، مجرور) يحددها موقعه ودوره داخل جملة الصلة نفسها!',
      'إذا سبق ضمير الوصل حرف جر، فإن حرف الجر هو الذي يحدد حالة الضمير (mit dem, für den, über die).',
      'الفعل المصرف في جملة الوصل يوضع دائماً في نهاية الجملة.'
    ],
    examples: [
      { de: 'Das ist der Mann, der mir geholfen hat. (Nominativ Subjekt)', ar: 'هذا هو الرجل الذي ساعدني. (فاعل مرفوع)', noteDe: 'der Mann → der (Nom)', noteAr: 'مذكر فاعل' },
      { de: 'Das ist der Mann, den ich gestern getroffen habe. (Akkusativ Objekt)', ar: 'هذا هو الرجل الذي قابلته بالأمس. (مفعول به منصوب)', noteDe: 'den (Akk)', noteAr: 'مذكر مفعول به' },
      { de: 'Das ist die Stadt, in der ich seit drei Jahren lebe. (Dativ nach in)', ar: 'هذه هي المدينة التي أعيش فيها منذ ثلاث سنوات.', noteDe: 'in + Dativ feminin = in der', noteAr: 'حرف الجر in مع السكون يتطلب Dativ' }
    ],
    commonMistakes: [
      {
        wrong: 'Das ist das Buch, was ich gestern gelesen habe.',
        right: 'Das ist das Buch, das ich gestern gelesen habe.',
        whyDe: 'Für ein konkretes Nomen (das Buch) benutzt man "das", nicht "was"! "Was" steht nur nach neutralen Pronomen (alles, etwas, nichts) oder nach dem ganzen Satz.',
        whyAr: 'مع الأسماء المحددة الصريحة مثل das Buch نستخدم ضمير الوصل das وليس was. بينما was تستخدم بعد كلمات مثل alles, etwas, nichts فقط.'
      }
    ],
    exercises: [
      {
        id: 'rel-1',
        level: 'B1 Standard',
        question: 'Die Lehrerin, ______ uns unterrichtet, ist sehr geduldig.',
        options: ['die', 'der', 'den', 'deren'],
        correctAnswer: 'die',
        explanationDe: 'die Lehrerin (feminin) ist Subjekt im Relativsatz → Nominativ: die.',
        explanationAr: 'المعلمة مؤنث وهي الفاعل في جملة الصلة → die.'
      },
      {
        id: 'rel-2',
        level: 'B1 Hard',
        question: 'Der Kollege, mit ______ ich das Projekt plane, kommt aus Salzburg.',
        options: ['dem', 'den', 'der', 'dessen'],
        correctAnswer: 'dem',
        explanationDe: 'mit verlangt immer Dativ! maskulin Dativ → mit dem.',
        explanationAr: 'حرف الجر mit يفرض حالة Dativ دائماً، والموصوف مذكر (der Kollege) → mit dem.'
      },
      {
        id: 'rel-3',
        level: 'B1 Exam Challenge',
        question: 'Die Stadt, in ______ wir die ÖSD-Prüfung ablegen, heißt Graz.',
        options: ['der', 'die', 'den', 'welche'],
        correctAnswer: 'der',
        explanationDe: 'in + Dativ (Wo legen wir die Prüfung ab?) feminin: in der Stadt → in der.',
        explanationAr: 'السؤال بـ ?Wo يتطلب داتيف مع المؤنث (die Stadt) بعد حرف الجر in → in der.'
      }
    ]
  }
];
