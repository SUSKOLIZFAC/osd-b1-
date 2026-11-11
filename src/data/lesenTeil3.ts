import { LesenTeilSet } from '../types';

export const LESEN_TEIL_3_DATA: LesenTeilSet[] = [
  {
    id: 'lesen-t3-set1',
    teil: 3,
    testNumber: 1,
    titleDe: 'Tierliebhaber suchen passende Angebote',
    titleAr: 'عشاق الحيوانات يبحثون عن عروض مناسبة',
    source: 'Zertifikat B1 neu, Test 1, S. 9-10',
    textPassageDe: 'Einige Ihrer Bekannten sind Tierliebhaber. Sie haben bestimmte Wünsche und suchen nach passenden Anzeigen.',
    ads: [
      { id: 'a', title: 'Dringend gesucht:', text: 'Frauchen u./od. Herrchen, die armem, rotem Cockerspaniel (Rüde, kastriert, 5 1/2 J.) nach dem Tod seines Frauchens ein neues Zuhause (mit Garten) geben. Tel. 089/3095486' },
      { id: 'b', title: 'Eselsfohlen Diana', text: 'Braun, geboren 21.6. zu verkaufen. Fam. Diethalm, D-79397 Müllheim, Tel. 07631-7192, Fax 7820.' },
      { id: 'c', title: 'Arme Katze „Blacky"', text: '4J., überaus gutmütig, wurde von ihren Leuten bei der Übersiedlung einfach zurückgelassen! Wer nimmt sie liebevoll auf? Tel. 0 38 62/32 681' },
      { id: 'd', title: 'Gesucht wird der Graupapagei „Burli"', text: 'der am 1. Juni aus Wien 21. Bezirk entflogen ist! Er ist sehr zutraulich. Tel. 01/290 60 43. Bel. 2000,-' },
      { id: 'e', title: 'Graupapageienbabys', text: 'liebevoll v. Hd. aufgezogen zu verkaufen, Tel. 02166/930305' },
      { id: 'f', title: 'Urlaubspflege', text: 'Nehme Ihren Hund / Ihre Katze während Ihres Urlaubs in Pflege! Tel. 08084/529763' },
      { id: 'g', title: 'Tierklinik ARCHE NOAH', text: 'Die etwas „andere" TIERKLINIK, 5020 Salzburg. Sie wollen Ihren Urlaub ohne Sorgen um das Haustier genießen? Wir versorgen Kleintiere liebevoll während dieser Zeit!' },
      { id: 'h', title: 'Hundebetreuung', text: 'Nehme Ihren Hund in Pflege bei Urlaub oder am Tag. Nur Hunde, die für die Wohnung geeignet sind. Tel. 01 73-28 85 11 99' },
      { id: 'i', title: 'Aquarium gesucht', text: 'Nehme/Suche gebrauchtes oder neues Aquarium kostenlos, 30 l – 320 l mit Zubehör Tel. 07631 / 18357' },
      { id: 'j', title: 'Fisch- & Korallentag', text: '11–16 Uhr Schauaquarium Mundenhof. Verkauf von Fischen, Pflanzen, Garnelen, Korallenablegern, Makroalgen u. Zubehör.' }
    ],
    situations: [
      { id: 13, textDe: 'Susanne möchte im Urlaub verreisen und weiß nicht, wer in dieser Zeit auf ihre kleine, weiße Maus aufpassen kann.', textAr: 'سوزان تود السفر في إجازة ولا تدري من يعتني بفأرها الأبيض الصغير خلال تلك الفترة.', correctAnswer: 'g' },
      { id: 14, textDe: 'Thomas ist Single und hält sich einen Dackel. Die Nachbarn haben sich beschwert, weil der Hund in der Wohnung laut wird, wenn Thomas tagsüber im Büro ist. Er möchte das Problem lösen.', textAr: 'توماس أعزب ولديه كلب داتشل. اشتكى الجيران من نباح الكلب نهاراً أثناء وجود توماس في العمل، ويريد حلاً.', correctAnswer: 'h' },
      { id: 15, textDe: 'Die Familie Schmidt hat einen großen Garten und eine Bernhardiner-Hündin. Damit ihr Haustier nicht allein ist, wären sie bereit, einen zweiten Hund aufzunehmen. Er soll aber nicht so groß sein.', textAr: 'عائلة شميت لديها حديقة كبيرة وكلبة، ومستعدون لتبني كلب ثانٍ بشرط ألا يكون ضخماً جداً.', correctAnswer: 'a' },
      { id: 16, textDe: 'Herr Albrecht muss aus beruflichen Gründen umziehen und kann seinen Hund nicht mitnehmen. Er sucht ein neues Zuhause für ihn.', textAr: 'السيد ألبرخت سينتقل لظروف العمل ولا يستطيع أخذ كلبه معه، ويبحث عن مأوى جديد دائم له.', correctAnswer: '0' },
      { id: 17, textDe: 'Für ihr neues, großes Aquarium möchte Eva noch einige Fische kaufen.', textAr: 'تريد إيفا شراء بعض الأسماك لحوض السمك الكبير والجديد الخاص بها.', correctAnswer: 'j' },
      { id: 18, textDe: 'Karl will sich eine Katze anschaffen. Er mag diese Tiere, weil sie nicht viel Pflege brauchen und sehr selbstständig sind.', textAr: 'يريد كارل اقتناء قطة لأنه يحبها لكونها مستقلة وقليلة المتطلبات.', correctAnswer: 'c' },
      { id: 19, textDe: 'Frau Bach mag Vögel, sie sucht zurzeit einen Papagei.', textAr: 'السيدة باخ تحب الطيور وتبحث حالياً عن ببغاء لشرائه.', correctAnswer: 'e' }
    ],
    questions: [
      {
        id: 13,
        type: 'zuordnung',
        questionDe: 'Susanne (Maus im Urlaub versorgen):',
        questionAr: 'سوزان (رعاية فأر صغير أثناء الإجازة):',
        correctAnswer: 'g',
        explanationDe: 'Anzeige g (Arche Noah Tierklinik) versorgt Kleintiere liebevoll während des Urlaubs.',
        explanationAr: 'الإعلان g لعيادة سفينة نوح يقدم رعاية للحيوانات الأليفة الصغيرة Kleintiere (كالفئران) أثناء عطلة أصحابها.'
      },
      {
        id: 14,
        type: 'zuordnung',
        questionDe: 'Thomas (Dackelbetreuung tagsüber während der Bürozeit):',
        questionAr: 'توماس (رعاية كلب نهاراً أثناء الدوام المكتبي):',
        correctAnswer: 'h',
        explanationDe: 'Anzeige h bietet Betreuung für Hunde "bei Urlaub oder am Tag" an.',
        explanationAr: 'الإعلان h يقدم رعاية للكلاب نهاراً am Tag المناسبة للشقق.'
      },
      {
        id: 15,
        type: 'zuordnung',
        questionDe: 'Familie Schmidt (sucht kleineren Hund, hat Garten):',
        questionAr: 'عائلة شميت (تبحث عن كلب غير ضخم، ولديها حديقة):',
        correctAnswer: 'a',
        explanationDe: 'Anzeige a sucht ein Zuhause (mit Garten) für einen mittelgroßen Cockerspaniel.',
        explanationAr: 'الإعلان a يبحث عن مأوى وحديقة لكلب كوكر سبانيل بعد وفاة صاحبته.'
      },
      {
        id: 16,
        type: 'zuordnung',
        questionDe: 'Herr Albrecht (sucht neues Zuhause für seinen Hund):',
        questionAr: 'السيد ألبرخت (يبحث عن شخص يتبنى كلبه نهائياً):',
        correctAnswer: '0',
        explanationDe: 'Es gibt keine Anzeige von jemandem, der einen fremden Hund dauerhaft aufnehmen will. (Anzeige a sucht selbst ein Zuhause, f und h sind nur Urlaubspflege). Lösung: 0.',
        explanationAr: 'لا يوجد أي إعلان لشخص يرغب في تبني كلب بشكل دائم (الإعلانات إما رعاية مؤقتة في العطلة أو عروض بيع)، لذا فالإجابة 0.'
      },
      {
        id: 17,
        type: 'zuordnung',
        questionDe: 'Eva (möchte Fische für ihr Aquarium kaufen):',
        questionAr: 'إيفا (تريد شراء أسماك لحوضها):',
        correctAnswer: 'j',
        explanationDe: 'Anzeige j kündigt den Fisch- und Korallentag mit Verkauf von Fischen an.',
        explanationAr: 'الإعلان j يخص معرض بيع الأسماك ونباتات الأحواض في موندنهوف.'
      },
      {
        id: 18,
        type: 'zuordnung',
        questionDe: 'Karl (möchte eine Katze aufnehmen):',
        questionAr: 'كارل (يريد اقتناء قطة):',
        correctAnswer: 'c',
        explanationDe: 'Anzeige c sucht ein liebevolles Zuhause für die arme Katze „Blacky".',
        explanationAr: 'الإعلان c يبحث عن شخص عطوف يتبنى القطة الطيبة بلاكي التي تركها أصحابها.'
      },
      {
        id: 19,
        type: 'zuordnung',
        questionDe: 'Frau Bach (sucht einen Papagei zum Kaufen):',
        questionAr: 'السيدة باخ (تبحث عن ببغاء للشراء):',
        correctAnswer: 'e',
        explanationDe: 'Anzeige e bietet Graupapageienbabys zum Verkauf an (Anzeige d sucht nur einen entflogenen Papagei).',
        explanationAr: 'الإعلان e يعرض فراخ ببغاء رمادي للبيع (بينما الإعلان d يبحث عن ببغاء مفقود).'
      }
    ]
  }
];
