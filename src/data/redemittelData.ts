import { RedemittelItem } from '../types';

export const REDEMITTEL_DATA: RedemittelItem[] = [
  // ================= SCHREIBEN =================
  {
    id: 'rm-s-einl-1',
    category: 'Schreiben',
    subCategory: 'Einleitung',
    expressionDe: 'Vielen Dank für deine E-Mail. Ich habe mich sehr darüber gefreut.',
    translationAr: 'شكراً جزيلاً على رسالتك الإلكترونية. لقد سررت بها كثيراً.',
    exampleDe: 'Liebe Julia, vielen Dank für deine E-Mail. Ich habe mich sehr darüber gefreut.',
    exampleAr: 'عزيزتي يوليا، شكراً جزيلاً على إيميلك، لقد فرحت به كثيراً.',
    register: 'informell',
    whenToUseDe: 'Perfekter Einstieg in Aufgabe 1 (informelle E-Mail an Freunde oder Familie).',
    whenToUseAr: 'افتتاحية مثالية للمهمة 1 (إيميل شخصي غير رسمي للأصدقاء أو الأقارب).'
  },
  {
    id: 'rm-s-einl-2',
    category: 'Schreiben',
    subCategory: 'Einleitung',
    expressionDe: 'Ich schreibe Ihnen bezüglich Ihrer Anzeige / unseres gestrigen Gesprächs.',
    translationAr: 'أكتب لحضرتكم بخصوص إعلانكم / محادثتنا بالأمس.',
    exampleDe: 'Sehr geehrte Frau Müller, ich schreibe Ihnen bezüglich Ihrer Anzeige für die Mietwohnung.',
    exampleAr: 'السيدة مولر المحترمة، أكتب لحضرتكم بخصوص إعلانكم عن الشقة المعروضة للإيجار.',
    register: 'formell',
    whenToUseDe: 'Einleitung für formelle Schreiben (Aufgabe 3 an Vermieter, Arbeitgeber, Behörden).',
    whenToUseAr: 'مقدمة للرسائل الرسمية (المهمة 3 إلى المؤجر، صاحب العمل أو الجهات الرسمية).'
  },
  {
    id: 'rm-s-mein-1',
    category: 'Schreiben',
    subCategory: 'Meinung ausdrücken',
    expressionDe: 'Meiner Meinung nach sollte man...',
    translationAr: 'في رأيي الشخصي، ينبغي على المرء أن...',
    exampleDe: 'Meiner Meinung nach sollte man Jugendlichen mehr Verantwortung übertragen.',
    exampleAr: 'في رأيي، ينبغي منح المراهقين والشباب مزيداً من المسؤولية.',
    register: 'halbformell',
    whenToUseDe: 'Wichtig für Aufgabe 2 (Forumsbeitrag / Meinungsäußerung).',
    whenToUseAr: 'تعبير أساسي للمهمة 2 (المشاركة في المنتدى وإبداء الرأي).'
  },
  {
    id: 'rm-s-mein-2',
    category: 'Schreiben',
    subCategory: 'Meinung ausdrücken',
    expressionDe: 'Ich bin der festen Ansicht, dass...',
    translationAr: 'أنا على قناعة تامة وراسخة بأن...',
    exampleDe: 'Ich bin der festen Ansicht, dass gesunde Ernährung in Schulen gefördert werden muss.',
    exampleAr: 'أنا مقتنع تماماً بأنه يجب تعزيز التغذية الصحية في المدارس.',
    register: 'halbformell',
    whenToUseDe: 'Argumentation in Aufgabe 2 mit Nebensatz (Verb am Ende).',
    whenToUseAr: 'طرح حجة قوية في المهمة 2 (مع جملة فرعية والفعل في النهاية).'
  },
  {
    id: 'rm-s-gruend-1',
    category: 'Schreiben',
    subCategory: 'Gründe nennen',
    expressionDe: 'Ein wesentlicher Grund dafür liegt darin, dass...',
    translationAr: 'أحد الأسباب الجوهرية لذلك يكمن في أن...',
    exampleDe: 'Ein wesentlicher Grund dafür liegt darin, dass viele Eltern heute Vollzeit arbeiten.',
    exampleAr: 'أحد الأسباب الأساسية يكمن في أن كثيراً من الآباء يعملون بدوام كامل اليوم.',
    register: 'halbformell',
    whenToUseDe: 'Begründen eines Standpunkts oder Verhaltens.',
    whenToUseAr: 'تعليل وجهة نظر أو سلوك معين بطريقة أكاديمية راقية.'
  },
  {
    id: 'rm-s-vorteil-1',
    category: 'Schreiben',
    subCategory: 'Vor- und Nachteile',
    expressionDe: 'Einerseits bietet dies große Vorteile, andererseits darf man die Nachteile nicht übersehen.',
    translationAr: 'من ناحية يوفر هذا مزايا كبيرة، ولكن من ناحية أخرى لا يجوز إغفال السلبيات.',
    exampleDe: 'Einerseits spart Onlineshopping Zeit, andererseits führt es zu mehr Verpackungsmüll.',
    exampleAr: 'من جهة يوفر التسوق الإلكتروني الوقت، ومن جهة أخرى يؤدي للمزيد من نفايات التغليف.',
    register: 'halbformell',
    whenToUseDe: 'Ausgewogene Argumentation in Aufgabe 2.',
    whenToUseAr: 'الموازنة بين الإيجابيات والسلبيات في المهمة 2.'
  },
  {
    id: 'rm-s-vorschl-1',
    category: 'Schreiben',
    subCategory: 'Vorschläge machen',
    expressionDe: 'Was hältst du davon, wenn wir...?',
    translationAr: 'ما رأيك لو قمنا بـ...؟',
    exampleDe: 'Was hältst du davon, wenn wir uns am Samstag um 15 Uhr am Bahnhof treffen?',
    exampleAr: 'ما رأيك لو التقينا يوم السبت في تمام الساعة 15:00 عند محطة القطار؟',
    register: 'informell',
    whenToUseDe: 'Vorschlag machen in Aufgabe 1.',
    whenToUseAr: 'طرح اقتراح ودي على الصديق في المهمة 1.'
  },
  {
    id: 'rm-s-entsch-1',
    category: 'Schreiben',
    subCategory: 'Entschuldigungen',
    expressionDe: 'Ich bitte Sie vielmals um Entschuldigung, dass ich nicht teilnehmen konnte.',
    translationAr: 'أرجو من حضراتكم قبول خالص اعتذاري لعدم تمكني من الحضور والمشاركة.',
    exampleDe: 'Ich bitte Sie vielmals um Entschuldigung, dass ich gestern den Unterricht verpasst habe.',
    exampleAr: 'أعتذر لحضرتك بشدة عن تفويت درس الأمس.',
    register: 'formell',
    whenToUseDe: 'Höfliche Entschuldigung in Aufgabe 3 (an Lehrer, Chef, Prüfer).',
    whenToUseAr: 'اعتذار رسمي مهذب في المهمة 3 (للمعلم أو المدير).'
  },

  // ================= SPRECHEN =================
  {
    id: 'rm-sp-plan-1',
    category: 'Sprechen',
    subCategory: 'Gemeinsam etwas planen',
    expressionDe: 'Lass uns überlegen, wie wir das am besten organisieren können.',
    translationAr: 'دعنا نفكر في أفضل طريقة يمكننا بها تنظيم هذا الأمر.',
    exampleDe: 'Hallo Julia! Lass uns überlegen, wie wir die Party am besten organisieren können.',
    exampleAr: 'أهلاً يوليا! دعينا نفكر معاً كيف ننظم الحفلة بأفضل صورة.',
    register: 'informell',
    whenToUseDe: 'Perfekter Gesprächseinstieg in Teil 1 der mündlichen Prüfung.',
    whenToUseAr: 'افتتاحية ممتازة لبدء الحوار التشاركي في الجزء 1 من الامتحان الشفوي.'
  },
  {
    id: 'rm-sp-zust-1',
    category: 'Sprechen',
    subCategory: 'Zustimmung ausdrücken',
    expressionDe: 'Das ist ein ausgezeichneter Vorschlag! Da bin ich ganz deiner Meinung.',
    translationAr: 'هذا اقتراح ممتاز! أنا أتفق معك تماماً في الرأي.',
    exampleDe: 'Samstagabend passt mir super. Das ist ein ausgezeichneter Vorschlag!',
    exampleAr: 'مساء السبت يناسبني تماماً، هذا اقتراح ممتاز!',
    register: 'informell',
    whenToUseDe: 'Zustimmung zu einem Partner-Vorschlag in Teil 1 signalisieren.',
    whenToUseAr: 'الموافقة التامة على فكرة الزميل في التخطيط المشترك.'
  },
  {
    id: 'rm-sp-widerspr-1',
    category: 'Sprechen',
    subCategory: 'Widersprechen',
    expressionDe: 'Das ist zwar ein guter Gedanke, aber wäre es nicht besser, wenn...?',
    translationAr: 'هذه فكرة جيدة بالفعل، ولكن ألا تعتقد أنه من الأفضل لو أننا...؟',
    exampleDe: 'Im Park zu feiern ist schön, aber wäre es bei schlechtem Wetter nicht besser, einen Raum zu mieten?',
    exampleAr: 'الاحتفال في الحديقة جميل، لكن في حال سوء الطقس أليس من الأفضل استئجار صالة؟',
    register: 'informell',
    whenToUseDe: 'Höflicher Einwand und Gegenvorschlag in Teil 1 (zeigt B1-Niveau).',
    whenToUseAr: 'الاعتراض المهذب مع طرح بديل بناء في الجزء 1 (يعكس مهارة تفاوض B1 عالية).'
  },
  {
    id: 'rm-sp-praes-start-1',
    category: 'Sprechen',
    subCategory: 'Präsentationen beginnen',
    expressionDe: 'Ich möchte Ihnen heute das Thema „..." vorstellen. Mein Vortrag besteht aus folgenden Teilen: ...',
    translationAr: 'أود أن أقدم لحضراتكم اليوم موضوع "...". يتألف عرضي من الأقسام التالية: ...',
    exampleDe: 'Ich möchte Ihnen heute das Thema „Haustiere" vorstellen. Zuerst spreche ich über meine persönlichen Erfahrungen...',
    exampleAr: 'أود أن أعرض موضوع "الحيوانات الأليفة". سأتحدث أولاً عن تجاربي الشخصية...',
    register: 'halbformell',
    whenToUseDe: 'Folie 1 in Teil 2 (Ein Thema präsentieren).',
    whenToUseAr: 'افتتاحية الشريحة الأولى في الجزء 2 (تقديم العرض الشفوي).'
  },
  {
    id: 'rm-sp-praes-end-1',
    category: 'Sprechen',
    subCategory: 'Präsentationen beenden',
    expressionDe: 'Damit bin ich am Ende meiner Präsentation angelangt. Ich bedanke mich herzlich für Ihre Aufmerksamkeit.',
    translationAr: 'بذلك أكون قد وصلت إلى نهاية عرضي الشفوي. أشكركم جزيلاً على حسن انتباهكم.',
    exampleDe: 'Damit bin ich am Ende. Vielen Dank für Ihre Aufmerksamkeit. Haben Sie noch Fragen?',
    exampleAr: 'بذلك أكون قد انتهيت. شكراً لحسن استماعكم، هل لديكم أية أسئلة؟',
    register: 'halbformell',
    whenToUseDe: 'Folie 5 in Teil 2 (Abschluss & Dank).',
    whenToUseAr: 'خاتمة الشريحة الخامسة في الجزء 2 (الشكر وفتح باب الأسئلة).'
  },
  {
    id: 'rm-sp-reag-1',
    category: 'Sprechen',
    subCategory: 'Auf andere reagieren',
    expressionDe: 'Vielen Dank für deine interessante Präsentation! Besonders spannend fand ich...',
    translationAr: 'شكراً جزيلاً على عرضك الشيق! ما لفت انتباهي بشكل خاص ومثير هو...',
    exampleDe: 'Vielen Dank für deine Präsentation! Besonders spannend fand ich deine Beispiele aus deinem Heimatland.',
    exampleAr: 'شكراً جزيلاً على عرضك! ما وجدته مثيراً هو الأمثلة التي ذكرتها عن بلدك الأم.',
    register: 'halbformell',
    whenToUseDe: 'Teil 3 Rückmeldung zur Präsentation des Partners.',
    whenToUseAr: 'الجزء 3 لتقديم تغذية راجعة إيجابية ومحفزة لزميل الامتحان.'
  }
];
