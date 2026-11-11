import { LesenTeilSet } from '../types';

export const LESEN_DATA: LesenTeilSet[] = [
  // ================= TEIL 1 (15 Complete Sets) =================
  {
    id: 'lesen-t1-set1',
    teil: 1,
    testNumber: 1,
    titleDe: 'So lebe ich – Clemens in New York',
    titleAr: 'هكذا أعيش – كليمنس في نيويورك',
    source: 'Zertifikat B1 neu, Test 1, S. 6',
    textPassageDe: `Mein Name ist Clemens. Ich bin 12 Jahre alt und mein Vater ist Diplomat. Alle drei bis vier Jahre ziehen wir deshalb in ein anderes Land. Ich wurde in Deutschland geboren, aber schon als ich zwei Wochen alt war, bin ich mit meiner Mutter nach Beirut geflogen. Das ist die Hauptstadt des Libanon. Aus den ersten Jahren weiß ich nicht mehr viel.
Das erste Land, an das ich mich erinnere, ist Portugal. Wir hatten ein pinkfarbenes Haus mit einem großen Garten. Am Wochenende waren wir oft an einem wunderschönen Strand nördlich von Lissabon. Das Meer, eigentlich muss ich sagen „der Ozean", war dort herrlich blau und ich habe sehr gern im Sand gespielt.
Englisch musste ich schon ganz früh lernen. Ich bin in Portugal in einen internationalen Kindergarten gegangen. Alle Kinder kamen dort aus anderen Ländern. Deshalb wurde Englisch gesprochen.
Als ich fünf Jahre alt war, sind wir dann nach Berlin gezogen. Am Anfang hat es mir dort gar nicht gefallen - einfach zu kalt, fand ich. Und kein Meer und keine großen schwarzen Oliven zum Frühstück. Aber dann gewöhnt man sich wieder an das Neue und plötzlich wurde Deutschland zu meiner Heimat. Ich dachte: Jetzt bleiben wir hier für immer. Falsch gedacht. Immerhin sieben Jahre sind wir in Berlin geblieben, dann mussten wir wieder die Koffer packen.
Seit einem halben Jahr lebe ich mit meiner Familie in New York. Jetzt bin ich froh darüber, dass ich Englisch sprechen kann. New York ist eine der aufregendsten Städte der Welt. Es ist in den meisten Dingen ganz anders als Berlin: In manche Stadtviertel gehen die Leute nur, um zu arbeiten, in anderen leben sie, und in manche gehen sie gar nicht – weil sie zu gefährlich sind.
Mittlerweile habe ich gemerkt, dass es einfach Zeit braucht, sich an ein neues Land zu gewöhnen. Irgendwann wird sich sicherlich auch New York für mich wie Heimat anfühlen. Manchmal denke ich, es wäre toll, immer nur an einem Ort zu leben. Doch wenn ich es mir recht überlege, ist es schon ziemlich aufregend, die Welt kennenzulernen.`,
    questions: [
      {
        id: 1,
        type: 'richtig_falsch',
        questionDe: 'Clemens kann sich kaum noch an die Zeit im Libanon erinnern.',
        questionAr: 'كليمنس بالكاد يتذكر الفترة التي قضاها في لبنان.',
        correctAnswer: 'Richtig',
        explanationDe: 'Im Text steht: "Aus den ersten Jahren weiß ich nicht mehr viel."',
        explanationAr: 'جاء في النص صراحة: "من السنوات الأولى لا أعلم الكثير" (أي أنه بالكاد يتذكرها).',
        highlightInText: 'Aus den ersten Jahren weiß ich nicht mehr viel.'
      },
      {
        id: 2,
        type: 'richtig_falsch',
        questionDe: 'Clemens\' Haus in Portugal lag am Meer.',
        questionAr: 'منزل كليمنس في البرتغال كان يقع مباشرة على البحر.',
        correctAnswer: 'Falsch',
        explanationDe: 'Sie fuhren am Wochenende an den Strand ("Am Wochenende waren wir oft an einem wunderschönen Strand"), das Haus lag also nicht direkt am Meer.',
        explanationAr: 'كانوا يذهبون إلى الشاطئ في عطلة نهاية الأسبوع فقط، مما يعني أن المنزل لم يكن يقع على البحر مباشرة.',
        highlightInText: 'Am Wochenende waren wir oft an einem wunderschönen Strand nördlich von Lissabon.'
      },
      {
        id: 3,
        type: 'richtig_falsch',
        questionDe: 'Clemens besuchte einen englischsprachigen Kindergarten.',
        questionAr: 'ارتاد كليمنس روضة أطفال تتحدث باللغة الإنجليزية.',
        correctAnswer: 'Richtig',
        explanationDe: 'Im Text steht: "Ich bin in Portugal in einen internationalen Kindergarten gegangen... Deshalb wurde Englisch gesprochen."',
        explanationAr: 'يذكر النص أنه ذهب إلى روضة دولية في البرتغال حيث كان التحدث بالإنجليزية.',
        highlightInText: 'Ich bin in Portugal in einen internationalen Kindergarten gegangen. Alle Kinder kamen dort aus anderen Ländern. Deshalb wurde Englisch gesprochen.'
      },
      {
        id: 4,
        type: 'richtig_falsch',
        questionDe: 'In Berlin wohnte Clemens bis zu seinem siebten Lebensjahr.',
        questionAr: 'سكن كليمنس في برلين حتى بلغ سن السابعة.',
        correctAnswer: 'Falsch',
        explanationDe: 'Er zog mit 5 Jahren nach Berlin und blieb sieben Jahre dort (5 + 7 = 12 Jahre alt). Er lebte dort also nicht bis zum 7. Lebensjahr, sondern 7 Jahre lang.',
        explanationAr: 'انتقل إلى برلين في سن الخامسة ومكث هناك 7 سنوات كاملة (أي حتى سن 12 عاماً)، وليس حتى سن السابعة.',
        highlightInText: 'Als ich fünf Jahre alt war, sind wir dann nach Berlin gezogen... Immerhin sieben Jahre sind wir in Berlin geblieben'
      },
      {
        id: 5,
        type: 'richtig_falsch',
        questionDe: 'Clemens meint, es gibt große Unterschiede zwischen Berlin und New York.',
        questionAr: 'يرى كليمنس أن هناك فروقاً كبيرة بين برلين ونيويورك.',
        correctAnswer: 'Richtig',
        explanationDe: 'Im Text: "Es ist in den meisten Dingen ganz anders als Berlin".',
        explanationAr: 'يذكر النص صراحة: "الأمر مختلف في معظم الأشياء تماماً عن برلين".',
        highlightInText: 'Es ist in den meisten Dingen ganz anders als Berlin'
      },
      {
        id: 6,
        type: 'richtig_falsch',
        questionDe: 'In New York fühlt sich Clemens jetzt wie zu Hause.',
        questionAr: 'يشعر كليمنس الآن في نيويورك وكأنه في وطنه.',
        correctAnswer: 'Falsch',
        explanationDe: 'Im Text: "Irgendwann wird sich sicherlich auch New York für mich wie Heimat anfühlen." – es ist also noch nicht so weit.',
        explanationAr: 'يقول كليمنس في النص: "في وقت ما مستقبلاً ستشعرني نيويورك بالوطن بالتأكيد"، أي أنه لا يشعر بذلك حالياً بعد.',
        highlightInText: 'Irgendwann wird sich sicherlich auch New York für mich wie Heimat anfühlen.'
      }
    ]
  },
  {
    id: 'lesen-t1-set2',
    teil: 1,
    testNumber: 2,
    titleDe: 'Mein Berufswechsel – Von der Lehrerin zur Stilberaterin',
    titleAr: 'تغيير مهنتي – من معلمة إلى مستشارة مظهر وأزياء',
    source: 'Zertifikat B1 neu, Test 2, S. 22',
    textPassageDe: `Wäre die Mauer nicht gefallen, dann würde ich wahrscheinlich immer noch im Klassenzimmer stehen. Fünf Jahre lang war ich Grundschullehrerin für Deutsch und Sport in Ost-Berlin. Dann kam die Wende, die Mauer war weg - und plötzlich war mein DDR-Examen wertlos.
Meine Tochter war gerade geboren. Ich war alleinerziehend und deshalb für ein Jahr zu Hause. Als ich wieder in den Beruf einsteigen wollte, gab es nicht nur einen neuen Staat, sondern auch viel zu viele Lehrer für viel zu wenige Stellen.
Zufällig hatte in Berlin gerade die ITB eröffnet, die größte Reisemesse der Welt. Ich bin sofort hin und war so begeistert, dass ich eine Umschulung zur Reiseverkehrskauffrau begann. Nach zwei Jahren hatte ich das Diplom in der Tasche - und einen Job bei einer Reiseagentur für Arabien und Südostasien. Ich bin mit dem Jeep durch die Wahiba-Wüste in Oman gefahren, habe Routen geplant und in Malaysia Dutzende Hotels getestet. Doch allmählich ließ die Begeisterung für den Job nach. Bis ich wusste, was ich wirklich wollte, sind mehr als fünf Jahre vergangen. Irgendwann fiel mir auf, dass ich in Kundengesprächen immer abdriftete. Statt dem Kunden zuzuhören, habe ich ihn gemustert: Welchen Anzug trägt der? Passt die Krawatte zu den Schuhen? Dann fand ich in der Zeitung ein Porträt über eine Stilberaterin. Ich wusste sofort: Das ist es.
Bei einer Hamburger Fernakademie machte ich die Weiterbildung zur Stilberaterin. Das war stressig: Tagsüber war ich bei der Arbeit, abends bei meiner Tochter, an den Wochenenden und im Urlaub habe ich mich in die Ausbildung gekniet. Zwei anstrengende Jahre später hatte ich mein Diplom. Vor vier Jahren habe ich mich dann selbstständig gemacht. Jetzt bin ich Stilberaterin, gebe Kurse an Volkshochschulen, bekomme Aufträge für Modenschauen und Fotoshootings. Wenn ich einer Kundin zeigen kann, welche Farben ihr stehen, dann macht mich das glücklich.`,
    questions: [
      {
        id: 1,
        type: 'richtig_falsch',
        questionDe: 'Marita war ein Jahr lang nicht berufstätig, um sich um ihr Kind zu kümmern.',
        questionAr: 'لم تمارس ماريتا العمل لمدة عام من أجل رعاية طفلتها.',
        correctAnswer: 'Richtig',
        explanationDe: 'Im Text steht: "Meine Tochter war gerade geboren. Ich war alleinerziehend und deshalb für ein Jahr zu Hause."',
        explanationAr: 'جاء في النص: "وُلدت ابنتي للتو وكنت أماً عزباء لذلك جلست في البيت لمدة عام".',
        highlightInText: 'Ich war alleinerziehend und deshalb für ein Jahr zu Hause.'
      },
      {
        id: 2,
        type: 'richtig_falsch',
        questionDe: 'Marita musste als Reiseverkehrskauffrau auch im Ausland arbeiten.',
        questionAr: 'كان على ماريتا بصفتها موظفة سياحة العمل خارج البلاد أيضاً.',
        correctAnswer: 'Richtig',
        explanationDe: 'Im Text: "Ich bin mit dem Jeep durch die Wahiba-Wüste in Oman gefahren, habe Routen geplant und in Malaysia Dutzende Hotels getestet."',
        explanationAr: 'سافرت إلى عمان وماليزيا لتجربة الفنادق وتخطيط المسارات.',
        highlightInText: 'Ich bin mit dem Jeep durch die Wahiba-Wüste in Oman gefahren, habe Routen geplant und in Malaysia Dutzende Hotels getestet.'
      },
      {
        id: 3,
        type: 'richtig_falsch',
        questionDe: 'Die Kunden, mit denen Marita sprach, waren oft nicht gut angezogen.',
        questionAr: 'الزبائن الذين تحدثت معهم ماريتا كانوا في الغالب غير أنيقي الملبس.',
        correctAnswer: 'Falsch',
        explanationDe: 'Der Text sagt nicht, dass sie schlecht angezogen waren, sondern dass Marita ihre Kleidung musterte (Anzug, Krawatte), statt zuzuhören.',
        explanationAr: 'النص لم يذكر أن الزبائن كانوا يرتدون ملابس سيئة، بل إنها كانت تسرح في تفاصيل ملابسهم بدلاً من التركيز على بيع الرحلات.',
        highlightInText: 'Statt dem Kunden zuzuhören, habe ich ihn gemustert: Welchen Anzug trägt der? Passt die Krawatte zu den Schuhen?'
      },
      {
        id: 4,
        type: 'richtig_falsch',
        questionDe: 'Marita machte eine Ausbildung zur Stilberaterin, während sie arbeitete.',
        questionAr: 'أجرت ماريتا تدريبها كمستشارة مظهر بالتوازي مع مواصلة عملها.',
        correctAnswer: 'Richtig',
        explanationDe: 'Im Text: "Tagsüber war ich bei der Arbeit, abends bei meiner Tochter, an den Wochenenden und im Urlaub habe ich mich in die Ausbildung gekniet."',
        explanationAr: 'كانت تعمل نهاراً وتدرس عن بعد في عطلات نهاية الأسبوع والإجازات.',
        highlightInText: 'Tagsüber war ich bei der Arbeit, abends bei meiner Tochter, an den Wochenenden und im Urlaub habe ich mich in die Ausbildung gekniet.'
      },
      {
        id: 5,
        type: 'richtig_falsch',
        questionDe: 'Die Ausbildung zur Stilberaterin dauerte insgesamt vier Jahre.',
        questionAr: 'استمر التدريب المهني كمستشارة مظهر 4 سنوات في المجمل.',
        correctAnswer: 'Falsch',
        explanationDe: 'Die Ausbildung dauerte zwei Jahre ("Zwei anstrengende Jahre später hatte ich mein Diplom"). Vor vier Jahren hat sie sich selbstständig gemacht.',
        explanationAr: 'التدريب استغرق سنتين (وليس أربع سنوات)، لكنها بدأت عملها الحر المستقل منذ 4 سنوات.',
        highlightInText: 'Zwei anstrengende Jahre später hatte ich mein Diplom. Vor vier Jahren habe ich mich dann selbstständig gemacht.'
      },
      {
        id: 6,
        type: 'richtig_falsch',
        questionDe: 'Marita freut sich, wenn eine Kundin mit ihrer Hilfe ihren Stil findet.',
        questionAr: 'تسعد ماريتا عندما تجد إحدى الزبونات أسلوبها بمساعدتها.',
        correctAnswer: 'Richtig',
        explanationDe: 'Im Text: "Wenn ich einer Kundin zeigen kann, welche Farben ihr stehen, wie sie sich perfekt in Szene setzt, dann macht mich das glücklich."',
        explanationAr: 'يختم النص بـ: "عندما أري الزبونة الألوان التي تناسبها وكيف تبرز جمالها فإن ذلك يجعلني سعيدة".',
        highlightInText: 'Wenn ich einer Kundin zeigen kann, welche Farben ihr stehen, wie sie sich perfekt in Szene setzt, dann macht mich das glücklich.'
      }
    ]
  },
  {
    id: 'lesen-t1-set3',
    teil: 1,
    testNumber: 3,
    titleDe: 'Reisebericht London für Teenager – Mia Baumgartner',
    titleAr: 'تقرير رحلة لندن للمراهقين – ميا باومغارتنر',
    source: 'Zertifikat B1 neu, Test 3, S. 38',
    textPassageDe: `Ich und meine zwei Freundinnen wollten London erleben, wie es nicht im Reiseführer steht. Unser Abenteuer begann mit einer Busfahrt in einem roten Doppeldecker: Linie 15. Mit einer Tageskarte kriegt man da die Sehenswürdigkeiten fast zum Nulltarif. Trafalgar Square, St. Paul's Cathedral bis hin zum Tower of London. Aber was uns vorerst mehr beeindruckt hat als die Sehenswürdigkeiten, war der riesige Strom aus Bussen, Taxis und Radfahrern um uns herum.
Ausgestiegen sind wir in der Nähe der Markthallen von Covent Garden. Das ist ein Einkaufszentrum. Meine Freundinnen wollten gern shoppen. Es gab auch tatsächlich viele Souvenirs, T-Shirts und Schmuck, aber wir haben uns sehr über die Preise geärgert. Viel witziges Design, aber keine Schnäppchen. Dafür gab es eine Menge Straßenkünstler, besonders junge Musiker. Wir haben ein wenig zugehört, sind dann jedoch weitergegangen. Unser Taschengeld wollten wir lieber nicht auf der Straße lassen.
Am Südufer der Themse in der Nähe der Tower Bridge war viel los: Skater, fliegende Händler und Jogger. London live! Wir sahen sogar eine Schulklasse mit den altmodischen Uniformen, wie sie hier üblich sind.
Der Besuch der Tower Bridge ist kostenpflichtig. Auf dem Fußgängerweg zwischen den Türmen über der Themse blieben wir hinter Glas. Das fanden wir enttäuschend. Auch die Brückenausstellung war völlig uninteressant. Den Tower oder Madame Tussauds Wachsfigurenkabinett hätten wir gern besichtigt, aber ohne Vorbestellung kann man das vergessen: zu voll, zu teuer.
Notting Hill war allerdings echt cool. Der Stadtteil ist berühmt für seinen Obst- und Gemüsemarkt, die Antiquitäten und Szeneläden. Fast jedes Reihenhaus hat eine andere Farbe. Hier haben wir auch endlich einige interessante Mitbringsel kaufen können.
Nach einer kurzen Stärkung bei McDonald's sind wir schließlich in den Hyde-Park, haben uns auf die Liegestühle gesetzt und den Reitern und graubraunen Eichhörnchen zugeschaut. Wir waren ziemlich müde. Eins steht für uns fest: London ist für Teenager eine super Stadt.`,
    questions: [
      {
        id: 1,
        type: 'richtig_falsch',
        questionDe: 'Die Tageskarte hat nichts gekostet.',
        questionAr: 'بطاقة اليوم الواحد للمواصلات كانت مجانية تماماً.',
        correctAnswer: 'Falsch',
        explanationDe: 'Im Text steht "fast zum Nulltarif", also war sie sehr billig, aber nicht umsonst.',
        explanationAr: 'كلمة fast zum Nulltarif تعني بسعر رمزي زهيد جداً، وليست مجانية بدون تكلفة.',
        highlightInText: 'Mit einer Tageskarte kriegt man da die Sehenswürdigkeiten fast zum Nulltarif.'
      },
      {
        id: 2,
        type: 'richtig_falsch',
        questionDe: 'In London war viel Verkehr.',
        questionAr: 'كانت حركة المرور في لندن مزدحمة وكثيفة للغاية.',
        correctAnswer: 'Richtig',
        explanationDe: 'Im Text: "...war der riesige Strom aus Bussen, Taxis und Radfahrern um uns herum."',
        explanationAr: 'جاء في النص: "سيل هائل من الحافلات وسيارات الأجرة وراكبي الدراجات حولنا".',
        highlightInText: 'war der riesige Strom aus Bussen, Taxis und Radfahrern um uns herum.'
      },
      {
        id: 3,
        type: 'richtig_falsch',
        questionDe: 'In Covent Garden wollten die Jugendlichen einkaufen, aber alles war zu teuer.',
        questionAr: 'في كوفنت غاردن أراد المراهقون التسوق، لكن كل شيء كان باهظ الثمن.',
        correctAnswer: 'Richtig',
        explanationDe: 'Im Text: "...wir haben uns sehr über die Preise geärgert. Viel witziges Design, aber keine Schnäppchen."',
        explanationAr: 'تذمرت الفتيات من الأسعار المرتفعة وعدم وجود صفقات رخيصة Schnäppchen.',
        highlightInText: 'wir haben uns sehr über die Preise geärgert. Viel witziges Design, aber keine Schnäppchen.'
      },
      {
        id: 4,
        type: 'richtig_falsch',
        questionDe: 'Der Besuch der Tower Bridge hat den Mädchen nicht gefallen.',
        questionAr: 'زيارة جسر تاور بريدج لم تنل إعجاب الفتيات.',
        correctAnswer: 'Richtig',
        explanationDe: 'Im Text: "Auf dem Fußgängerweg zwischen den Türmen über der Themse blieben wir hinter Glas. Das fanden wir enttäuschend. Auch die Brückenausstellung war völlig uninteressant."',
        explanationAr: 'وجدوا التجربة مخيبة للآمال enttäuschend والمعرض غير مثير للاهتمام اطلاقاً.',
        highlightInText: 'Das fanden wir enttäuschend. Auch die Brückenausstellung war völlig uninteressant.'
      },
      {
        id: 5,
        type: 'richtig_falsch',
        questionDe: 'In Notting Hill haben sie Obst gekauft.',
        questionAr: 'في نوتينغ هيل اشترت الفتيات فواكه.',
        correctAnswer: 'Falsch',
        explanationDe: 'Der Stadtteil ist zwar berühmt für seinen Obst- und Gemüsemarkt, gekauft haben sie aber "Mitbringsel" (Souvenirs/Geschenke).',
        explanationAr: 'الحي مشهور بسوق الفاكهة، لكنهن اشترين هدايا تذكارية Mitbringsel وليس فواكه.',
        highlightInText: 'Hier haben wir auch endlich einige interessante Mitbringsel kaufen können.'
      },
      {
        id: 6,
        type: 'richtig_falsch',
        questionDe: 'Im Hyde-Park haben sie sich ausgeruht.',
        questionAr: 'في حديقة هايد بارك استراحت الفتيات.',
        correctAnswer: 'Richtig',
        explanationDe: 'Im Text: "...haben uns auf die Liegestühle gesetzt und den Reitern... zugeschaut. Wir waren ziemlich müde."',
        explanationAr: 'جلسن على كراسي الاستلقاء لمشاهدة السناجب بعد التعب الشديد.',
        highlightInText: 'haben uns auf die Liegestühle gesetzt und den Reitern und graubraunen Eichhörnchen zugeschaut.'
      }
    ]
  },
  {
    id: 'lesen-t1-set4',
    teil: 1,
    testNumber: 4,
    titleDe: 'Kiara Wenzel – Auf dem Tokio-Hotel-Konzert',
    titleAr: 'كيارا فينتسل – في حفل فرقة توكيو هوتيل الموسيقية',
    source: 'Zertifikat B1 neu, Test 4, S. 54',
    textPassageDe: `Hallo TH-Fans, ich und meine Freundin waren im Tokio-Hotel-Konzert in Erfurt dabei. Wir hatten uns rechtzeitig Karten geholt. Schon viele Wochen vor dem Konzert war ich tierisch happy. Am 6. März stand ich um 5 Uhr morgens auf, ging zu meiner Freundin und gemeinsam fuhren wir nach Erfurt. Als wir so ca. gegen 8 Uhr vor der Thüringenhalle ankamen, waren wir erstaunt, dass zum Glück gerade mal 20 Leute oder so da waren. Das hieß für uns, wir waren mit im ersten Block und damit war uns die erste Reihe sicher.
Nach endlosen Stunden Warten, es war ungefähr um 12, kamen einige Fernsehteams und fragten uns, wen wir am besten finden, wie lange wir schon stehen usw. Die letzte Stunde vor dem Einlass kam uns unendlich lang vor. In dieser Zeit wurde uns erzählt, wie das dann alles abläuft. Nun war es endlich so weit. Eine Dreiviertelstunde vor dem offiziellen Einlass (es war 16.45 Uhr) durften wir in die Halle. Meine Freundin und ich rannten sofort zur Bühne und standen schließlich direkt davor. Jetzt hieß es wieder warten, aber in der Halle war es ganz lustig.
Dann ging es los. In der Halle wurde es dunkel. Alle schrien. Jetzt kamen die Jungs. Als Tom anfing zu spielen, gab es kein Halten mehr. Die Stimmung war einfach nur Wahnsinn!! Dann, als Bill auf die Bühne kam, wurde noch lauter geschrien. Der sah aber auch wieder mal voll cool aus. Zahlreiche Lieder später wurden immer mehr Mädchen rausgetragen. Zum Glück bin ich nicht umgekippt. Dann kamen Georg und Tom nach vorne. Ich dachte mir: In echt sind die noch hübscher und vor allem ... die waren so nah!!! Als das Konzert zu Ende war, kamen sie alle nach vorne und fassten uns an. Ja, geschafft! Ich hab die Hände von allen Vieren berührt. Ich war so ober-glücklich. Dieses Konzert werde ich nie vergessen.`,
    questions: [
      {
        id: 1,
        type: 'richtig_falsch',
        questionDe: 'Kiara musste lange vor der Konzerthalle warten.',
        questionAr: 'اضطرت كيارا للانتظار طويلاً أمام قاعة الحفلات.',
        correctAnswer: 'Richtig',
        explanationDe: 'Sie kamen gegen 8 Uhr morgens an und der Einlass war erst um 16.45 Uhr ("Nach endlosen Stunden Warten").',
        explanationAr: 'وصلت في الساعة 8 صباحاً ولم يُفتح الباب إلا في 16:45، أي بعد ساعات انتظار طويلة.',
        highlightInText: 'Als wir so ca. gegen 8 Uhr vor der Thüringenhalle ankamen... Nach endlosen Stunden Warten'
      },
      {
        id: 2,
        type: 'richtig_falsch',
        questionDe: 'Die Band wurde von Fernsehreportern interviewt.',
        questionAr: 'تمت مقابلة الفرقة الموسيقية من قبل مراسلي التلفزيون.',
        correctAnswer: 'Falsch',
        explanationDe: 'Nicht die Band, sondern die wartenden Fans wurden interviewt: "kamen einige Fernsehteams und fragten uns...".',
        explanationAr: 'المراسلون سألوا كيارا والجمهور المنتظر، ولم يقابلوا أعضاء الفرقة.',
        highlightInText: 'kamen einige Fernsehteams und fragten uns, wen wir am besten finden'
      },
      {
        id: 3,
        type: 'richtig_falsch',
        questionDe: 'Kiara schaffte es schließlich, ganz vorn zu stehen.',
        questionAr: 'نجحت كيارا أخيراً في الوقوف في الصف الأول مباشرة.',
        correctAnswer: 'Richtig',
        explanationDe: 'Im Text: "Meine Freundin und ich rannten sofort zur Bühne und standen schließlich direkt davor."',
        explanationAr: 'ركضت كيارا وصديقتها مباشرة نحو المنصة ووقفتا أمامها تماماً.',
        highlightInText: 'rannten sofort zur Bühne und standen schließlich direkt davor.'
      },
      {
        id: 4,
        type: 'richtig_falsch',
        questionDe: 'Als es in der Halle dunkel wurde, schrien alle vor Angst.',
        questionAr: 'عندما أظلمت القاعة، صرخ الجميع من الخوف.',
        correctAnswer: 'Falsch',
        explanationDe: 'Sie schrien vor Begeisterung und Freude ("Stimmung war einfach nur Wahnsinn"), nicht vor Angst.',
        explanationAr: 'صرخ الجميع حماساً وإعجاباً بالفرقة وليس خوفاً.',
        highlightInText: 'In der Halle wurde es dunkel. Alle schrien. Jetzt kamen die Jungs. Als Tom anfing zu spielen, gab es kein Halten mehr.'
      },
      {
        id: 5,
        type: 'richtig_falsch',
        questionDe: 'Bill kam und schrie am lautesten.',
        questionAr: 'خرج بيل وكان يصرخ بأعلى صوت.',
        correctAnswer: 'Falsch',
        explanationDe: 'Nicht Bill schrie, sondern das Publikum schrie noch lauter, als Bill auf die Bühne kam: "als Bill auf die Bühne kam, wurde noch lauter geschrien."',
        explanationAr: 'الجمهور هو من صرخ بصوت أعلى عندما صعد بيل على خشبة المسرح.',
        highlightInText: 'als Bill auf die Bühne kam, wurde noch lauter geschrien.'
      },
      {
        id: 6,
        type: 'richtig_falsch',
        questionDe: 'Die Bandmitglieder haben Kiara die Hand gegeben.',
        questionAr: 'أعضاء الفرقة لمسوا يد كيارا وصافحوها.',
        correctAnswer: 'Richtig',
        explanationDe: 'Im Text: "kamen sie alle nach vorne und fassten uns an... Ich hab die Hände von allen Vieren berührt."',
        explanationAr: 'تقدم أعضاء الفرقة جميعاً ولمسوا أيدي الجمهور ولمست أيديهم الأربعة.',
        highlightInText: 'Ich hab die Hände von allen Vieren berührt.'
      }
    ]
  },
  {
    id: 'lesen-t1-set5',
    teil: 1,
    testNumber: 5,
    titleDe: 'Der Sportblog – Sandra als Schiedsrichterin',
    titleAr: 'مدونة الرياضة – ساندرا كحَكَمة في مباريات كرة القدم',
    source: 'Zertifikat B1 neu, Test 5, S. 70',
    textPassageDe: `Hallo, ich heiße Sandra, bin 17 Jahre alt und spiele nicht nur gern Fußball, sondern trainiere ein Jugend-Team und neuerdings bin ich auch noch als Schiedsrichterin tätig. Von dieser letzten Erfahrung möchte ich berichten, damit besonders die Jungen unter euch einsehen, dass Fußball nicht mehr reine Männersache ist.
Für den Schein musste ich drei Tage lang bei einem Lehrgang das gesamte Regelwerk lernen. Dann kam die Prüfung und schon war ich Schiedsrichterin. Zumindest auf dem Papier.
Aber auf meinen ersten Einsatz musste ich nicht lange warten. Schon am nächsten Wochenende sollte ich ran, ein Jugend-Spiel, gleich bei den Jungs.
Eine Stunde vor Spielbeginn bin ich am Platz angekommen. Als Schiedsrichterin hat mich dort natürlich erstmal niemand erkannt. Wahrscheinlich dachten die Leute eher, ich sei die große Schwester eines Spielers. Nachdem ich mich vorgestellt hatte, konnte ich mich in einer kleinen Kabine umziehen. Ich bin dann raus auf den Platz, um alles zu kontrollieren. Das habe ich extra so früh gemacht, damit der Verein noch Zeit hat, Fehler zu beseitigen.
Bei der Passkontrolle haben die kleinen Jungs fast alle etwas komisch geguckt. Die wurden wohl noch nie von einer Frau gepfiffen. Ich kenne hier im Kreis aber bis jetzt auch nur drei andere Schiedsrichterinnen. Dann konnte ich das Spiel endlich anpfeifen. Hinter einer Bande haben etwa 25 Eltern das Spiel verfolgt. Ich hatte eigentlich fest damit gerechnet, dass es da ganz schön laut werden würde - aber nichts. Kein Geschreie, keine Beschwerden und keine dummen Sprüche.
Von den Jungs auf dem Spielfeld habe ich mich völlig ernst genommen gefühlt. Die haben wahnsinnig fair gespielt, trotzdem musste ich ziemlich oft pfeifen. Da habe ich immer an den Lehrgang gedacht. Dort haben sie uns ganz oft gezeigt, wie wir kräftig in die Pfeife pusten müssen, damit wir die Spieler auf uns aufmerksam machen.
Am Schluss stand es 8:0. Die Zeit ging viel schneller rum, als ich dachte. Als ich gegangen bin, hat mich keiner mehr wegen Fehlentscheidungen oder meiner Leistung angesprochen. Eine schöne Premiere. Mein nächstes Spiel wird im Februar oder März stattfinden.`,
    questions: [
      {
        id: 1,
        type: 'richtig_falsch',
        questionDe: 'Sie musste zuerst eine Prüfung machen, bevor sie Schiedsrichterin wurde.',
        questionAr: 'توجب عليها اجتياز امتحان أولاً قبل أن تصبح حكمة معتمدة.',
        correctAnswer: 'Richtig',
        explanationDe: 'Im Text: "Für den Schein musste ich drei Tage lang bei einem Lehrgang das gesamte Regelwerk lernen. Dann kam die Prüfung und schon war ich Schiedsrichterin."',
        explanationAr: 'يؤكد النص أنها درست القواعد وخضعت للاختبار وحصلت على الشهادة.',
        highlightInText: 'Dann kam die Prüfung und schon war ich Schiedsrichterin.'
      },
      {
        id: 2,
        type: 'richtig_falsch',
        questionDe: 'Sandra ist die Schwester eines jungen Fußballspielers.',
        questionAr: 'ساندرا هي الأخت الكبرى لأحد لاعبي كرة القدم.',
        correctAnswer: 'Falsch',
        explanationDe: 'Die Leute dachten das nur ("Wahrscheinlich dachten die Leute eher, ich sei die große Schwester"), es stimmte aber nicht.',
        explanationAr: 'الجمهور اعتقد وظن أنها أخت أحد اللاعبين، لكن ذلك مجرد تخمين خاطئ منهم.',
        highlightInText: 'Wahrscheinlich dachten die Leute eher, ich sei die große Schwester eines Spielers.'
      },
      {
        id: 3,
        type: 'richtig_falsch',
        questionDe: 'Die Jungen kennen noch drei andere Schiedsrichterinnen.',
        questionAr: 'الفتيان يعرفون ثلاث حكمات أخريات.',
        correctAnswer: 'Falsch',
        explanationDe: 'Sandra kennt drei andere Schiedsrichterinnen im Kreis ("Ich kenne hier im Kreis aber bis jetzt auch nur drei andere Schiedsrichterinnen"), nicht die Jungen.',
        explanationAr: 'ساندرا هي من تعرف 3 حكمات في منطقتها، وليس الفتيان اللاعبين.',
        highlightInText: 'Ich kenne hier im Kreis aber bis jetzt auch nur drei andere Schiedsrichterinnen.'
      },
      {
        id: 4,
        type: 'richtig_falsch',
        questionDe: 'Weil Eltern zuschauten, gab es keine Schwierigkeiten.',
        questionAr: 'بسبب حضور أولياء الأمور لم تقع أي مشاكل.',
        correctAnswer: 'Falsch',
        explanationDe: 'Sandra befürchtete Lärm von den Eltern ("Ich hatte eigentlich fest damit gerechnet, dass es da ganz schön laut werden würde"), aber es gab von Natur aus kein Geschrei.',
        explanationAr: 'لم تكن رقابة الآباء سبب الهدوء، بل كانت تتوقع صراخاً منهم لكنهم كانوا هادئين.',
        highlightInText: 'Ich hatte eigentlich fest damit gerechnet, dass es da ganz schön laut werden würde - aber nichts. Kein Geschreie'
      },
      {
        id: 5,
        type: 'richtig_falsch',
        questionDe: 'Sandra weiß, was sie tun muss, damit die Spieler sie beachten.',
        questionAr: 'تعرف ساندرا ما يجب فعله لكي ينتبه إليها اللاعبون في الملعب.',
        correctAnswer: 'Richtig',
        explanationDe: 'Im Text: "Dort haben sie uns ganz oft gezeigt, wie wir kräftig in die Pfeife pusten müssen, damit wir die Spieler auf uns aufmerksam machen."',
        explanationAr: 'تعلمت في الدورة التدريبية إطلاق الصافرة بقوة لجذب انتباه اللاعبين.',
        highlightInText: 'wie wir kräftig in die Pfeife pusten müssen, damit wir die Spieler auf uns aufmerksam machen.'
      },
      {
        id: 6,
        type: 'richtig_falsch',
        questionDe: 'Sie ist mit ihrer ersten Leistung als Schiedsrichterin zufrieden.',
        questionAr: 'ساندرا راضية عن أدائها الأول كحَكَمة.',
        correctAnswer: 'Richtig',
        explanationDe: 'Im Text: "...hat mich keiner mehr wegen Fehlentscheidungen... angesprochen. Eine schöne Premiere."',
        explanationAr: 'تصف التجربة الأولى بأنها بداية جميلة وموفقة Eine schöne Premiere.',
        highlightInText: 'Eine schöne Premiere.'
      }
    ]
  },
  {
    id: 'lesen-t1-set6',
    teil: 1,
    testNumber: 6,
    titleDe: 'AloisBlog.at – Wohnen im Generationen-Wohnheim',
    titleAr: 'مدونة ألويس – السكن في دار أجيال مشتركة',
    source: 'Zertifikat B1 neu, Test 6, S. 86',
    textPassageDe: `14. Mai. Ich möchte heute von meinem gestrigen Erlebnis berichten, das mich sehr beeindruckt hat. Vor ein paar Tagen lernte ich eine ältere Dame, Frau Mohlau, in der Straßenbahn kennen. Ich bot ihr meinen Sitzplatz an und so kamen wir ins Gespräch. Es stellte sich heraus, dass sie an derselben Station ausstieg wie ich. Sie wohnt nämlich, seit sie in Pension gegangen ist, im Generationen-Wohnheim bei uns in der Nähe. Beim Abschied lud sie mich mit Familie zum Kaffeetrinken zu sich ein.
Gestern bin ich also mit Gertrud und den Buben hin. Frau Mohlau wohnt in einem geschmackvoll eingerichteten Appartement im Parterre. In den Wohnungen nebenan leben zwei Lehrlinge und eine alleinerziehende Mutter. Zum Kaffee gab es selbstgemachte Topfentorte. Wir saßen gemütlich beisammen und sie erzählte uns vom Leben im Wohnheim. Frau Mohlau traf die Entscheidung, dorthin zu ziehen, weil sie hier betreut wird, wenn sie es braucht, ohne ihre Selbstständigkeit aufgeben zu müssen. Doch der größte Vorteil ist zweifellos das Zusammenleben der verschiedenen Generationen. Ein Beispiel hierzu: Da Frau Mohlau noch gesundheitlich gut drauf ist und viel Zeit zur Verfügung hat, passt sie zweimal die Woche auf das Kind ihrer Nachbarin auf. Das sei ihr keineswegs zu anstrengend, es mache ihr große Freude, „Großmutter" zu sein. So sei sie nützlich und das gebe ihrem Leben Sinn.
Nach dem Kaffeetrinken schauten wir uns dann ein wenig die Anlage an. Den Buben gefiel besonders der Garten mit dem Spielplatz im hinteren Teil des Wohnheims. Es waren auch andere Kinder da, mit denen sie herumtollen konnten. Regelmäßig werden auch gemeinsame Ausflüge organisiert. Der letzte ging ins Burgenland. Sie selbst nimmt zurzeit an einer Kochgruppe teil, wo Jung und Alt voneinander lernen. Am Sonntag kommt Frau Mohlau zum Mittagessen zu uns.`,
    questions: [
      {
        id: 1,
        type: 'richtig_falsch',
        questionDe: 'Frau Mohlau wohnt nicht weit von Alois entfernt.',
        questionAr: 'السيدة مولاو لا تسكن بعيداً عن منزل ألويس.',
        correctAnswer: 'Richtig',
        explanationDe: 'Sie stiegen an derselben Station aus und sie wohnt "bei uns in der Nähe".',
        explanationAr: 'نزلت في نفس المحطة وتسكن في دار قريبة من منزل ألويس.',
        highlightInText: 'dass sie an derselben Station ausstieg wie ich. Sie wohnt nämlich... im Generationen-Wohnheim bei uns in der Nähe.'
      },
      {
        id: 2,
        type: 'richtig_falsch',
        questionDe: 'In Frau Mohlaus Wohnung wohnt auch eine Mutter mit ihrem Kind.',
        questionAr: 'في نفس شقة السيدة مولاو تسكن أيضاً أم مع طفلها.',
        correctAnswer: 'Falsch',
        explanationDe: 'Die Mutter und das Kind leben in der Wohnung nebenan ("In den Wohnungen nebenan leben..."), nicht in ihrer eigenen Wohnung.',
        explanationAr: 'الأم وطفلها يسكنان في الشقة المجاورة وليس داخل شقة السيدة مولاو نفسها.',
        highlightInText: 'In den Wohnungen nebenan leben zwei Lehrlinge und eine alleinerziehende Mutter.'
      },
      {
        id: 3,
        type: 'richtig_falsch',
        questionDe: 'Der alten Dame ist es wichtig, selbstständig zu leben.',
        questionAr: 'من المهم بالنسبة للسيدة المسنة أن تعيش باستقلالية.',
        correctAnswer: 'Richtig',
        explanationDe: 'Im Text: "...weil sie hier betreut wird, wenn sie es braucht, ohne ihre Selbstständigkeit aufgeben zu müssen."',
        explanationAr: 'اختارت السكن هناك لتحصل على الرعاية عند الحاجة دون التخلي عن استقلاليتها.',
        highlightInText: 'ohne ihre Selbstständigkeit aufgeben zu müssen.'
      },
      {
        id: 4,
        type: 'richtig_falsch',
        questionDe: 'Frau Mohlau kümmert sich regelmäßig um das Kind ihrer Nachbarin.',
        questionAr: 'تعتني السيدة مولاو بانتظام بطفل جارتها.',
        correctAnswer: 'Richtig',
        explanationDe: 'Im Text: "...passt sie zweimal die Woche auf das Kind ihrer Nachbarin auf."',
        explanationAr: 'ترعى طفل جارتها مرتين في الأسبوع بانتظام وتسعد بذلك.',
        highlightInText: 'passt sie zweimal die Woche auf das Kind ihrer Nachbarin auf.'
      },
      {
        id: 5,
        type: 'richtig_falsch',
        questionDe: 'Den Spielplatz des Wohnheimes benutzen nur seine Bewohner.',
        questionAr: 'ملعب الدار السكنية لا يستخدمه إلا سكان الدار فقط.',
        correctAnswer: 'Falsch',
        explanationDe: 'Der Text erwähnt nicht, dass nur Bewohner ihn nutzen dürfen. Alois\' Kinder und andere Kinder spielten dort.',
        explanationAr: 'النص لا يذكر أي حصر للملعب على سكان الدار فقط.',
        highlightInText: 'Den Buben gefiel besonders der Garten mit dem Spielplatz im hinteren Teil des Wohnheims.'
      },
      {
        id: 6,
        type: 'richtig_falsch',
        questionDe: 'Frau Mohlau nahm an einem Ausflug ins Burgenland teil.',
        questionAr: 'شاركت السيدة مولاو في رحلة إلى مقاطعة بورغنلاند.',
        correctAnswer: 'Richtig',
        explanationDe: 'Im Text: "Regelmäßig werden auch gemeinsame Ausflüge organisiert. Der letzte ging ins Burgenland."',
        explanationAr: 'تُنظم الدار رحلات مشتركة منتظمة وكانت آخر رحلة إلى بورغنلاند النمساوية.',
        highlightInText: 'Regelmäßig werden auch gemeinsame Ausflüge organisiert. Der letzte ging ins Burgenland.'
      }
    ]
  },
  {
    id: 'lesen-t1-set7',
    teil: 1,
    testNumber: 7,
    titleDe: 'Freizeitpark Atzmännig – Urs Merz',
    titleAr: 'منتزه أتسمينيغ الترفيهي – أورس ميرتس',
    source: 'Zertifikat B1 neu, Test 7, S. 102',
    textPassageDe: `Grüezi, Facebook-Freunde! Letzten Freitag fand unser Betriebsausflug statt. Ziel war der Freizeitpark am Atzmännig in der Nähe von Zürich. Als ich das hörte, war ich ehrlich gesagt etwas skeptisch. Freizeitpark? Das ist doch nichts für Erwachsene!! Die Kollegen waren aber schon letztes Jahr da gewesen und schwärmten davon. Und weil ich neu im Betrieb bin, habe ich mich mit meiner Meinung zurückgehalten. Teilnehmen wollte ich auf jeden Fall, um die Kollegen besser kennenzulernen.
Von Zürich aus erreichten wir den Vergnügungspark in nur 45 Minuten. Er liegt am Fusse eines Berges. Eine Seilbahn beförderte uns in die Höhe. Oben angekommen bot sich uns ein atemberaubendes Panorama. Da das Wetter mitspielte, konnten wir über den Zürichsee sehen. In der Ferne waren sogar die Berner Alpen zu erkennen. Dann begann das eigentliche Programm. Wir konnten zwischen zwei Alternativen wählen: Entweder eine dreistündige Wanderung ins Tal oder auf der Sommerrodelbahn bergab und dann einen Parcours im Seilpark. Ich entschied mich für Letzteres.
Die Rutschbahn war ziemlich lang: 700 Meter mit 17 Kurven. Es ging sehr schnell abwärts. Was für eine Adrenalin-Spritze! Schade nur, dass man so viel von der schönen Natur verpasste.
Nachdem wir unten angekommen waren, ging es dann zum Kletterpark. Insgesamt gab es 7 Parcours mit unterschiedlichen Schwierigkeitsgraden. Meine Gruppe wählte einen mittleren Schwierigkeitsgrad, da alle (ausser mir) schon etwas Erfahrung damit hatten. Dass es für mich das erste Mal war, sagte ich nicht.
Es war wirklich ein tolles Erlebnis. Man muss aber geschickt sein und sich gut miteinander koordinieren können. An einer Stelle habe ich nicht aufgepasst und wäre fast gefallen, wenn ein Kollege mich nicht gehalten hätte. Ich habe mir den Arm leicht verletzt. Nichts Schlimmes.
Am Schluss, als auch die Wandergruppe im Tal angekommen war, gab es im Restaurant ein warmes Menü. (Das Zürcher Geschnetzelte ist jedem zu empfehlen!) Dann gab's noch Kaffee und Kuchen mit frischem Rahm auf der Sonnenterrasse.`,
    questions: [
      {
        id: 1,
        type: 'richtig_falsch',
        questionDe: 'Urs fand das Ausflugsziel zuerst nicht besonders gut.',
        questionAr: 'لم يجد أورس وجهة الرحلة جيدة في البداية وكان متشككاً.',
        correctAnswer: 'Richtig',
        explanationDe: 'Im Text: "Als ich das hörte, war ich ehrlich gesagt etwas skeptisch. Freizeitpark? Das ist doch nichts für Erwachsene!!"',
        explanationAr: 'كان متشككاً skeptisch ورأى أن مدينة الملاهي ليست للكبار.',
        highlightInText: 'Als ich das hörte, war ich ehrlich gesagt etwas skeptisch. Freizeitpark? Das ist doch nichts für Erwachsene!!'
      },
      {
        id: 2,
        type: 'richtig_falsch',
        questionDe: 'Der Freizeitpark ist nicht weit von der Großstadt entfernt.',
        questionAr: 'المنتزه الترفيهي ليس بعيداً عن المدينة الكبيرة (زيورخ).',
        correctAnswer: 'Richtig',
        explanationDe: 'Im Text: "Von Zürich aus erreichten wir den Vergnügungspark in nur 45 Minuten."',
        explanationAr: 'وصلوا إليه من زيورخ في 45 دقيقة فقط، أي أنه قريب نسبياً.',
        highlightInText: 'Von Zürich aus erreichten wir den Vergnügungspark in nur 45 Minuten.'
      },
      {
        id: 3,
        type: 'richtig_falsch',
        questionDe: 'Sie wanderten drei Stunden den Berg hoch.',
        questionAr: 'مشوا لمدة ثلاث ساعات صعوداً إلى أعلى الجبل.',
        correctAnswer: 'Falsch',
        explanationDe: 'Sie fuhren mit der Seilbahn nach oben, und die Wanderung wäre ins Tal (bergab) gewesen, nicht den Berg hoch.',
        explanationAr: 'صعدوا بالتلفريك Seilbahn، والخيار المطروح كان المشي نزولاً إلى الوادي وليس صعوداً.',
        highlightInText: 'Eine Seilbahn beförderte uns in die Höhe... Entweder eine dreistündige Wanderung ins Tal'
      },
      {
        id: 4,
        type: 'richtig_falsch',
        questionDe: 'Urs hatte schon mal Parcours gemacht.',
        questionAr: 'كان أورس قد مارس مسار الحبال الباركور من قبل.',
        correctAnswer: 'Falsch',
        explanationDe: 'Im Text: "Dass es für mich das erste Mal war, sagte ich nicht." – Es war also sein erstes Mal.',
        explanationAr: 'كانت هذه أول تجربة له في حياته، ولم يخبر زملاءه بذلك.',
        highlightInText: 'Dass es für mich das erste Mal war, sagte ich nicht.'
      },
      {
        id: 5,
        type: 'richtig_falsch',
        questionDe: 'Als Urs fiel, half ihm ein Kollege aufzustehen.',
        questionAr: 'عندما سقط أورس، ساعده زميل على الوقوف النهوض.',
        correctAnswer: 'Falsch',
        explanationDe: 'Er fiel gar nicht erst hin, weil der Kollege ihn festhielt ("wäre fast gefallen, wenn ein Kollege mich nicht gehalten hätte").',
        explanationAr: 'كاد أن يسقط لولا أن زميله أمسكه ومنع سقوطه، أي أنه لم يسقط على الأرض ليساعده في النهوض.',
        highlightInText: 'wäre fast gefallen, wenn ein Kollege mich nicht gehalten hätte.'
      },
      {
        id: 6,
        type: 'richtig_falsch',
        questionDe: 'Urs wird den Freizeitpark bald wieder besuchen.',
        questionAr: 'سيزور أورس المنتزه الترفيهي مرة أخرى قريباً.',
        correctAnswer: 'Richtig',
        explanationDe: 'Im Text am Ende: "Kommenden Samstag bin ich mit drei Kollegen wieder dort verabredet."',
        explanationAr: 'يختم المنشور بذكر أنه متفق مع 3 زملاء على الذهاب إلى هناك السبت القادم مجدداً.',
        highlightInText: 'Kommenden Samstag bin ich mit drei Kollegen wieder dort verabredet.'
      }
    ]
  },
  {
    id: 'lesen-t1-set8',
    teil: 1,
    testNumber: 8,
    titleDe: 'AloisBlog.at – Herberts Job-Coaching',
    titleAr: 'مدونة ألويس – تدريب وتوجيه هربرت المهني',
    source: 'Zertifikat B1 neu, Test 8, S. 118',
    textPassageDe: `23. Oktober. Servus, Blogfans! Weil viele von euch vor dem Problem der Jobsuche stehen, interessiert euch sicherlich, was mein Freund Herbert darüber zu berichten hat. Herbert ist leicht gehbehindert und nahm an einem Job-Coaching-Projekt teil.
„Mein Name ist Herbert Ziegler, ich bin 24 Jahre alt und wohne in Innsbruck. Nach dem Hauptschulabschluss versuchte ich mich in einigen Lehrstellen, alle drei Lehrlingsverhältnisse wurden aber aufgelöst.
In das Job-Coaching kam ich vor 18 Monaten. Nach einigen Gesprächen lernte ich meinen jetzigen Job-Coach kennen. Ich startete mit einem Schnupperpraktikum in einer Werkstatt für Fahrräder. Das war mein Wunsch, denn ich hatte ein Interesse an einem Arbeitsplatz in Richtung Reparatur oder Mechanik. Nach diesen drei Wochen war ich aber nicht mehr überzeugt, dass ich in diesem Bereich arbeiten wollte. Ich war in dieser Zeit sehr verunsichert, aber mein Job-Coach und ich saßen in vielen Gesprächen zusammen und er motivierte mich, neue Arbeitsgebiete auszuprobieren. Schließlich begann ich ein Schnupperpraktikum in einem Veranstaltungshaus als Hausmeisterhilfskraft. Ich wurde zur Unterstützung des Hausmeisters Markus gebraucht.
In einem Veranstaltungshaus geht die Arbeit nie aus. Die abwechslungsreichen Tätigkeiten haben mir gut gefallen. Im Anschluss an das Praktikum saßen Markus, die Hausleitung Manuela, mein Job-Coach und ich zusammen und besprachen die Schnupperzeit und ich wurde eingestellt.
Die Arbeit im Ganzen ist nicht immer einfach, manchmal auch richtig stressig. Aber mit Unterstützung von Markus und dem Job-Coach lerne ich diese kritischen Situationen immer besser bewältigen. Meine jetzige Arbeit gefällt mir sehr gut, besonders die technischen Aufgaben interessieren mich. Wichtig ist mir auch das geregelte Einkommen, denn mit dem verdienten Geld kann ich mir endlich einige meiner Wünsche erfüllen."`,
    questions: [
      {
        id: 1,
        type: 'richtig_falsch',
        questionDe: 'Herberts erste Versuche, eine Ausbildung zu machen, hatten keinen Erfolg.',
        questionAr: 'محاولات هربرت الأولى في التدريب المهني لم تتكلل بالنجاح.',
        correctAnswer: 'Richtig',
        explanationDe: 'Im Text: "versuchte ich mich in einigen Lehrstellen, alle drei Lehrlingsverhältnisse wurden aber aufgelöst."',
        explanationAr: 'فشلت محاولاته الثلاث الأولى وتم فسخ عقود التدريب المهني.',
        highlightInText: 'alle drei Lehrlingsverhältnisse wurden aber aufgelöst.'
      },
      {
        id: 2,
        type: 'richtig_falsch',
        questionDe: 'Herbert machte ein Praktikum in einer Fahrradwerkstatt, da er gern Rad fährt.',
        questionAr: 'قام هربرت بتدريب في ورشة دراجات لأنه يحب ركوب الدراجات.',
        correctAnswer: 'Falsch',
        explanationDe: 'Er interessierte sich für Reparatur und Mechanik ("in Richtung Reparatur oder Mechanik"), nicht weil er gerne Rad fährt.',
        explanationAr: 'كان مهتماً بمجال الإصلاح والميكانيكا وليس بدافع حبه لركوب الدراجات الهوائية.',
        highlightInText: 'denn ich hatte ein Interesse an einem Arbeitsplatz in Richtung Reparatur oder Mechanik.'
      },
      {
        id: 3,
        type: 'richtig_falsch',
        questionDe: 'Nach dem Praktikum im Veranstaltungshaus bekam Herbert eine Arbeitsstelle.',
        questionAr: 'بعد التدريب في قاعة الفعاليات حصل هربرت على وظيفة عمل.',
        correctAnswer: 'Richtig',
        explanationDe: 'Im Text: "...besprachen die Schnupperzeit und ich wurde eingestellt."',
        explanationAr: 'تم تعيينه رسمياً nach dem Praktikum und ich wurde eingestellt.',
        highlightInText: 'und ich wurde eingestellt.'
      },
      {
        id: 4,
        type: 'richtig_falsch',
        questionDe: 'Die Aufgaben, die Herbert erledigen muss, sind ziemlich leicht.',
        questionAr: 'المهام التي يتعين على هربرت إنجازها سهلة للغاية.',
        correctAnswer: 'Falsch',
        explanationDe: 'Im Text: "Die Arbeit im Ganzen ist nicht immer einfach, manchmal auch richtig stressig."',
        explanationAr: 'العمل ليس سهلاً دائماً، بل يسبب ضغطاً وتوتراً أحياناً.',
        highlightInText: 'Die Arbeit im Ganzen ist nicht immer einfach, manchmal auch richtig stressig.'
      },
      {
        id: 5,
        type: 'richtig_falsch',
        questionDe: 'Die Arbeit im Veranstaltungshaus findet Herbert interessant.',
        questionAr: 'يجد هربرت العمل في قاعة الفعاليات مثيراً للاهتمام.',
        correctAnswer: 'Richtig',
        explanationDe: 'Im Text: "Meine jetzige Arbeit gefällt mir sehr gut, besonders die technischen Aufgaben interessieren mich."',
        explanationAr: 'يعجبه عمله الحالي ويثير اهتمامه الجانب التقني فيه.',
        highlightInText: 'Meine jetzige Arbeit gefällt mir sehr gut, besonders die technischen Aufgaben interessieren mich.'
      },
      {
        id: 6,
        type: 'richtig_falsch',
        questionDe: 'Der Lohn spielt für Herbert eine geringe Rolle.',
        questionAr: 'الأجر والراتب يلعب دوراً ثانوياً ضئيلاً بالنسبة لهربرت.',
        correctAnswer: 'Falsch',
        explanationDe: 'Im Text: "Wichtig ist mir auch das geregelte Einkommen, denn mit dem verdienten Geld kann ich mir endlich einige meiner Wünsche erfüllen."',
        explanationAr: 'الدخل المنتظم مهم جداً له لتحقيق أمنياته، وليس له دور قليل.',
        highlightInText: 'Wichtig ist mir auch das geregelte Einkommen'
      }
    ]
  },
  {
    id: 'lesen-t1-set9',
    teil: 1,
    testNumber: 9,
    titleDe: 'Urlaub auf dem Bauernhof in Kärnten – Dieter',
    titleAr: 'إجازة في مزرعة ريفية في كيرنتن – ديتر',
    source: 'Zertifikat B1 neu, Test 9, S. 134',
    textPassageDe: `Hallo Gerd, wir sind seit gestern gesund und erholt aus dem Urlaub in Kärnten zurück. Und da du mich gebeten hattest, dir von unserem „Urlaub auf dem Bauernhof" zu berichten, will ich dies auch gleich tun. Es war einmalig!!
Der Bauernhof, den wir ausgewählt hatten, liegt auf einer Höhe von 1050 m. Fahrzeugverkehr gibt es da so gut wie gar keinen, dadurch hatten die Kinder eine sehr große Bewegungsfreiheit. Ich beschreibe dir am besten mal, wie ein typischer Urlaubstag ablief.
In der Früh gab es ein Buffet mit Biolebensmitteln. Der Hof wird nämlich als Biobauernhof geführt. Fast alles stammt aus eigener Herstellung, z.B. Schinken, Zwetschkenmarmelade, frische Semmeln usw. Vormittags konnte man dann vieles unternehmen. Der Hof verfügt über ein beheiztes Schwimmbad mit Liegewiese. Ich und Lena haben uns richtig auf die faule Haut gelegt, aber die Kinder sind viel lieber zum hauseigenen Forellenteich und haben geangelt. Wenn sie Anglerglück hatten, wurden die Forellen dann zu Mittag für uns zubereitet.
Die Kinder waren auch oft im Stall bei den Tieren. Sie durften sogar einmal bei der Geburt eines Kalbes dabei sein. Und sie haben gelernt, wie man eine Kuh melkt. Wenn wir Eltern genug „gefaulenzt" hatten, haben wir zu viert die Wanderwege genutzt. Dabei haben wir manchmal Schwammerln gesammelt und sie dann selbst in der Küche gekocht.
Ab und zu haben wir auch Ausflüge unternommen. Einmal sind wir zum Wörthersee baden gefahren. Die Seen in dieser Gegend gehören zu den wärmsten Europas. Ein anderes Mal waren wir auf der Burg Hochosterwitz mit ihren 14 (!) Burgtoren. Mittags haben wir meistens nur etwas Kleines gegessen, aber abends gab es dann ein 3-Gänge-Menü. Bei gutem Wetter war einmal die Woche draußen Grillabend. Wenn wir dann auf unser Zimmer sind, war schnell Ruhe. Wer konnte, hat höchstens noch ein bisschen gelesen. Die Zimmer haben keinen Fernseher und kein Radio. Doch wir brauchten beides nicht.`,
    questions: [
      {
        id: 1,
        type: 'richtig_falsch',
        questionDe: 'Es gab kaum Verkehr in der Nähe des Bauernhofs.',
        questionAr: 'بالكاد كانت هناك حركة سيارات بالقرب من المزرعة.',
        correctAnswer: 'Richtig',
        explanationDe: 'Im Text: "Fahrzeugverkehr gibt es da so gut wie gar keinen, dadurch hatten die Kinder eine sehr große Bewegungsfreiheit."',
        explanationAr: 'لا توجد حركة مرور تقريباً، مما منح الأطفال حرية حركة كبيرة.',
        highlightInText: 'Fahrzeugverkehr gibt es da so gut wie gar keinen'
      },
      {
        id: 2,
        type: 'richtig_falsch',
        questionDe: 'Die Speisen für das Frühstück wurden von den Gästen hergestellt.',
        questionAr: 'أطعمة الفطور كان يتم إعدادها وصنعها من قِبل النزلاء والضيوف.',
        correctAnswer: 'Falsch',
        explanationDe: 'Die Lebensmittel stammten aus eigener Herstellung des Biobauernhofs ("Der Hof wird nämlich als Biobauernhof geführt. Fast alles stammt aus eigener Herstellung"), nicht von den Gästen.',
        explanationAr: 'الأطعمة من إنتاج المزرعة العضوية نفسها (المربى، الخبز، اللحم) وليست من صنع النزلاء.',
        highlightInText: 'Fast alles stammt aus eigener Herstellung, z.B. Schinken, Zwetschkenmarmelade, frische Semmeln usw.'
      },
      {
        id: 3,
        type: 'richtig_falsch',
        questionDe: 'Das Schwimmbad durfte nur von Erwachsenen benutzt werden.',
        questionAr: 'حمام السباحة كان مسموحاً باستخدامه للبالغين فقط.',
        correctAnswer: 'Falsch',
        explanationDe: 'Das Schwimmbad stand allen zur Verfügung. Die Kinder zogen es bloß vor zu angeln ("aber die Kinder sind viel lieber zum hauseigenen Forellenteich und haben geangelt").',
        explanationAr: 'المسبح متاح للجميع، ولكن الأطفال فضلوا بركة صيد الأسماك بمحض إرادتهم.',
        highlightInText: 'Der Hof verfügt über ein beheiztes Schwimmbad mit Liegewiese. Ich und Lena haben uns richtig auf die faule Haut gelegt, aber die Kinder sind viel lieber zum hauseigenen Forellenteich'
      },
      {
        id: 4,
        type: 'richtig_falsch',
        questionDe: 'Die Kinder beschäftigten sich häufig mit den Tieren.',
        questionAr: 'انشغل الأطفال وتفاعلوا كثيراً مع الحيوانات في المزرعة.',
        correctAnswer: 'Richtig',
        explanationDe: 'Im Text: "Die Kinder waren auch oft im Stall bei den Tieren. Sie durften sogar einmal bei der Geburt eines Kalbes dabei sein."',
        explanationAr: 'كان الأطفال كثيراً في الحظيرة مع الحيوانات وحضروا ولادة عجل وتعلموا حلب البقرة.',
        highlightInText: 'Die Kinder waren auch oft im Stall bei den Tieren.'
      },
      {
        id: 5,
        type: 'richtig_falsch',
        questionDe: 'Die Familie hat manchmal Ausflüge gemacht.',
        questionAr: 'قامت العائلة أحياناً برحلات استكشافية.',
        correctAnswer: 'Richtig',
        explanationDe: 'Im Text: "Ab und zu haben wir auch Ausflüge unternommen. Einmal sind wir zum Wörthersee baden gefahren... Ein anderes Mal waren wir auf der Burg Hochosterwitz."',
        explanationAr: 'قاموا برحلات مثل بحيرة فورترزيه وقلعة هوخ أوسترفيتس.',
        highlightInText: 'Ab und zu haben wir auch Ausflüge unternommen.'
      },
      {
        id: 6,
        type: 'richtig_falsch',
        questionDe: 'Nach dem Abendessen haben die Kinder lieber gelesen, statt fernzusehen.',
        questionAr: 'بعد العشاء فضّل الأطفال القراءة على مشاهدة التلفاز.',
        correctAnswer: 'Falsch',
        explanationDe: 'Es gab überhaupt keinen Fernseher auf den Zimmern ("Die Zimmer haben keinen Fernseher und kein Radio"), sie konnten also gar nicht fernsehen.',
        explanationAr: 'الغرف لم تكن تحتوي أصلاً على تلفاز ولا راديو، فلم يكن هناك خيار للمفاضلة.',
        highlightInText: 'Die Zimmer haben keinen Fernseher und kein Radio. Doch wir brauchten beides nicht.'
      }
    ]
  },
  {
    id: 'lesen-t1-set10',
    teil: 1,
    testNumber: 10,
    titleDe: 'Gruß aus Frankfurt – Lutz’ Wohnungssuche',
    titleAr: 'تحية من فرانكفورت – رحلة لوتس في البحث عن سكن',
    source: 'Zertifikat B1 neu, Test 10, S. 150',
    textPassageDe: `Hallo Florian, wie geht es euch allen daheim? Tut mir leid, dass ich mich jetzt erst melde, aber ich hatte letztens richtig viel um die Ohren. Mit der Einschreibung an der Uni hat alles geklappt, mein erstes Wintersemester hat vor zwei Wochen begonnen und ich bin nun täglich ca. 5 Stunden an der Uni.
Der eigentliche Grund aber, weswegen ich 'ne Weile nichts von mir habe hören lassen, ist ein anderer: die Wohnungssuche. Ich hatte keine Ahnung, wie stressig das sein kann. Ich dachte, dass ich in einer Großstadt wie Frankfurt ziemlich schnell was finden würde. In ein Studentenheim wollte ich von vornherein nicht. Mein Fehler!?! Auf jeden Fall hab ich mich erst mal nach einer möblierten 1-Zimmer-Wohnung umgeschaut. Aber die Mietpreise sind horrend!!! Wie ich festgestellt habe, suchen nämlich nicht nur Studenten nach solchen Wohnungen, sondern auch Bankkaufleute und so. Frankfurt ist ja die Bankmetropole von Europa – Mainhattan, wie es so schön heißt. Nach unheimlich langem Suchen hab ich schließlich ein Zimmer in einer Wohngemeinschaft gefunden – natürlich nicht möbliert, aber wenigstens ist die Miete bezahlbar. Ich habe mir die allernotwendigsten Möbel angeschafft, gebraucht, versteht sich, doch in gutem Zustand. Jetzt fehlt mir nur noch ein Schrank.
Außer mir wohnen noch drei Studenten in der WG. Jeder hat sein Zimmer und wir teilen uns Küche, Bad und einen kleinen Abstellraum. Ich wohne erst zehn Tage hier, aber wir vier verstehen uns schon sehr gut. Und mit Küchen- und Putzdienst scheint es auch zu klappen, obwohl ich anfangs ein wenig skeptisch war.
Die Wohnung liegt in einem Altbau: hohe Wände, große Fenster, Holzfußboden ... echt super. Mein Zimmer blickt auf den Hinterhof, ist also ruhig und hell. Ich fühle mich fürs Erste sehr wohl hier und kann mich endlich voll und ganz meinem Studium widmen. Du kannst mich auch jederzeit besuchen, aber bring unbedingt deinen Schlafsack mit.`,
    questions: [
      {
        id: 1,
        type: 'richtig_falsch',
        questionDe: 'Lutz ist Studienanfänger.',
        questionAr: 'لوتس طالب جامعي مبتدئ في سنته الأولى.',
        correctAnswer: 'Richtig',
        explanationDe: 'Im Text: "mein erstes Wintersemester hat vor zwei Wochen begonnen".',
        explanationAr: 'بدأ فصله الدراسي الشتوي الأول منذ أسبوعين فقط.',
        highlightInText: 'mein erstes Wintersemester hat vor zwei Wochen begonnen'
      },
      {
        id: 2,
        type: 'richtig_falsch',
        questionDe: 'In Frankfurt ist die Wohnungssuche in der Regel eine einfache Sache.',
        questionAr: 'البحث عن سكن في فرانكفورت أمر سهل عادة.',
        correctAnswer: 'Falsch',
        explanationDe: 'Im Text: "Ich hatte keine Ahnung, wie stressig das sein kann... die Mietpreise sind horrend!"',
        explanationAr: 'البحث كان مرهقاً والأسعار فلكية بسبب المنافسة مع موظفي البنوك.',
        highlightInText: 'Ich hatte keine Ahnung, wie stressig das sein kann... Aber die Mietpreise sind horrend!!!'
      },
      {
        id: 3,
        type: 'richtig_falsch',
        questionDe: 'Lutz\' Zimmer ist noch nicht ganz eingerichtet.',
        questionAr: 'غرفة لوتس لم يكتمل تأثيثها بالكامل بعد.',
        correctAnswer: 'Richtig',
        explanationDe: 'Im Text: "Jetzt fehlt mir nur noch ein Schrank."',
        explanationAr: 'ما زالت تنقصه خزانة ملابس Schrank.',
        highlightInText: 'Jetzt fehlt mir nur noch ein Schrank.'
      },
      {
        id: 4,
        type: 'richtig_falsch',
        questionDe: 'Bisher hatte Lutz keine Probleme mit seinen Mitbewohnern.',
        questionAr: 'حتى الآن لم يواجه لوتس أية مشاكل مع زملائه في السكن المشترك.',
        correctAnswer: 'Richtig',
        explanationDe: 'Im Text: "...wir vier verstehen uns schon sehr gut. Und mit Küchen- und Putzdienst scheint es auch zu klappen".',
        explanationAr: 'يتفاهمون بشكل جيد جداً ونظام التنظيف يعمل بسلاسة.',
        highlightInText: 'wir vier verstehen uns schon sehr gut. Und mit Küchen- und Putzdienst scheint es auch zu klappen'
      },
      {
        id: 5,
        type: 'richtig_falsch',
        questionDe: 'Der einzige Nachteil der Wohnung ist, dass sie alt ist.',
        questionAr: 'العيب الوحيد في الشقة هو أنها في مبنى قديم.',
        correctAnswer: 'Falsch',
        explanationDe: 'Dass es ein Altbau ist, findet er positiv ("hohe Wände, große Fenster, Holzfußboden ... echt super"), nicht als Nachteil.',
        explanationAr: 'مواصفات المبنى القديم (الأسقف العالية والأرضيات الخشبية) يراها ميزة رائعة وليس عيباً.',
        highlightInText: 'Die Wohnung liegt in einem Altbau: hohe Wände, große Fenster, Holzfußboden ... echt super.'
      },
      {
        id: 6,
        type: 'richtig_falsch',
        questionDe: 'Florian kann bei Lutz in der WG übernachten, wann immer er will.',
        questionAr: 'يمكن لفلوريان المبيت عند لوتس في السكن في أي وقت يريده.',
        correctAnswer: 'Richtig',
        explanationDe: 'Im Text: "Du kannst mich auch jederzeit besuchen, aber bring unbedingt deinen Schlafsack mit."',
        explanationAr: 'دعاه للمبيت في أي وقت شريطة إحضار كيس نوم معه.',
        highlightInText: 'Du kannst mich auch jederzeit besuchen, aber bring unbedingt deinen Schlafsack mit.'
      }
    ]
  },
  {
    id: 'lesen-t1-set11',
    teil: 1,
    testNumber: 11,
    titleDe: 'Neues Haustier – Kätzchen Felix',
    titleAr: 'حيوان أليف جديد – القطة الصغيرة فيليكس',
    source: 'Zertifikat B1 neu, Test 11, S. 166',
    textPassageDe: `Hallo Marie, ich schreibe dir dieses E-Mail noch schnell vorm Schlafengehen, weil ich dir unbedingt von unserem neuen Haustier erzählen will. Seit vorgestern haben wir nämlich ein Kätzchen. Genauer gesagt ist es ein junger Kater, Felix. Im Anhang findest du ein Foto. Da kannst du ihn bewundern. Ist er nicht süss?
Du fragst dich sicherlich, wie es dazu gekommen ist. Nun, ich fuhr mit dem Velo heim, da hörte ich es in den Büschen vor unserem Haus laut miauen. Ich bin abgestiegen, musste aber sehr geduldig sein, bis das Tierchen mir vertraute und sein Versteck verliess. Das Arme war ganz ausgehungert, schien jedoch ansonsten gesund zu sein. Was sollte ich tun? Ich habe das Kätzchen einfach mitgenommen. Ich konnte es doch nicht verhungern lassen! Und ausserdem ist es zurzeit hier in Zürich ziemlich kühl.
Unser Dackel Muckel war natürlich nicht sehr erfreut über meine Entscheidung. Du weisst, wie Hunde, besonders die kleinwüchsigen, nun mal so sind. Er hat anfangs gebellt und Felix ordentlich Angst gemacht. Und selbstverständlich hat er an dem Kätzchen rumgeschnuppert. Als er aber merkte, dass der Neuankömmling nicht aggressiv, sondern verschmust und verspielt ist, hat er sich beruhigt. Und jetzt, während ich dir schreibe, schläft Felix, satt und zufrieden, neben meinem Pult auf Muckels Bauch. Ich hätte nie gedacht, dass Hund und Katze sich so schnell vertragen können.
Ich würde Felix gerne behalten, aber ich weiss nicht, ob das geht. Eine Katze ist zwar ein sehr selbstständiges Tier und nimmt nicht viel Zeit in Anspruch. Das wäre also für mich zu schaffen. Aber werden die Nachbarn zwei Tiere in der Wohnung dulden? Auch habe ich gehört, dass Katzen nicht gerne verreisen. Mit Muckel hatten wir keine Probleme, den nehmen wir in den Ferien immer mit. Geht das aber auch mit einem Kater? Und wenn nicht – wer passt auf Felix auf, wenn wir weg sind?
Morgen bringen wir Felix zum Tierarzt und werden ihn um Rat bitten. Doch du hattest auch eine Weile lang eine Katze. Was meinst du denn dazu? Sollte ich vielleicht doch lieber eine Annonce in die Zeitung setzen und ein anderes Zuhause für Felix finden? Bitte antworte mir schnell. Jan`,
    questions: [
      {
        id: 1,
        type: 'richtig_falsch',
        questionDe: 'Das Kätzchen fand Jan in der Nähe seines Hauses.',
        questionAr: 'عثر يان على القطة الصغيرة بالقرب من منزله.',
        correctAnswer: 'Richtig',
        explanationDe: 'Im Text: "...in den Büschen vor unserem Haus laut miauen."',
        explanationAr: 'سمع مواءها في الشجيرات الموجودة أمام منزلهم مباشرة.',
        highlightInText: 'da hörte ich es in den Büschen vor unserem Haus laut miauen.'
      },
      {
        id: 2,
        type: 'richtig_falsch',
        questionDe: 'Das Tier hatte lange nichts gegessen.',
        questionAr: 'الحيوان الصغير لم يأكل منذ فترة طويلة.',
        correctAnswer: 'Richtig',
        explanationDe: 'Im Text: "Das Arme war ganz ausgehungert...".',
        explanationAr: 'كانت القطة الصغيرة جائعة بشدة uitgehungert.',
        highlightInText: 'Das Arme war ganz ausgehungert'
      },
      {
        id: 3,
        type: 'richtig_falsch',
        questionDe: 'Jans Hund fürchtete sich anfangs vor dem Kätzchen.',
        questionAr: 'كلب يان كان خائفاً في البداية من القطة الصغيرة.',
        correctAnswer: 'Falsch',
        explanationDe: 'Nicht der Hund fürchtete sich, sondern der Hund bellte und machte dem Kätzchen Angst: "Er hat anfangs gebellt und Felix ordentlich Angst gemacht."',
        explanationAr: 'الكلب هو من نبح وأخاف القطة، ولم يكن خائفاً منها.',
        highlightInText: 'Er hat anfangs gebellt und Felix ordentlich Angst gemacht.'
      },
      {
        id: 4,
        type: 'richtig_falsch',
        questionDe: 'Jan hat eigentlich genug Zeit für die Tiere.',
        questionAr: 'لدى يان في الواقع وقت كافٍ للحيوانات.',
        correctAnswer: 'Richtig',
        explanationDe: 'Im Text: "Eine Katze ist zwar ein sehr selbstständiges Tier und nimmt nicht viel Zeit in Anspruch. Das wäre also für mich zu schaffen."',
        explanationAr: 'القطة حيوان مستقل لا يحتاج وقتاً طويلاً وهو قادر على تدبر ذلك.',
        highlightInText: 'Das wäre also für mich zu schaffen.'
      },
      {
        id: 5,
        type: 'richtig_falsch',
        questionDe: 'Jan möchte dem Tierarzt raten, dass er in den Ferien auf Felix und Muckel aufpasst.',
        questionAr: 'يريد يان أن ينصح الطبيب البيطري برعاية الحيوانين أثناء الإجازة.',
        correctAnswer: 'Falsch',
        explanationDe: 'Er will den Tierarzt um Rat bitten ("werden ihn um Rat bitten"), nicht ihm raten, auf die Tiere aufzupassen.',
        explanationAr: 'سيطلب المشورة من الطبيب البيطري، وليس إعطاءه نصيحة أو تركهما عنده.',
        highlightInText: 'Morgen bringen wir Felix zum Tierarzt und werden ihn um Rat bitten.'
      },
      {
        id: 6,
        type: 'richtig_falsch',
        questionDe: 'Jan könnte eine Anzeige in der Zeitung aufgeben.',
        questionAr: 'يفكر يان بإمكانية وضع إعلان في الجريدة للبحث عن منزل آخر للقطة.',
        correctAnswer: 'Richtig',
        explanationDe: 'Im Text fragt er: "Sollte ich vielleicht doch lieber eine Annonce in die Zeitung setzen und ein anderes Zuhause für Felix finden?"',
        explanationAr: 'سأل صديقته عما إذا كان يجدر به نشر إعلان Annonce في الصحيفة.',
        highlightInText: 'Sollte ich vielleicht doch lieber eine Annonce in die Zeitung setzen'
      }
    ]
  },
  {
    id: 'lesen-t1-set12',
    teil: 1,
    testNumber: 12,
    titleDe: 'Nachbarschaftsstreit – Jutta',
    titleAr: 'شجار الجيران – يوتا',
    source: 'Zertifikat B1 neu, Test 12, S. 182',
    textPassageDe: `Guten Abend, Nachbarschaftsstreit kannte ich bis vor wenigen Monaten nicht. In der Wohnung gegenüber wohnten nette, ruhige Mieter.
Die neuen Mieter, ein Paar, haben mir direkt beim ersten Treffen im Flur vorschreiben wollen, wann ich meiner Pflicht zur Treppenreinigung nachkommen müsse! Ich wohne seit 1984 dort und putze regelmäßig alle vierzehn Tage.
Da die Waschmaschine in der allgemeinen Waschküche nur über einen Zähler läuft, behaupteten sie, ich würde vielleicht auf ihre Kosten waschen, wenn ich öfters die Maschine nutze. Außerdem hätten sie dort, wo sie vorher wohnten, immer ein gutes Verhältnis zu den anderen Bewohnern gehabt.
Nach dem Einzug klopfte und klingelte die Frau immer und immer wieder an meiner Tür, sie würde samstags putzen und ich müsste das auch tun.
Einige Tage später stand im gemeinsam genutzten Flur ein Schrank, der so breit war, dass ich kaum vorbeikam, zumal ich gehbehindert bin. Ich habe mehr als eine Woche abgewartet, weil ich dachte, dass sie das Möbelstück noch reinstellen würden. Als dies nicht geschah, klingelte ich bei den Nachbarn und erklärte, dass ich gerne vorher gefragt worden wäre wegen der Möbelaufstellung. Der Mann schrie mich daraufhin an: „Wer sind Sie überhaupt? Der Schrank bleibt stehen." Zweimal musste der Vermieter schriftlich auffordern, das Möbelstück zu entfernen.
Tagelang wurde in der Wohnung gegenüber selbst in den Ruhezeiten gehämmert, gebohrt und gegen die Wand - offenbar mit Fäusten - geklopft. Oft standen sie vor meiner Wohnungstür und sprachen laut mit derben, beleidigenden Worten. Jeden Tag wird die Wohnungstür mehrfach heftig zugeschlagen, auch bzw. gerade nach 23.00 Uhr.
Ich bin - da nicht gesund - inzwischen mit den Nerven fertig, bekomme Herzrasen, schon wenn ich die Nachbarn kommen oder gehen höre. Was kann ich tun?`,
    questions: [
      {
        id: 1,
        type: 'richtig_falsch',
        questionDe: 'Die Treppe wird von den Hausbewohnern geputzt.',
        questionAr: 'الدرج يتم تنظيفه من قبل سكان المبنى أنفسهم.',
        correctAnswer: 'Richtig',
        explanationDe: 'Im Text: "Pflicht zur Treppenreinigung... ich wohne seit 1984 dort und putze regelmäßig alle vierzehn Tage."',
        explanationAr: 'هناك التزام بتنظيف الدرج على السكان، ويوتا تنظفه كل أسبوعين بانتظام.',
        highlightInText: 'wann ich meiner Pflicht zur Treppenreinigung nachkommen müsse! Ich wohne seit 1984 dort und putze regelmäßig alle vierzehn Tage.'
      },
      {
        id: 2,
        type: 'richtig_falsch',
        questionDe: 'Im Haus gibt es eine Waschmaschine für alle.',
        questionAr: 'يوجد في المبنى غسالة ملابس مشتركة لجميع السكان.',
        correctAnswer: 'Richtig',
        explanationDe: 'Im Text: "Da die Waschmaschine in der allgemeinen Waschküche nur über einen Zähler läuft..."',
        explanationAr: 'توجد غسالة في غرفة الغسيل العامة المشتركة تعمل بعداد واحد.',
        highlightInText: 'Da die Waschmaschine in der allgemeinen Waschküche nur über einen Zähler läuft'
      },
      {
        id: 3,
        type: 'richtig_falsch',
        questionDe: 'Jutta kann nicht gut gehen.',
        questionAr: 'يوتا لا تستطيع المشي جيداً (لديها إعاقة حركية).',
        correctAnswer: 'Richtig',
        explanationDe: 'Im Text: "...dass ich kaum vorbeikam, zumal ich gehbehindert bin."',
        explanationAr: 'تذكر صراحة أنها تعاني من صعوبة في المشي gehbehindert.',
        highlightInText: 'zumal ich gehbehindert bin.'
      },
      {
        id: 4,
        type: 'richtig_falsch',
        questionDe: 'Nach einer Woche stellte der Vermieter den Schrank wieder in die Wohnung.',
        questionAr: 'بعد أسبوع، قام صاحب العقار بإرجاع الخزانة إلى داخل الشقة.',
        correctAnswer: 'Falsch',
        explanationDe: 'Der Vermieter forderte die Nachbarn schriftlich auf, den Schrank zu entfernen ("Zweimal musste der Vermieter schriftlich auffordern, das Möbelstück zu entfernen"), er stellte ihn nicht selbst rein.',
        explanationAr: 'المؤجر وجه إنذاراً خطياً للجيران لإزالتها، ولم ينقلها بنفسه.',
        highlightInText: 'Zweimal musste der Vermieter schriftlich auffordern, das Möbelstück zu entfernen.'
      },
      {
        id: 5,
        type: 'richtig_falsch',
        questionDe: 'Die neuen Mieter machen oft Lärm, aber nicht in den Ruhezeiten.',
        questionAr: 'المستأجرون الجدد يصدرون ضجيجاً غالباً، ولكن ليس أثناء أوقات الهدوء الرسمية.',
        correctAnswer: 'Falsch',
        explanationDe: 'Im Text steht ausdrücklich: "...selbst in den Ruhezeiten gehämmert, gebohrt und... gerade nach 23.00 Uhr."',
        explanationAr: 'كانوا يصدرون الضجيج حتى أثناء أوقات الهدوء وبعد الساعة 23:00 ليلاً.',
        highlightInText: 'Tagelang wurde in der Wohnung gegenüber selbst in den Ruhezeiten gehämmert, gebohrt'
      },
      {
        id: 6,
        type: 'richtig_falsch',
        questionDe: 'Jutta hat weder Probleme mit den Nerven noch mit dem Herzen.',
        questionAr: 'يوتا لا تعاني من مشاكل في الأعصاب ولا في خفقان القلب.',
        correctAnswer: 'Falsch',
        explanationDe: 'Im Text: "...inzwischen mit den Nerven fertig, bekomme Herzrasen..."',
        explanationAr: 'أعصابها منهارة وتصاب بخفقان شديد في القلب Herzrasen بمجرد سماعهم.',
        highlightInText: 'inzwischen mit den Nerven fertig, bekomme Herzrasen, schon wenn ich die Nachbarn kommen oder gehen höre.'
      }
    ]
  },
  {
    id: 'lesen-t1-set13',
    teil: 1,
    testNumber: 13,
    titleDe: 'Forum – Werbetricks bei Lebensmitteln (Bernd Geißner)',
    titleAr: 'منتدى – الحيل الإعلانية في الأطعمة (بيرند غايسنر)',
    source: 'Zertifikat B1 neu, Test 13, S. 198',
    textPassageDe: `Ich möchte auch von meiner Erfahrung mit Werbetricks berichten. Meine Freundin und ich haben uns schon immer für eine ausgewogene Ernährungsweise interessiert. Deswegen aßen wir zum Frühstück gern und oft Getreideflocken der Marke „Fit" mit Milch oder Joghurt. Ab und zu gab es sie bei uns sogar zu Abend. Nicht nur versprachen sie dem Werbetext zufolge einen hohen Anteil an Vollkorn, sondern auch „einen leichten Genuss für die Linie", da wenig Fett und Zucker darin enthalten seien. Gutgläubig, wie wir nun mal waren, konsumierten wir umso mehr von dem Produkt und meinten, etwas Gutes für unseren Körper zu tun. Und außerdem schmecken die „Fit"-Flocken verdammt gut!
Nach einiger Zeit stellten wir allerdings fest, dass wir beide zugenommen hatten. Wir führten dies anfangs auf einen Mangel an Bewegung zurück. Meine Partnerin und ich sind nämlich beide voll berufstätig und verbringen viele Stunden im Büro. Wir nahmen uns also vor, an Wochenenden mehr Sport zu treiben. Doch das führte auf die Dauer nicht zum erwünschten Ergebnis. Wir waren zwar körperlich fitter, aber abgenommen hatte keiner von uns.
Da stieß ich zufällig im Internet auf eine Website zum Thema Werbetricks. Und siehe da: Unsere so „gesunden", „Fit"-Cerealien waren dort ein Paradebeispiel dafür, wie durch falsche Informationen die Konsumenten zum Kauf eines Produkts verlockt werden. Ich erfuhr, dass die meisten Cornflakes viel zu viel Zucker enthalten. Bei der Marke unserer Wahl waren es ganze 30 %. Ich holte schnell die „Fit"-Packung aus der Küche und las tatsächlich: 35 Gramm Zucker pro 100 Gramm. Und die tägliche Verzehrsempfehlung: 40 Gramm!! Wer wird davon eigentlich satt? Ich könnte den Vormittag danach ohne Magenknurren nicht überstehen. Wir haben immer mindestens die doppelte Menge gegessen.
Und was das Vollkorn betrifft, ist auch alles Schwindel. 20 Prozent Vollkornanteil sind noch lange kein echtes Vollkornprodukt. In Vollkornbrot beispielsweise müssen mindestens 90 Prozent Vollkorn stecken. Kein Wunder also, dass wir zugenommen haben, obwohl wir dachten, uns leicht und gesund zu ernähren.`,
    questions: [
      {
        id: 1,
        type: 'richtig_falsch',
        questionDe: '„Fit"-Flocken hielt Bernd für gesund.',
        questionAr: 'اعتقد بيرند أن رقائق "فيت" صحية ومفيدة.',
        correctAnswer: 'Richtig',
        explanationDe: 'Im Text: "...meinten, etwas Gutes für unseren Körper zu tun. Und außerdem schmecken die \'Fit\'-Flocken verdammt gut!"',
        explanationAr: 'ظنوا بحسن نية أنهم يقدمون لجسمهم غذاءً صحياً ومفيداً.',
        highlightInText: 'meinten, etwas Gutes für unseren Körper zu tun.'
      },
      {
        id: 2,
        type: 'richtig_falsch',
        questionDe: 'Obwohl Bernd viele Stunden arbeitete, fand er täglich Zeit für Fitness-Übungen.',
        questionAr: 'على الرغم من ساعات عمله الطويلة، كان يجد يومياً وقتاً لممارسة التمارين الرياضية.',
        correctAnswer: 'Falsch',
        explanationDe: 'Sie trieben nur am Wochenende mehr Sport ("an Wochenenden mehr Sport zu treiben"), nicht täglich.',
        explanationAr: 'قرروا ممارسة الرياضة في عطلة نهاية الأسبوع فقط وليس كل يوم.',
        highlightInText: 'Wir nahmen uns also vor, an Wochenenden mehr Sport zu treiben.'
      },
      {
        id: 3,
        type: 'richtig_falsch',
        questionDe: 'Die „Fit"-Flocken werden fast ausschließlich aus Zucker hergestellt.',
        questionAr: 'رقائق "فيت" مصنوعة بالكامل تقريباً من السكر فقط.',
        correctAnswer: 'Falsch',
        explanationDe: 'Sie enthielten 35% Zucker (35g pro 100g), nicht "fast ausschließlich" (nahezu 100%).',
        explanationAr: 'نسبة السكر كانت 35% وليست مصنوعة كلياً وحصرياً من السكر.',
        highlightInText: '35 Gramm Zucker pro 100 Gramm.'
      },
      {
        id: 4,
        type: 'richtig_falsch',
        questionDe: 'Auf der „Fit"-Packung stehen nur Lügen.',
        questionAr: 'كل ما هو مكتوب على علبة "فيت" عبارة عن أكاذيب فقط.',
        correctAnswer: 'Falsch',
        explanationDe: 'Die Nährwertangaben (35g Zucker) standen korrekt auf der Packung, wurden aber von den Werbetexten verharmlost.',
        explanationAr: 'جدول القيم الغذائية احتوى على النسبة الحقيقية (35 غرام سكر) وقرأها بنفسه على العلبة.',
        highlightInText: 'Ich holte schnell die „Fit"-Packung aus der Küche und las tatsächlich: 35 Gramm Zucker pro 100 Gramm.'
      },
      {
        id: 5,
        type: 'richtig_falsch',
        questionDe: 'Bernd nahm zu, da er zu viel von den Flocken aß.',
        questionAr: 'زاد وزن بيرند لأنه كان يتناول كميات كبيرة تفوق الموصى به من الرقائق.',
        correctAnswer: 'Richtig',
        explanationDe: 'Im Text: "Wir haben immer mindestens die doppelte Menge gegessen... Kein Wunder also, dass wir zugenommen haben".',
        explanationAr: 'كانوا يتناولون ضعف الكمية الموصى بها على الأقل، مما زاد السعرات والوزن.',
        highlightInText: 'Wir haben immer mindestens die doppelte Menge gegessen.'
      },
      {
        id: 6,
        type: 'richtig_falsch',
        questionDe: 'Die „Fit"-Flocken sind eigentlich kein Vollkornprodukt.',
        questionAr: 'رقائق "فيت" لا تُعد في الحقيقة منتج حبوب كاملة حقيقي.',
        correctAnswer: 'Richtig',
        explanationDe: 'Im Text: "20 Prozent Vollkornanteil sind noch lange kein echtes Vollkornprodukt. In Vollkornbrot beispielsweise müssen mindestens 90 Prozent Vollkorn stecken."',
        explanationAr: 'نسبة 20% فقط لا تجعل المنتج قمحاً كاملاً حقيقياً مقارنة بـ 90% المطلوبة للخبز.',
        highlightInText: '20 Prozent Vollkornanteil sind noch lange kein echtes Vollkornprodukt.'
      }
    ]
  },
  {
    id: 'lesen-t1-set14',
    teil: 1,
    testNumber: 14,
    titleDe: 'Meine Erlebnisse – Altstadtfest in Michelstadt (Nicole)',
    titleAr: 'تجاربي – مهرجان البلدة القديمة في ميخلشتات (نيكول)',
    source: 'Zertifikat B1 neu, Test 14, S. 214',
    textPassageDe: `25. September. Letzten August war ich zu Besuch bei meinem Onkel in Michelstadt. Michelstadt ist ein kleines, mittelalterliches Städtchen im Odenwald. Es ist sehr malerisch und ... da ist meistens nicht viel los. Hinzu kam, dass der letzte Sommer ziemlich verregnet war. Die meiste Zeit verbrachte ich mit Stubenhocken. Nicht gerade anregend!!
Doch an einem Samstag schlug meine Tante vor, dass wir abends zum Michelstädter Altstadtfest gehen. Ich machte mir zwar keine große Hoffnung auf gute Unterhaltung, aber da ich nichts Besseres zu tun hatte und das Wetter ausnahmsweise gut war, stimmte ich zu.
Das Fest fand im Zentrum statt, das für den Verkehr gesperrt war. Wir konnten also nicht mit dem Auto in die Innenstadt fahren und mussten zu Fuß gehen. Unterwegs erlebte ich schon die erste Überraschung. Die Geschäfte waren alle auf, Straßen und Gassen waren mit Kerzen erleuchtet. Es war „lange Einkaufsnacht". Wir bummelten durch die Straßen, sahen uns die Attraktionen an, die der Gewerbeverein organisiert hatte, und ließen uns ein-zwei Schnäppchen nicht entgehen.
Schließlich kamen wir auf den Hof der Michelstädter Burg-Kellerei, den Ort, wo das Herz des Altstadtfests schlug. Hier waren Tische und Bänke aufgestellt, an denen schon viele Leute saßen. Man grüßte sich, saß beisammen, amüsierte sich ... eine tolle Stimmung. Für das leibliche Wohl war bestens gesorgt: Bratwurst, Currywurst, Pommes, Erbsensuppe mit Bockwurst - und natürlich Bier von der heimischen Brauerei. Und ab 21.00 Uhr spielte eine Rock-'n'-Roll-Band live. In Michelstadt war wirklich was los.
Doch das war nicht alles. Meine Tante drängte uns. Wir sollten weiter zum „Schwiegermutterbrunnen", denn da gab eine Gruppe, die Art Artistica, eine Show. Eigentlich wollte ich nicht weg, weil die Musikband super spielte. Aber sie bestand so sehr darauf, dass wir nachgaben. Und sie hatte recht. Die Artistengruppe bot eine Show mit Feuer-Acts. Es war sehr eindrucksvoll. In der sommerlichen Nacht sah man die Artisten ihre Kunststücke vorführen und man hörte nur das Knistern und Zischen des Feuers. Es war ein einmaliges Schauspiel.`,
    questions: [
      {
        id: 1,
        type: 'richtig_falsch',
        questionDe: 'Auf dem Fest konnte man sich trotz des schlechten Wetters gut unterhalten.',
        questionAr: 'في المهرجان استطاع المرء الاستمتاع على الرغم من سوء الأحوال الجوية.',
        correctAnswer: 'Falsch',
        explanationDe: 'Das Wetter war ausnahmsweise gut ("...und das Wetter ausnahmsweise gut war, stimmte ich zu"), also war das Wetter beim Fest nicht schlecht.',
        explanationAr: 'كان الطقس جيداً على غير العادة في ذلك اليوم، ولم يكن سيئاً أثناء المهرجان.',
        highlightInText: 'und das Wetter ausnahmsweise gut war, stimmte ich zu.'
      },
      {
        id: 2,
        type: 'richtig_falsch',
        questionDe: 'Im Stadtzentrum durften während des Fests keine Privatwagen fahren.',
        questionAr: 'أثناء المهرجان لم يُسمح لسيارات الخواص بالمرور في وسط المدينة.',
        correctAnswer: 'Richtig',
        explanationDe: 'Im Text: "Das Fest fand im Zentrum statt, das für den Verkehr gesperrt war. Wir konnten also nicht mit dem Auto in die Innenstadt fahren..."',
        explanationAr: 'تم إغلاق وسط المدينة أمام حركة مرور السيارات وتوجب عليهم المشي على الأقدام.',
        highlightInText: 'Das Fest fand im Zentrum statt, das für den Verkehr gesperrt war.'
      },
      {
        id: 3,
        type: 'richtig_falsch',
        questionDe: 'In der „langen Einkaufsnacht" waren nur wenige Läden geschlossen.',
        questionAr: 'في "ليلة التسوق الطويلة" لم يكن مغلقاً سوى قلة قليلة من المحلات (أي الأغلبية مفتوحة).',
        correctAnswer: 'Richtig',
        explanationDe: 'Im Text: "Die Geschäfte waren alle auf, Straßen und Gassen waren mit Kerzen erleuchtet."',
        explanationAr: 'المحلات كانت كلها مفتوحة "alle auf"، وبالتالي القليل جداً أو لا أحد كان مغلقاً.',
        highlightInText: 'Die Geschäfte waren alle auf'
      },
      {
        id: 4,
        type: 'richtig_falsch',
        questionDe: 'Die Speisen bot die heimische Brauerei umsonst an.',
        questionAr: 'قدّم مصنع البيرة المحلي الوجبات والأطعمة مجاناً.',
        correctAnswer: 'Falsch',
        explanationDe: 'Nirgends steht, dass das Essen kostenlos war; es war lediglich für das leibliche Wohl gesorgt.',
        explanationAr: 'لم تكن الأطعمة مجانية إطلاقاً، بل كانت معروضة للبيع ضمن فعاليات المهرجان.',
        highlightInText: 'Für das leibliche Wohl war bestens gesorgt: Bratwurst, Currywurst, Pommes, Erbsensuppe mit Bockwurst'
      },
      {
        id: 5,
        type: 'richtig_falsch',
        questionDe: 'Die Artisten zeigten ihre Feuer-Show zu lauter Musik.',
        questionAr: 'قدّم فنانو الاستعراض عرض النار مصحوباً بموسيقى صاخبة.',
        correctAnswer: 'Falsch',
        explanationDe: 'Im Text: "...man hörte nur das Knistern und Zischen des Feuers." – es gab also keine laute Musik dabei.',
        explanationAr: 'لم يكن هناك موسيقى صاخبة، بل ساد هدوء لم يُسمع فيه سوى طقطقة النار وهسيسها.',
        highlightInText: 'man hörte nur das Knistern und Zischen des Feuers. Es war ein einmaliges Schauspiel.'
      },
      {
        id: 6,
        type: 'richtig_falsch',
        questionDe: 'Nicole meint, es lohnt sich, Michelstadt zu besuchen.',
        questionAr: 'ترى نيكول أن زيارة مدينة ميخلشتات تستحق العناء والزيارة.',
        correctAnswer: 'Richtig',
        explanationDe: 'Im Schlusssatz: "...kann nur jedem empfehlen: Auch Michelstadt im Odenwald ist eine Reise wert (besonders im August!)"',
        explanationAr: 'توصي الجميع في ختام مقالها بزيارة ميخلشتات لأنها تستحق الرحلة.',
        highlightInText: 'kann nur jedem empfehlen: Auch Michelstadt im Odenwald ist eine Reise wert'
      }
    ]
  },
  {
    id: 'lesen-t1-set15',
    teil: 1,
    testNumber: 15,
    titleDe: 'Handy-Unfall im Griechenland-Urlaub (Marie-Charlotte Maas)',
    titleAr: 'حادثة الهاتف في إجازة اليونان (ماري-شارلوت ماس)',
    source: 'Zertifikat B1 neu, Test 15, S. 230',
    textPassageDe: `25. August. Mein Handy-Unfall ereignete sich im Sommerurlaub in Griechenland. Ich hatte das Handy in der Tasche meiner Badehose und bin damit ins Meer gelaufen. Dort habe ich natürlich relativ schnell festgestellt, dass mein Handy noch in der Tasche ist. Leider stand ich schon hüfttief im Wasser.
Ich bin sofort zurück an den Strand gelaufen und habe das Handy aus meiner Tasche geholt. Meine erste Reaktion war, das Handy mit dem Handtuch trocken zu wischen. Danach habe ich es auseinandergebaut und die einzelnen Teile ebenfalls mit dem Handtuch getrocknet. Doch bereits da wurde mir klar, dass mein Handy nur eine geringe Überlebenschance hatte. Ich habe es dann für den Rest des Strandtages in die Sonne gelegt. Im Hotel angekommen habe ich das Handy trocken geföhnt, doch auch das sollte nicht helfen. Es ging zwar an, aber der Bildschirm hat nur wirre Pixel angezeigt. Ich hatte keinen Zugriff aufs Menü und konnte weder telefonieren noch SMS schreiben. Auf einer Online-Plattform erfuhr ich, das Beste sei es, das Handy ein paar Tage ausgeschaltet zu lassen. Ein nicht ganz leicht zu befolgender Hinweis, wenn man im Urlaub ist. Schließlich wollte ich Kontakt zu meiner Familie und meinen Freunden aufnehmen.
Es war der erste Urlaubstag, somit war es doppelt ärgerlich. Aber einen guten Aspekt hatte es dann doch: Ich habe Geld gespart, da teure Auslandsgespräche und SMS aus dem Ausland nicht mehr möglich waren.
Zu Hause kam dann die große Erleichterung: Die SIM-Karte war glücklicherweise noch zu gebrauchen und so hatte ich weder Nummern noch Nachrichten verloren. Hätte ich ein neueres Modell gehabt, wären die wohl weg gewesen, denn da speichert sich fast alles auf dem Mobilfunkgerät selber und nicht auf der SIM-Karte. Finanziell hielt sich der Schaden in Grenzen, da es kein ganz neues Handymodell war. Leider konnte ich keine Garantieansprüche geltend machen. Ein Wasserschaden läuft nämlich nie auf Garantie. Aber ich habe das Handy meiner Oma bekommen, das war das gleiche Modell. Noch einmal wird mir so etwas nicht passieren. Ich ziehe nur noch Badehosen ohne Taschen an.`,
    questions: [
      {
        id: 1,
        type: 'richtig_falsch',
        questionDe: 'Svens Handy ging kaputt, als er es mit dem Handtuch zu trocknen versuchte.',
        questionAr: 'تعطل هاتف سفين عندما حاول تجفيفه بالمنشفة.',
        correctAnswer: 'Falsch',
        explanationDe: 'Das Handy ging durch das Salzwasser im Meer kaputt, nicht durch das Trockenwischen mit dem Handtuch.',
        explanationAr: 'الهاتف تعطل وتلف بسبب مياه البحر المالحة وليس بسبب محاولة تجفيفه بالمنشفة.',
        highlightInText: 'Ich hatte das Handy in der Tasche meiner Badehose und bin damit ins Meer gelaufen.'
      },
      {
        id: 2,
        type: 'richtig_falsch',
        questionDe: 'Den Rest des Tages verbrachte Sven am Strand in der Sonne.',
        questionAr: 'قضى سفين باقي اليوم على الشاطئ تحت أشعة الشمس.',
        correctAnswer: 'Richtig',
        explanationDe: 'Im Text: "Ich habe es dann für den Rest des Strandtages in die Sonne gelegt." (und blieb dort bis zum Hotelgang).',
        explanationAr: 'وضع الهاتف في الشمس وظل على الشاطئ لبقية اليوم.',
        highlightInText: 'Ich habe es dann für den Rest des Strandtages in die Sonne gelegt.'
      },
      {
        id: 3,
        type: 'richtig_falsch',
        questionDe: 'Sven informierte sich im Internet darüber, was er tun sollte.',
        questionAr: 'استعلم سفين من الإنترنت عما ينبغي عليه فعله.',
        correctAnswer: 'Richtig',
        explanationDe: 'Im Text: "Auf einer Online-Plattform erfuhr ich, das Beste sei es, das Handy ein paar Tage ausgeschaltet zu lassen."',
        explanationAr: 'قرأ على منصة إلكترونية على الإنترنت نصيحة بإطفاء الهاتف بضعة أيام.',
        highlightInText: 'Auf einer Online-Plattform erfuhr ich, das Beste sei es, das Handy ein paar Tage ausgeschaltet zu lassen.'
      },
      {
        id: 4,
        type: 'richtig_falsch',
        questionDe: 'Sven ärgerte sich zwar sehr, doch er konnte Geld sparen.',
        questionAr: 'على الرغم من غضب سفين الشديد، إلا أنه استطاع توفير بعض المال.',
        correctAnswer: 'Richtig',
        explanationDe: 'Im Text: "Aber einen guten Aspekt hatte es dann doch: Ich habe Geld gespart, da teure Auslandsgespräche und SMS aus dem Ausland nicht mehr möglich waren."',
        explanationAr: 'وفر المال نظراً لعدم إمكانية إجراء مكالمات دولية ورسائل باهظة الثمن أثناء السفر.',
        highlightInText: 'Aber einen guten Aspekt hatte es dann doch: Ich habe Geld gespart'
      },
      {
        id: 5,
        type: 'richtig_falsch',
        questionDe: 'Weil die SIM-Karte in Ordnung war, blieben sowohl Nummern als auch Nachrichten gespeichert.',
        questionAr: 'لأن شريحة الاتصال كانت سليمة، بقيت الأرقام والرسائل محفوظة ولم تُفقد.',
        correctAnswer: 'Richtig',
        explanationDe: 'Im Text: "Die SIM-Karte war glücklicherweise noch zu gebrauchen und so hatte ich weder Nummern noch Nachrichten verloren."',
        explanationAr: 'بفضل سلامة شريحة SIM لم يفقد الأرقام والرسائل المسجلة عليها.',
        highlightInText: 'Die SIM-Karte war glücklicherweise noch zu gebrauchen und so hatte ich weder Nummern noch Nachrichten verloren.'
      },
      {
        id: 6,
        type: 'richtig_falsch',
        questionDe: 'Sven hat sich das gleiche Modell wie seine Oma angeschafft.',
        questionAr: 'قام سفين بشراء نفس الموديل الذي تملكه جدته.',
        correctAnswer: 'Falsch',
        explanationDe: 'Er hat es sich nicht neu gekauft/angeschafft, sondern er bekam das alte Handy seiner Oma geschenkt ("Aber ich habe das Handy meiner Oma bekommen, das war das gleiche Modell").',
        explanationAr: 'لم يقم بشرائه angeschafft، بل أخذ هاتف جدته القديم.',
        highlightInText: 'Aber ich habe das Handy meiner Oma bekommen, das war das gleiche Modell.'
      }
    ]
  }
];

import { LESEN_TEIL_2_DATA } from './lesenTeil2';
import { LESEN_TEIL_3_DATA } from './lesenTeil3';
import { LESEN_TEIL_4_DATA } from './lesenTeil4';
import { LESEN_TEIL_5_DATA } from './lesenTeil5';

export const ALL_LESEN_SETS: LesenTeilSet[] = [
  ...LESEN_DATA,
  ...LESEN_TEIL_2_DATA,
  ...LESEN_TEIL_3_DATA,
  ...LESEN_TEIL_4_DATA,
  ...LESEN_TEIL_5_DATA,
];

