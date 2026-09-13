import { Prisma } from "@generated/prisma/client";

type SeedPostsTranslation = Prisma.PostTranslationCreateWithoutPostInput;

type SeedPost = Omit<Prisma.PostCreateInput, "admin" | "adminId"> & {
  translations: SeedPostsTranslation[];
};

export const seedPosts: SeedPost[] = [
  {
    imageUrl: "/images/posts/blog-1.webp",
    translations: [
      {
        locale: "en",
        title:
          "How to Choose Your First Electric Guitar: A Complete Beginner's Guide",
        subtitle:
          "Understanding body shapes, pickup configurations, and key factors before buying",
        description: `Buying your first electric guitar is an exciting milestone, and choosing the right instrument can make or break your learning journey. The golden rule for beginners is simple: pick a guitar that feels comfortable and inspires you to pick it up and play every single day. Pay close attention to body ergonomics and neck profiles. A classic Stratocaster shape offers contoured comfort for long practice sessions, while a Les Paul style delivers a beefier feel with rich, singing sustain. Equally important is the pickup configuration: single-coil pickups provide bright, articulate tones perfect for funk and blues, whereas humbuckers eliminate unwanted hum and deliver thick overdrive suited for rock and metal.`,
        descriptionTwo: `Before finalizing your purchase, always inspect the string action (height above the frets). High action forces your hands to work twice as hard, while action that is too low causes unpleasant fret buzz. Additionally, run your hand along the sides of the neck to ensure the fret ends are smoothly finished and won't scratch your fingers while sliding. Don't forget to factor essential accessories into your budget: a sturdy strap, a pack of assorted picks, a padded gig bag for transportation, and a reliable practice amplifier or audio interface to plug into your computer.`,
        list: [
          "Determine your primary music genre: an HSS (Humbucker-Single-Single) setup offers maximum versatility.",
          "Inspect the neck relief and truss rod adjustment before purchasing.",
          "Stick to reputable brands in the entry-to-mid level tier rather than unbranded instruments.",
          "Get a proper setup (adjusting intonation and action) right after buying your guitar.",
        ],
      },
      {
        locale: "de",
        title:
          "So wählen Sie Ihre erste E-Gitarre aus: Ein umfassender Leitfaden für Anfänger",
        subtitle:
          "Verständnis von Korpusformen, Tonabnehmer-Konfigurationen und wichtigen Faktoren vor dem Kauf",
        description: `Der Kauf der ersten E-Gitarre ist ein aufregender Meilenstein, und die Wahl des richtigen Instruments kann entscheidend für den Erfolg deines Lernprozesses sein. Die goldene Regel für Anfänger lautet: Wähle eine Gitarre, die sich angenehm anfühlt und dich dazu inspiriert, sie jeden Tag in die Hand zu nehmen und zu spielen. Achte besonders auf die Ergonomie des Korpus und das Halsprofil. Die klassische Stratocaster-Form bietet dank ihrer Konturen hohen Komfort bei langen Übungseinheiten, während eine Gitarre im Les-Paul-Stil ein kräftigeres Spielgefühl sowie ein sattes, singendes Sustain vermittelt. Ebenso wichtig ist die Tonabnehmer-Bestückung: Single-Coil-Tonabnehmer liefern einen hellen, differenzierten Klang, der sich hervorragend für Funk und Blues eignet, wohingegen Humbucker unerwünschtes Brummen unterdrücken und einen druckvollen Overdrive-Sound für Rock und Metal liefern.`,
        descriptionTwo: `Überprüfen Sie vor dem Kauf unbedingt die Saitenlage (den Abstand der Saiten zu den Bundstäbchen). Eine zu hohe Saitenlage erfordert einen deutlich höheren Kraftaufwand, während eine zu niedrige Lage unangenehmes Schnarren der Saiten verursacht. Fahren Sie zudem mit der Hand an den Halsrändern entlang, um sicherzustellen, dass die Bundenden sauber abgerundet sind und beim Spielen nicht an den Fingern kratzen. Vergessen Sie auch nicht, wichtiges Zubehör in Ihr Budget einzukalkulieren: einen stabilen Gurt, ein Set verschiedener Plektren, eine gepolsterte Tasche (Gigbag) für den Transport sowie einen zuverlässigen Übungsverstärker oder ein Audio-Interface für den Anschluss an den Computer.`,
        list: [
          "Bestimme dein bevorzugtes Musikgenre: Eine HSS-Konfiguration (Humbucker-Single-Single) bietet maximale Vielseitigkeit.",
          "Überprüfen Sie vor dem Kauf die Halskrümmung und die Einstellung des Halsspannstabs.",
          "Greifen Sie eher zu renommierten Marken im Einsteiger- bis Mittelklassebereich als zu Instrumenten ohne Markennamen.",
          "Lass deine Gitarre direkt nach dem Kauf fachgerecht einstellen (Anpassung von Intonation und Saitenlage).",
        ],
      },
    ],
  },
  {
    imageUrl: "/images/posts/blog-3.webp",
    translations: [
      {
        locale: "en",
        title: "Tube vs. Digital Modeling: Modern Guitar Tone in 2026",
        subtitle:
          "Comparing traditional vacuum tube amplifiers with cutting-edge digital processors",
        description: `The age-old debate between tube amp purists and digital modeling enthusiasts continues to evolve, but recent breakthroughs in neural profiling and Impulse Responses (IRs) have narrowed the gap like never before. Traditional tube amplifiers remain beloved for their organic dynamic response, natural power-section compression, and immediate tactile touch sensitivity. Every nuance of your pick attack translates seamlessly, creating a living, breathing overdrive tone. However, tube rigs come with heavy enclosures, fragile glass valves, and require high volume levels to hit their sweet spot.`,
        descriptionTwo: `On the flip side, modern digital modelers and software plugins pack hundreds of legendary amplifiers, cabinets, and studio-grade effects into a single lightweight unit. You can capture the sound of a cranked British stack at bedroom volumes or send a pristine direct signal straight to the front-of-house mixer without ever touching a microphone. Ultimately, your choice comes down to workflow: digital modeling offers unmatched portability and consistency for touring musicians and home studios, while tube amps remain the gold standard for rehearsal spaces and traditional stage setups.`,
        list: [
          "Tube amplifiers require periodic tube replacements and careful handling during transport.",
          "Digital modelers allow direct FOH routing with absolute volume control.",
          "High-quality Speaker Impulse Responses (IRs) are critical for authentic digital tones.",
          "Hybrid setups pair physical analog drive pedals with digital delay and reverb units.",
        ],
      },
      {
        locale: "de",
        title:
          "Röhre vs. Digital Modeling: Moderner Gitarrensound im Jahr 2026",
        subtitle:
          "Vergleich herkömmlicher Röhrenverstärker mit hochmodernen digitalen Prozessoren",
        description: `Die uralte Debatte zwischen Röhrenverstärker-Puristen und Enthusiasten digitaler Modellierung entwickelt sich stetig weiter, doch jüngste Fortschritte in der neuronalen Profilierung und bei Impulsantworten (IRs) haben die Kluft so weit wie nie zuvor verringert. Traditionelle Röhrenverstärker sind nach wie vor beliebt für ihre organische Dynamik, die natürliche Kompression der Endstufe und die unmittelbare, taktile Ansprache. Jede Nuance des Anschlags wird nahtlos übertragen und erzeugt einen lebendigen, authentischen Overdrive-Sound. Allerdings haben Röhrenverstärker schwere Gehäuse, empfindliche Glasröhren und benötigen hohe Lautstärken, um ihr volles Potenzial auszuschöpfen.`,
        descriptionTwo: `Andererseits vereinen moderne digitale Modeler und Software-Plugins Hunderte legendärer Verstärker, Lautsprecherboxen und Effekte in Studioqualität in einem einzigen, leichten Gerät. Man kann den Sound eines voll aufgedrehten britischen Stacks bei Zimmerlautstärke einfangen oder ein makelloses Direktsignal direkt an das Mischpult der PA senden, ohne jemals ein Mikrofon zu verwenden. Letztendlich hängt die Entscheidung vom Arbeitsablauf ab: Digitales Modeling bietet tourenden Musikern und Heimstudios unübertroffene Mobilität und Konstanz, während Röhrenverstärker der Goldstandard für Proberäume und klassische Bühnen-Setups bleiben.`,
        list: [
          "Röhrenverstärker erfordern einen regelmäßigen Röhrenwechsel und einen sorgsamen Umgang beim Transport.",
          "Digitale Modeller ermöglichen direktes FOH-Routing mit absoluter Lautstärkeregelung.",
          "Hochwertige Lautsprecher-Impulsantworten (IRs) sind entscheidend für authentische digitale Sounds.",
          "Hybrid-Setups kombinieren analoge Drive-Pedale mit digitalen Delay- und Reverb-Geräten.",
        ],
      },
    ],
  },
  {
    imageUrl: "/images/posts/blog-3.webp",
    translations: [
      {
        locale: "en",
        title: "Guitar Maintenance 101: Essential Care for Lasting Performance",
        subtitle:
          "Simple habits for cleaning, conditioning, and maintaining proper humidity levels",
        description: `Guitars are crafted from natural tonewoods that actively react to ambient environmental changes. Severe fluctuations in temperature and humidity can cause neck warping, protruding fret ends, and even structural cracks in acoustic and electric instruments alike.

Maintaining an optimal relative humidity level between 40% and 50% is crucial. During dry winter months, using a room humidifier or case-based guitar humidifier is strongly recommended. Avoid storing your instrument near radiators, heating vents, or in direct sunlight.`,
        descriptionTwo: `Conditioning your fretboard during string changes is another vital maintenance step. Clean off finger grime and apply lemon oil to unvarnished rosewood or ebony fretboards 2–3 times a year. For finished maple fretboards, use dedicated non-abrasive guitar cleaners to protect the lacquer finish.

Finally, always wipe down your strings with a microfiber cloth after every playing session. Removing sweat and oils prevents premature oxidation, keeping your strings sounding fresh and bright for significantly longer.`,
        list: [
          "Keep ambient humidity around 45% to prevent wood shrinkage and cracks.",
          "Condition rosewood and ebony fingerboards with lemon oil during string changes.",
          "Use specialized guitar polish to clean and preserve high-gloss body finishes.",
          "Always store your instrument in a padded gig bag or hardshell case when traveling.",
        ],
      },
      {
        locale: "de",
        title:
          "Gitarrenpflege – Grundlagen: Wichtige Pflege für dauerhafte Leistungsfähigkeit",
        subtitle:
          "Einfache Gewohnheiten für die Reinigung, Pflege und Aufrechterhaltung der richtigen Luftfeuchtigkeit",
        description: `Gitarren werden aus natürlichen Klanghölzern gefertigt, die aktiv auf Veränderungen der Umgebung reagieren. Starke Schwankungen von Temperatur und Luftfeuchtigkeit können dazu führen, dass sich der Hals verzieht, Bundstäbchenenden hervorstehen oder sogar strukturelle Risse entstehen – sowohl bei akustischen als auch bei elektrischen Instrumenten. Entscheidend ist die Einhaltung einer optimalen relativen Luftfeuchtigkeit zwischen 40 % und 50 %. Während der trockenen Wintermonate wird die Verwendung eines Luftbefeuchters für den Raum oder eines speziellen Befeuchters für den Gitarrenkoffer dringend empfohlen. Vermeiden Sie es, Ihr Instrument in der Nähe von Heizkörpern oder Heizungsschächten sowie in direktem Sonnenlicht aufzubewahren.`,
        descriptionTwo: `Die Pflege des Griffbretts beim Saitenwechsel ist ein weiterer wichtiger Wartungsschritt. Entfernen Sie Ablagerungen und behandeln Sie unlackierte Griffbretter aus Palisander oder Ebenholz zwei- bis dreimal jährlich mit Zitronenöl. Verwenden Sie für lackierte Ahorngriffbretter spezielle, nicht scheuernde Gitarrenreiniger, um die Lackschicht zu schonen.

Wischen Sie schließlich nach jedem Spielen die Saiten mit einem Mikrofasertuch ab. Durch das Entfernen von Schweiß und Hautfetten beugen Sie vorzeitiger Oxidation vor, sodass Ihre Saiten deutlich länger frisch und brillant klingen.`,
        list: [
          "Halten Sie die Luftfeuchtigkeit bei etwa 45 %, um ein Schrumpfen des Holzes und Rissbildung zu verhindern.",
          "Behandeln Sie Griffbretter aus Palisander und Ebenholz beim Saitenwechsel mit Zitronenöl.",
          "Verwenden Sie eine spezielle Gitarrenpolitur, um Hochglanz-Korpuslackierungen zu reinigen und zu pflegen.",
          "Bewahren Sie Ihr Instrument auf Reisen immer in einer gepolsterten Tasche oder einem Hartschalenkoffer auf.",
        ],
      },
    ],
  },
  {
    imageUrl: "/images/posts/blog-2.webp",
    translations: [
      {
        locale: "en",
        title: "Single-Coil vs. Humbucker: The Anatomy of Guitar Pickups",
        subtitle:
          "How magnetic transducers shape your instrument's core sonic signature",
        description: `Pickups act as the heart of your electric guitar, translating physical string vibrations into an electrical audio signal. Understanding the fundamental differences between pickup designs is key to dialing in your signature sound.

Single-coil pickups consist of a single coil of wire wrapped around magnetic pole pieces. Renowned for their glass-like clarity, bell-like chimes, and snappy attack, they shine in clean and low-gain settings. However, their single-coil construction naturally acts as an antenna for electromagnetic interference, producing the infamous 60-cycle hum under high-gain conditions.`,
        descriptionTwo: `Humbuckers were specifically engineered to solve the hum issue by wiring two coils together in reverse magnetic polarity and electrical phase, effectively "bucking" unwanted interference. They deliver a warmer, punchier midrange response with higher output, making them the industry standard for hard rock, metal, and jazz.

Active pickups utilize internal 9V battery preamp circuitry to deliver high-output, low-noise performance with exceptional note separation, making them ideal for ultra-fast, complex metal riffs.`,
        list: [
          "Single-coils excel at transparent, articulate clean tones but hum under distortion.",
          "Humbuckers cancel mains noise and provide thick, saturated overdrive tones.",
          "Coil-splitting (Push-Pull pots) turns off one humbucker coil to mimic single-coil voicing.",
          "Alnico magnets deliver vintage warmth, while Ceramic magnets offer aggressive high output.",
        ],
      },
      {
        locale: "de",
        title:
          "Single-Coil vs. Humbucker: Die Anatomie von Gitarren-Tonabnehmern",
        subtitle:
          "Wie magnetische Tonabnehmer die klangliche Grundcharakteristik Ihres Instruments prägen",
        description: `Tonabnehmer bilden das Herzstück deiner E-Gitarre und wandeln die physikalischen Schwingungen der Saiten in ein elektrisches Audiosignal um. Um deinen ganz persönlichen Sound zu finden, ist es entscheidend, die grundlegenden Unterschiede zwischen den verschiedenen Tonabnehmertypen zu verstehen.

Single-Coil-Tonabnehmer bestehen aus einer einzelnen Drahtspule, die um magnetische Polepieces gewickelt ist. Sie sind bekannt für ihre glasklare Transparenz, ihren glockenartigen Klang und eine schnelle Ansprache; besonders bei Clean- und Low-Gain-Einstellungen spielen sie ihre Stärken voll aus. Allerdings wirkt ihre Konstruktion mit nur einer Spule bauartbedingt wie eine Antenne für elektromagnetische Störungen, was bei High-Gain-Einstellungen das berüchtigte Netzbrummen (das sogenannte „60-Cycle Hum“) verursacht.`,
        descriptionTwo: `Humbucker wurden speziell entwickelt, um das Problem des Netzbrummens zu lösen: Durch die Verschaltung zweier Spulen mit entgegengesetzter magnetischer Polarität und elektrischer Phase werden unerwünschte Störgeräusche wirksam unterdrückt („gecancelt“). Sie liefern eine wärmere, druckvollere Mittenwiedergabe bei höherem Ausgangssignal, was sie zum Industriestandard für Hard Rock, Metal und Jazz macht.

Aktive Tonabnehmer nutzen eine interne, batteriebetriebene (9 V) Vorverstärkerschaltung, um ein starkes Ausgangssignal bei geringem Rauschen und hervorragender Saitentrennung zu liefern – ideal für ultraschnelle, komplexe Metal-Riffs.`,
        list: [
          "Single-Coils zeichnen sich durch transparente, differenzierte Clean-Sounds aus, neigen jedoch bei Verzerrung zum Brummen.",
          "Humbucker unterdrücken Netzbrummen und liefern dichte, gesättigte Overdrive-Sounds.",
          "Beim Coil-Splitting (mittels Push-Pull-Potis) wird eine der beiden Humbucker-Spulen abgeschaltet, um den Klang eines Single-Coils zu imitieren.",
          "Alnico-Magnete liefern Vintage-Wärme, während Keramik-Magnete einen aggressiven High-Output bieten.",
        ],
      },
    ],
  },
  {
    imageUrl: "/images/posts/blog-1.webp",
    translations: [
      {
        locale: "en",
        title: "Top 5 Must-Have Pedals for Building Your First Pedalboard",
        subtitle:
          "Building an essential, versatile signal chain from the ground up",
        description: `Building your first pedalboard is an exhilarating journey, but the vast array of stompboxes on the market can quickly become overwhelming. Focusing on core foundational utilities first ensures a versatile rig that handles any musical style.

Every solid board begins with a reliable chromatic tuner for instant silent tuning on stage. Right next to it sits an Overdrive pedal (like the classic Tube Screamer). An overdrive can either add warm, tube-like breakup to a clean channel or act as a boost to tighten up your amp's high-gain channel by trimming muddy low frequencies.`,
        descriptionTwo: `To introduce spatial depth, time-based effects are essential. A Delay pedal provides rhythmic repeats for soaring guitar solos, while a Reverb pedal simulates atmospheric spaces ranging from small studio rooms to cathedral halls.

Completing your starter board with a Modulation pedal (such as Chorus or Phaser) adds movement and 80s-style shimmer. Understanding proper signal chain ordering prevents sonic clutter and preserves maximum note definition.`,
        list: [
          "Overdrive / Boost: Essential for tone shaping, solo boosts, and pushing amplifiers.",
          "Delay: Adds spatial echoes and rhythmic repetition to lead lines.",
          "Reverb: Creates natural ambience, dimension, and atmospheric depth.",
          "Invest in an isolated power supply to eliminate unwanted ground loop noise.",
        ],
      },
      {
        locale: "de",
        title:
          "Die 5 wichtigsten Pedale für den Aufbau deines ersten Pedalboards",
        subtitle:
          "Aufbau einer essenziellen, vielseitigen Signalkette von Grund auf",
        description: `Der Aufbau des ersten Pedalboards ist ein spannendes Unterfangen, doch die riesige Auswahl an Effektgeräten auf dem Markt kann einen schnell überfordern. Wer sich zunächst auf die wichtigsten Basiseffekte konzentriert, schafft sich ein vielseitiges Setup, das für jeden Musikstil geeignet ist.

Jedes solide Board beginnt mit einem zuverlässigen chromatischen Stimmgerät, das schnelles und lautloses Stimmen auf der Bühne ermöglicht. Direkt daneben findet ein Overdrive-Pedal (wie der klassische Tube Screamer) seinen Platz. Ein Overdrive kann entweder einen Clean-Kanal mit warmer, röhrenartiger Sättigung anreichern oder als Boost dienen, um den High-Gain-Kanal des Verstärkers zu straffen, indem er undefinierte tiefe Frequenzen beschneidet.`,
        descriptionTwo: `Um räumliche Tiefe zu erzeugen, sind zeitbasierte Effekte unerlässlich. Ein Delay-Pedal liefert rhythmische Wiederholungen für ausdrucksstarke Gitarrensoli, während ein Reverb-Pedal atmosphärische Räume simuliert – von kleinen Studioräumen bis hin zu kathedralenartigen Hallen.

Die Ergänzung deines Einsteiger-Pedalboards um ein Modulationspedal (wie Chorus oder Phaser) sorgt für Bewegung und einen Schimmer im Stil der 80er Jahre. Die richtige Anordnung in der Signalkette verhindert einen undifferenzierten Klangbrei und bewahrt die optimale Definition der einzelnen Töne.`,
        list: [
          "Overdrive / Boost: Unverzichtbar für die Klanggestaltung, Solo-Boosts und das Ausreizen von Verstärkern.",
          "Delay: Fügt Lead-Linien räumliche Echos und rhythmische Wiederholungen hinzu.",
          "Reverb: Erzeugt natürliche Räumlichkeit, Dimension und atmosphärische Tiefe.",
          "Investieren Sie in ein galvanisch getrenntes Netzteil, um unerwünschte Störgeräusche durch Masseschleifen zu beseitigen.",
        ],
      },
    ],
  },
  {
    imageUrl: "/images/posts/blog-4.webp",
    translations: [
      {
        locale: "en",
        title:
          "Neck Anatomy: How Profile, Radius, and Frets Impact Playability",
        subtitle:
          "Demystifying technical neck specifications that dictate playing comfort",
        description: `The physical playability of a guitar depends heavily on the geometry of its neck. Two guitars with identical bodies can feel completely different in hand due to variations in neck profile, fingerboard radius, and fret wire size.

The neck profile (C-shape, V-shape, Thin U) defines the curvature of the back of the neck. Shredders often prefer thin, flat profiles for effortless high-speed passages, whereas blues players frequently opt for beefier C-shape necks that comfortably fill the palm when wrapping their thumb over the top.`,
        descriptionTwo: `Fingerboard radius refers to the arc across the width of the fretboard. A rounder radius (7.25" - 9.5") facilitates effortless chording near the nut, while a flatter radius (12" - 16") prevents high-register string bending from fretting out (choking the sustain).

Fret sizes (Medium Jumbo vs. Extra Jumbo) dictate how much finger pressure is required to fret notes cleanly. Taller fret wire reduces friction against the fingerboard wood, enabling smoother string bends and effortless vibrato.`,
        list: [
          "Fingerboard radius dictates the curvature across the top surface of the fretboard.",
          "Compound radius boards feature round lower frets for chording and flatter upper frets for soloing.",
          "Stainless steel frets resist wear over time and provide buttery-smooth string bends.",
          "The internal truss rod allows adjustment of neck relief to counteract string tension.",
        ],
      },
      {
        locale: "de",
        title:
          "Halsanatomie: Wie sich Profil, Radius und Bünde auf die Bespielbarkeit auswirken",
        subtitle:
          "Entschlüsselung technischer Hals-Spezifikationen, die den Spielkomfort bestimmen",
        description: `Die Bespielbarkeit einer Gitarre hängt maßgeblich von der Geometrie ihres Halses ab. Zwei Gitarren mit identischen Korpusformen können sich beim Spielen völlig unterschiedlich anfühlen – bedingt durch Unterschiede bei Halsprofil, Griffbrettradius und Bunddrahtstärke.

Das Halsprofil (z. B. C-Shape, V-Shape oder Thin U) bestimmt die Wölbung der Halsrückseite. „Shredder“ bevorzugen oft dünne, flache Profile, die mühelose Hochgeschwindigkeitspassagen ermöglichen, während sich Blues-Gitarristen häufig für kräftigere C-Shape-Hälse entscheiden; diese füllen die Handfläche angenehm aus, wenn der Daumen beim Greifen über die Halskante gelegt wird.`,
        descriptionTwo: `Der Griffbrettradius bezeichnet die Wölbung des Griffbretts über dessen Breite. Ein stärker gewölbter Radius (7,25" – 9,5") erleichtert das Greifen von Akkorden im Bereich des Sattels, während ein flacherer Radius (12" – 16") verhindert, dass Töne beim „Bending“ in den hohen Lagen abreißen (d. h. das Sustain verloren geht).

Die Bundgröße (Medium Jumbo vs. Extra Jumbo) bestimmt, wie viel Fingerdruck erforderlich ist, um Töne sauber zu greifen. Höhere Bundstäbchen verringern die Reibung auf dem Griffbrettholz, was geschmeidigere Bendings und ein müheloses Vibrato ermöglicht.`,
        list: [
          "Der Griffbrettradius bestimmt die Wölbung der Oberfläche des Griffbretts.",
          "Griffbretter mit Compound-Radius zeichnen sich durch stärker gewölbte Bünde im unteren Bereich für Akkordspiel und flachere Bünde im oberen Bereich für Solospiel aus.",
          "Edelstahlbünde sind verschleißfest und ermöglichen butterweiche Saiten-Bends.",
          "Der interne Halsstab ermöglicht die Anpassung der Halsentlastung, um der Saitenspannung entgegenzuwirken.",
        ],
      },
    ],
  },
];
