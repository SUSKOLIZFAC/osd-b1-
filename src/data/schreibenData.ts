import { SchreibenTask } from '../types';

export const SCHREIBEN_TASKS: SchreibenTask[] = [
  // ================= AUFGABE 1: INFORMELL (ca. 80 Wörter) =================
  {
    id: 'schreiben-a1-set1',
    aufgabe: 1,
    testNumber: 1,
    titleDe: 'Aufgabe 1: Einladung zur Abiturparty des Cousins',
    titleAr: 'المهمة 1: دعوة لحفلة تخرج ابن العم من الثانوية',
    situationDe: 'Ihr Cousin, der in einer anderen Stadt wohnt, hat gerade das Abitur mit einer sehr guten Note bestanden und möchte das mit einer großen Party feiern.',
    situationAr: 'ابن عمك يعيش في مدينة أخرى، نجح لتوه في امتحان الثانوية العامة (Abitur) بدرجة ممتازة ويريد الاحتفال بذلك في حفلة كبيرة.',
    instructionsDe: 'Schreiben Sie eine E-Mail (circa 80 Wörter). Schreiben Sie etwas zu allen drei Punkten. Achten Sie auf den Textaufbau (Anrede, Einleitung, Reihenfolge der Inhaltspunkte, Schluss).',
    instructionsAr: 'اكتب بريداً إلكترونياً (حوالي 80 كلمة). تناول النقاط الثلاث جميعها، مع مراعاة بنية النص (التحية، المقدمة، ترتيب النقاط، الخاتمة).',
    leitpunkteDe: [
      'Bedanken Sie sich für die Einladung und sagen Sie zu.',
      'Machen Sie Vorschläge, wie Sie bei den Partyvorbereitungen helfen könnten.',
      'Schreiben Sie, wann Sie kommen und wie lange Sie bleiben werden.'
    ],
    leitpunkteAr: [
      'اشكره على الدعوة وأكد حضورك (الموافقة).',
      'قدّم اقتراحات حول كيفية مساعدته في التحضير للحفلة.',
      'اكتب متى ستصل وإلى متى ستظل عنده.'
    ],
    targetWordCount: 80,
    timeMinutes: 20,
    source: 'Zertifikat B1 neu, Test 1, S. 18',
    usefulRedemittel: [
      { de: 'Herzlichen Glückwunsch zum bestandenen Abitur!', ar: 'ألف مبروك على اجتياز الثانوية العامة!' },
      { de: 'Vielen Dank für deine nette Einladung. Ich komme natürlich sehr gerne!', ar: 'شكراً جزيلاً على دعوتك اللطيفة، سآتي بكل سرور!' },
      { de: 'Ich könnte dir bei den Vorbereitungen helfen, zum Beispiel...', ar: 'يمكنني مساعدتك في التحضيرات، على سبيل المثال...' },
      { de: 'Was hältst du davon, wenn ich...', ar: 'ما رأيك لو قمتُ بـ...' }
    ],
    modelAnswerB1: `Lieber Lukas,

herzlichen Glückwunsch zu deinem super Abitur! Ich habe mich riesig für dich gefreut.

Vielen Dank für die Einladung zu deiner Party, ich komme natürlich total gerne und sage hiermit fest zu! 

Ich möchte dir unbedingt bei den Vorbereitungen helfen. Was hältst du davon, wenn ich am Freitag schon früher komme und beim Einkaufen oder bei der Dekoration helfe? Ich könnte auch meine Musikbox mitbringen und für gute Playlists sorgen.

Ich plane, am Freitagnachmittag gegen 16 Uhr mit dem Zug anzukommen und würde gerne bis Sonntagnachmittag bei dir bleiben, damit wir nach der Party noch zusammen frühstücken und aufräumen können.

Grüß deine Eltern ganz lieb und bis bald!

Dein Karim`
  },
  {
    id: 'schreiben-a1-set2',
    aufgabe: 1,
    testNumber: 2,
    titleDe: 'Aufgabe 1: Jemand Neues kennengelernt',
    titleAr: 'المهمة 1: التعرف على شخص جديد ومشاركة الخبر مع صديق',
    situationDe: 'Sie haben gestern jemanden kennengelernt. Sie fanden ihn/sie sehr nett und haben auch Handynummern ausgetauscht. Berichten Sie einem Freund / einer Freundin darüber.',
    situationAr: 'تعرفت بالأمس على شخص جديد وجدته لطيفاً جداً وتبادلتما أرقام الهواتف. أخبِر صديقك/صديقتك بذلك.',
    instructionsDe: 'Schreiben Sie eine E-Mail (circa 80 Wörter). Behandeln Sie alle drei Punkte.',
    instructionsAr: 'اكتب إيميل (حوالي 80 كلمة) وتناول النقاط الثلاث.',
    leitpunkteDe: [
      'Wo und wie haben Sie ihn/sie kennengelernt?',
      'Was hat Ihnen an ihm/ihr sofort gut gefallen und warum?',
      'Bitten Sie um Rat, was Sie jetzt machen sollen.'
    ],
    leitpunkteAr: [
      'أين وكيف تعرفت عليه/عليها؟',
      'ما الذي أعجبك فيه/فيها على الفور ولماذا؟',
      'اطلب النصيحة عما يجب عليك فعله الآن.'
    ],
    targetWordCount: 80,
    timeMinutes: 20,
    source: 'Zertifikat B1 neu, Test 2, S. 34',
    usefulRedemittel: [
      { de: 'Du glaubst nicht, was mir gestern passiert ist!', ar: 'لن تصدق ما حدث معي بالأمس!' },
      { de: 'Besonders beeindruckt hat mich...', ar: 'ما أثار إعجابي بشكل خاص...' },
      { de: 'Was würdest du mir raten?', ar: 'بماذا تنصحني؟' }
    ],
    modelAnswerB1: `Liebe Sarah,

wie geht es dir? Du glaubst nicht, was mir gestern Tolles passiert ist! 

Als ich gestern in der Stadtbibliothek für meine Prüfung lernte, saß mir ein sehr sympathischer junger Mann gegenüber. Wir kamen beim Kaffeetrinken in der Cafeteria ins Gespräch, weil er dasselbe Fach studiert. Er heißt Daniel und wir haben sofort Nummern getauscht.

Besonders gut hat mir gefallen, dass er unglaublich humorvoll und aufmerksam ist. Wir haben fast eine Stunde lang gelacht und über unsere Hobbys geredet.

Jetzt bin ich mir aber unsicher: Was würdest du an meiner Stelle tun? Soll ich ihm schon heute schreiben oder lieber noch bis zum Wochenende warten? Bitte gib mir schnell einen Rat!

Liebe Grüße,
deine Maya`
  },
  {
    id: 'schreiben-a1-set3',
    aufgabe: 1,
    testNumber: 3,
    titleDe: 'Aufgabe 1: Kleinen Hund gefunden',
    titleAr: 'المهمة 1: العثور على كلب صغير وأخذه إلى المنزل',
    situationDe: 'Sie haben einen kleinen Hund gefunden und mit nach Hause genommen. Sie schreiben einem Freund / einer Freundin darüber, der/die auch ein Hundefan ist.',
    situationAr: 'عثرت على كلب صغير واصطحبته إلى منزلك. اكتب لصديق لك من عشاق الكلاب لتخبره بالقصة.',
    instructionsDe: 'Schreiben Sie eine E-Mail (circa 80 Wörter) zu allen 3 Leitpunkten.',
    instructionsAr: 'اكتب إيميل (حوالي 80 كلمة) يغطي النقاط الثلاث.',
    leitpunkteDe: [
      'Erzählen Sie, wo Sie den Hund gefunden haben, und beschreiben Sie ihn.',
      'Warum wollten Sie den Hund zuerst nicht mit nach Hause nehmen? Begründen Sie.',
      'Schlagen Sie Ihrem Freund / Ihrer Freundin vor, Sie zu besuchen.'
    ],
    leitpunkteAr: [
      'أين وجدت الكلب ووصف شكله وحجمه.',
      'لماذا ترددت في البداية في أخذه للمنزل؟ مع التعليل.',
      'اقترح على صديقك زيارتك لرؤية الكلب.'
    ],
    targetWordCount: 80,
    timeMinutes: 20,
    source: 'Zertifikat B1 neu, Test 3, S. 50',
    usefulRedemittel: [
      { de: 'Ich habe eine unglaubliche Überraschung für dich!', ar: 'لدي مفاجأة لا تصدق لك!' },
      { de: 'Zuerst hatte ich Bedenken, weil...', ar: 'في البداية كانت لدي مخاوف لأن...' },
      { de: 'Komm doch am Wochenende vorbei!', ar: 'تعال لزيارتي في نهاية الأسبوع!' }
    ],
    modelAnswerB1: `Lieber Jonas,

du weißt ja, wie sehr wir beide Tiere lieben. Gestern habe ich im Stadtpark einen kleinen, braunen Hund gefunden! Er ist zuckersüß, hat weiße Pfoten und ganz treue Augen, war aber völlig durchnässt und hungrig.

Zuerst wollte ich ihn nicht mit nach Hause nehmen, weil meine Vermieterin Haustiere eigentlich streng verbietet und ich Angst vor Ärger hatte. Aber das arme Tier zitterte vor Kälte, deshalb konnte ich ihn unmöglich allein im Park lassen!

Du musst ihn unbedingt kennenlernen! Hast du Zeit, mich morgen Nachmittag zu besuchen? Dann können wir gemeinsam mit ihm im Garten spielen.

Viele Grüße,
dein Florian`
  },

  // ================= AUFGABE 2: MEINUNGSÄUSSERUNG (ca. 80 Wörter) =================
  {
    id: 'schreiben-a2-set1',
    aufgabe: 2,
    testNumber: 1,
    titleDe: 'Aufgabe 2: Gästebuch – Wahre Freundschaft im Internet?',
    titleAr: 'المهمة 2: سجل الزوار – الصداقة الحقيقية وعصر الإنترنت',
    situationDe: 'Sie haben im Fernsehen eine Diskussionssendung zum Thema „Freundschaft" gesehen. Im Online-Gästebuch der Sendung finden Sie eine Meinung.',
    situationAr: 'شاهدت برنامجاً حوارياً في التلفاز حول "الصداقة". في سجل الزوار بالمنتدى تجد رأياً لمارغريت.',
    instructionsDe: 'Schreiben Sie nun Ihre Meinung (circa 80 Wörter).',
    instructionsAr: 'اكتب الآن رأيك الشخصي حول الموضوع (حوالي 80 كلمة).',
    leitpunkteDe: [
      'Bezug auf das Thema und die gelesene Meinung',
      'Eigene persönliche Erfahrungen mit Freundschaft',
      'Bedeutung von echten Freunden vs. Kontakten im Netz'
    ],
    leitpunkteAr: [
      'الإشارة لموضوع النقاش والرأي المطروح',
      'التجارب الشخصية مع الصداقة الحقيقية',
      'الفرق بين الأصدقاء الحقيقيين والافتراضيين على الإنترنت'
    ],
    targetWordCount: 80,
    timeMinutes: 25,
    source: 'Zertifikat B1 neu, Test 1, S. 18',
    sampleInputPost: {
      author: 'Margarethe',
      date: '10.03. 19:27 Uhr',
      text: 'Ich habe mich oft gefragt, ob es überhaupt wahre Freundschaften gibt. Leider haben mich „meine besten Freundinnen" mehrmals enttäuscht. Anfangs war ich immer traurig, jetzt weiß ich, dass ein Leben ohne Freunde auch möglich ist – dank Internet.'
    },
    usefulRedemittel: [
      { de: 'Ich bin der festen Ansicht, dass...', ar: 'أنا على قناعة تامة بأن...' },
      { de: 'Einerseits kann ich die Meinung verstehen, andererseits...', ar: 'من جهة أستطيع تفهم الرأي، لكن من جهة أخرى...' },
      { de: 'Für mich persönlich bedeutet Freundschaft...', ar: 'بالنسبة لي شخصياً تعني الصداقة...' }
    ],
    modelAnswerB1: `Das Thema Freundschaft beschäftigt mich sehr. Zu dem Beitrag von Margarethe möchte ich sagen, dass ich Enttäuschungen zwar nachvollziehen kann, aber ihre Schlussfolgerung nicht teile. 

Meiner Meinung nach kann das Internet echte Freunde niemals ersetzen. Zwar kann man online chatten und viele Kontakte knüpfen, doch in schwierigen Momenten braucht man reale Menschen, die einem zuhören, einen trösten und beistehen. 

Ich persönlich habe zwei sehr enge Freunde, auf die ich mich immer hundertprozentig verlassen kann. Wahre Freundschaft braucht Zeit, Vertrauen und Pflege, aber sie macht das Leben erst lebenswert.`
  },
  {
    id: 'schreiben-a2-set2',
    aufgabe: 2,
    testNumber: 2,
    titleDe: 'Aufgabe 2: Musik im Zeitalter des Internets',
    titleAr: 'المهمة 2: الموسيقى في عصر الإنترنت وتحميل الأغاني',
    situationDe: 'Sie haben im Fernsehen eine Diskussionssendung zum Thema „Musik im Zeitalter des Internets" gesehen. Im Online-Gästebuch der Sendung finden Sie eine Meinung.',
    situationAr: 'شاهدت حلقة نقاشية حول الموسيقى في عصر الإنترنت وتجد مشاركة لماركوس.',
    instructionsDe: 'Schreiben Sie nun Ihre Meinung (circa 80 Wörter).',
    instructionsAr: 'اكتب رأيك الشخصي (حوالي 80 كلمة).',
    leitpunkteDe: [
      'Meinung zu kostenlosem Musikkonsum im Netz',
      'Situation der Musiker und Künstler',
      'Eigene Musiknutzung (Streaming, Kaufen)'
    ],
    leitpunkteAr: [
      'الرأي في الاستماع المجاني للأغاني على الإنترنت',
      'وضع الموسيقيين والفنانين وحقوقهم المالية',
      'طريقتك الخاصة في الاستماع للموسيقى'
    ],
    targetWordCount: 80,
    timeMinutes: 25,
    source: 'Zertifikat B1 neu, Test 2, S. 34',
    sampleInputPost: {
      author: 'Markus',
      date: '03.09. 15:47 Uhr',
      text: 'Die Musikindustrie hat jahrelang sehr viel Geld verdient und nicht immer mit Qualitätsmusik. Original-CDs sind immer noch alles andere als preiswert. Und endlich mal bietet uns das Internet die Möglichkeit, kostenlos Musik zu hören. Warum sollte man von dieser Möglichkeit nicht Gebrauch machen?'
    },
    usefulRedemittel: [
      { de: 'Ich stimme Markus nicht ganz zu, denn...', ar: 'لا أتفق تماماً مع ماركوس، لأن...' },
      { de: 'Man darf nicht vergessen, dass Musiker...', ar: 'لا يجوز أن ننسى أن الموسيقيين...' },
      { de: 'Heutzutage gibt es faire Alternativen wie...', ar: 'في يومنا هذا تتوفر بدائل عادلة مثل...' }
    ],
    modelAnswerB1: `Ich verfolge die Diskussion über Musik im Internet mit großem Interesse. Der Meinung von Markus kann ich jedoch nur teilweise zustimmen. 

Zwar ist es bequem, Musik online zu streamen, aber man darf nicht vergessen, dass Musiker und Künstler von ihrer Arbeit leben müssen. Wenn jeder alles kostenlos herunterlädt, können besonders junge Nachwuchsbands nicht mehr überleben. 

Ich finde moderne Streaming-Dienste mit monatlichem Abo eine faire Lösung: Die Nutzer zahlen einen bezahlbaren Preis und die Künstler erhalten eine angemessene Vergütung.`
  },

  // ================= AUFGABE 3: FORMELL (ca. 40 Wörter) =================
  {
    id: 'schreiben-a3-set1',
    aufgabe: 3,
    testNumber: 1,
    titleDe: 'Aufgabe 3: Fehlen beim Deutschkurs-Test',
    titleAr: 'المهمة 3: اعتذار رسمي عن الغياب عن اختبار دورة اللغة الألمانية',
    situationDe: 'In Ihrem Deutschkurs wurde gestern ein Test geschrieben, aber Sie waren nicht da.',
    situationAr: 'أُجري بالأمس اختبار في دورة اللغة الألمانية ولم تتمكن من الحضور.',
    instructionsDe: 'Schreiben Sie an Ihren Kursleiter, Herrn Zeidler. Entschuldigen Sie sich höflich für Ihr Fehlen und bitten Sie um einen Termin, an dem Sie den Test nachschreiben können. Schreiben Sie eine E-Mail (circa 40 Wörter). Vergessen Sie nicht die Anrede und den Gruß am Schluss.',
    instructionsAr: 'اكتب إلى مدرس الدورة السيد تسايدلر. اعتذر بلباقة عن غيابك واطلب موعداً لإعادة الاختبار. (حوالي 40 كلمة مع التحية والخاتمة).',
    leitpunkteDe: [
      'Höfliche Entschuldigung für das gestrige Fehlen',
      'Grund des Fehlens (Krankheit / wichtiger Notfall)',
      'Bitte um einen Nachholtermin für den Test'
    ],
    leitpunkteAr: [
      'اعتذار مهذب عن الغياب بالأمس',
      'سبب الغياب (مرض أو ظرف طارئ)',
      'طلب موعد لإعادة الامتحان التعويضي'
    ],
    targetWordCount: 40,
    timeMinutes: 15,
    source: 'Zertifikat B1 neu, Test 1, S. 18',
    usefulRedemittel: [
      { de: 'Sehr geehrter Herr Zeidler,', ar: 'السيد تسايدلر المحترم،' },
      { de: 'Ich bitte Sie vielmals um Entschuldigung, dass ich...', ar: 'أرجو منكم المعذرة بشدة لأنني...' },
      { de: 'Wäre es möglich, dass ich...', ar: 'هل سيكون من الممكن أن...' },
      { de: 'Mit freundlichen Grüßen', ar: 'مع فائق الاحترام والتقدير' }
    ],
    modelAnswerB1: `Sehr geehrter Herr Zeidler,

ich bitte Sie um Entschuldigung, dass ich gestern nicht zum Unterricht und zum Test kommen konnte. Wegen eines akuten Arzttermins war es mir leider unmöglich teilzunehmen. 

Wäre es möglich, dass ich den Test nächste Woche nachschreibe? 

Mit freundlichen Grüßen,
Ali Mansour`
  },
  {
    id: 'schreiben-a3-set2',
    aufgabe: 3,
    testNumber: 2,
    titleDe: 'Aufgabe 3: Nachricht an Ehepaar Börlach (Hund gefunden)',
    titleAr: 'المهمة 3: رسالة للسيد والسيدة بورلاخ (العثور على الكلب المفقود)',
    situationDe: 'An der Bushaltestelle haben Sie in einer Suchanzeige gelesen, dass das Ehepaar Börlach seinen Hund verloren hat. Heute Morgen haben Sie den Hund gefunden.',
    situationAr: 'قرأت إعلاناً في محطة الحافلات عن فقدان الزوجين بورلاخ لكلبهما، وقد عثرت عليه هذا الصباح.',
    instructionsDe: 'Schreiben Sie an Herrn und Frau Börlach. Berichten Sie, wo Sie den Hund gefunden haben und teilen Sie dem Ehepaar höflich mit, wie und wann Sie erreicht werden können. (circa 40 Wörter).',
    instructionsAr: 'اكتب للزوجين بورلاخ وأخبرهما أين وجدت الكلب وكيف ومتى يمكنهما التواصل معك واستلامه (حوالي 40 كلمة).',
    leitpunkteDe: [
      'Fund des Hundes mitteilen und Ort nennen',
      'Zustand des Hundes beschreiben',
      'Möglichkeiten zur Kontaktaufnahme und Übergabe'
    ],
    leitpunkteAr: [
      'إبلاغهما بالعثور على الكلب ومكان وجوده',
      'طمأنتهما على حالته الصحية',
      'أوقات ورقم التواصل لاستلامه'
    ],
    targetWordCount: 40,
    timeMinutes: 15,
    source: 'Zertifikat B1 neu, Test 2, S. 34',
    usefulRedemittel: [
      { de: 'Sehr geehrte Familie Börlach,', ar: 'عائلة بورلاخ المحترمة،' },
      { de: 'Ich habe gute Nachrichten für Sie:', ar: 'لدي أخبار سارة لحضراتكم:' },
      { de: 'Sie können mich jederzeit unter der Nummer ... erreichen.', ar: 'يمكنكم التواصل معي في أي وقت على الرقم...' }
    ],
    modelAnswerB1: `Sehr geehrte Familie Börlach,

ich habe eine erfreuliche Nachricht: Heute Morgen habe ich Ihren Hund wohlauf im Stadtpark gefunden! 

Er ist bei mir zu Hause in Sicherheit. Sie können mich heute ab 17 Uhr unter 0176-123456 erreichen, um ihn abzuholen.

Mit freundlichen Grüßen,
Sami Nader`
  }
];
