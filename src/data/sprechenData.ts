import { SprechenScenario } from '../types';

export const SPRECHEN_SCENARIOS: SprechenScenario[] = [
  // ================= TEIL 1: GEMEINSAM ETWAS PLANEN =================
  {
    id: 'sprechen-t1-set1',
    teil: 1,
    testNumber: 1,
    titleDe: 'Teil 1: DVD-Abend mit Deutschkurs organisieren',
    titleAr: 'الجزء 1: تنظيم أمسية سينمائية (DVD-Abend) مع زملاء دورة اللغة',
    situationDe: 'Sie möchten mit Ihren Mitschülern aus dem Deutschkurs einen gemeinsamen DVD-Abend organisieren. Überlegen Sie, was Sie alles besprechen müssen.',
    situationAr: 'تريد مع زميلك تنظيم أمسية لمشاهدة فيلم مع طلاب دورة اللغة الألمانية. خططا معاً للتفاصيل.',
    leitpunkteDe: [
      'Film (Welchen? Auf Deutsch? Untertitel?)',
      'Wo und wann treffen? (Uhrzeit, Wochentag, Ort)',
      'Was mitbringen? (Essen, Snacks, Getränke)',
      'Hilfe beim Aufräumen (Wer? Was? Wann?)'
    ],
    leitpunkteAr: [
      'الفيلم (أي فيلم؟ هل باللغة الألمانية؟ مع ترجمة؟)',
      'أين ومتى اللقاء؟ (التوقيت، اليوم، المكان)',
      'ماذا يُحضر كل شخص؟ (أطعمة، وجبات خفيفة، مشروبات)',
      'المساعدة في التنظيف بعد الانتهاء (من وكيف؟)'
    ],
    partnerPromptDe: 'Hallo! Lass uns den DVD-Abend für unseren Kurs planen. Welchen Film schlägst du vor?',
    followUpQuestionsDe: [
      'Findest du, wir sollten deutsche Untertitel einschalten?',
      'Können wir den Abend bei dir im Wohnzimmer machen oder lieber im Kursraum?'
    ],
    followUpQuestionsAr: [
      'هل تعتقد أنه ينبغي علينا تشغيل الترجمة النصية الألمانية؟',
      'هل نلتقي في صالون منزلك أم يفضل في قاعة المعهد؟'
    ],
    modelSpokenAnswerDe: 'Ich schlage vor, dass wir eine deutsche Komödie wie „Fack ju Göhte" oder „Good Bye, Lenin!" anschauen. Da lernen wir Umgangssprache und lachen zusammen. Wir können uns am Samstag um 18 Uhr bei mir treffen. Ich stelle den Fernseher und Popcorn bereit, und die anderen könnten Getränke mitbringen. Nach dem Film räumen wir alle gemeinsam auf.',
    keyVocabulary: [
      { de: 'den Film auswählen', ar: 'اختيار الفيلم' },
      { de: 'Untertitel einschalten', ar: 'تشغيل الترجمة المكتوبة' },
      { de: 'Knabberzeug mitbringen', ar: 'إحضار مقرمشات وتسالي' },
      { de: 'gemeinsam aufräumen', ar: 'التنظيف سوياً' }
    ]
  },
  {
    id: 'sprechen-t1-set2',
    teil: 1,
    testNumber: 2,
    titleDe: 'Teil 1: Überraschungsparty und Geschenk aussuchen',
    titleAr: 'الجزء 1: تنظيم حفلة مفاجأة واختيار هدية لصديقة',
    situationDe: 'Ihre Freundin aus dem Deutschkurs hat bald Geburtstag. Sie haben mit anderen zusammen vor, an ihrem Geburtstag eine Überraschungsparty zu machen. Dafür müssen Sie einiges organisieren und auch zusammen überlegen, was Sie Ihrer Freundin zum Geburtstag schenken.',
    situationAr: 'صديقتكما في دورة اللغة يقترب عيد ميلادها وتريدان تنظيم حفلة مفاجأة لها واختيار هدية مشتركة.',
    leitpunkteDe: [
      'Wann feiern? (Genauer Tag und Uhrzeit)',
      'Wo feiern? (Zu Hause, Partyraum, Park)',
      'Was mitbringen? (z.B. Essen, Kuchen, Deko)',
      'Was schenken? (Gemeinsames Geschenk, Budget)'
    ],
    leitpunkteAr: [
      'متى نحتفل؟ (اليوم والساعة)',
      'أين نقيم الحفل؟ (في المنزل أم صالة أم حديقة)',
      'ماذا نحضر؟ (كعكة، مأكولات، زينة)',
      'ما هي الهدية المشتركة؟ (الميزانية والفكرة)'
    ],
    partnerPromptDe: 'Gute Idee mit der Überraschungsparty für Sarah! Wo sollen wir denn am besten feiern?',
    followUpQuestionsDe: [
      'Wie schaffen wir es, dass Sarah nichts davon mitbekommt?',
      'Wie viel Geld sollte jeder für das Geschenk beisteuern?'
    ],
    followUpQuestionsAr: [
      'كيف نضمن ألا تكتشف سارة المفاجأة مسبقاً؟',
      'كم المبلغ الذي يجب أن يساهم به كل شخص في الهدية؟'
    ],
    modelSpokenAnswerDe: 'Wir könnten die Party am Samstag um 19 Uhr im Partyraum meines Wohnheims machen. Ich kümmere mich um die Buchung. Eine Freundin könnte die Geburtstagstorte backen, und wir teilen die Kosten für Getränke und Dekoration auf. Als Geschenk schlage ich einen Gutschein für einen gemeinsamen Ausflug oder einen Buchgutschein vor, weil sie so gerne liest.',
    keyVocabulary: [
      { de: 'die Überraschungsparty', ar: 'حفلة مفاجأة' },
      { de: 'das Geheimnis bewahren', ar: 'كتمان السر وعدم إفشائه' },
      { de: 'Geld zusammenlegen', ar: 'جمع وتقاسم المال' },
      { de: 'die Torte bestellen/backen', ar: 'طلب أو خبز التورتة' }
    ]
  },

  // ================= TEIL 2: EIN THEMA PRÄSENTIEREN (5 Folien) =================
  {
    id: 'sprechen-t2-set1',
    teil: 2,
    testNumber: 1,
    titleDe: 'Teil 2: Brauchen wir Fitnessstudios?',
    titleAr: 'الجزء 2: هل نحن بحاجة إلى نوادي اللياقة البدنية (Fitnessstudios)؟',
    situationDe: 'Sie sollen Ihren Zuhörern ein aktuelles Thema präsentieren. Folgen Sie den fünf Folien und sprechen Sie ca. 3–4 Minuten.',
    situationAr: 'قدم عرضاً شفوياً مدته 3 إلى 4 دقائق حول هذا الموضوع عبر الشرائح الخمس المحددة.',
    leitpunkteDe: [
      'Folie 1: Thema vorstellen und Inhalt der Präsentation erklären',
      'Folie 2: Eigene persönliche Erfahrungen mit Fitness und Sport schildern',
      'Folie 3: Die Situation im Heimatland beschreiben',
      'Folie 4: Vor- und Nachteile von Fitnessstudios nennen & eigene Meinung begründen',
      'Folie 5: Präsentation beenden und sich bei den Zuhörern bedanken'
    ],
    leitpunkteAr: [
      'الشريحة 1: تقديم الموضوع وهيكل العرض',
      'الشريحة 2: التجارب الشخصية مع الرياضة ونوادي اللياقة',
      'الشريحة 3: واقع نوادي اللياقة في بلدك الأم',
      'الشريحة 4: الإيجابيات والسلبيات وإبداء الرأي الشخصي مع التعليل',
      'الشريحة 5: خاتمة العرض وشكر الحاضرين وفتح باب الأسئلة'
    ],
    slides: [
      { folieNumber: 1, titleDe: 'Thema & Struktur', titleAr: 'الموضوع والهيكل', subPointsDe: ['Thema: Brauchen wir Fitnessstudios?', 'Struktur: Eigene Erfahrung, Heimatland, Vor-/Nachteile, Fazit'] },
      { folieNumber: 2, titleDe: 'Meine persönlichen Erfahrungen', titleAr: 'تجاربي الشخصية', subPointsDe: ['Früher im Fitnessstudio angemeldet', 'Oft lieber draußen im Park gejoggt oder Rad gefahren'] },
      { folieNumber: 3, titleDe: 'Situation im Heimatland', titleAr: 'الوضع في بلدي الأم', subPointsDe: ['Fitnessstudios boomen in den Städten', 'Viele trainieren aber auch im Freien oder in Vereinen'] },
      { folieNumber: 4, titleDe: 'Vor- und Nachteile & Meine Meinung', titleAr: 'الإيجابيات والسلبيات ورأيي', subPointsDe: ['Vorteile: Wetterunabhängig, professionelle Geräte, Trainerberatung', 'Nachteile: Teure Monatsbeiträge, feste Verträge, oft überfüllt', 'Meinung: Gut für Gezieltes, aber Natur ist kostenlos'] },
      { folieNumber: 5, titleDe: 'Abschluss & Dank', titleAr: 'الخاتمة والشكر', subPointsDe: ['Zusammenfassung', 'Vielen Dank für Ihre Aufmerksamkeit!', 'Haben Sie noch Fragen?'] }
    ],
    modelSpokenAnswerDe: `Guten Tag allerseits. Ich möchte Ihnen heute das Thema „Brauchen wir Fitnessstudios?" präsentieren. Mein Vortrag gliedert sich in folgende Punkte: Zuerst berichte ich über meine persönlichen Erfahrungen, danach gehe ich auf die Situation in meinem Heimatland ein. Anschließend nenne ich einige Vor- und Nachteile und äußere meine eigene Meinung, bevor ich zum Schluss für Ihre Fragen bereitstehe.

Was mich persönlich betrifft, so war ich ein Jahr lang in einem Fitnessstudio angemeldet. Anfangs war ich sehr motiviert und habe die modernen Geräte gern genutzt. Doch nach ein paar Monaten merkte ich, dass ich lieber draußen im Park jogge und frische Luft genieße, anstatt drinnen bei lauter Musik zu schwitzen.

In meinem Heimatland haben Fitnessstudios in den letzten Jahren enorm an Beliebtheit gewonnen. Vor allem in den Großstädten gibt es viele moderne Studios, die rund um die Uhr geöffnet sind. Allerdings kann sich nicht jeder die Mitgliedschaft leisten, weshalb viele junge Leute einfach auf öffentlichen Sportplätzen oder am Strand trainieren.

Nun zu den Vor- und Nachteilen: Ein großer Vorteil von Fitnessstudios ist, dass man völlig wetterunabhängig trainieren kann. Zudem stehen professionelle Trainer zur Verfügung, die Übungen korrigieren und Verletzungen vorbeugen. Ein Nachteil sind jedoch die oft hohen Kosten mit langen Vertragslaufzeiten. Außerdem sind manche Studios abends total überfüllt.

Meiner Meinung nach sind Fitnessstudios eine sinnvolle Einrichtung, besonders für Menschen, die gezieltes Muskel- oder Rehatraining benötigen. Wer sich jedoch einfach nur fit halten will, kann das genauso gut und kostenlos in der freien Natur tun.

Damit bin ich am Ende meiner Präsentation angelangt. Ich danke Ihnen herzlich für Ihre Aufmerksamkeit und freue mich auf Ihre Fragen.`,
    keyVocabulary: [
      { de: 'wetterunabhängig trainieren', ar: 'التدرب بمعزل عن تقلبات الطقس' },
      { de: 'die Mitgliedsbeiträge', ar: 'رسوم الاشتراك الشهري' },
      { de: 'an Geräten trainieren', ar: 'التدرب على الأجهزة الرياضية' },
      { de: 'Verletzungen vorbeugen', ar: 'الوقاية من الإصابات' }
    ]
  },

  // ================= TEIL 3: RÜCKMELDUNG & FRAGE =================
  {
    id: 'sprechen-t3-set1',
    teil: 3,
    testNumber: 1,
    titleDe: 'Teil 3: Rückmeldung und Frage zur Partner-Präsentation',
    titleAr: 'الجزء 3: إبداء الرأي والتعليق وطرح سؤال على عرض الزميل',
    situationDe: 'Nach der Präsentation Ihres Partners / Ihrer Partnerin geben Sie eine kurze Rückmeldung (Feedback) und stellen eine relevante Frage zum Thema.',
    situationAr: 'بعد انتهاء زميلك من عرضه الشفوي، قدّم له تعليقاً إيجابياً واطرح عليه سؤالاً ذكياً متعلقاً بموضوعه.',
    leitpunkteDe: [
      'Lob und Feedback zur Präsentation (Aufbau, Aussprache, interessante Fakten)',
      'Eine passende Frage zum Thema stellen',
      'Auf die Antwort des Partners höflich reagieren'
    ],
    leitpunkteAr: [
      'إشادة وتقييم إيجابي للعرض (الوضوح، النطق، التسلسل)',
      'طرح سؤال وجيه ومباشر يتعلق بالموضوع',
      'التعقيب بلباقة وشكر الزميل على إجابته'
    ],
    followUpQuestionsDe: [
      'Wie beurteilst du die Kosten im Vergleich zum Nutzen?',
      'Würdest du deinen Freunden empfehlen, das auszuprobieren?'
    ],
    followUpQuestionsAr: [
      'كيف تقيّم التكلفة مقارنة بالفائدة؟',
      'هل تنصح أصدقاءك بتجربة ذلك؟'
    ],
    modelSpokenAnswerDe: 'Vielen Dank für deine interessante Präsentation! Dein Vortrag war sehr klar gegliedert und du hast besonders die Vor- und Nachteile anschaulich erklärt. Was mich noch interessieren würde: Gibt es in deiner Heimatstadt auch spezielle Ermäßigungen für Schüler und Studenten in Fitnessstudios?',
    keyVocabulary: [
      { de: 'Deine Präsentation war sehr gut strukturiert.', ar: 'كان عرضك منظم البنية وواضحاً جداً.' },
      { de: 'Besonders interessant fand ich...', ar: 'أثار اهتمامي بشكل خاص...' },
      { de: 'Dazu hätte ich noch eine Frage:', ar: 'لدي سؤال بخصوص ذلك:' }
    ]
  }
];
