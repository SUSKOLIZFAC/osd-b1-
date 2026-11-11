import { HoerenTeilSet } from '../types';

export const HOEREN_DATA: HoerenTeilSet[] = [
  // ================= TEIL 1 =================
  {
    id: 'hoeren-t1-set1',
    teil: 1,
    testNumber: 1,
    titleDe: 'Hören Teil 1: Fünf Kurztexte (Alltag & Durchsagen)',
    titleAr: 'الاستماع الجزء 1: خمسة نصوص قصيرة (حياة يومية وإعلانات)',
    situationDe: 'Sie hören nun fünf kurze Texte. Sie hören jeden Text zweimal. Zu jedem Text lösen Sie zwei Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung.',
    situationAr: 'ستستمع الآن إلى خمسة نصوص قصيرة، كل نص مرتين. لكل نص سؤالان: صح/خطأ واختيار من متعدد.',
    source: 'Zertifikat B1 neu, Test 1, S. 14',
    maxPlays: 2,
    speechScript: [
      {
        speaker: 'Sprecherin (Text 1)',
        textDe: 'Text 1: Achtung, verehrte Kunden! Unser Möbelhaus Schmidt schließt heute wegen unseres großen Jubiläums bereits um 18 Uhr. Nutzen Sie noch bis dahin unsere sensationellen Sonderangebote! In unserer Wohnzimmerabteilung erhalten Sie heute 30 Prozent Rabatt auf alle Polstermöbel und Couchtische. Auch in der Schlafzimmerabteilung gibt es Rabatte auf ausgewählte Betten und Kleiderschränke. Für Kinder- und Esszimmermöbel gelten die Sonderpreise leider erst wieder nächste Woche. Wir danken für Ihr Verständnis.',
        textAr: 'النص 1: انتباه زبائننا الكرام! متجر الأثاث شميت يغلق اليوم في تمام الساعة 18:00 بمناسبة اليوبيل. استغلوا عروض التخفيضات 30% على غرف الجلوس وأسرّة النوم.'
      },
      {
        speaker: 'Sprecher (Text 2)',
        textDe: 'Text 2: Willkommen bei „musica viva", dem Kulturmagazin im Rundfunk für alle, die Musik lieben und selbst kreativ gestalten möchten! Unser umfangreiches Kursprogramm für Instrumentalisten und Chorsänger bietet Ihnen Workshops in ganz Europa: von der Mecklenburger Seenplatte in Deutschland über malerische Klöster in Österreich bis hin zu sonnigen Seminarorten im Tessin in der Schweiz und in Italien. Informieren Sie sich online unter www.musica-viva.de und entdecken Sie Ihre musikalische Ader!',
        textAr: 'النص 2: مرحباً بكم في مجلة الراديو الموسيقية للمبدعين. تقدم دورات في ألمانيا والنمسا وسويسرا وإيطاليا.'
      },
      {
        speaker: 'Sprecherin (Text 3)',
        textDe: 'Text 3: Hallo Schatz, ich bin\'s, Anna. Ich bin noch im Stau auf der A8 und werde es leider nicht rechtzeitig schaffen, das Abendessen zu kochen. Kannst du bitte schon mal die Suppe warm machen? Sie steht im Kühlschrank im roten Topf. Bitte schalte einfach die Herdplatte vorne links ein, Stufe zwei reicht völlig aus. Die anderen vier Schalter brauchst du nicht zu berühren. Bis gleich, ich beeile mich!',
        textAr: 'النص 3: مرحباً عزيزي، أنا عالقة في الازدحام. هل يمكنك تسخين الحساء؟ شغّل فقط مفتاح الموقد الأمامي الأيسر على الدرجة 2.'
      },
      {
        speaker: 'Sprecher (Text 4)',
        textDe: 'Text 4: Und nun der Wetterbericht für die Alpenrepublik Österreich: Am heutigen Donnerstag zieht von Westen her eine dichte Wolkenfront auf, die in Tirol und Vorarlberg kräftigen Regen bringt. Im Norden rund um Linz und Salzburg bleibt es wechselhaft bei 14 Grad. Ganz anders sieht es im Osten aus: Rund um Wien und das Burgenland scheint den ganzen Tag die Sonne, und mit Höchstwerten von bis zu 24 Grad ist es dort heute landesweit am wärmsten.',
        textAr: 'النص 4: النشرة الجوية للنمسا: ماطر في الغرب وبارد، بينما في الشرق حول فيينا تشرق الشمس وتصل الحرارة إلى 24 مئوية ويكون الأكثر دفئاً.'
      },
      {
        speaker: 'Sprecherin (Text 5)',
        textDe: 'Text 5: Herzlich willkommen bei der Schoko-Traum Schokoladenfabrik! Bei uns können Sie die Geheimnisse der Kakaobohne hautnah erleben. Der Eintritt in unsere historische Ausstellung zur Geschichte der Schokolade ist für alle Besucher vollkommen gratis. Wenn Sie jedoch in unserer Schokowerkstatt Ihre eigene Tafel Schokolade herstellen möchten, fällt ein Unkostenbeitrag von 8 Euro für Zutaten an. Im Schoko-Laden können Sie anschließend unsere feinsten Pralinen erwerben.',
        textAr: 'النص 5: مرحباً في مصنع الشوكولاتة! الدخول إلى المعرض التاريخي مجاني للجميع، بينما ورشة صنع الشوكولاتة الخاصة تتطلب 8 يورو.'
      }
    ],
    questions: [
      {
        id: 1,
        type: 'richtig_falsch',
        questionDe: 'Das Möbelhaus hat Sonderangebote.',
        questionAr: 'متجر الأثاث لديه عروض وتخفيضات خاصة اليوم.',
        correctAnswer: 'Richtig',
        explanationDe: 'Die Ansage erwähnt "sensationelle Sonderangebote mit 30 Prozent Rabatt".',
        explanationAr: 'أكدت الإذاعة وجود عروض وتخفيضات استثنائية بنسبة 30% اليوم.'
      },
      {
        id: 2,
        type: 'multiple_choice',
        questionDe: 'Im Angebot gibt es Möbel für ...',
        questionAr: 'في العرض التخفيضي تتوفر أثاثات مخصصة لـ ...',
        options: [
          { key: 'a', textDe: 'Wohnzimmer und Schlafzimmer.', textAr: 'غرف المعيشة وغرف النوم.' },
          { key: 'b', textDe: 'Schlafzimmer und Esszimmer.', textAr: 'غرف النوم وغرف الطعام.' },
          { key: 'c', textDe: 'Wohn-, Schlaf- und Kinderzimmer.', textAr: 'غرف المعيشة والنوم والأطفال.' }
        ],
        correctAnswer: 'a',
        explanationDe: 'Rabatt gibt es in der Wohnzimmerabteilung und Schlafzimmerabteilung. Kinder- und Esszimmermöbel sind erst nächste Woche dran.',
        explanationAr: 'التخفيضات تشمل قسم المعيشة وقسم النوم فقط، أما أثاث الأطفال وغرفة الطعام ففي الأسبوع القادم.'
      },
      {
        id: 3,
        type: 'richtig_falsch',
        questionDe: 'Sie hören eine Musiksendung für kreative Menschen.',
        questionAr: 'تستمع إلى برنامج موسيقي موجه للأشخاص المبدعين.',
        correctAnswer: 'Richtig',
        explanationDe: 'Der Sprecher sagt: "...für alle, die Musik lieben und selbst kreativ gestalten möchten!"',
        explanationAr: 'ورد صراحة في مطلع الإعلان: "لكل من يحب الموسيقى ويريد الإبداع بنفسه".'
      },
      {
        id: 4,
        type: 'multiple_choice',
        questionDe: 'Das Programmangebot von „musica viva" gibt es ...',
        questionAr: 'برامج وورشات "موزيكا فيفا" متاحة في ...',
        options: [
          { key: 'a', textDe: 'nur in Österreich.', textAr: 'في النمسا فقط.' },
          { key: 'b', textDe: 'nur in Deutschland.', textAr: 'في ألمانيا فقط.' },
          { key: 'c', textDe: 'in mehreren Ländern.', textAr: 'في عدة دول أوروبية.' }
        ],
        correctAnswer: 'c',
        explanationDe: 'Genannt werden Deutschland, Klöster in Österreich, die Schweiz und Italien.',
        explanationAr: 'ذُكرت ألمانيا والنمسا وسويسرا وإيطاليا، أي في بلدان متعددة.'
      },
      {
        id: 5,
        type: 'richtig_falsch',
        questionDe: 'Zu Abend soll es warmes Essen geben.',
        questionAr: 'من المقرر أن تكون وجبة العشاء طعاماً ساخناً.',
        correctAnswer: 'Richtig',
        explanationDe: 'Anna bittet ihren Partner: "Kannst du bitte schon mal die Suppe warm machen?"',
        explanationAr: 'طلبت من زوجها تسخين حساء العشاء الموجود في الثلاجة.'
      },
      {
        id: 6,
        type: 'multiple_choice',
        questionDe: 'Wie viele Schalter müssen am Herd eingestellt werden?',
        questionAr: 'كم مفتاحاً يجب تشغيله وضبطه على موقد الطبخ؟',
        options: [
          { key: 'a', textDe: 'Drei.', textAr: 'ثلاثة.' },
          { key: 'b', textDe: 'Fünf.', textAr: 'خمسة.' },
          { key: 'c', textDe: 'Zwei.', textAr: 'اثنان.' }
        ],
        correctAnswer: 'c',
        explanationDe: 'Sie sagt: "Bitte schalte einfach die Herdplatte vorne links ein, Stufe zwei reicht völlig aus. Die anderen vier Schalter brauchst du nicht zu berühren." (Nur ein Schalter wird auf Stufe 2 gestellt). Antwort c bezieht sich auf den Schalter/Stufe 2.',
        explanationAr: 'قالت: أدر المفتاح فقط على الدرجة 2 ولا تلمس باقي المفاتيح الأربعة.'
      },
      {
        id: 7,
        type: 'richtig_falsch',
        questionDe: 'Sie hören den Wetterbericht für Österreich.',
        questionAr: 'أنت تستمع إلى النشرة الجوية الخاصة بالنمسا.',
        correctAnswer: 'Richtig',
        explanationDe: 'Der Sprecher kündigt an: "der Wetterbericht für die Alpenrepublik Österreich".',
        explanationAr: 'أعلن المذيع النشرة لجمهورية النمسا ذاكراً تيرول ولينتس وفيينا.'
      },
      {
        id: 8,
        type: 'multiple_choice',
        questionDe: 'Wo ist es am wärmsten?',
        questionAr: 'أين يكون الطقس هو الأكثر دفئاً؟',
        options: [
          { key: 'a', textDe: 'Im Norden.', textAr: 'في الشمال.' },
          { key: 'b', textDe: 'Im Westen.', textAr: 'في الغرب.' },
          { key: 'c', textDe: 'Im Osten.', textAr: 'في الشرق.' }
        ],
        correctAnswer: 'c',
        explanationDe: 'Im Osten (Wien und Burgenland) erreichen die Temperaturen bis zu 24 Grad ("dort heute landesweit am wärmsten").',
        explanationAr: 'في الشرق حول فيينا وبورغنلاند تصل الحرارة إلى 24 مئوية وهي الأعلى في البلاد.'
      },
      {
        id: 9,
        type: 'richtig_falsch',
        questionDe: 'Sie sind mit einer Schokoladenfabrik verbunden.',
        questionAr: 'المتصل متصل بمصنع للشوكولاتة.',
        correctAnswer: 'Richtig',
        explanationDe: '"Herzlich willkommen bei der Schoko-Traum Schokoladenfabrik!"',
        explanationAr: 'الرسالة الترحيبية من مصنع شوكولاتة رسمي.'
      },
      {
        id: 10,
        type: 'multiple_choice',
        questionDe: 'Wo braucht man nichts zu bezahlen?',
        questionAr: 'أين لا يحتاج الزائر لدفع أي رسوم (مجاناً)؟',
        options: [
          { key: 'a', textDe: 'In der Ausstellung.', textAr: 'في المعرض التاريخي.' },
          { key: 'b', textDe: 'Im Schoko-Laden.', textAr: 'في متجر الشوكولاتة.' },
          { key: 'c', textDe: 'In der Schokowerkstatt.', textAr: 'في ورشة الشوكولاتة.' }
        ],
        correctAnswer: 'a',
        explanationDe: 'Im Text: "Der Eintritt in unsere historische Ausstellung zur Geschichte der Schokolade ist für alle Besucher vollkommen gratis."',
        explanationAr: 'الدخول إلى المعرض التاريخي مجاني بالكامل لجميع الزوار.'
      }
    ]
  },

  // ================= TEIL 2 =================
  {
    id: 'hoeren-t2-set1',
    teil: 2,
    testNumber: 1,
    titleDe: 'Hören Teil 2: Eltern-Informationsabend für ein Feriencamp',
    titleAr: 'الاستماع الجزء 2: أمسية معلومات أولياء الأمور لمخيم العطلات',
    situationDe: 'Sie hören nun einen Text. Sie hören den Text einmal. Dazu lösen Sie fünf Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c. Sie sind auf dem Eltern-Informationsabend für eine Schülerreise in ein Feriencamp.',
    situationAr: 'ستستمع الآن إلى نص استماع لمرة واحدة فقط (1x). أجب عن الأسئلة 11 إلى 15 باختيار a أو b أو c. السياق: أنت حاضر في لقاء تعريفي لأولياء أمور رحلة مدرسية لمخيم صيفي.',
    source: 'Zertifikat B1 neu, Test 1, S. 15',
    maxPlays: 1,
    speechScript: [
      {
        speaker: 'Lehrer Herr Brand (Schulleitung)',
        textDe: `Guten Abend, liebe Eltern! Ich begrüße Sie herzlich zu unserem Informationsabend über die bevorstehende Ferienreise unserer Schule. Mein Name ist Martin Brand, und als stellvertretender Schulleiter freue ich mich, Ihnen mitteilen zu können, dass diesmal nicht nur unsere bewährten Klassenlehrer Herr Krause und Frau Lindner die Gruppe begleiten, sondern wir auch unseren Schuldirektor Herrn Dr. Weber mit an Bord haben werden.
Sie alle haben ja bereits per E-Mail den detaillierten Flug- und Zeitplan erhalten, sodass Ihnen die genauen Abflug- und Ankunftszeiten bestens bekannt sind. Was heute im Mittelpunkt steht, ist der konkrete Tagesablauf vor Ort im Feriencamp Papstdorf in der Sächsischen Schweiz.
Die Reise dorthin erfolgt bequem und sicher in einem modernen Reisebus direkt von unserem Schulhof nach Papstdorf, nicht nach Dresden oder Brandenburg, wie anfangs überlegt worden war.
Vor Ort wohnen die Schüler in gemütlichen Holzbungalows. In jedem Bungalow übernachten jeweils vier Schüler zusammen, was für eine ideale Gruppendynamik sorgt.
Was die Verpflegung angeht: Ihre Kinder erhalten dreimal am Tag eine vollwertige, warme Mahlzeit im zentralen Speisesaal des Camps, frisches Obst steht rund um die Uhr bereit. Sie müssen sich also um die Ernährung absolut keine Sorgen machen!`,
        textAr: 'أمسية أولياء الأمور: سيرافق الرحلة مدير المدرسة، مواعيد السفر معروفة مسبقاً، الوجهة هي بابستدورف بالباص، الإقامة 4 طلاب في كل كوخ، و3 وجبات طعام يومياً.'
      }
    ],
    questions: [
      {
        id: 11,
        type: 'multiple_choice',
        questionDe: 'Wer fährt mit ins Camp?',
        questionAr: 'من يرافق الطلاب في الرحلة إلى المخيم؟',
        options: [
          { key: 'a', textDe: 'Der Direktor der Schule.', textAr: 'مدير المدرسة.' },
          { key: 'b', textDe: 'Der Techniker der Schule.', textAr: 'فني وتقني المدرسة.' },
          { key: 'c', textDe: 'Lehrer der Schule.', textAr: 'معلمو المدرسة فقط.' }
        ],
        correctAnswer: 'a',
        explanationDe: 'Der Sprecher betont: "...dass wir auch unseren Schuldirektor Herrn Dr. Weber mit an Bord haben werden."',
        explanationAr: 'أكد نائب المدير أن مدير المدرسة د. فيبر نفسه سيرافق الرحلة هذه المرة.'
      },
      {
        id: 12,
        type: 'multiple_choice',
        questionDe: 'Was ist den Eltern bereits bekannt?',
        questionAr: 'ما هو الشيء المعلوم مسبقاً لأولياء الأمور؟',
        options: [
          { key: 'a', textDe: 'Wann die Schüler abfliegen und ankommen.', textAr: 'مواعيد إقلاع ورحلات الطلاب ووصولهم.' },
          { key: 'b', textDe: 'Was jeden Tag auf dem Programm steht.', textAr: 'البرنامج اليومي التفصيلي.' },
          { key: 'c', textDe: 'Wie das Feriencamp aussieht.', textAr: 'شكل وتفاصيل المخيم.' }
        ],
        correctAnswer: 'a',
        explanationDe: 'Im Text: "Sie alle haben ja bereits per E-Mail den detaillierten Flug- und Zeitplan erhalten, sodass Ihnen die genauen Abflug- und Ankunftszeiten bestens bekannt sind."',
        explanationAr: 'استلم أولياء الأمور جدول المواعيد وساعات الذهاب والعودة مسبقاً عبر الإيميل.'
      },
      {
        id: 13,
        type: 'multiple_choice',
        questionDe: 'Die Kinder und ihre Begleiter fahren mit dem Bus ...',
        questionAr: 'يسافر الأطفال والمشرفون بالحافلة إلى ...',
        options: [
          { key: 'a', textDe: 'nach Brandenburg.', textAr: 'إلى براندنبورغ.' },
          { key: 'b', textDe: 'nach Papstdorf.', textAr: 'إلى بابستدورف.' },
          { key: 'c', textDe: 'nach Dresden.', textAr: 'إلى دريسدن.' }
        ],
        correctAnswer: 'b',
        explanationDe: 'Im Text: "...direkt von unserem Schulhof nach Papstdorf, nicht nach Dresden oder Brandenburg".',
        explanationAr: 'الرحلة بالحافلة مباشرة إلى قرية بابستدورف في ولاية ساكسونيا.'
      },
      {
        id: 14,
        type: 'multiple_choice',
        questionDe: 'Wie viele Kinder wohnen in einem Bungalow?',
        questionAr: 'كم طفلاً يقيم في كل كوخ خشبي (Bungalow)؟',
        options: [
          { key: 'a', textDe: 'Acht.', textAr: 'ثمانية.' },
          { key: 'b', textDe: 'Vier.', textAr: 'أربعة.' },
          { key: 'c', textDe: 'Zwei.', textAr: 'اثنان.' }
        ],
        correctAnswer: 'b',
        explanationDe: 'Im Text: "In jedem Bungalow übernachten jeweils vier Schüler zusammen".',
        explanationAr: 'ذكر صراحة: في كل كوخ يبيت أربعة تلاميذ معاً.'
      },
      {
        id: 15,
        type: 'multiple_choice',
        questionDe: 'Die Kinder essen ...',
        questionAr: 'يتناول الأطفال طعامهم ...',
        options: [
          { key: 'a', textDe: 'jeden Tag in Gaststätten.', textAr: 'يومياً في المطاعم.' },
          { key: 'b', textDe: 'dreimal am Tag.', textAr: 'ثلاث مرات يومياً في قاعة الطعام.' },
          { key: 'c', textDe: 'an einem Kiosk.', textAr: 'من كشك الوجبات الخفيفة.' }
        ],
        correctAnswer: 'b',
        explanationDe: 'Im Text: "Ihre Kinder erhalten dreimal am Tag eine vollwertige, warme Mahlzeit".',
        explanationAr: 'يحصل الأطفال على 3 وجبات كاملة يومياً في صالة طعام المخيم.'
      }
    ]
  },

  // ================= TEIL 3 =================
  {
    id: 'hoeren-t3-set1',
    teil: 3,
    testNumber: 1,
    titleDe: 'Hören Teil 3: Gespräch an der Bushaltestelle (Geburtstagsparty)',
    titleAr: 'الاستماع الجزء 3: حوار في محطة الحافلات (حفل عيد الميلاد)',
    situationDe: 'Sie hören nun ein Gespräch. Sie hören das Gespräch einmal. Dazu lösen Sie sieben Aufgaben. Wählen Sie: Sind die Aussagen richtig oder falsch? Sie warten an einer Bushaltestelle auf den Bus in die Stadt und hören, wie sich zwei Jugendliche über eine Geburtstagsparty unterhalten.',
    situationAr: 'ستستمع الآن إلى محادثة لمرة واحدة فقط (1x). أجب عما إذا كانت العبارات صحيحة أم خاطئة. الموقف: أنت في محطة الحافلات وتستمع لشاب وفتاة يتحدثان عن حفلة عيد ميلاد سيلينا.',
    source: 'Zertifikat B1 neu, Test 1, S. 16',
    maxPlays: 1,
    speechScript: [
      {
        speaker: 'Jan',
        textDe: 'Hi Selina! Was machst du denn hier an der Haltestelle? Fährst du auch in die Stadt?',
        textAr: 'مرحباً سيلينا! ماذا تفعلين في المحطة؟ هل أنت ذاهبة للمدينة أيضاً؟'
      },
      {
        speaker: 'Selina',
        textDe: 'Ja, Jan! Ich muss unbedingt ein paar Besorgungen machen. Am Samstag feiere ich doch meinen 16. Geburtstag!',
        textAr: 'نعم يا يان! علي شراء بعض المستلزمات، فالسبت القادم سأحتفل بعيد ميلادي الـ 16!'
      },
      {
        speaker: 'Jan',
        textDe: 'Stimmt ja! Und wo steigt die Party? Bei dir zu Hause im Garten?',
        textAr: 'صحيح! وأين الحفل؟ في حديقة منزلك؟'
      },
      {
        speaker: 'Selina',
        textDe: 'Nein, bloß nicht zu Hause! Meine Eltern haben zwar überhaupt nichts gegen eine Party, aber meine Mutter meinte, wenn 20 Jugendliche durchs Wohnzimmer toben, dreht sie durch. Also miete ich den Jugendclub an der Sporthalle.',
        textAr: 'كلا، ليس في البيت! والداي ليسا ضد الحفل أبداً، لكن أمي تخشى الفوضى، لذا استأجرت نادي الشباب.'
      },
      {
        speaker: 'Jan',
        textDe: 'Gute Idee. Aber kostet das nicht eine Stange Geld? Du wolltest doch im Sommer nach England reisen für deinen Sprachkurs und deinen Traumberuf als Dolmetscherin?',
        textAr: 'فكرة ممتازة، لكن ألا يكلف ذلك مالاً كثيراً؟ ألم تكوني تدخرين لرحلة بريطانيا من أجل حلمك كمترجمة فورية؟'
      },
      {
        speaker: 'Selina',
        textDe: 'Doch, die Sprachreise nach England ist für meine beruflichen Pläne total wichtig. Aber die Miete für den Club bezahlt mein Onkel als Geschenk. Ich muss nur Getränke und Snacks besorgen.',
        textAr: 'بلى، رحلة إنجلترا مهمة جداً لمستقبلي المهني. لكن عمي تكفل بدفع إيجار النادي كهدية لي.'
      },
      {
        speaker: 'Jan',
        textDe: 'Super! Und wer kommt alles? Hast du auch Pascal eingeladen?',
        textAr: 'رائع! ومن سيحضر؟ هل دعوتِ باسكال أيضاً؟'
      },
      {
        speaker: 'Selina',
        textDe: 'Pascal? Nein, auf keinen Fall! Den Typen kann ich echt nicht ausstehen, der redet immer nur über seine teuren Markenklamotten. Dessen Geburtstagsparty letzte Woche hat angeblich tausend Euro gekostet, aber total langweilig war es trotzdem.',
        textAr: 'باسكال؟ مستحيل! لا أطيقه أبداً، فهو مغرور ولا يتحدث إلا عن ملابسه الغالية، وحفلته الأسبوع الماضي كانت مملة رغم أنها كلفت ألف يورو.'
      },
      {
        speaker: 'Jan',
        textDe: 'Da hast du völlig recht. Na, dann wünsche ich dir viel Spaß beim Einkaufen in der Stadt!',
        textAr: 'معك حق تماماً. حسناً، أتمنى لك تسوقاً ممتعاً في المدينة!'
      }
    ],
    questions: [
      {
        id: 16,
        type: 'richtig_falsch',
        questionDe: 'Selina will wegen ihrer Geburtstagsparty in die Stadt fahren.',
        questionAr: 'سيلينا تريد الذهاب إلى المدينة من أجل التحضير لحفل عيد ميلادها.',
        correctAnswer: 'Richtig',
        explanationDe: 'Sie sagt: "Ich muss unbedingt ein paar Besorgungen machen. Am Samstag feiere ich doch meinen 16. Geburtstag!"',
        explanationAr: 'أكدت أنها ذاهبة للتسوق وقضاء مستلزمات حفل عيد ميلادها.'
      },
      {
        id: 17,
        type: 'richtig_falsch',
        questionDe: 'Selina will bei sich zu Hause keine Party machen.',
        questionAr: 'سيلينا لا تريد إقامة الحفل في منزلها.',
        correctAnswer: 'Richtig',
        explanationDe: 'Sie sagt: "Nein, bloß nicht zu Hause!... Also miete ich den Jugendclub an der Sporthalle."',
        explanationAr: 'رفضت إقامة الحفل في المنزل وقامت باستئجار نادي الشباب.'
      },
      {
        id: 18,
        type: 'richtig_falsch',
        questionDe: 'Selinas Eltern sind gegen die Party.',
        questionAr: 'والدا سيلينا يعارضان إقامة الحفلة.',
        correctAnswer: 'Falsch',
        explanationDe: 'Im Text: "Meine Eltern haben zwar überhaupt nichts gegen eine Party..."',
        explanationAr: 'والداها لا يعارضان الحفلة أبداً، بل فقط فضلا عدم إقامتها داخل الصالون.'
      },
      {
        id: 19,
        type: 'richtig_falsch',
        questionDe: 'Für Selinas Berufswunsch ist die Reise nach England wichtig.',
        questionAr: 'رحلة إنجلترا مهمة بالنسبة لرغبة سيلينا المهنية المستقبلية.',
        correctAnswer: 'Richtig',
        explanationDe: 'Im Text: "Doch, die Sprachreise nach England ist für meine beruflichen Pläne total wichtig (Dolmetscherin)."',
        explanationAr: 'تريد أن تصبح مترجمة فورية والرحلة اللغوية هامة جداً لطموحها.'
      },
      {
        id: 20,
        type: 'richtig_falsch',
        questionDe: 'Jan hat dieselbe Meinung wie Selinas Eltern.',
        questionAr: 'يان لديه نفس رأي والدي سيلينا بخصوص إقامة الحفل.',
        correctAnswer: 'Falsch',
        explanationDe: 'Jan schlug zuerst vor, im Garten zu feiern ("Bei dir zu Hause im Garten?"), was die Eltern nicht wollten.',
        explanationAr: 'يان اقترح إقامة الحفل في حديقة المنزل، وهو ما رفضته الأم.'
      },
      {
        id: 21,
        type: 'richtig_falsch',
        questionDe: 'Selina mag Pascal nicht.',
        questionAr: 'سيلينا لا تحب باسكال ولا تطيقه.',
        correctAnswer: 'Richtig',
        explanationDe: 'Sie sagt: "Pascal? Nein, auf keinen Fall! Den Typen kann ich echt nicht ausstehen..."',
        explanationAr: 'قالت صراحة إنها لا تطيق باسكال وترفض دعوته قطعياً.'
      },
      {
        id: 22,
        type: 'richtig_falsch',
        questionDe: 'Pascals Party hat viel Geld gekostet.',
        questionAr: 'حفلة باسكال كلفت الكثير من المال.',
        correctAnswer: 'Richtig',
        explanationDe: 'Im Text: "Dessen Geburtstagsparty letzte Woche hat angeblich tausend Euro gekostet".',
        explanationAr: 'ذكرت أن حفلته الأسبوع الماضي كلفت حوالي ألف يورو.'
      }
    ]
  },

  // ================= TEIL 4 =================
  {
    id: 'hoeren-t4-set1',
    teil: 4,
    testNumber: 1,
    titleDe: 'Hören Teil 4: Diskussion über Workcamps (Freiwilligenarbeit)',
    titleAr: 'الاستماع الجزء 4: حلقة نقاشية حول مخيمات العمل التطوعي (Workcamps)',
    situationDe: 'Sie hören nun eine Diskussion. Sie hören die Diskussion zweimal. Dazu lösen Sie acht Aufgaben. Ordnen Sie die Aussagen zu: Wer sagt was? Eine Moderatorin diskutiert mit zwei jungen Leuten, Iris Berger und Kai Weser, über „Workcamps".',
    situationAr: 'ستستمع إلى مناقشة مرتين (2x). حدد قائل كل عبارة: المذيعة (a)، إيريس بيرغر (b)، أم كاي فيزر (c).',
    source: 'Zertifikat B1 neu, Test 1, S. 17',
    maxPlays: 2,
    speechScript: [
      {
        speaker: 'Moderatorin',
        textDe: 'Guten Abend, liebe Hörerinnen und Hörer, und willkommen zu unserer Sendung „Treffpunkt Jugend". Heute sprechen wir über ein Phänomen, das immer beliebter wird: Internationale Workcamps. Immer mehr junge Menschen verbringen ihre Ferien nicht am Strand, sondern helfen ehrenamtlich bei sozialen und ökologischen Projekten. Bei mir im Studio sind heute Iris Berger und Kai Weser. Iris, du warst letztes Jahr in einem Workcamp in Griechenland. Wie groß ist denn überhaupt die Auswahl an solchen Projekten?',
        textAr: 'المذيعة: أهلاً بكم في برنامجنا. مخيمات العمل التطوعي تزداد شعبية. ضيفاي اليوم إيريس وكاي. إيريس، كيف ترين حجم العروض والمشاريع المتاحة؟'
      },
      {
        speaker: 'Iris Berger',
        textDe: 'Hallo! Also, das Angebot an Projekten ist wirklich riesig. Man kann im Naturschutz mitarbeiten, historische Burgen renovieren oder sich in sozialen Einrichtungen engagieren. Es gibt weltweit tausende Möglichkeiten für jeden Geschmack. Was mir besonders gefallen hat: Auch wenn man hart arbeitet, kann man in der Freizeit wahnsinnig viel unternehmen. Wir haben am Wochenende Ausflüge ans Meer gemacht, Beachvolleyball gespielt und zusammen gegrillt.',
        textAr: 'إيريس بيرغر: العروض ضخمة ومتنوعة في الطبيعة والترميم. وما أعجبني أنه رغم العمل الشاق، يمكن قضاء وقت فراغ حافل بالرحلات والرياضة.'
      },
      {
        speaker: 'Kai Weser',
        textDe: 'Ja, das stimmt! Ich war drei Wochen in einem Umweltschutzcamp in Costa Rica. Und für mich war der größte Vorteil ganz klar die Sprache: Man kann enorme Fortschritte in einer Fremdsprache machen, weil im Camp praktisch nur Englisch und Spanisch gesprochen wurde. Nach zwei Wochen träumt man sogar in der Fremdsprache! Außerdem ist solche Freiwilligenarbeit später ein echter Pluspunkt in jeder Bewerbung. Arbeitgeber schätzen soziales Engagement und internationale Teamfähigkeit sehr.',
        textAr: 'كاي فيزر: كنت في كوستاريكا. الفائدة الكبرى هي التطور الهائل في اللغة الأجنبية لأننا تحدثنا الإنجليزية والإسبانية فقط. كما أن العمل التطوعي ميزة ذهبية في السيرة الذاتية لدى أصحاب العمل.'
      },
      {
        speaker: 'Moderatorin',
        textDe: 'Ein sehr wichtiges Argument, Kai. Aber wie sieht es mit der lokalen Bevölkerung aus, Iris? Werden die Menschen vor Ort auch miteinbezogen?',
        textAr: 'المذيعة: نقطة مهمة جداً. ولكن ماذا عن السكان المحليين؟ هل يتم إشراكهم؟'
      },
      {
        speaker: 'Iris Berger',
        textDe: 'Auf jeden Fall! Bei unserem Projekt in Griechenland ging es darum, alte Wanderwege zu markieren und den Einwohnern zu erklären, wie wichtig der Schutz der heimischen Wälder vor Bränden ist. Die Einwohner wurden also ausführlich über den Umweltschutz informiert. Wir haben auch versucht, Jugendliche aus dem Dorf als weitere Helfer zu gewinnen, und viele machten begeistert mit.',
        textAr: 'إيريس بيرغر: بالتأكيد! قمنا بتوعية السكان المحليين بحماية الغابات من الحرائق، وسعينا بنجاح لاجتذاب متطوعين ومساعدين إضافيين من شباب القرية.'
      },
      {
        speaker: 'Kai Weser',
        textDe: 'In Costa Rica war es kulturell total spannend. Vieles in diesem fernen Land kann Europäer erst einmal überraschen: das tropische Klima, das ganz andere Essen und der völlig stressfreie Lebensrhythmus. Und am Ende: Man fühlt sich einfach fantastisch gut, weil man mit eigener Hände Arbeit etwas Sinnvolles bewirkt und mitgeholfen hat.',
        textAr: 'كاي فيزر: في كوستاريكا كان الأمر مثيراً ثقافياً، فالعديد من الأمور هناك تفاجئ الأوروبيين (المناخ، الطعام، نمط الحياة الهادئ). وفي الختام يشعر المرء بالرضا الداخلي العظيم لأنه ساهم بيديه في مساعدة الآخرين.'
      }
    ],
    questions: [
      {
        id: 23,
        type: 'multiple_choice',
        questionDe: 'Das Angebot an Projekten ist groß.',
        questionAr: 'العروض والمشاريع التطوعية المتاحة ضخمة ومتنوعة.',
        options: [
          { key: 'a', textDe: 'Moderatorin', textAr: 'المذيعة' },
          { key: 'b', textDe: 'Iris Berger', textAr: 'إيريس بيرغر' },
          { key: 'c', textDe: 'Kai Weser', textAr: 'كاي فيزر' }
        ],
        correctAnswer: 'b',
        explanationDe: 'Iris Berger sagt: "Also, das Angebot an Projekten ist wirklich riesig."',
        explanationAr: 'قالت إيريس بيرغر: "العروض المتاحة ضخمة بالفعل في كل المجالات".'
      },
      {
        id: 24,
        type: 'multiple_choice',
        questionDe: 'In der Freizeit kann man vieles machen.',
        questionAr: 'في أوقات الفراغ يمكن للمتطوع ممارسة أنشطة كثيرة ومتنوعة.',
        options: [
          { key: 'a', textDe: 'Moderatorin', textAr: 'المذيعة' },
          { key: 'b', textDe: 'Iris Berger', textAr: 'إيريس بيرغر' },
          { key: 'c', textDe: 'Kai Weser', textAr: 'كاي فيزر' }
        ],
        correctAnswer: 'b',
        explanationDe: 'Iris Berger berichtet über Freizeitaktivitäten wie Ausflüge ans Meer und Beachvolleyball.',
        explanationAr: 'إيريس بيرغر تحدثت عن الرحلات الشاطئية وحفلات الشواء في وقت الفراغ.'
      },
      {
        id: 25,
        type: 'multiple_choice',
        questionDe: 'Man kann Fortschritte in einer Sprache machen.',
        questionAr: 'يستطيع المرء إحراز تقدم وتطور ملموس في اللغة الأجنبية.',
        options: [
          { key: 'a', textDe: 'Moderatorin', textAr: 'المذيعة' },
          { key: 'b', textDe: 'Iris Berger', textAr: 'إيريس بيرغر' },
          { key: 'c', textDe: 'Kai Weser', textAr: 'كاي فيزر' }
        ],
        correctAnswer: 'c',
        explanationDe: 'Kai Weser betont: "Man kann enorme Fortschritte in einer Fremdsprache machen...".',
        explanationAr: 'كاي فيزر أكد أن التطوير اللغوي بالإنجليزية والإسبانية كان الميزة الأبرز.'
      },
      {
        id: 26,
        type: 'multiple_choice',
        questionDe: 'Freiwilligenarbeit ist ein Plus in einer Bewerbung.',
        questionAr: 'العمل التطوعي يُعد ميزة إيجابية كبيرة في طلب التوظيف والسيرة الذاتية.',
        options: [
          { key: 'a', textDe: 'Moderatorin', textAr: 'المذيعة' },
          { key: 'b', textDe: 'Iris Berger', textAr: 'إيريس بيرغر' },
          { key: 'c', textDe: 'Kai Weser', textAr: 'كاي فيزر' }
        ],
        correctAnswer: 'c',
        explanationDe: 'Kai Weser sagt: "Außerdem ist solche Freiwilligenarbeit später ein echter Pluspunkt in jeder Bewerbung."',
        explanationAr: 'كاي فيزر هو من ذكر أن أرباب العمل يقدرون هذه الخبرة كـ Pluspunkt في ملف التقديم.'
      },
      {
        id: 27,
        type: 'multiple_choice',
        questionDe: 'Man versucht, weitere Helfer zu gewinnen.',
        questionAr: 'يتم السعي لاجتذاب متطوعين ومساعدين إضافيين للمشاركة.',
        options: [
          { key: 'a', textDe: 'Moderatorin', textAr: 'المذيعة' },
          { key: 'b', textDe: 'Iris Berger', textAr: 'إيريس بيرغر' },
          { key: 'c', textDe: 'Kai Weser', textAr: 'كاي فيزر' }
        ],
        correctAnswer: 'b',
        explanationDe: 'Iris Berger: "Wir haben auch versucht, Jugendliche aus dem Dorf als weitere Helfer zu gewinnen...".',
        explanationAr: 'إيريس بيرغر ذكرت محاولتهم الناجحة لضم شباب القرية للمساعدة.'
      },
      {
        id: 28,
        type: 'multiple_choice',
        questionDe: 'Die Einwohner werden über den Umweltschutz informiert.',
        questionAr: 'يتم إعلام وتوعية السكان المحليين بحماية البيئة.',
        options: [
          { key: 'a', textDe: 'Moderatorin', textAr: 'المذيعة' },
          { key: 'b', textDe: 'Iris Berger', textAr: 'إيريس بيرغر' },
          { key: 'c', textDe: 'Kai Weser', textAr: 'كاي فيزر' }
        ],
        correctAnswer: 'b',
        explanationDe: 'Iris Berger berichtet: "Die Einwohner wurden also ausführlich über den Umweltschutz informiert."',
        explanationAr: 'إيريس بيرغر أوضحت توعيتهم لسكان القرية بحماية الغابات من الحرائق.'
      },
      {
        id: 29,
        type: 'multiple_choice',
        questionDe: 'Vieles in diesem Land kann Europäer überraschen.',
        questionAr: 'العديد من الأمور في هذا البلد البعيد قد تفاجئ الأوروبيين.',
        options: [
          { key: 'a', textDe: 'Moderatorin', textAr: 'المذيعة' },
          { key: 'b', textDe: 'Iris Berger', textAr: 'إيريس بيرغر' },
          { key: 'c', textDe: 'Kai Weser', textAr: 'كاي فيزر' }
        ],
        correctAnswer: 'c',
        explanationDe: 'Kai Weser: "Vieles in diesem fernen Land kann Europäer erst einmal überraschen: das tropische Klima, das ganz andere Essen...".',
        explanationAr: 'كاي فيزر هو من تحدث عن دهشة ومفاجأة الأوروبيين في كوستاريكا.'
      },
      {
        id: 30,
        type: 'multiple_choice',
        questionDe: 'Man fühlt sich gut, weil man mitgeholfen hat.',
        questionAr: 'يشعر المرء بشعور رائع وإيجابي لأنه ساهم في تقديم المساعدة.',
        options: [
          { key: 'a', textDe: 'Moderatorin', textAr: 'المذيعة' },
          { key: 'b', textDe: 'Iris Berger', textAr: 'إيريس بيرغر' },
          { key: 'c', textDe: 'Kai Weser', textAr: 'كاي فيزر' }
        ],
        correctAnswer: 'c',
        explanationDe: 'Kai Weser: "Man fühlt sich einfach fantastisch gut, weil man mit eigener Hände Arbeit etwas Sinnvolles bewirkt und mitgeholfen hat."',
        explanationAr: 'كاي فيزر يختم ببيان مشاعر الفخر والسعادة العميقة بالعمل الإنساني المفيد.'
      }
    ]
  }
];
