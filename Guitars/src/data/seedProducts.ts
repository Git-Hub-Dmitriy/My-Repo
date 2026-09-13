import { Prisma } from "@generated/prisma/client";

type SeedProductTranslation =
  Prisma.ProductTranslationCreateWithoutProductInput;

type SeedProduct = Omit<
  Prisma.ProductCreateInput,
  "categories" | "translations"
> & {
  categoryNames: string[];
  translations: SeedProductTranslation[];
};

export const seedProducts: SeedProduct[] = [
  {
    sku: "MWOOP12",
    price: 350.0,
    oldPrice: 0,
    image: "/images/products/MWOOP12.webp",
    size: ["L", "S"],
    groups: ["Featured"],
    categoryNames: [
      "8",
      "Accessories",
      "Acoustic",
      "Bass",
      "Electric",
      "Fretboard",
      "Jatoba",
      "Lyrica",
      "Mahogany",
      "Rosewood",
      "String",
      "Ukuleles",
      "Wood",
    ],
    translations: [
      {
        locale: "en",
        name: "Strap Guitar",
        title:
          "Heavy-duty adjustable guitar strap crafted from premium woven materials for maximum shoulder comfort during long gigs.",
        subtitle: "Ergonomic leather ends with reinforced stitching.",
        subtitleTwo: "Compatible with electric, acoustic, and bass guitars",
        description:
          "Designed for active performers who spend hours on stage, this premium guitar strap evenly distributes instrument weight across your shoulder to prevent strain and fatigue. Crafted from high-tensile woven nylon and finished with genuine leather button ends, it guarantees secure attachment even during energetic stage movements. The fully adjustable sliding mechanism allows players of any stature to dial in their ideal playing height quickly. Reinforced dual-layer stitching around the strap lock holes prevents tearing, ensuring your valuable instrument stays safe night after night.",
        descriptionTwo:
          "Available in classic patterns that complement any guitar finish, this strap combines durability, comfort, and effortless style. Whether you are gigging in clubs, rehearsing in the studio, or practicing at home, it delivers reliable performance you can trust.",
        tags: ["String", "Wood"],
        color: ["Yellow", "Blue"],
      },
      {
        locale: "de",
        name: "Strap Gitarre",
        title:
          "Robuster, verstellbarer Gitarrengurt aus hochwertigen Webmaterialien für maximalen Tragekomfort an den Schultern auch bei langen Auftritten.",
        subtitle: "Ergonomische Lederenden mit verstärkten Nähten.",
        subtitleTwo:
          "Kompatibel mit E-Gitarren, Akustikgitarren und Bassgitarren.",
        description:
          "Dieser Premium-Gitarrengurt wurde speziell für aktive Musiker entwickelt, die stundenlang auf der Bühne stehen. Er verteilt das Gewicht des Instruments gleichmäßig auf die Schulter und beugt so Belastung und Ermüdung vor. Gefertigt aus hochfestem, gewebtem Nylon und mit Knöpfen aus echtem Leder versehen, garantiert er sicheren Halt, selbst bei energiegeladenen Bühnenbewegungen. Dank des stufenlos verstellbaren Schiebemechanismus findet jeder Spieler, unabhängig von seiner Größe, schnell die optimale Spielhöhe. Verstärkte Doppelnähte an den Gurtverschlusslöchern verhindern ein Einreißen und sorgen dafür, dass Ihr wertvolles Instrument Abend für Abend bestens geschützt ist.",
        descriptionTwo:
          "Dieser Gitarrengurt ist in klassischen Designs erhältlich, die zu jeder Gitarrenlackierung passen, und vereint Langlebigkeit, Komfort und mühelosen Stil. Ob bei Clubauftritten, Studioproben oder beim Üben zu Hause – er bietet zuverlässige Leistung, auf die Sie sich verlassen können.",
        tags: ["Zeichenkette", "Holz"],
        color: ["Gelb", "Blau"],
      },
    ],
  },
  {
    sku: "MWOOP11",
    price: 190.0,
    oldPrice: 0,
    image: "/images/products/MWOOP11.webp",
    size: ["L", "S"],
    categoryNames: [
      "Accessories",
      "Acoustic",
      "Bass",
      "Electric",
      "Jatoba",
      "Konicy",
      "String",
      "Ukuleles",
    ],
    groups: ["Featured"],
    translations: [
      {
        locale: "en",
        name: "Spruce Guitar",
        title:
          "Acoustic guitar with a solid Sitka spruce top delivering articulate projection and crisp high-end response.",
        subtitle: "Resonant tonewood pairing with smooth playing neck profile.",
        subtitleTwo: "Ideal choice for fingerstyle players and songwriters",
        description: `The Spruce Guitar combines traditional craftsmanship with modern playability to deliver a clear, ringing acoustic tone. The solid Sitka spruce soundboard provides a dynamic sound range that opens up and matures the more you play, making it a reliable companion for both recording sessions and unplugged jams.

Featuring scalloped X-bracing under the hood, this guitar produces enhanced low-end resonance while keeping mid-range frequencies balanced and punchy. The satin-finished neck slides smoothly under your thumb, reducing palm friction during chord changes.`,
        descriptionTwo: `Equipped with die-cast tuning machines for rock-solid pitch stability, this model delivers unbeatable value for players seeking authentic acoustic resonance without breaking the bank.`,
        tags: [],
        color: ["Black", "Yellow", "Blue", "Brown", "Green", "Red"],
      },
      {
        locale: "de",
        name: "Spruce Gitarre",
        title:
          "Akustikgitarre mit massiver Sitka-Fichtendecke, die für eine artikulierte Projektion und eine klare Höhenwiedergabe sorgt.",
        subtitle:
          "Resonanzstarkes Tonholz trifft auf ein geschmeidiges Halsprofil.",
        subtitleTwo:
          "Die ideale Wahl für Fingerstyle-Gitarristen und Songwriter",
        description:
          "Die Spruce Guitar vereint traditionelle Handwerkskunst mit moderner Spielbarkeit und liefert einen klaren, vollen Akustikklang. Die massive Sitka-Fichtendecke bietet ein dynamisches Klangspektrum, das sich mit zunehmender Spieldauer erweitert und weiterentwickelt. Dadurch ist sie ein zuverlässiger Begleiter für Studioaufnahmen und spontane Jamsessions. Dank der scalloped X-Bracing-Konstruktion erzeugt diese Gitarre eine verstärkte Bassresonanz bei gleichzeitig ausgewogenen und druckvollen Mitten. Der seidenmatt lackierte Hals gleitet sanft unter dem Daumen und reduziert die Reibung der Handfläche beim Akkordwechsel.",
        descriptionTwo:
          "Ausgestattet mit gegossenen Stimmmechaniken für absolute Stimmstabilität bietet dieses Modell ein unschlagbares Preis-Leistungs-Verhältnis für Spieler, die authentische akustische Resonanz suchen, ohne dabei ihr Budget zu sprengen.",
        tags: [],
        color: ["Schwarz", "Gelb", "Blau", "Braun", "Grün", "Rot"],
      },
    ],
  },
  {
    sku: "MWOOP10",
    price: 300.0,
    oldPrice: 0,
    image: "/images/products/MWOOP10.webp",
    size: ["L", "S", "M", "XL", "XS", "XXL"],
    categoryNames: [
      "8",
      "Accessories",
      "Acoustic",
      "Bass",
      "Electric",
      "Fretboard",
      "Lyrica",
      "Nato",
      "Rosewood",
      "String",
      "Ukuleles",
      "Wood",
    ],
    groups: ["Featured"],
    translations: [
      {
        locale: "en",
        name: "Seagull Guitar",
        title:
          "Handcrafted acoustic guitar offering warm midrange depth, smooth neck action, and beautiful satin tonewood finish.",
        subtitle: "Precision neck alignment for effortless chord fingerings.",
        subtitleTwo: "Sustainably sourced woods and durable construction",
        description: `Renowned for its warm, rich tonal footprint, the Seagull Guitar offers musicians an inspiring acoustic experience. Constructed with a cedar soundboard and high-density back and sides, it produces a sweet, woody tone that excels in fingerpicking and light strumming applications.

The tapered headstock aligns string pull straight through the nut, minimizing friction and keeping tuning locked in even during aggressive performances. The comfortable slim neck profile feels familiar in hand, making complex barre chords feel natural and fluid.`,
        descriptionTwo: `Finished with an ultra-thin custom polished coat, the wood vibrates freely for increased sustain and projection while remaining protected against everyday wear and tear.`,
        tags: [],
        color: ["Black", "Yellow"],
      },
      {
        locale: "de",
        name: "Seagull Gitarre",
        title:
          "Handgefertigte Akustikgitarre mit warmem, tiefem Mitteltonbereich, leichtgängiger Halsbespielbarkeit und wunderschönem seidenmattem Tonholzfinish.",
        subtitle: "Präzise Halsausrichtung für müheloses Greifen von Akkorden.",
        subtitleTwo: "Nachhaltig gewonnene Hölzer und langlebige Konstruktion",
        description: `Die Seagull-Gitarre ist bekannt für ihren warmen, vollen Klang und bietet Musikern ein inspirierendes Akustikerlebnis. Gefertigt aus einer Zedernholzdecke und hochdichtem Boden und Zargen, erzeugt sie einen süßen, holzigen Ton, der sich hervorragend für Fingerpicking und leichtes Strumming eignet.
Die konische Kopfplatte sorgt für einen geraden Saitenverlauf durch den Sattel, minimiert die Reibung und hält die Stimmung auch bei kraftvollem Spiel stabil. Das komfortable, schlanke Halsprofil liegt vertraut in der Hand und ermöglicht ein natürliches und flüssiges Spiel komplexer Barré-Akkorde.`,
        descriptionTwo:
          "Mit einer ultradünnen, speziell polierten Schicht versehen, schwingt das Holz frei und sorgt so für mehr Sustain und Projektion, während es gleichzeitig vor alltäglicher Abnutzung geschützt bleibt.",
        tags: [],
        color: ["Schwarz", "Gelb"],
      },
    ],
  },
  {
    sku: "MWOOP9",
    price: 400.0,
    oldPrice: 0,
    image: "/images/products/MWOOP9.webp",
    size: ["L", "S", "M"],
    categoryNames: [
      "Accessories",
      "Acoustic",
      "Bass",
      "Electric",
      "Fretboard",
      "String",
      "Ukuleles",
      "Wood",
    ],
    groups: ["Featured"],
    translations: [
      {
        locale: "en",
        name: "Ovation Guitar",
        title:
          "Acoustic-electric guitar featuring a composite roundback body for superior feedback suppression and stage projection.",
        subtitle: "Built-in preamp with multi-band EQ and integrated tuner.",
        subtitleTwo:
          "Designed for seamless stage amplification and live performances",
        description: `Engineered specifically for live performance, the Ovation Guitar breaks away from conventional flat-back acoustics with its ergonomic composite body bowl. This unique design increases acoustic projection while drastically reducing low-frequency feedback when plugged into loud stage monitors or PA systems.

The onboard active pickup system captures the guitar's natural acoustic brilliance, offering intuitive volume, bass, and treble adjustments directly from the upper bout controller. The smooth Venetian cutaway provides unhindered access to high fret positions.`,
        descriptionTwo: `Its fast, electric-style neck profile makes transitioning from electric to acoustic playing effortless, making this guitar a favorite among gigging guitarists who need reliability and punch in live environments.`,
        tags: ["Bass", "Nato", "String"],
        color: ["Black", "Blue"],
      },
      {
        locale: "de",
        name: "Ovation Gitarre",
        title:
          "Akustisch-elektrische Gitarre mit einem Korpus aus Verbundmaterial mit runder Rückseite für überlegene Rückkopplungsunterdrückung und Bühnenprojektion.",
        subtitle:
          "Eingebauter Vorverstärker mit Mehrband-Equalizer und integriertem Stimmgerät.",
        subtitleTwo:
          "Entwickelt für nahtlose Bühnenverstärkung und Live-Auftritte",
        description: `Die Ovation Guitar wurde speziell für Live-Auftritte entwickelt und bricht mit herkömmlichen Akustikgitarren mit flacher Rückseite durch ihren ergonomisch geformten Korpus aus Verbundmaterial. Dieses einzigartige Design verbessert die akustische Projektion und reduziert gleichzeitig Rückkopplungen im Tieftonbereich beim Anschluss an laute Bühnenmonitore oder PA-Anlagen drastisch. Das integrierte aktive Tonabnehmersystem fängt die natürliche akustische Brillanz der Gitarre ein und ermöglicht die intuitive Einstellung von Lautstärke, Bass und Höhen direkt über den Regler am oberen Korpus. Der sanfte venezianische Cutaway sorgt für uneingeschränkten Zugang zu den hohen Bünden.`,
        descriptionTwo:
          "Dank des schnellen, E-Gitarren-ähnlichen Halsprofils gelingt der Übergang vom elektrischen zum akustischen Spiel mühelos, was diese Gitarre zu einem Favoriten unter den Gitarristen macht, die auf der Bühne Zuverlässigkeit und Durchsetzungsfähigkeit benötigen.",
        tags: ["Bass", "Nato", "String"],
        color: ["Schwarz", "Blau"],
      },
    ],
  },
  {
    sku: "MWOOP8",
    price: 250.0,
    oldPrice: 0,
    image: "/images/products/MWOOP8.webp",
    size: ["L", "S", "M"],
    categoryNames: [
      "Accessories",
      "Acoustic",
      "Bass",
      "Electric",
      "Konicy",
      "String",
      "Rosewood",
    ],
    groups: ["Featured", "Special"],
    translations: [
      {
        locale: "en",
        name: "Martin Guitar",
        title:
          "Classic dreadnought acoustic guitar engineered with deep bass response, booming volume, and timeless vintage appeal.",
        subtitle:
          "Dreadnought body shape providing massive volume and full-bodied tone.",
        subtitleTwo:
          "Hand-fitted dovetail neck joint for maximum acoustic transfer",
        description: `The Martin Guitar represents the quintessential dreadnought experience—powerful, resonant, and balanced across the entire frequency spectrum. Its full-size body cavity produces a deep, punchy low-end response that cuts through any acoustic ensemble with ease.

Built with a hand-fitted dovetail neck joint, string resonance transfers directly into the body wood for unmatched sustain and harmonic richness. The hand-rubbed neck finish offers a sleek, comfortable playing surface for fast single-note runs and solid rhythm work.`,
        descriptionTwo: `A staple for bluegrass, folk, and rock guitarists, this instrument offers legendary dreadnought projection that shines both around a campfire and in front of studio microphones.`,
        tags: ["Nato"],
        color: ["Black"],
      },
      {
        locale: "de",
        name: "Martin Gitarre",
        title:
          "Klassische Dreadnought-Akustikgitarre mit tiefem Bass, sattem Klang und zeitlosem Vintage-Charme.",
        subtitle:
          "Die Dreadnought-Korpusform sorgt für ein massives Volumen und einen vollen, kräftigen Klang.",
        subtitleTwo:
          "Handgefertigte Schwalbenschwanz-Halsverbindung für maximale akustische Übertragung",
        description: `Die Martin-Gitarre verkörpert das ultimative Dreadnought-Erlebnis – kraftvoll, resonant und ausgewogen über das gesamte Frequenzspektrum. Ihr Korpus in voller Größe erzeugt einen tiefen, druckvollen Bass, der sich mühelos in jedem akustischen Ensemble durchsetzt. Dank der handgefertigten Schwalbenschwanzverbindung am Hals wird die Saitenresonanz direkt auf das Holz übertragen, was für unvergleichliches Sustain und harmonische Fülle sorgt. Die handpolierte Halsoberfläche bietet eine geschmeidige, komfortable Spielfläche für schnelle Soli und solides Rhythmusspiel.`,
        descriptionTwo: `Dieses Instrument ist ein Muss für Bluegrass-, Folk- und Rockgitarristen und bietet die legendäre Dreadnought-Klangprojektion, die sowohl am Lagerfeuer als auch vor Studiomikrofonen glänzt.`,
        tags: ["Nato"],
        color: ["Schwarz"],
      },
    ],
  },
  {
    sku: "MWOOP6",
    price: 100.0,
    oldPrice: 0,
    image: "/images/products/MWOOP6.webp",
    size: ["L", "S", "M", "XL", "XS", "XXL"],
    categoryNames: [
      "8",
      "Bass",
      "Electric",
      "Hard Maple",
      "String",
      "Ukuleles",
      "Wood",
      "Zoniry",
    ],
    groups: ["Featured"],
    translations: [
      {
        locale: "en",
        name: "Linden Guitar",
        title:
          "Lightweight entry-level acoustic guitar crafted with a linden wood body for smooth response and easy playability.",
        subtitle:
          "Comfortable body contours and low string action for beginners.",
        subtitleTwo:
          "Budget-friendly option without sacrificing structural durability",
        description: `The Linden Guitar is the ideal entry point for aspiring guitarists taking their first steps in music. Constructed with a linden wood body, it offers a balanced, warm tone with smooth mid-range emphasis that makes practicing engaging and enjoyable.

Factory-set with comfortable low action, students can fret notes easily without experiencing hand fatigue. The lightweight body construction makes it easy to hold during long practice sessions, whether sitting down or standing with a strap.`,
        descriptionTwo: `Durable nickel frets and reliable tuning machines ensure stable tuning and long-lasting playability, making this model an exceptional value for students and hobbyists alike.`,
        tags: ["Nato", "Wood"],
        color: ["Black", "Blue", "Brown", "Green", "Red", "Yellow"],
      },
      {
        locale: "de",
        name: "Linden Gitarre",
        title:
          "Leichte Einsteiger-Akustikgitarre mit einem Korpus aus Lindenholz für ein geschmeidiges Spielgefühl und einfache Bespielbarkeit.",
        subtitle:
          "Komfortable Körperkonturen und niedrige Saitenlage für Anfänger.",
        subtitleTwo:
          "Preisgünstige Option ohne Einbußen bei der strukturellen Haltbarkeit.",
        description: `Die Lindengitarre ist der ideale Einstieg für angehende Gitarristen, die ihre ersten Schritte in der Musik wagen. Ihr Korpus aus Lindenholz bietet einen ausgewogenen, warmen Klang mit sanfter Mittenbetonung, der das Üben abwechslungsreich und angenehm macht. Dank der werkseitig eingestellten, komfortablen Saitenlage können Schüler die Töne mühelos greifen, ohne dass die Hände ermüden. Durch ihr geringes Gewicht liegt sie auch bei längeren Übungseinheiten, ob im Sitzen oder Stehen mit Gurt, gut in der Hand.`,
        descriptionTwo: `Die robusten Nickelbünde und die zuverlässigen Stimmmechaniken gewährleisten eine stabile Stimmung und langanhaltende Spielbarkeit, wodurch dieses Modell sowohl für Schüler als auch für Hobbyisten ein außergewöhnliches Preis-Leistungs-Verhältnis bietet.`,
        tags: ["Nato", "Holz"],
        color: ["Schwarz", "Blau", "Braun", "Grün", "Rot", "Gelb"],
      },
    ],
  },
  {
    sku: "MWOOP5",
    price: 190.0,
    oldPrice: 0,
    image: "/images/products/MWOOP5.webp",
    size: ["S", "M"],
    categoryNames: [
      "Accessories",
      "Acoustic",
      "Bass",
      "Electric",
      "Jatoba",
      "Lyrica",
    ],
    groups: ["Featured"],
    translations: [
      {
        locale: "en",
        name: "Kadence Guitar",
        title:
          "Modern acoustic-electric guitar featuring a built-in pickup, cutaway body, and sleek glossy finish.",
        subtitle: "Integrated EQ preamp system for quick amplification.",
        subtitleTwo: "Ergonomic cutaway body design for high-fret soloing",
        description: `Combining sleek modern styling with practical gigging features, the Kadence Guitar is built for contemporary players. Its soft cutaway body grants full access to the upper frets, opening up new possibilities for acoustic lead lines and higher chord voicings.

The onboard piezoelectric pickup and preamp circuit allow you to plug directly into an amplifier or audio interface, giving you full control over your amplified bass, mid, and treble frequencies.`,
        descriptionTwo: `The smooth glossy body finish protects the instrument from moisture while adding a refined visual shimmer under stage lighting.`,
        tags: [],
        color: [],
      },
      {
        locale: "de",
        name: "Kadence Gitarre",
        title:
          "Moderne elektroakustische Gitarre mit eingebautem Tonabnehmer, Cutaway-Korpus und elegantem Hochglanzfinish.",
        subtitle:
          "Integriertes EQ-Vorverstärkersystem für schnelle Verstärkung.",
        subtitleTwo:
          "Ergonomisches Cutaway-Korpusdesign für Soli in den hohen Bünden",
        description: `Die Kadence-Gitarre vereint elegantes, modernes Design mit praktischen Bühnenfunktionen und ist wie geschaffen für zeitgenössische Gitarristen. Ihr weicher Cutaway ermöglicht vollen Zugriff auf die oberen Bünde und eröffnet so neue Möglichkeiten für akustische Lead-Linien und höhere Akkordlagen. Dank des integrierten Piezo-Tonabnehmers und der Vorverstärkerschaltung können Sie die Gitarre direkt an einen Verstärker oder ein Audio-Interface anschließen und haben so die volle Kontrolle über die verstärkten Bass-, Mitten- und Höhenfrequenzen.`,
        descriptionTwo: `Die glatte, glänzende Lackierung des Korpus schützt das Instrument vor Feuchtigkeit und verleiht ihm unter Bühnenbeleuchtung einen edlen optischen Schimmer.`,
        tags: [],
        color: [],
      },
    ],
  },
  {
    sku: "MWOOP4",
    price: 260.0,
    oldPrice: 0,
    image: "/images/products/MWOOP4.webp",
    size: ["S", "M"],
    categoryNames: [
      "8",
      "Fretboard",
      "Nato",
      "Rosewood",
      "Acoustic",
      "Bass",
      "Electric",
      "Lyrica",
      "String",
      "Ukuleles",
      "Wood",
    ],
    groups: ["Featured", "Bestseller"],
    translations: [
      {
        locale: "en",
        name: "Jixing Guitar",
        title:
          "Versatile folk acoustic guitar delivering bright attack, rich overtone resonance, and comfortable neck profile.",
        subtitle: "Folk body shape optimized for comfortable lap positioning.",
        subtitleTwo:
          "Precision fretwork ensuring buzz-free playing across the fretboard",
        description: `The Jixing Guitar offers a focused, articulate voice housed in a comfortable folk-style body shape. Slightly smaller than a traditional dreadnought, it sits comfortably on the lap, making it a favorite for intimate acoustic sets and cozy home practice sessions.

Its spruce-laminate soundboard delivers a snappy, bright attack with excellent clarity for strumming chords and fingerstyle patterns. The smooth dark hardwood fretboard features precision-dressed frets to ensure smooth slides and buzz-free note delivery.`,
        descriptionTwo: `Complemented by enclosed chrome tuners and a sturdy rosette rosette accent, this guitar balances visual charm with practical acoustic performance.`,
        tags: ["Wood"],
        color: ["Red", "Yellow"],
      },
      {
        locale: "de",
        name: "Jixing Gitarre",
        title:
          "Vielseitige Folk-Akustikgitarre mit brillantem Anschlag, reichhaltiger Obertonresonanz und komfortablem Halsprofil.",
        subtitle:
          "Folk-Körperform, optimiert für bequemes Sitzen auf dem Schoß.",
        subtitleTwo:
          "Präzise Bundierung gewährleistet ein schnarrfreies Spielgefühl über das gesamte Griffbrett.",
        description: `Die Jixing-Gitarre bietet einen fokussierten, ausdrucksstarken Klang in einer komfortablen Folk-Korpusform. Etwas kleiner als eine traditionelle Dreadnought, liegt sie angenehm auf dem Schoß und ist daher ideal für intime Akustik-Sets und gemütliche Übungssessions zu Hause. Ihre Fichtendecke sorgt für einen knackigen, hellen Anschlag mit exzellenter Klarheit beim Akkordspiel und Fingerstyle. Das glatte, dunkle Hartholz-Griffbrett verfügt über präzisionsabgerichtete Bünde für sanfte Slides und ein schnarrfreies Spiel.`,
        descriptionTwo: `Ergänzt durch verchromte, geschlossene Mechaniken und eine robuste Rosette, vereint diese Gitarre optischen Charme mit praktischer akustischer Leistung.`,
        tags: ["Holz"],
        color: ["Rot", "Gelb"],
      },
    ],
  },
  {
    sku: "MWOOP3",
    price: 120.0,
    oldPrice: 140.0,
    image: "/images/products/MWOOP3.webp",
    size: ["S"],
    categoryNames: [
      "6",
      "Fretboard",
      "Bass",
      "Electric",
      "Mahogany",
      "Rosewood",
      "String",
      "Ukuleles",
      "Walnut",
      "Wood",
      "Zoniry",
    ],
    groups: ["Bestseller", "Special"],
    translations: [
      {
        locale: "en",
        name: "Jackson Guitar",
        title:
          "High-octane solidbody electric guitar engineered for lightning-fast shredding, precise technical soloing, and heavy aggressive riffs.",
        subtitle:
          "Speed-oriented compound radius fretboard and high-output humbuckers.",
        subtitleTwo:
          "Designed for hard rock and heavy metal guitarists seeking effortless playability",
        description: `Built for speed and performance, the Jackson Guitar is crafted for players who demand razor-sharp precision during high-energy performances. Featuring a sleek double-cutaway mahogany body and a fast bolt-on maple neck, it offers unhindered access all the way up to the 24th fret.

The high-output ceramic humbucking pickups deliver a tight, punchy low end alongside searing highs that cut through heavy drum and bass mixes. The compound-radius fretboard flattens out towards the upper register, allowing extreme string bends without notes fretting out or choking.`,
        descriptionTwo: `Complete with a vintage-style fulcrum tremolo bridge for subtle pitch bends and aggressive dive bombs, this instrument delivers classic metal aesthetic and uncompromised playability at an unbeatable price point.`,
        tags: ["Bass", "Nato"],
        color: ["Brown"],
      },
      {
        locale: "de",
        name: "Jackson Gitarre",
        title:
          "Hochleistungsfähige E-Gitarre mit massivem Korpus, entwickelt für blitzschnelles Shredding, präzise technische Soli und harte, aggressive Riffs.",
        subtitle:
          "Geschwindigkeitsoptimiertes Compound-Radius-Griffbrett und Humbucker mit hoher Ausgangsleistung.",
        subtitleTwo:
          "Entwickelt für Hardrock- und Heavy-Metal-Gitarristen, die mühelose Spielbarkeit suchen.",
        description: `Die Jackson Guitar wurde für Geschwindigkeit und Performance entwickelt und ist ideal für Gitarristen, die bei energiegeladenen Auftritten höchste Präzision fordern. Mit ihrem schlanken Mahagoni-Korpus mit Double-Cutaway und dem schnellen, geschraubten Ahornhals bietet sie uneingeschränkten Zugang bis zum 24. Bund. Die leistungsstarken Keramik-Humbucker liefern einen druckvollen, satten Bass und durchsetzungsstarke Höhen, die sich selbst in dichten Drum-and-Bass-Mixen behaupten. Das Compound-Radius-Griffbrett flacht im oberen Register ab und ermöglicht so extreme Bendings ohne Schnarren oder Abwürgen der Saiten.`,
        descriptionTwo: `Ausgestattet mit einem Tremolo-System im Vintage-Stil für subtile Pitch-Bends und aggressive Dive Bombs, bietet dieses Instrument klassische Metal-Ästhetik und kompromisslose Spielbarkeit zu einem unschlagbaren Preis.`,
        tags: ["Bass", "Nato"],
        color: ["Braun"],
      },
    ],
  },
  {
    sku: "MWOOP1",
    price: 500.0,
    oldPrice: 0,
    image: "/images/products/MWOOP11.webp",
    size: ["L", "M", "S", "XL", "XS", "XXL"],
    categoryNames: ["Bass", "Electric", "Konicy", "Nato", "Ukuleles", "Wood"],
    groups: ["Bestseller"],
    translations: [
      {
        locale: "en",
        name: "Ibanez Guitar",
        title:
          "Modern high-performance electric guitar featuring an ultra-slim Wizard neck, versatile HSH pickup layout, and precision hardware.",
        subtitle:
          "Precision Japanese design heritage tailored for contemporary virtuosos.",
        subtitleTwo:
          "Exceptional dynamic clarity across complex chord voicings and fast lead lines",
        description: `The Ibanez Guitar stands as a hallmark of precision engineering for technical players and modern shredders. Equipped with a thin 5-piece maple/walnut neck, it offers an insanely fast feel that reduces hand fatigue during demanding extended solos and complex arpeggio passages.

Its versatile HSH pickup configuration provides a broad tonal palette—ranging from thick humbucking overdrive to clean, glassy single-coil tones ideal for funk, fusion, and progressive rock. The double-locking tremolo system ensures rock-solid tuning stability even under heavy whammy bar abuse.`,
        descriptionTwo: `Crafted with a lightweight body and deep cutaways, this model provides pristine ergonomic comfort whether practicing for hours in the studio or performing under hot stage lights.`,
        tags: ["String"],
        color: ["White"],
      },
      {
        locale: "de",
        name: "Ibanez Gitarre",
        title:
          "Moderne, leistungsstarke E-Gitarre mit ultradünnem Wizard-Hals, vielseitigem HSH-Tonabnehmer-Layout und präziser Hardware.",
        subtitle:
          "Präzise japanische Designtradition, maßgeschneidert für zeitgenössische Virtuosen.",
        subtitleTwo:
          "Außergewöhnliche dynamische Klarheit bei komplexen Akkordfolgen und schnellen Melodielinien",
        description: `Die Ibanez-Gitarre steht für höchste Präzision und ist die ideale Wahl für technisch versierte Gitarristen und moderne Shredder. Ausgestattet mit einem schlanken, fünfteiligen Ahorn-/Walnuss-Hals, bietet sie ein extrem schnelles Spielgefühl und reduziert die Ermüdung der Hand bei anspruchsvollen, ausgedehnten Soli und komplexen Arpeggio-Passagen. Ihre vielseitige HSH-Tonabnehmerkonfiguration deckt ein breites Klangspektrum ab – von sattem Humbucker-Overdrive bis hin zu klaren, glasklaren Single-Coil-Sounds, perfekt für Funk, Fusion und Progressive Rock. Das Double-Locking-Tremolo-System garantiert absolute Stimmstabilität, selbst bei intensivem Einsatz des Tremolohebels.`,
        descriptionTwo: `Dieses Modell zeichnet sich durch ein leichtes Gehäuse und tiefe Aussparungen aus und bietet so optimalen ergonomischen Komfort, egal ob man stundenlang im Studio übt oder unter grellem Bühnenlicht auftritt.`,
        tags: ["Zeichenkette"],
        color: ["Weiß"],
      },
    ],
  },
  {
    sku: "MWOOP2",
    price: 200.0,
    oldPrice: 250.0,
    image: "/images/products/MWOOP11.webp",
    size: ["L", "M", "S", "XL", "XS", "XXL"],
    categoryNames: ["12", "Acoustic", "Fretboard", "Jatoba", "String"],
    groups: ["Bestseller"],
    translations: [
      {
        locale: "en",
        name: "Guitar GM 92",
        title:
          "Versatile grand auditorium acoustic guitar with rich mid-range balance, resonant tone, and smooth action.",
        subtitle:
          "All-purpose acoustic workhorse suitable for fingerpicking and flatpicking.",
        subtitleTwo:
          "Solid top construction providing enhanced sustain and harmonic richness",
        description: `The GM 92 is an all-around acoustic workhorse built to deliver rich projection across diverse musical genres. Its grand auditorium body style strikes an ideal balance between dreadnought low-end authority and concert-style note definition.

Constructed with high-grade tonewoods and internal X-bracing, it produces a warm, open sound that continues to blossom as the wood ages over time. The smooth fretboard edges and low factory setup ensure comfortable playability for both beginners and experienced gigging musicians.`,
        descriptionTwo: `Enclosed chrome tuners ensure smooth, accurate tuning, while the elegant body binding and natural satin finish provide a clean, timeless aesthetic on stage or at home.`,
        tags: ["Wood"],
        color: ["Yellow", "Black", "Blue", "Brown", "Green", "Red"],
      },
      {
        locale: "de",
        name: "Gitarre GM 92",
        title:
          "Vielseitige Grand Auditorium Akustikgitarre mit ausgewogenem Mitteltonbereich, resonantem Klang und geschmeidiger Bespielbarkeit.",
        subtitle:
          "Vielseitiges akustisches Arbeitstier, geeignet für Fingerpicking und Flatpicking.",
        subtitleTwo:
          "Die massive Deckenkonstruktion sorgt für verbessertes Sustain und harmonischen Reichtum.",
        description: `Die GM 92 ist eine vielseitige Akustikgitarre, die für einen satten Klang in unterschiedlichsten Musikrichtungen entwickelt wurde. Ihr Grand-Auditorium-Korpus bietet die ideale Balance zwischen dem kraftvollen Bass einer Dreadnought und der präzisen Tondefinition einer Konzertgitarre. Gefertigt aus hochwertigen Tonhölzern und mit interner X-Verstrebung, erzeugt sie einen warmen, offenen Klang, der mit der Zeit immer weiter an Tiefe gewinnt. Die glatten Griffbrettkanten und die niedrige Werkseinstellung gewährleisten sowohl Anfängern als auch erfahrenen Musikern ein komfortables Spielgefühl.`,
        descriptionTwo: `Geschlossene Chrom-Mechaniken gewährleisten ein reibungsloses und präzises Stimmen, während die elegante Korpusumrandung und das natürliche Satin-Finish für eine klare und zeitlose Ästhetik auf der Bühne oder zu Hause sorgen.`,
        tags: ["Holz"],
        color: ["Gelb", "Schwarz", "Blau", "Braun", "Grün", "Rot"],
      },
    ],
  },
  {
    sku: "MWOOP22",
    price: 180.0,
    oldPrice: 200.0,
    image: "/images/products/MWOOP22.webp",
    size: ["L", "M", "S"],
    categoryNames: ["Accessories", "Acoustic", "Bass", "Electric", "Ukuleles"],
    groups: ["Latest", "Special"],
    translations: [
      {
        locale: "en",
        name: "Fender Guitar",
        title:
          "Iconic single-cutaway electric guitar delivering timeless chime, snappy bridge bite, and classic blues/rock tones.",
        subtitle: "Classic vintage voicing with modern C-shaped neck profile.",
        subtitleTwo: "Pristine clean tones and articulate crunch performance",
        description: `Rooted in decades of music history, the Fender Guitar delivers the unmistakable tone and feel that defined rock, country, and blues. The solid body paired with single-coil pickups offers iconic clarity, bell-like high frequency response, and signature snap.

The modern "C"-shaped neck profile with 9.5"-radius fingerboard provides a comfortable, natural feel in the hand whether playing open rhythm chords or bending notes in the upper register. A string-through-body bridge enhances string resonance and sustain.`,
        descriptionTwo: `Boasting a durable polyurethane gloss finish and vintage-style control knobs, this guitar offers authentic heritage character backed by modern manufacturing quality.`,
        tags: [],
        color: ["Brown"],
      },
      {
        locale: "de",
        name: "Fender Gitarre",
        title:
          "Legendäre Single-Cutaway-E-Gitarre mit zeitlosem Klang, knackigem Steg-Sound und klassischen Blues/Rock-Tönen.",
        subtitle:
          "Klassischer Vintage-Sound mit modernem C-förmigem Halsprofil.",
        subtitleTwo:
          "Makellose, klare Töne und differenzierte Crunch-Performance",
        description: `Die Fender-Gitarre, deren Wurzeln in jahrzehntelanger Musikgeschichte liegen, liefert den unverwechselbaren Klang und das Spielgefühl, die Rock, Country und Blues geprägt haben. Der massive Korpus in Kombination mit Single-Coil-Tonabnehmern bietet legendäre Klarheit, glockenklare Höhen und den charakteristischen knackigen Sound. Das moderne „C“-förmige Halsprofil mit 9,5"-Radius-Griffbrett sorgt für ein komfortables und natürliches Spielgefühl, egal ob offene Rhythmusakkorde oder Bendings in der hohen Lage. Die Saitenführung durch den Korpus optimiert Resonanz und Sustain.`,
        descriptionTwo: `Diese Gitarre besticht durch eine strapazierfähige Polyurethan-Hochglanzlackierung und Reglerknöpfe im Vintage-Stil und bietet authentischen Heritage-Charakter in Verbindung mit moderner Fertigungsqualität.`,
        tags: [],
        color: ["Braun"],
      },
    ],
  },
  {
    sku: "MWOOP17",
    price: 130.0,
    oldPrice: 0,
    image: "/images/products/MWOOP17.webp",
    size: ["L", "M", "S"],
    categoryNames: [
      "12",
      "6",
      "Accessories",
      "Hard Maple",
      "Jatoba",
      "Konicy",
      "Mahogany",
      "String",
      "Walnut",
      "Wood",
    ],
    groups: ["Latest"],
    translations: [
      {
        locale: "en",
        name: "Epiphone Guitar",
        title:
          "Classic mahogany archtop electric guitar offering thick humbucking warmth, singing sustain, and vintage charm.",
        subtitle:
          "Dual humbucker setup with individual volume and tone controls.",
        subtitleTwo:
          "Resonant solid mahogany body for warm, punchy lower frequencies",
        description: `Inspired by historic rock 'n' roll designs, the Epiphone Guitar delivers big, warm tone with impressive sustain. Its solid mahogany body paired with twin covered humbucking pickups produces a creamy, saturated overdrive tone perfect for hard rock and blues leads.

Individual volume and tone knobs for each pickup, combined with a 3-way toggle switch, give players complete control over their tonal mix. The LockTone Tune-o-matic bridge and stopbar tailpiece maximize string-to-body vibration transfer.`,
        descriptionTwo: `The comfortable SlimTaper neck profile makes fast riffing effortless, while the traditional cream body binding adds a classic touch of vintage elegance.`,
        tags: ["Bass", "Wood"],
        color: ["Black", "Blue", "Yellow"],
      },
      {
        locale: "de",
        name: "Epiphone Gitarre",
        title:
          "Klassische Mahagoni-Archtop-E-Gitarre mit sattem, warmem Humbucker-Sound, singendem Sustain und Vintage-Charme.",
        subtitle:
          "Dual-Humbucker-Setup mit separaten Lautstärke- und Klangreglern.",
        subtitleTwo:
          "Resonanzstarker Korpus aus massivem Mahagoni für warme, druckvolle Bässe",
        description: `Inspiriert von historischen Rock-'n'-Roll-Designs, liefert die Epiphone Gitarre einen vollen, warmen Ton mit beeindruckendem Sustain. Ihr massiver Mahagonikorpus in Kombination mit zwei gekapselten Humbucker-Tonabnehmern erzeugt einen cremigen, satten Overdrive-Sound, perfekt für Hard-Rock- und Blues-Leads. Separate Lautstärke- und Klangregler für jeden Tonabnehmer sowie ein 3-Wege-Schalter ermöglichen die volle Kontrolle über den Klangmix. Die LockTone Tune-o-matic Brücke und der Stopbar-Saitenhalter optimieren die Schwingungsübertragung der Saiten auf den Korpus.`,
        descriptionTwo: `Das komfortable SlimTaper-Halsprofil ermöglicht müheloses schnelles Riffing, während die traditionelle cremefarbene Korpusumrandung einen klassischen Hauch von Vintage-Eleganz verleiht.`,
        tags: ["Bass", "Holz"],
        color: ["Schwarz", "Blau", "Gelb"],
      },
    ],
  },
  {
    sku: "MWOOP18",
    price: 190.0,
    oldPrice: 0,
    image: "/images/products/MWOOP18.webp",
    size: ["L", "M", "S", "XL", "XS", "XXL"],
    categoryNames: [
      "Acoustic",
      "Bass",
      "Electric",
      "Fretboard",
      "Lyrica",
      "Mahogany",
      "Ukuleles",
    ],
    groups: ["Latest"],
    translations: [
      {
        locale: "en",
        name: "Electric Guitar",
        title:
          "Versatile dual-humbucker electric guitar featuring smooth body contours, fast neck playability, and high-output tone.",
        subtitle: "Modern double-cutaway design for easy upper fret access.",
        subtitleTwo:
          "Solid hardwood construction providing great stability and dynamic bite",
        description: `Designed as an adaptable workhorse, this Electric Guitar handles everything from crystal-clear clean chords to heavy gain riffs with ease. Its dual humbucking pickups naturally block 60-cycle hum, ensuring quiet operation when playing through high-gain amplifiers.

The contoured body fits comfortably against the player whether seated or standing, and the fast-action satin neck allows quick position shifts across the fretboard. Reliable sealed die-cast tuning heads maintain pitch accuracy during vigorous playing.`,
        descriptionTwo: `An ideal option for gigging musicians needing a dependable back-up instrument or students looking for a versatile electric guitar to explore different playing styles.`,
        tags: [],
        color: ["Black", "Blue", "Brown", "Green", "Red", "Yellow"],
      },
      {
        locale: "de",
        name: "Elektrische Gitarre",
        title:
          "Vielseitige E-Gitarre mit zwei Humbuckern, die sich durch geschmeidige Korpuskonturen, schnelle Bespielbarkeit des Halses und einen kraftvollen Klang auszeichnet.",
        subtitle:
          "Modernes Double-Cutaway-Design für leichten Zugang zu den oberen Bünden.",
        subtitleTwo:
          "Massive Hartholzkonstruktion für hohe Stabilität und dynamische Bissfestigkeit",
        description: `Diese E-Gitarre ist ein vielseitiges Arbeitstier und meistert mühelos alles von kristallklaren Akkorden bis hin zu verzerrten Riffs. Ihre beiden Humbucker-Tonabnehmer unterdrücken auf natürliche Weise das 60-Hz-Brummen und gewährleisten so einen rauscharmen Betrieb auch über High-Gain-Verstärker. Der ergonomisch geformte Korpus liegt sowohl im Sitzen als auch im Stehen angenehm am Körper an, und der seidenmatte Hals ermöglicht schnelle Lagenwechsel über das gesamte Griffbrett. Zuverlässige, gekapselte Druckguss-Mechaniken sorgen für präzise Stimmungen auch bei intensivem Spiel.`,
        descriptionTwo: `Eine ideale Option für Musiker, die regelmäßig auftreten und ein zuverlässiges Ersatzinstrument benötigen, oder für Schüler, die eine vielseitige E-Gitarre suchen, um verschiedene Spielstile auszuprobieren.`,
        tags: [],
        color: ["Schwarz", "Blau", "Braun", "Grün", "Rot", "Gelb"],
      },
    ],
  },
  {
    sku: "MWOOP19",
    price: 120.0,
    oldPrice: 150.0,
    image: "/images/products/MWOOP12.webp",
    size: ["L", "M", "S", "XL", "XS", "XXL"],
    categoryNames: [
      "8",
      "Accessories",
      "Acoustic",
      "Lyrica",
      "Nato",
      "Rosewood",
      "Ukuleles",
    ],
    groups: ["Latest", "Special"],
    translations: [
      {
        locale: "en",
        name: "Electric Guitar",
        title:
          "Compact intermediate electric guitar engineered with snappy response, lightweight body, and versatile pickup voicing.",
        subtitle: "Lightweight, beginner-friendly body with fast neck profile.",
        subtitleTwo:
          "All-purpose pickup configuration suitable for diverse genres",
        description: `Offering great tone and playability in an accessible package, this Electric Guitar is designed for students and gigging players alike. The lightweight body reduces shoulder strain during extended practice sessions without sacrificing natural tone and sustain.

Equipped with a flexible pickup setup and intuitive master controls, dialing in bright rhythm tones or thick overdrive lead tones takes just seconds. The smooth maple neck and rosewood-style fretboard provide a comfortable feel under your fingers.`,
        descriptionTwo: `Factory-inspected for precise action and intonation, this model delivers immediate out-of-the-box playability and exceptional value.`,
        tags: ["String", "Wood"],
        color: ["Yellow"],
      },
      {
        locale: "de",
        name: "Elektrische Gitarre",
        title:
          "Kompakte E-Gitarre für Fortgeschrittene mit knackiger Ansprache, leichtem Korpus und vielseitigen Tonabnehmern.",
        subtitle:
          "Leichter, anfängerfreundlicher Korpus mit schnellem Halsprofil.",
        subtitleTwo:
          "Universelle Tonabnehmerkonfiguration, geeignet für verschiedene Musikrichtungen",
        description: `Diese E-Gitarre bietet großartigen Klang und hervorragende Bespielbarkeit in einem erschwinglichen Paket und ist sowohl für Schüler als auch für professionelle Musiker geeignet. Der leichte Korpus reduziert die Schulterbelastung bei längeren Übungseinheiten, ohne dabei den natürlichen Klang und das Sustain zu beeinträchtigen. Dank flexibler Tonabnehmer und intuitiver Master-Regler lassen sich brillante Rhythmus- oder fette Overdrive-Soli in Sekundenschnelle einstellen. Der geschmeidige Ahornhals und das Griffbrett in Palisanderoptik sorgen für ein angenehmes Spielgefühl.`,
        descriptionTwo: `Dieses Modell wurde im Werk auf präzise Mechanik und Intonation geprüft und bietet sofortige Spielbarkeit direkt nach dem Auspacken sowie ein außergewöhnliches Preis-Leistungs-Verhältnis.`,
        tags: ["Saite", "Holz"],
        color: ["Gelb"],
      },
    ],
  },
  {
    sku: "MWOOP21",
    price: 120.0,
    oldPrice: 0,
    image: "/images/products/MWOOP21.webp",
    size: ["L", "M", "S", "XL", "XS", "XXL"],
    categoryNames: [
      "Accessories",
      "Acoustic",
      "Bass",
      "Electric",
      "Mahogany",
      "Nato",
      "String",
      "Ukuleles",
      "Wood",
    ],
    groups: ["Latest"],
    translations: [
      {
        locale: "en",
        name: "Bass Guitar",
        title:
          "4-string electric bass guitar delivering deep low-end punch, tight attack, and clear fundamental note clarity.",
        subtitle: "Split-coil pickup design providing classic low-end thump.",
        subtitleTwo:
          "34-inch long scale length for optimal string tension and projection",
        description: `Anchor the groove with this powerful 4-string Bass Guitar. Built with a full 34-inch scale length, it maintains crisp string tension across all notes, ensuring your low frequencies sound focused and tight in any rhythm section.

The classic split single-coil bass pickup delivers legendary mid-range growl and deep bottom-end punch. Simple master volume and tone controls make it simple to adapt your sound from smooth vintage motown warmth to snappy modern rock drive.`,
        descriptionTwo: `A solid heavy-duty bridge ensures maximum vibration transfer into the body wood, while open-gear tuners keep your tuning stable throughout energetic sets.`,
        tags: ["Bass", "Nato"],
        color: ["Pink", "Black", "Green", "Red", "Yellow"],
      },
      {
        locale: "de",
        name: "Bassgitarre",
        title:
          "4-saitiger E-Bass mit druckvollem Tiefbass, präzisem Attack und klarer Grundtonwiedergabe.",
        subtitle:
          "Split-Coil-Tonabnehmerdesign für den klassischen, druckvollen Bass.",
        subtitleTwo:
          "34 Zoll lange Mensur für optimale Saitenspannung und Projektion",
        description: `Mit diesem kraftvollen 4-Saiter-Bass gibst du dem Groove den nötigen Halt. Dank der vollen 34-Zoll-Mensur bleibt die Saitenspannung über den gesamten Ton konstant, sodass deine tiefen Frequenzen in jeder Rhythmusgruppe fokussiert und druckvoll klingen. Der klassische Split-Single-Coil-Bass-Tonabnehmer liefert legendäres Mitten-Growl und druckvolle Bässe. Mit den einfachen Master-Volume- und Tonreglern lässt sich der Sound mühelos anpassen – von sanftem Vintage-Motown-Wärme bis hin zu knackigem, modernem Rock-Drive.`,
        descriptionTwo: `Ein stabiler, robuster Steg sorgt für maximale Vibrationsübertragung in das Korpusholz, während offene Mechaniken die Stimmung auch bei energiegeladenen Sets stabil halten.`,
        tags: ["Bass", "Nato"],
        color: ["Rosa", "Schwarz", "Grün", "Rot", "Gelb"],
      },
    ],
  },
  {
    sku: "MWOOP20",
    price: 80.0,
    oldPrice: 200.0,
    image: "/images/products/MWOOP20.webp",
    size: ["L", "S"],
    categoryNames: [
      "Accessories",
      "Acoustic",
      "Bass",
      "Electric",
      "Fretboard",
      "String",
      "Ukuleles",
      "Wood",
      "Walnut",
    ],
    groups: ["Latest", "Special"],
    translations: [
      {
        locale: "en",
        name: "Acoustic Guitar",
        title:
          "Entry-level acoustic guitar offering warm wood resonances, easy action, and durable laminated tonewood build.",
        subtitle:
          "Budget-friendly acoustic starter package with authentic dreadnought sound.",
        subtitleTwo:
          "Comfortable neck profile designed to build finger strength without fatigue",
        description: `An ideal starting instrument for anyone learning acoustic guitar, this model delivers rich tone and structural reliability at an affordable price point. Its traditional dreadnought body produces a booming natural voice that fills any room.

The neck is tailored with a comfortable C-profile that helps new players master basic open chords and fingerpicking patterns without excessive hand strain. Smooth fret finishing guarantees comfortable slides up and down the neck.`,
        descriptionTwo: `Built with durable laminate woods that withstand seasonal humidity shifts, this low-maintenance guitar remains stable and ready to play whenever inspiration strikes.`,
        tags: ["Bass", "Nato"],
        color: ["Black", "Blue", "Brown", "Red"],
      },
      {
        locale: "de",
        name: "Akustikgitarre",
        title:
          "Akustikgitarre für Einsteiger mit warmem Holzklang, leichter Bespielbarkeit und robuster Konstruktion aus laminiertem Tonholz.",
        subtitle:
          "Preisgünstiges Akustik-Starterpaket mit authentischem Dreadnought-Sound.",
        subtitleTwo:
          "Komfortables Halsprofil, das den Aufbau von Fingerkraft ohne Ermüdung fördert.",
        description: `Dieses Modell ist das ideale Einsteigerinstrument für alle, die Akustikgitarre lernen möchten. Es bietet einen vollen Klang und hohe Stabilität zu einem erschwinglichen Preis. Der traditionelle Dreadnought-Korpus erzeugt einen kräftigen, natürlichen Klang, der jeden Raum erfüllt. Der Hals mit seinem komfortablen C-Profil hilft Anfängern, grundlegende offene Akkorde und Fingerpicking-Muster ohne übermäßige Handbelastung zu erlernen. Die glatte Bundierung garantiert ein angenehmes Gleiten über den gesamten Hals.`,
        descriptionTwo: `Diese Gitarre ist aus robusten Laminathölzern gefertigt, die saisonalen Schwankungen der Luftfeuchtigkeit standhalten, und ist daher wartungsarm. Sie bleibt stabil und ist jederzeit spielbereit, wenn die Inspiration zuschlägt.`,
        tags: ["Bass", "Nato"],
        color: ["Schwarz", "Blau", "Braun", "Rot"],
      },
    ],
  },
];
