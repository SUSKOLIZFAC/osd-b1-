import { LesenTeilSet } from '../types';

export const LESEN_TEIL_4_DATA: LesenTeilSet[] = [
  {
    id: 'lesen-t4-set1',
    teil: 4,
    testNumber: 1,
    titleDe: 'Kettenmails – Mitmachen oder löschen?',
    titleAr: 'رسائل السلسلة (Kettenmails) – المشاركة أم الحذف؟',
    source: 'Zertifikat B1 neu, Test 1, S. 11-12',
    textPassageDe: 'In einer Online-Zeitung lesen Sie Kommentare zu einem Artikel über Kettenmails. Frage: Würde die Person bei einer Kettenmail mitmachen?',
    statements: [
      { id: 20, author: 'Alexandra', age: 28, location: 'Ludwigshafen', quoteDe: 'Kettenmails sind für mich einfach ein Teil der Kommunikation mit anderen. Mir ist es noch nie passiert, dass eine Kettenmail etwas kaputt gemacht hat. Ich mache auch nicht immer, was da steht, z.B. an mindestens 10 Personen schicken oder so. Ich sehe das einfach als einen Teil meiner Kommunikation und wenn die Mail lustig oder interessant ist, schicke ich sie auch weiter. Ich sehe keinen Grund, der dagegen spricht.', correctAnswer: 'Ja' },
      { id: 21, author: 'Nils', age: 41, location: 'Hamburg', quoteDe: 'Wenn ich etwas bekomme, das auch nur entfernt an eine Kettenmail erinnert, lösche ich es sofort. Da kann man sich nie sicher sein, ob da nicht irgendeine Werbefirma dahinter steht und auf diese Weise versucht, möglichst viele E-Mail-Adressen zu sammeln. Die Adressen können dann für Werbe-Mails oder Spams benutzt werden. Dann wird man nachher nur mit Werbung bombardiert.', correctAnswer: 'Nein' },
      { id: 22, author: 'Wiebke', age: 18, location: 'Gelsenkirchen', quoteDe: 'Ich freue mich immer über Post, egal ob nur an mich oder an viele, ob zum Weiterschicken oder nicht. Allgemein bin ich der Meinung, dass man Wichtiges und Interessantes grundsätzlich immer an alle weiterleiten muss. Das ist doch das Gute am Internet und das gilt auch für Kettenmails.', correctAnswer: 'Ja' },
      { id: 23, author: 'Stefan', age: 30, location: 'Freistadt', quoteDe: 'Die Frage ist immer, was da eigentlich drin steht. Wenn es ein Aufruf in der Not ist, z.B. um Blut zu spenden, würde ich es auf jeden Fall einmal nachprüfen. Aber ehrlich gesagt würde ich sie nicht weiterschicken, denn vielleicht ärgert man die anderen damit nur.', correctAnswer: 'Nein' },
      { id: 24, author: 'Charlotte', age: 48, location: 'Göttingen', quoteDe: 'Vor ein paar Tagen habe ich mal so eine Mail bekommen. Es ging um Rezepte. Ich sollte ein Rezept an jemanden schicken und dann die Mail an zehn Freunde. Nun werde ich ganz viele Rezepte von mir Unbekannten erhalten. Zwei Rezepte habe ich schon und ich freue mich auf die nächsten.', correctAnswer: 'Ja' },
      { id: 25, author: 'Victor', age: 26, location: 'Zürich', quoteDe: 'Die E-Mail ist nicht für Spiele erfunden worden, sondern um die Kommunikation zu erleichtern. Deshalb kann ich nicht verstehen, dass es Leute gibt, die bei einer Kettenmail mitmachen. So eine Zeitverschwendung! Da könnte man doch etwas Besseres mit dem Computer anfangen.', correctAnswer: 'Nein' },
      { id: 26, author: 'Katta', age: 34, location: 'Wien', quoteDe: 'Das schrecklichste sind diese Kettenmails, in denen steht, dass man ganz viel Unglück haben wird, wenn man nicht sofort alles an 10 Freunde weiterschickt. Nein, so einen Psychoterror kann ich nicht unterstützen! Mir hat das alle Kettenmails vergrault, ich will bei keiner mehr mitmachen.', correctAnswer: 'Nein' }
    ],
    questions: [
      { id: 20, type: 'ja_nein', questionDe: 'Alexandra (28, Ludwigshafen)', questionAr: 'ألكسندرا (28 عاماً، لودفيغسهافن)', correctAnswer: 'Ja', explanationDe: 'Sie leitet Mails weiter, wenn sie lustig sind: "schicke ich sie auch weiter".', explanationAr: 'توافق على إعادة إرسالها إن كانت طريفة وممتعة.' },
      { id: 21, type: 'ja_nein', questionDe: 'Nils (41, Hamburg)', questionAr: 'نيلز (41 عاماً، هامبورغ)', correctAnswer: 'Nein', explanationDe: 'Er löscht solche Mails sofort aus Angst vor Spam: "lösche ich es sofort".', explanationAr: 'يرفضها ويحذفها فوراً خوفاً من جمع الإيميلات والرسائل المزعجة.' },
      { id: 22, type: 'ja_nein', questionDe: 'Wiebke (18, Gelsenkirchen)', questionAr: 'فيبكه (18 عاماً، غيلسنكيرشن)', correctAnswer: 'Ja', explanationDe: 'Sie meint, man solle Interessantes weiterleiten: "gilt auch für Kettenmails".', explanationAr: 'تؤيد فكرة إرسالها ومشاركتها مع الآخرين عبر الإنترنت.' },
      { id: 23, type: 'ja_nein', questionDe: 'Stefan (30, Freistadt)', questionAr: 'شتيفان (30 عاماً، فرايشتات)', correctAnswer: 'Nein', explanationDe: 'Er sagt ausdrücklich: "würde ich sie nicht weiterschicken".', explanationAr: 'يصرح بأنه لن يقوم بإعادة إرسالها حتى لا يزعج الآخرين.' },
      { id: 24, type: 'ja_nein', questionDe: 'Charlotte (48, Göttingen)', questionAr: 'شارلوته (48 عاماً، غوتنغن)', correctAnswer: 'Ja', explanationDe: 'Sie hat bei der Rezept-Kettenmail mitgemacht und freut sich auf weitere.', explanationAr: 'شاركت بالفعل في سلسلة الوصفات وتسعد باستلام المزيد.' },
      { id: 25, type: 'ja_nein', questionDe: 'Victor (26, Zürich)', questionAr: 'فيكتور (26 عاماً، زيورخ)', correctAnswer: 'Nein', explanationDe: 'Er hält Kettenmails für Zeitverschwendung: "So eine Zeitverschwendung!"', explanationAr: 'يرى أنها مضيعة للوقت واستخدام غير مجدٍ للبريد الإلكتروني.' },
      { id: 26, type: 'ja_nein', questionDe: 'Katta (34, Wien)', questionAr: 'كاتا (34 عاماً، فيينا)', correctAnswer: 'Nein', explanationDe: 'Sie lehnt Droh-Mails ab: "ich will bei keiner mehr mitmachen."', explanationAr: 'ترفض رسائل التهديد بسوء الحظ وتعتبرها إرهاباً نفسياً.' }
    ]
  },
  {
    id: 'lesen-t4-set2',
    teil: 4,
    testNumber: 2,
    titleDe: 'Autobahngebühren in Deutschland',
    titleAr: 'رسوم المرور على الطرق السريعة في ألمانيا',
    source: 'Zertifikat B1 neu, Test 2, S. 27-28',
    textPassageDe: 'In einer Zeitschrift lesen Sie Kommentare zu einem Artikel über die Idee, auch in Deutschland für die Nutzung der Autobahn Geld zu verlangen. Frage: Ist die Person für Autobahngebühren?',
    statements: [
      { id: 20, author: 'Jörg', age: 49, location: 'Freiburg', quoteDe: 'Autofahrer zahlen schon genug Steuern. Jetzt noch extra für die Autobahnen zu bezahlen finde ich unfair. Das wird einfach zu viel.', correctAnswer: 'Nein' },
      { id: 21, author: 'Katharina', age: 30, location: 'Linz', quoteDe: 'Wir müssen in Österreich schon lange zahlen. Aber ehrlich gesagt finde ich es richtig, für die Autobahn noch mal eine Gebühr zu verlangen. Es kostet schließlich viel, sie zu bauen und instand zu halten.', correctAnswer: 'Ja' },
      { id: 22, author: 'Jan', age: 26, location: 'Stralsund', quoteDe: 'Ich sehe diese Frage vorwiegend von der Umwelt her. Ziel ist doch, dass immer mehr Menschen ihr Auto stehen lassen. Gebühren würden viel mehr Autofahrer zum Nachdenken bringen. Das ist gut für die Umwelt und gut für uns.', correctAnswer: 'Ja' },
      { id: 23, author: 'Iris', age: 18, location: 'Passau', quoteDe: 'Autofahren sowieso sehr teuer ist, man braucht Benzin, eine Versicherung usw. Auch noch für die Autobahnen zu zahlen, kommt mir übertrieben vor.', correctAnswer: 'Nein' },
      { id: 24, author: 'Chris', age: 25, location: 'Bern', quoteDe: 'Hier in der Schweiz ist das schon lange so. Wir besorgen uns die Autobahn-Plakette für ein Jahr und wissen, dass alles O.K. ist. Für mich ist das sehr logisch. Ich wundere mich sogar, dass es nicht schon länger in Deutschland eine Gebühr gibt.', correctAnswer: 'Ja' },
      { id: 25, author: 'Micha', age: 51, location: 'Münster', quoteDe: 'Da haben sich die Politiker mal wieder etwas Neues ausgedacht. So viele Jahre fahren wir, ohne extra zu zahlen und jetzt auf einmal soll sich das ändern? Ich sehe dafür keinen Grund.', correctAnswer: 'Nein' },
      { id: 26, author: 'Sofia', age: 15, location: 'Erfurt', quoteDe: 'Ich meine, die Straßen sollen sicher sein, gut gepflegt usw. Ich verstehe, dass man dafür bezahlen muss. Es macht die Autofahrer zwar nicht froh, aber es ist richtig. Wie soll das Ganze sonst finanziert werden?', correctAnswer: 'Ja' }
    ],
    questions: [
      { id: 20, type: 'ja_nein', questionDe: 'Jörg (49, Freiburg)', questionAr: 'يورغ (49 عاماً، فرايبورغ)', correctAnswer: 'Nein', explanationDe: 'Er findet es unfair: "finde ich unfair. Das wird einfach zu viel."', explanationAr: 'يعارض فرض الرسوم ويرى أن السائقين يدفعون ضرائب كافية بالفعل.' },
      { id: 21, type: 'ja_nein', questionDe: 'Katharina (30, Linz)', questionAr: 'كاتارينا (30 عاماً، لينتس)', correctAnswer: 'Ja', explanationDe: 'Sie findet die Gebühr berechtigt für Bau und Erhalt der Straßen.', explanationAr: 'تؤيد الرسوم لأن تكاليف بناء الطرق وصيانتها مرتفعة جداً.' },
      { id: 22, type: 'ja_nein', questionDe: 'Jan (26, Stralsund)', questionAr: 'يان (26 عاماً، شترالسوند)', correctAnswer: 'Ja', explanationDe: 'Er befürwortet die Gebühr aus Umweltschutzgründen.', explanationAr: 'يؤيدها لدوافع بيئية حتى يقلل الناس من استخدام السيارات.' },
      { id: 23, type: 'ja_nein', questionDe: 'Iris (18, Passau)', questionAr: 'إيريس (18 عاماً، باساو)', correctAnswer: 'Nein', explanationDe: 'Sie findet es übertrieben teuer: "kommt mir übertrieben vor".', explanationAr: 'ترى أن تكاليف قيادة السيارات مرتفعة أصلاً وتعتبر الرسوم مبالغاً فيها.' },
      { id: 24, type: 'ja_nein', questionDe: 'Chris (25, Bern)', questionAr: 'كريس (25 عاماً، برن)', correctAnswer: 'Ja', explanationDe: 'Er hält die Vignette / Autobahngebühr für logisch und bewährt.', explanationAr: 'يعتبر النظام السويسري للملصق السنوي منطقياً وناجحاً.' },
      { id: 25, type: 'ja_nein', questionDe: 'Micha (51, Münster)', questionAr: 'ميشا (51 عاماً، مونستر)', correctAnswer: 'Nein', explanationDe: 'Er sieht keinen Grund, nach so vielen Jahren eine Gebühr einzuführen.', explanationAr: 'لا يرى أي مبرر لتغيير الوضع الحالي وفرض رسوم جديدة.' },
      { id: 26, type: 'ja_nein', questionDe: 'Sofia (15, Erfurt)', questionAr: 'صوفيا (15 عاماً، إرفورت)', correctAnswer: 'Ja', explanationDe: 'Sie findet die Gebühr zur Finanzierung sicherer Straßen richtig.', explanationAr: 'ترى أن دفع الرسوم ضروري لتمويل صيانة الطرق وضمان سلامتها.' }
    ]
  }
];
