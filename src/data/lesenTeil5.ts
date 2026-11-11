import { LesenTeilSet } from '../types';

export const LESEN_TEIL_5_DATA: LesenTeilSet[] = [
  {
    id: 'lesen-t5-set1',
    teil: 5,
    testNumber: 1,
    titleDe: 'Deutsches Museum – Merkblatt & Besucherordnung',
    titleAr: 'المتحف الألماني – لائحة الزوار والتعليمات',
    source: 'Zertifikat B1 neu, Test 1, S. 13',
    textPassageDe: `Deutsches Museum München
Öffnungszeiten: Geöffnet täglich 9.00 bis 17.00 Uhr; Einlass bis 16.00 Uhr.
Eintrittspreise: Erwachsene 8,50 € | Ermäßigt 7,00 € | Schüler und Studenten 3,00 € | Übersichtsführung 3,00 € | Planetarium zusätzlich 2,00 €. Eintritt für Mitglieder und Kinder unter 6 Jahren frei.
Werden Sie Mitglied! Mit einem Jahresbeitrag von 52,- € können Sie mit einer Begleitperson und zwei Kindern (oder allen eigenen Kindern) unter 16 Jahren jederzeit das Deutsche Museum besuchen. Jahresbeitrag für Schüler/-innen und Studierende (bis 30 Jahre, ohne Begleitung): 32,- €.
Öffentliche Verkehrsmittel: Alle S-Bahnen (Isartor), U-Bahn Linien 1 und 2 (Fraunhoferstraße), Straßenbahn Linie 18 (Deutsches Museum), Linie 17 (Isartor). Parkplätze sind nicht verfügbar.
Führungen: Schulklassenführungen, Übersichtsführungen, Fachführungen in Deutsch und Fremdsprachen. Anmeldung schriftlich bitte sechs Wochen vorher. Führungen und Vorführungen für Einzelpersonen und Familien sind kostenlos (außer Planetarium und Übersichtsführung). Fotografieren (auch Blitz und Video, jedoch ohne Stativ) ist für private Zwecke erlaubt; für gewerbliche Zwecke: Tel. 089/21 79 – 252.
Behindertengerechter Zugang: Rollstuhlfahrer können fast alle Ausstellungen über Rampen und Aufzüge erreichen, das Restaurant über Aufzüge aus dem Imbissraum. Toiletten befinden sich im Erdgeschoss und im 1. Obergeschoss.
Gastronomie: Restaurant, 1. Obergeschoss: 9.00 – 17.00 Uhr warme Küche. Cafeteria, Erdgeschoss: 9.00 – 15.30 Uhr (Verzehr von mitgebrachtem Essen möglich).
Deutsches Museum Shop: Führer, Kataloge und Verzeichnis der lieferbaren Publikationen im Museum-Shop erhältlich.`,
    questions: [
      {
        id: 27,
        type: 'multiple_choice',
        questionDe: 'Führungen ...',
        questionAr: 'الجولات الإرشادية في المتحف ...',
        options: [
          { key: 'a', textDe: 'sind für Schulklassen gratis.', textAr: 'مجانية للرحلات المدرسية.' },
          { key: 'b', textDe: 'sollten vorher telefonisch gemeldet werden.', textAr: 'يجب حجزها مسبقاً عبر الهاتف.' },
          { key: 'c', textDe: 'finden nicht nur auf Deutsch statt.', textAr: 'لا تُقام باللغة الألمانية فقط (تتوفر بلغات أجنبية).' }
        ],
        correctAnswer: 'c',
        explanationDe: 'Im Text: "Führungen... in Deutsch und Fremdsprachen."',
        explanationAr: 'الجولات متوفرة بالألمانية ولغات أجنبية أخرى Fremdsprachen.',
        highlightInText: 'in Deutsch und Fremdsprachen. Anmeldung schriftlich bitte sechs Wochen vorher.'
      },
      {
        id: 28,
        type: 'multiple_choice',
        questionDe: 'Wer Mitglied ist, ...',
        questionAr: 'من يحمل عضوية المتحف ...',
        options: [
          { key: 'a', textDe: 'ist auf jeden Fall erwachsen.', textAr: 'هو بالضرورة شخص بالغ.' },
          { key: 'b', textDe: 'braucht keinen Eintritt zu bezahlen.', textAr: 'لا يحتاج إلى دفع رسوم الدخول (مجاني).' },
          { key: 'c', textDe: 'darf nicht allein das Museum besuchen.', textAr: 'لا يحق له زيارة المتحف بمفرده.' }
        ],
        correctAnswer: 'b',
        explanationDe: 'Im Text: "Eintritt für Mitglieder und Kinder unter 6 Jahren frei."',
        explanationAr: 'الدخول مجاني بالكامل للأعضاء والأطفال دون سن السادسة.',
        highlightInText: 'Eintritt für Mitglieder und Kinder unter 6 Jahren frei.'
      },
      {
        id: 29,
        type: 'multiple_choice',
        questionDe: 'Im Museum kann man ...',
        questionAr: 'في المتحف يستطيع المرء ...',
        options: [
          { key: 'a', textDe: 'als Behinderter alle Ausstellungen besichtigen.', textAr: 'زيارة كافة المعارض كشخص من ذوي الاحتياجات.' },
          { key: 'b', textDe: 'auch Bücher kaufen.', textAr: 'شراء الكتب والمطبوعات أيضاً.' },
          { key: 'c', textDe: 'nur warm essen.', textAr: 'تناول الطعام الساخن فقط.' }
        ],
        correctAnswer: 'b',
        explanationDe: 'Im Museum-Shop gibt es "Führer, Kataloge und sonstige Veröffentlichungen... Sortiment an technik- und wissenschaftsgeschichtlicher Literatur."',
        explanationAr: 'متجر المتحف يوفر دليلاً وكتالوجات وكتباً علمية متنوعة للشراء.',
        highlightInText: 'großes Sortiment an technik- und wissenschaftsgeschichtlicher Literatur.'
      },
      {
        id: 30,
        type: 'multiple_choice',
        questionDe: 'Das Museum erreicht man ...',
        questionAr: 'يمكن الوصول إلى المتحف ...',
        options: [
          { key: 'a', textDe: 'am besten mit dem Auto.', textAr: 'بأفضل شكل بواسطة السيارة الخاصة.' },
          { key: 'b', textDe: 'mit dem Bus Linie 17.', textAr: 'بواسطة الحافلة خط 17.' },
          { key: 'c', textDe: 'mit jeder S-Bahn.', textAr: 'بأي قطار من قطارات الضواحي (S-Bahn).' }
        ],
        correctAnswer: 'c',
        explanationDe: 'Im Text: "Öffentliche Verkehrsmittel: Alle S-Bahnen (Isartor)... Parkplätze sind nicht verfügbar."',
        explanationAr: 'جميع خطوط قطارات S-Bahn تمر بمحطة Isartor القريبة من المتحف، بينما لا توجد مواقف سيارات.',
        highlightInText: 'Alle S-Bahnen (Isartor)'
      }
    ]
  },
  {
    id: 'lesen-t5-set2',
    teil: 5,
    testNumber: 2,
    titleDe: 'Internatsschule Frühbergen – Tagesablauf & Hausordnung',
    titleAr: 'مدرسة فغوبيرغن الداخلية – الجدول اليومي والنظام الداخلي',
    source: 'Zertifikat B1 neu, Test 2, S. 29',
    textPassageDe: `Tagesablauf der Mittel- und Oberstufe (Klassen 8–13)
6.45 Aufstehen, Waschen, Duschen, Zimmer aufräumen, Betten machen
7.25 Gemeinsames Frühstück im Speisesaal
8.00 Unterrichtsbeginn (1. und 2. Unterrichtseinheit mit je 45 Minuten)
9.35 Große Pause (20 Minuten): Die Schülerinnen und Schüler verteilen sich auf die verschiedenen Terrassen und Gärten der Schule. Am Pausenbuffet werden Brote und Brötchen mit Marmelade, Wurst und Käse sowie Obst angeboten und es steht eine Sprudelzapfanlage zur Verfügung. Ergänzend können im Freizeitmarkt täglich frisches Gebäck und Getränke gekauft werden.
9.55 Unterricht (3./4. und 5./6. Unterrichtseinheit mit 10-minütiger Pause)
13.25 Gemeinsames Mittagessen im Speisesaal: Beim Mittagessen haben die Schülerinnen und Schüler feste Sitzplätze. Jeder Tisch wird von einem pädagogischen Mitarbeiter betreut. Wir beginnen und beenden das Essen gemeinsam. Zwei Schüler an jedem Tisch sind eine Woche für den Tischdienst verantwortlich (Geschirr holen, Abräumen).
14.00 Pause
14.30 Stillarbeit (Haus- und Übungsaufgaben, Wiederholung)
15.30 Pause / Pädacafé / Vesper
16.00 Arbeitsgemeinschaften (Mo, Do), indiv. Lernzeit (Mi, Fr)
17.20 Hausversammlung (danach Ausgänge)
18.30 Gemeinsames Abendessen im Speisesaal
19.00–20.30 Betreute Abendfreizeiten (Sport, Musikinstrumente üben, Lesen etc.). Dienstags intensives Lernen im Internatshaus.
22.00 Nachtruhe. Schüler der Klassen 11 bis 13 können bei Bedarf noch länger arbeiten. Dies ist mit dem Hausvorstand vorher abzusprechen.`,
    questions: [
      {
        id: 27,
        type: 'multiple_choice',
        questionDe: 'Abends ...',
        questionAr: 'في المساء ...',
        options: [
          { key: 'a', textDe: 'können sich die Schüler mit ihren Hobbys beschäftigen.', textAr: 'يمكن للطلاب ممارسة هواياتهم وأنشطتهم الترفيهية.' },
          { key: 'b', textDe: 'müssen die Schüler immer noch eine Stunde lernen.', textAr: 'يجب على الطلاب دوماً المذاكرة لمدة ساعة إضافية.' },
          { key: 'c', textDe: 'können die älteren Schüler selbstständig bestimmen, wann sie ins Bett gehen.', textAr: 'يمكن للطلاب الأكبر سناً تحديد موعد نومهم بأنفسهم دون قيود.' }
        ],
        correctAnswer: 'a',
        explanationDe: 'Im Text: "19.00-20.30 Betreute Abendfreizeiten (Sport / Musikinstrumente üben / Spielen / Lesen etc.)".',
        explanationAr: 'بين الساعة 19:00 و20:30 يُتاح وقت الفراغ المسائي للأنشطة والهوايات (رياضة، عزف، قراءة).',
        highlightInText: '19.00-20.30 Betreute Abendfreizeiten Sport / Musikinstrumente üben / Spielen / Lesen etc.'
      },
      {
        id: 28,
        type: 'multiple_choice',
        questionDe: 'In der großen Pause ...',
        questionAr: 'خلال الاستراحة الكبرى ...',
        options: [
          { key: 'a', textDe: 'bekommen die Schüler von der Schule täglich frisches Gebäck.', textAr: 'يحصل الطلاب يومياً على مخبوزات طازجة مجاناً من المدرسة.' },
          { key: 'b', textDe: 'können die Schüler Wurst- und Käsebrötchen kaufen.', textAr: 'يمكن للطلاب شراء أو أخذ شطائر الجبن والنقانق.' },
          { key: 'c', textDe: 'verlassen die Schüler das Schulgebäude.', textAr: 'يغادر الطلاب مبنى المدرسة إلى الساحات والحدائق.' }
        ],
        correctAnswer: 'c',
        explanationDe: 'Im Text: "Die Schülerinnen und Schüler verteilen sich auf die verschiedenen Terrassen und Gärten der Schule."',
        explanationAr: 'يخرج الطلاب من المبنى إلى التراسات والحدائق المختلفة بالمدرسة.',
        highlightInText: 'Die Schülerinnen und Schüler verteilen sich auf die verschiedenen Terrassen und Gärten der Schule.'
      },
      {
        id: 29,
        type: 'multiple_choice',
        questionDe: 'Mittags essen alle Schüler gemeinsam, ...',
        questionAr: 'يتناول جميع الطلاب وجبة الغداء معاً في الظهيرة لأن ...',
        options: [
          { key: 'a', textDe: 'damit sie sich an den Tischdienst gewöhnen.', textAr: 'حتى يعتادوا على خدمة المائدة.' },
          { key: 'b', textDe: 'weil bei Tisch über viele wichtige Sachen gesprochen wird.', textAr: 'لأنه يتم على المائدة مناقشة العديد من الأمور الهامة.' },
          { key: 'c', textDe: 'obwohl sie dadurch weniger Freizeit haben.', textAr: 'على الرغم من أن ذلك يقلل من وقت فراغهم.' }
        ],
        correctAnswer: 'b',
        explanationDe: 'Im Text: "Bei den Mahlzeiten werden mit den Schülerinnen und Schülern wichtige Gespräche geführt, Informationen über verschiedene Bereiche ausgetauscht..."',
        explanationAr: 'أثناء الوجبات تُجرى محادثات مهمة ويتم تبادل المعلومات المدرسية والحياتية الهامة.',
        highlightInText: 'Bei den Mahlzeiten werden mit den Schülerinnen und Schülern wichtige Gespräche geführt'
      },
      {
        id: 30,
        type: 'multiple_choice',
        questionDe: 'Im Speisesaal gilt mittags: ...',
        questionAr: 'في قاعة الطعام يسري في الظهيرة النظام التالي: ...',
        options: [
          { key: 'a', textDe: 'Jeder Schüler holt sich sein Essen und räumt sein Geschirr ab.', textAr: 'كل تلميذ يحضر طعامه بنفسه وينظف صحنه.' },
          { key: 'b', textDe: 'Die Lehrer bestimmen jeden Tag, wo die Schüler sitzen.', textAr: 'المعلمون يحددون يومياً مكان جلوس الطلاب.' },
          { key: 'c', textDe: 'An jedem Tisch sitzt auch ein erwachsener Betreuer.', textAr: 'على كل طاولة يجلس مشرف تربوي بالغ أيضاً.' }
        ],
        correctAnswer: 'c',
        explanationDe: 'Im Text: "Jeder Tisch wird von einem pädagogischen Mitarbeiter betreut."',
        explanationAr: 'يشرف على كل طاولة طعام موظف تربوي بالغ ويتناول معهم الطعام.',
        highlightInText: 'Jeder Tisch wird von einem pädagogischen Mitarbeiter betreut.'
      }
    ]
  }
];
