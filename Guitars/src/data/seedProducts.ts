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
    price: 699,
    oldPrice: 0,
    image: "/images/products/EpiphoneLesPaul.webp",
    groups: ["Featured"],
    categoryNames: [
      "Electric",
      "6 String",
      "Mahogany",
      "Maple",
      "Rosewood Fretboard",
    ],
    translations: [
      {
        locale: "en",
        name: "Epiphone Les Paul Standard 50s Goldtop",
        title:
          "Classic single-cut electric guitar with a mahogany body, maple top, and warm dual-humbucker tone.",
        subtitle:
          "Traditional Les Paul-inspired construction with a comfortable vintage-style feel.",
        subtitleTwo:
          "Designed for blues, rock, classic rock, and powerful lead tones",
        description: `The Epiphone Les Paul Standard 50s Goldtop combines a classic single-cutaway design with a warm and powerful electric guitar voice. Its mahogany body and maple top provide a balanced foundation with strong sustain and rich harmonic response.

Dual humbucking pickups deliver smooth clean tones and thick overdrive, making this guitar equally comfortable for blues, classic rock, hard rock, and expressive lead playing. The rosewood fingerboard provides a familiar feel for both rhythm work and bends.`,
        descriptionTwo:
          "With its distinctive Goldtop finish, traditional control layout, and comfortable neck profile, this model brings classic Les Paul character to a modern player's setup.",
        tags: ["Electric", "6 String", "Mahogany"],
        color: ["Yellow"],
      },
      {
        locale: "de",
        name: "Epiphone Les Paul Standard 50s Goldtop",
        title:
          "Klassische Single-Cut-E-Gitarre mit Mahagonikorpus, Ahorndecke und warmem Dual-Humbucker-Sound.",
        subtitle:
          "Traditionelle Les-Paul-Konstruktion mit komfortablem Spielgefühl im Vintage-Stil.",
        subtitleTwo:
          "Entwickelt für Blues, Rock, Classic Rock und ausdrucksstarke Soli",
        description: `Die Epiphone Les Paul Standard 50s Goldtop verbindet das klassische Single-Cutaway-Design mit einem warmen und kraftvollen E-Gitarrenklang. Der Mahagonikorpus und die Ahorndecke bilden die Grundlage für langes Sustain und eine reiche harmonische Ansprache.

Die beiden Humbucker liefern sowohl warme Clean-Sounds als auch kräftigen Overdrive und machen die Gitarre zu einer vielseitigen Wahl für Blues, Classic Rock, Hard Rock und Lead-Spiel.`,
        descriptionTwo:
          "Das charakteristische Goldtop-Finish, das traditionelle Bedienlayout und das komfortable Halsprofil verleihen diesem Modell einen unverwechselbaren klassischen Charakter.",
        tags: ["E-Gitarre", "6 Saiten", "Mahagoni"],
        color: ["Gelb"],
      },
    ],
  },
  {
    sku: "MWOOP11",
    price: 599,
    oldPrice: 0,
    image: "/images/products/Ovation-Celebrity-Elite.webp",
    groups: ["Featured"],
    categoryNames: ["Acoustic", "Acoustic-Electric", "6 String"],
    translations: [
      {
        locale: "en",
        name: "Ovation Celebrity Elite",
        title:
          "Stage-ready acoustic-electric guitar with a rounded composite body and clear amplified projection.",
        subtitle:
          "Comfortable cutaway design with an acoustic voice suited to live performance.",
        subtitleTwo:
          "Built for reliable amplification, rehearsals, and stage use",
        description: `The Ovation Celebrity Elite is an acoustic-electric guitar designed for players who need dependable performance both acoustically and through an amplifier. Its distinctive rounded composite body provides a comfortable playing position while helping control feedback in amplified environments.

The cutaway gives convenient access to the upper frets, while the integrated electronics make it easy to connect the guitar directly to an acoustic amplifier or PA system. Its balanced acoustic response works well for strumming, songwriting, and live accompaniment.`,
        descriptionTwo:
          "A practical choice for performers who want the familiar feel of an acoustic guitar with the flexibility and control required for the stage.",
        tags: ["Acoustic", "Acoustic-Electric", "6 String"],
        color: ["Black", "Blue"],
      },
      {
        locale: "de",
        name: "Ovation Celebrity Elite",
        title:
          "Bühnentaugliche elektroakustische Gitarre mit rundem Verbundkorpus und klarer verstärkter Projektion.",
        subtitle:
          "Komfortables Cutaway-Design mit einem ausgewogenen akustischen Klang.",
        subtitleTwo:
          "Entwickelt für zuverlässige Verstärkung, Proben und Live-Auftritte",
        description: `Die Ovation Celebrity Elite ist eine elektroakustische Gitarre für Musiker, die sowohl unverstärkt als auch über einen Verstärker zuverlässig spielen möchten. Der charakteristische abgerundete Korpus aus Verbundmaterial sorgt für eine komfortable Spielposition und hilft gleichzeitig dabei, Rückkopplungen bei verstärktem Spiel zu reduzieren.

Das Cutaway ermöglicht einen bequemen Zugang zu den höheren Bünden, während die integrierte Elektronik den direkten Anschluss an einen Akustikverstärker oder ein PA-System ermöglicht.`,
        descriptionTwo:
          "Eine praktische Wahl für Musiker, die das Spielgefühl einer Akustikgitarre mit der Flexibilität einer bühnentauglichen Verstärkung verbinden möchten.",
        tags: ["Akustik", "Elektroakustisch", "6 Saiten"],
        color: ["Schwarz", "Blau"],
      },
    ],
  },
  {
    sku: "MWOOP10",
    price: 1299,
    oldPrice: 0,
    image: "/images/products/Ibanez-Premium-RG1121PB.webp",
    groups: ["Featured"],
    categoryNames: ["Electric", "6 String", "Maple"],
    translations: [
      {
        locale: "en",
        name: "Ibanez RG Series",
        title:
          "Modern high-performance electric guitar with a fast neck, aggressive body shape, and versatile pickup configuration.",
        subtitle:
          "Built for precise lead playing, riffs, and high-gain performance.",
        subtitleTwo:
          "Comfortable double-cutaway body with excellent upper-fret access",
        description: `The Ibanez RG Series is designed for players who value speed, precision, and versatility. Its streamlined double-cutaway body provides excellent access to the upper frets, while the comfortable neck supports fast runs, bends, and technical playing.

The versatile pickup configuration covers everything from articulate clean tones to powerful high-gain sounds. A tremolo bridge adds additional expressive possibilities for modern rock and metal playing.`,
        descriptionTwo:
          "With its distinctive high-performance styling and comfortable playing position, this guitar is equally suited to practice, recording, and demanding live performances.",
        tags: ["Electric", "6 String"],
        color: ["Yellow", "Black"],
      },
      {
        locale: "de",
        name: "Ibanez RG Series",
        title:
          "Moderne E-Gitarre für anspruchsvolles Spiel mit schnellem Hals, aggressiver Korpusform und vielseitiger Tonabnehmerkonfiguration.",
        subtitle: "Entwickelt für präzise Soli, Riffs und High-Gain-Spiel.",
        subtitleTwo:
          "Komfortabler Double-Cutaway-Korpus mit hervorragendem Zugang zu den hohen Bünden",
        description: `Die Ibanez RG Series wurde für Musiker entwickelt, die Geschwindigkeit, Präzision und Vielseitigkeit schätzen. Der schlanke Double-Cutaway-Korpus ermöglicht einen hervorragenden Zugang zu den hohen Bünden, während der komfortable Hals schnelle Läufe, Bendings und technische Spielweisen unterstützt.

Die vielseitige Tonabnehmerkonfiguration deckt sowohl klare Clean-Sounds als auch kraftvolle High-Gain-Klänge ab. Ein Tremolo-System erweitert die Ausdrucksmöglichkeiten für moderne Rock- und Metal-Musik.`,
        descriptionTwo:
          "Das markante Design und die komfortable Spielposition machen dieses Modell zu einer vielseitigen Wahl für Üben, Studio und Bühne.",
        tags: ["E-Gitarre", "6 Saiten"],
        color: ["Gelb", "Schwarz"],
      },
    ],
  },
  {
    sku: "MWOOP9",
    price: 599,
    oldPrice: 0,
    image: "/images/products/ESP-LTD-EC-256.webp",
    groups: ["Featured"],
    categoryNames: ["Electric", "6 String", "Mahogany", "Rosewood Fretboard"],
    translations: [
      {
        locale: "en",
        name: "ESP LTD EC-256",
        title:
          "Single-cut electric guitar with a mahogany body, dual humbuckers, and powerful sustain.",
        subtitle:
          "Classic construction with a comfortable neck and versatile high-output tone.",
        subtitleTwo:
          "A strong choice for rock, blues, hard rock, and heavier styles",
        description: `The ESP LTD EC-256 combines a traditional single-cut body shape with a powerful modern electric guitar sound. Its mahogany construction provides a warm foundation with strong sustain, while the dual humbuckers deliver thick rhythm tones and expressive lead sounds.

The comfortable neck and straightforward control layout make it easy to move between clean passages, classic rock crunch, and heavier distortion. The single-cut design also provides a familiar playing feel for guitarists who prefer a substantial body shape.`,
        descriptionTwo:
          "A versatile instrument for players looking for a powerful single-cut electric guitar with a strong visual presence and dependable performance.",
        tags: ["Electric", "6 String", "Mahogany"],
        color: ["Black", "Brown"],
      },
      {
        locale: "de",
        name: "ESP LTD EC-256",
        title:
          "Single-Cut-E-Gitarre mit Mahagonikorpus, zwei Humbuckern und langem Sustain.",
        subtitle:
          "Klassische Konstruktion mit komfortablem Hals und vielseitigem High-Output-Sound.",
        subtitleTwo:
          "Eine starke Wahl für Rock, Blues, Hard Rock und härtere Musikstile",
        description: `Die ESP LTD EC-256 verbindet die klassische Single-Cut-Korpusform mit einem kraftvollen modernen E-Gitarrenklang. Die Mahagonikonstruktion sorgt für eine warme Basis und langes Sustain, während die beiden Humbucker druckvolle Rhythmusklänge und ausdrucksstarke Soli ermöglichen.

Der komfortable Hals und das übersichtliche Bedienlayout erleichtern den Wechsel zwischen Clean-Sounds, klassischem Rock-Crunch und stärkerer Verzerrung.`,
        descriptionTwo:
          "Eine vielseitige Wahl für Musiker, die eine kraftvolle Single-Cut-E-Gitarre mit markanter Optik und zuverlässiger Performance suchen.",
        tags: ["E-Gitarre", "6 Saiten", "Mahagoni"],
        color: ["Schwarz", "Braun"],
      },
    ],
  },
  {
    sku: "MWOOP8",
    price: 849,
    oldPrice: 0,
    image: "/images/products/Fender-Player-II-Precision-Bass.webp",
    groups: ["Featured", "Special"],
    categoryNames: ["Bass", "4 String", "Maple Fretboard"],
    translations: [
      {
        locale: "en",
        name: "Fender Player II Precision Bass",
        title:
          "Classic four-string electric bass with a solid Precision Bass body and powerful split-coil tone.",
        subtitle:
          "Modern playability combined with the unmistakable character of a Precision Bass.",
        subtitleTwo:
          "Excellent foundation for rock, blues, pop, and studio recording",
        description: `The Fender Player II Precision Bass delivers the familiar punch and low-end authority associated with the classic Precision Bass design. Its contoured body and comfortable modern neck profile make it easy to play for extended sessions.

The split-coil Precision Bass pickup provides strong fundamentals, focused mids, and a powerful low end that sits naturally inside a mix. The straightforward control layout keeps the instrument easy to operate while preserving its distinctive bass character.`,
        descriptionTwo:
          "A dependable four-string bass for players who want classic Precision Bass response with modern playability and reliable hardware.",
        tags: ["Bass", "4 String"],
        color: ["Black", "Grey", "White"],
      },
      {
        locale: "de",
        name: "Fender Player II Precision Bass",
        title:
          "Klassischer viersaitiger E-Bass mit Precision-Bass-Korpus und kraftvollem Split-Coil-Sound.",
        subtitle:
          "Modernes Spielgefühl kombiniert mit dem charakteristischen Klang eines Precision Bass.",
        subtitleTwo:
          "Eine hervorragende Basis für Rock, Blues, Pop und Studioaufnahmen",
        description: `Der Fender Player II Precision Bass liefert den bekannten Druck und die kraftvollen tiefen Frequenzen des klassischen Precision-Bass-Designs. Der konturierte Korpus und das moderne Halsprofil sorgen auch bei längeren Sessions für ein komfortables Spielgefühl.

Der Split-Coil-Tonabnehmer erzeugt klare Grundtöne, fokussierte Mitten und einen druckvollen Bassbereich, der sich problemlos in einen Mix einfügt.`,
        descriptionTwo:
          "Ein zuverlässiger Viersaiter für Musiker, die den klassischen Precision-Bass-Charakter mit moderner Bespielbarkeit verbinden möchten.",
        tags: ["Bass", "4 Saiten"],
        color: ["Schwarz", "Grau", "Weiß"],
      },
    ],
  },
  {
    sku: "MWOOP6",
    price: 499,
    oldPrice: 0,
    image: "/images/products/Ibanez-SR300E.webp",
    groups: ["Featured"],
    categoryNames: ["Bass", "4 String", "Jatoba Fretboard"],
    translations: [
      {
        locale: "en",
        name: "Ibanez SR300E",
        title:
          "Modern four-string bass with a lightweight body, fast neck, and versatile dual-humbucker setup.",
        subtitle:
          "Slim ergonomic design built for comfortable long-session playing.",
        subtitleTwo:
          "Balanced response for rock, pop, funk, and modern bass styles",
        description: `The Ibanez SR300E combines a lightweight ergonomic body with a fast and comfortable neck, making it a practical choice for players who spend long hours practicing or performing.

Its dual-humbucker configuration provides a broad tonal range, from clear and articulate bass lines to powerful low-end sounds. The comfortable body shape sits naturally against the player and makes movement across the instrument effortless.`,
        descriptionTwo:
          "A versatile modern bass designed for players who want comfortable handling, flexible tone, and reliable performance without an oversized body.",
        tags: ["Bass", "4 String"],
        color: ["Black", "Blue"],
      },
      {
        locale: "de",
        name: "Ibanez SR300E",
        title:
          "Moderner viersaitiger Bass mit leichtem Korpus, schnellem Hals und vielseitiger Dual-Humbucker-Konfiguration.",
        subtitle:
          "Schlankes ergonomisches Design für komfortables Spielen über lange Zeit.",
        subtitleTwo:
          "Ausgewogene Ansprache für Rock, Pop, Funk und moderne Bass-Stile",
        description: `Der Ibanez SR300E kombiniert einen leichten, ergonomischen Korpus mit einem schnellen und komfortablen Hals. Dadurch eignet er sich besonders für Musiker, die lange üben oder auftreten.

Die beiden Humbucker ermöglichen eine große Klangvielfalt – von klaren und präzisen Basslinien bis hin zu druckvollen tiefen Frequenzen. Die komfortable Korpusform liegt natürlich am Körper an und erleichtert das Spielen über das gesamte Griffbrett.`,
        descriptionTwo:
          "Ein vielseitiger moderner Bass für Musiker, die komfortable Handhabung, flexible Sounds und zuverlässige Performance suchen.",
        tags: ["Bass", "4 Saiten"],
        color: ["Schwarz", "Blau"],
      },
    ],
  },
  {
    sku: "MWOOP5",
    price: 299,
    oldPrice: 0,
    image: "/images/products/Natural-Dreadnought-Acoustic.webp",
    groups: ["Featured", "Bestseller"],
    categoryNames: ["Acoustic", "6 String"],
    translations: [
      {
        locale: "en",
        name: "Natural Dreadnought Acoustic",
        title:
          "Traditional dreadnought acoustic guitar with a warm natural finish and balanced projection.",
        subtitle:
          "Comfortable everyday acoustic designed for chords, strumming, and songwriting.",
        subtitleTwo:
          "A versatile choice for beginners and intermediate players",
        description: `The Natural Dreadnought Acoustic offers the familiar full-bodied response associated with the classic dreadnought shape. Its large sound chamber provides strong projection and a balanced acoustic voice that works especially well for rhythm playing and songwriting.

The comfortable neck profile makes the instrument approachable for developing players, while the natural finish gives the guitar a clean and timeless appearance. Its versatile response also makes it suitable for fingerpicking and lighter acoustic arrangements.`,
        descriptionTwo:
          "An accessible all-purpose acoustic guitar for home practice, songwriting sessions, rehearsals, and casual performances.",
        tags: ["Acoustic", "6 String"],
        color: ["Brown"],
      },
      {
        locale: "de",
        name: "Natural Dreadnought Acoustic",
        title:
          "Traditionelle Dreadnought-Akustikgitarre mit natürlichem Finish und ausgewogener Klangprojektion.",
        subtitle:
          "Komfortable Alltagsgitarre für Akkorde, Strumming und Songwriting.",
        subtitleTwo:
          "Eine vielseitige Wahl für Anfänger und fortgeschrittene Spieler",
        description: `Die Natural Dreadnought Acoustic bietet den bekannten vollmundigen Klang einer klassischen Dreadnought. Der große Resonanzkörper sorgt für eine kräftige Projektion und einen ausgewogenen Klang, der sich besonders für Rhythmusspiel und Songwriting eignet.

Das komfortable Halsprofil macht die Gitarre auch für Anfänger zugänglich, während das natürliche Finish für eine zeitlose Optik sorgt.`,
        descriptionTwo:
          "Eine vielseitige Akustikgitarre für das Üben zu Hause, Songwriting, Proben und kleinere Auftritte.",
        tags: ["Akustik", "6 Saiten"],
        color: ["Braun"],
      },
    ],
  },
  {
    sku: "MWOOP4",
    price: 449,
    oldPrice: 0,
    image: "/images/products/Vintage-Precision-Bass.webp",
    groups: ["Featured", "Bestseller"],
    categoryNames: ["Bass", "4 String"],
    translations: [
      {
        locale: "en",
        name: "Vintage Precision Bass",
        title:
          "Classic four-string bass with a familiar Precision-style body and powerful split-coil character.",
        subtitle:
          "Straightforward passive design for a focused and punchy bass response.",
        subtitleTwo:
          "Ideal for rock, blues, soul, pop, and classic-style grooves",
        description: `The Vintage Precision Bass is built around the familiar four-string bass format that has shaped countless recordings and live performances. Its traditional body design provides a comfortable playing position while maintaining the solid low-end response expected from a Precision-style instrument.

The split-coil pickup delivers a focused midrange, punchy attack, and strong fundamental notes that remain clear in a full band mix. Simple volume and tone controls make shaping the sound quick and intuitive.`,
        descriptionTwo:
          "A straightforward bass for players who prefer classic design, dependable controls, and a strong traditional foundation for groove-oriented playing.",
        tags: ["Bass", "4 String"],
        color: ["White", "Red", "Yellow"],
      },
      {
        locale: "de",
        name: "Vintage Precision Bass",
        title:
          "Klassischer viersaitiger Bass mit vertrauter Precision-Korpusform und kraftvollem Split-Coil-Charakter.",
        subtitle:
          "Einfaches passives Design für einen fokussierten und druckvollen Bassklang.",
        subtitleTwo: "Ideal für Rock, Blues, Soul, Pop und klassische Grooves",
        description: `Der Vintage Precision Bass basiert auf dem bewährten viersaitigen Bass-Format, das zahlreiche Aufnahmen und Live-Auftritte geprägt hat. Die traditionelle Korpusform sorgt für eine komfortable Spielposition und einen kräftigen Tiefbass.

Der Split-Coil-Tonabnehmer liefert fokussierte Mitten, präzisen Attack und klare Grundtöne, die sich auch in einer kompletten Bandbesetzung gut durchsetzen.`,
        descriptionTwo:
          "Ein unkomplizierter Bass für Musiker, die klassisches Design, intuitive Bedienelemente und einen druckvollen Grundsound bevorzugen.",
        tags: ["Bass", "4 Saiten"],
        color: ["Weiß", "Rot", "Gelb"],
      },
    ],
  },
  {
    sku: "MWOOP3",
    price: 279,
    oldPrice: 0,
    image: "/images/products/Ibanez-TMB100.webp",
    groups: ["Bestseller", "Special"],
    categoryNames: ["Bass", "4 String", "Jatoba Fretboard"],
    translations: [
      {
        locale: "en",
        name: "Ibanez TMB100",
        title:
          "Four-string Talman-style bass combining a vintage-inspired body with flexible P and J pickup tones.",
        subtitle:
          "Comfortable bass platform with a distinctive retro-modern appearance.",
        subtitleTwo:
          "Versatile pickup combination for rock, indie, pop, and alternative styles",
        description: `The Ibanez TMB100 combines a distinctive Talman-inspired body with a versatile four-string bass configuration. Its comfortable body shape provides a familiar playing position while giving the instrument a unique visual identity.

The combination of split-coil and single-coil style pickups offers a wide tonal range, from thick and focused low frequencies to more articulate and cutting bass tones. The instrument works equally well for straightforward rock lines and more expressive modern arrangements.`,
        descriptionTwo:
          "A characterful bass for players looking for something different from traditional Precision and Jazz Bass designs while keeping a familiar four-string format.",
        tags: ["Bass", "4 String"],
        color: ["Green", "Brown"],
      },
      {
        locale: "de",
        name: "Ibanez TMB100",
        title:
          "Viersaitiger Bass im Talman-Stil mit Vintage-inspirierter Korpusform und vielseitiger P/J-Tonabnehmerkonfiguration.",
        subtitle: "Komfortabler Bass mit markanter Retro-Modern-Optik.",
        subtitleTwo:
          "Vielseitige Tonabnehmerkombination für Rock, Indie, Pop und Alternative",
        description: `Der Ibanez TMB100 verbindet eine markante Talman-inspirierte Korpusform mit einer vielseitigen viersaitigen Basskonfiguration. Der komfortable Korpus bietet eine vertraute Spielposition und verleiht dem Instrument gleichzeitig eine eigenständige Optik.

Die Kombination aus Split-Coil- und Single-Coil-Tonabnehmer ermöglicht unterschiedliche Klangfarben – von druckvollen tiefen Frequenzen bis hin zu einem artikulierten und durchsetzungsfähigen Basssound.`,
        descriptionTwo:
          "Ein charaktervoller Bass für Musiker, die eine Alternative zu klassischen Precision- und Jazz-Bass-Formen suchen.",
        tags: ["Bass", "4 Saiten"],
        color: ["Grün", "Braun"],
      },
    ],
  },
  {
    sku: "MWOOP1",
    price: 999,
    oldPrice: 0,
    image: "/images/products/Ibanez-RG550.webp",
    groups: ["Featured"],
    categoryNames: ["Electric", "6 String", "Maple Fretboard"],
    translations: [
      {
        locale: "en",
        name: "Ibanez RG550",
        title:
          "High-performance six-string electric guitar with an HSH pickup configuration and expressive tremolo system.",
        subtitle:
          "Fast-playing neck and double-cutaway body designed for technical guitar work.",
        subtitleTwo:
          "A versatile platform for rock, metal, fusion, and lead playing",
        description: `The Ibanez RG550 is designed around speed, precision, and expressive electric guitar performance. Its double-cutaway body provides excellent access to the upper frets, while the fast neck supports technical runs, bends, and rapid position changes.

The HSH pickup configuration combines powerful humbuckers with a versatile middle pickup, allowing the guitar to move from articulate clean tones to aggressive high-gain sounds. The tremolo system adds further control for expressive pitch effects.`,
        descriptionTwo:
          "A strong choice for players who need a fast, versatile instrument capable of handling demanding modern guitar techniques.",
        tags: ["Electric", "6 String"],
        color: ["Red", "Blue"],
      },
      {
        locale: "de",
        name: "Ibanez RG550",
        title:
          "Hochleistungs-E-Gitarre mit sechs Saiten, HSH-Tonabnehmerkonfiguration und ausdrucksstarkem Tremolo-System.",
        subtitle:
          "Schneller Hals und Double-Cutaway-Korpus für anspruchsvolles Gitarrenspiel.",
        subtitleTwo:
          "Eine vielseitige Plattform für Rock, Metal, Fusion und Solospiel",
        description: `Die Ibanez RG550 wurde für Geschwindigkeit, Präzision und ausdrucksstarkes E-Gitarrenspiel entwickelt. Der Double-Cutaway-Korpus ermöglicht einen hervorragenden Zugang zu den hohen Bünden, während der schnelle Hals technische Läufe, Bendings und schnelle Lagenwechsel unterstützt.

Die HSH-Tonabnehmerkonfiguration kombiniert kraftvolle Humbucker mit einem vielseitigen mittleren Tonabnehmer. Dadurch reicht das Klangspektrum von klaren Clean-Sounds bis zu aggressiven High-Gain-Klängen.`,
        descriptionTwo:
          "Eine hervorragende Wahl für Spieler, die ein schnelles und vielseitiges Instrument für anspruchsvolle moderne Gitarrentechniken suchen.",
        tags: ["E-Gitarre", "6 Saiten"],
        color: ["Rot", "Blau"],
      },
    ],
  },
  {
    sku: "MWOOP2",
    price: 999,
    oldPrice: 0,
    image: "/images/products/Taylor-214ce.webp",
    groups: ["Bestseller", "Special"],
    categoryNames: ["Acoustic", "Acoustic-Electric", "6 String", "Spruce"],
    translations: [
      {
        locale: "en",
        name: "Taylor 214ce",
        title:
          "Grand Auditorium acoustic-electric guitar offering balanced projection, comfortable playability, and versatile stage performance.",
        subtitle:
          "Comfortable cutaway body suited to both fingerstyle and full chord playing.",
        subtitleTwo:
          "Solid spruce top for a clear and responsive acoustic voice",
        description: `The Taylor 214ce combines the versatile Grand Auditorium body shape with a comfortable playing feel and balanced acoustic response. Its cutaway provides convenient access to the upper frets, making the instrument equally useful for rhythm work, fingerstyle playing, and melodic arrangements.

The spruce top provides a clear and responsive tone that works well across a wide range of playing styles. Integrated electronics also make the guitar suitable for rehearsals, recording, and live performance.`,
        descriptionTwo:
          "A versatile acoustic-electric guitar for players who want a balanced instrument that can move easily between home practice, songwriting, studio work, and the stage.",
        tags: ["Acoustic", "Acoustic-Electric", "6 String"],
        color: ["Brown"],
      },
      {
        locale: "de",
        name: "Taylor 214ce",
        title:
          "Grand-Auditorium-Elektroakustikgitarre mit ausgewogener Projektion, komfortabler Bespielbarkeit und vielseitiger Bühnentauglichkeit.",
        subtitle:
          "Komfortabler Cutaway-Korpus für Fingerstyle und Akkordspiel.",
        subtitleTwo:
          "Massive Fichtendecke für einen klaren und dynamischen Akustikklang",
        description: `Die Taylor 214ce verbindet die vielseitige Grand-Auditorium-Korpusform mit einem komfortablen Spielgefühl und einer ausgewogenen Klangprojektion. Das Cutaway ermöglicht einen einfachen Zugang zu den höheren Bünden und macht die Gitarre sowohl für Rhythmusspiel als auch für Fingerstyle und melodische Arrangements geeignet.

Die Fichtendecke erzeugt einen klaren und dynamischen Klang, während die integrierte Elektronik die Gitarre auch für Proben, Aufnahmen und Live-Auftritte geeignet macht.`,
        descriptionTwo:
          "Eine vielseitige elektroakustische Gitarre für Musiker, die ein ausgewogenes Instrument für zu Hause, Songwriting, Studio und Bühne suchen.",
        tags: ["Akustik", "Elektroakustisch", "6 Saiten"],
        color: ["Braun"],
      },
    ],
  },
  {
    sku: "MWOOP22",
    price: 449,
    oldPrice: 0,
    image: "/images/products/Natural-Precision-Bass.webp",
    groups: ["Latest", "Special"],
    categoryNames: ["Bass", "4 String", "Maple Fretboard"],
    translations: [
      {
        locale: "en",
        name: "Natural Precision Bass",
        title:
          "Classic four-string bass with a familiar Precision-style body and focused split-coil response.",
        subtitle:
          "Simple passive controls with a strong and dependable low-end foundation.",
        subtitleTwo:
          "Suitable for rock, pop, blues, soul, and classic groove-based playing",
        description: `The Natural Precision Bass is built around a familiar four-string design with a balanced body shape and a focused passive bass response. Its split-coil pickup produces a strong fundamental tone with punchy mids and controlled low frequencies.

The simple volume and tone controls make the instrument easy to use, while the comfortable neck supports both steady rhythm playing and more active bass lines.`,
        descriptionTwo:
          "A straightforward four-string bass with a clean natural appearance and a classic tonal foundation suitable for a wide range of styles.",
        tags: ["Bass", "4 String"],
        color: ["Brown", "White"],
      },
      {
        locale: "de",
        name: "Natural Precision Bass",
        title:
          "Klassischer viersaitiger Bass mit vertrauter Precision-Korpusform und fokussiertem Split-Coil-Sound.",
        subtitle:
          "Einfache passive Regler und ein kräftiges, zuverlässiges Klangfundament.",
        subtitleTwo:
          "Geeignet für Rock, Pop, Blues, Soul und klassische Groove-Stile",
        description: `Der Natural Precision Bass basiert auf einem bewährten viersaitigen Design mit ausgewogener Korpusform und fokussiertem passivem Basssound. Der Split-Coil-Tonabnehmer liefert einen kräftigen Grundton mit druckvollen Mitten und kontrollierten tiefen Frequenzen.

Die einfachen Volume- und Tone-Regler machen das Instrument unkompliziert, während der komfortable Hals sowohl ruhiges Rhythmusspiel als auch aktivere Basslinien unterstützt.`,
        descriptionTwo:
          "Ein unkomplizierter Viersaiter mit natürlicher Optik und klassischem Klangfundament für viele Musikstile.",
        tags: ["Bass", "4 Saiten"],
        color: ["Braun", "Weiß"],
      },
    ],
  },
  {
    sku: "MWOOP17",
    price: 399,
    oldPrice: 0,
    image: "/images/products/Classic-PJ-Bass.webp",
    groups: ["Latest"],
    categoryNames: ["Bass", "4 String", "Maple Fretboard"],
    translations: [
      {
        locale: "en",
        name: "Classic PJ Bass",
        title:
          "Versatile four-string electric bass combining punchy split-coil character with a defined bridge pickup voice.",
        subtitle:
          "Traditional PJ-style layout for a broad range of bass tones.",
        subtitleTwo: "A practical choice for rock, pop, indie, and studio work",
        description: `The Classic PJ Bass combines two familiar electric bass pickup voices in one versatile instrument. The split-coil pickup provides a strong and focused foundation, while the bridge pickup adds additional definition and bite for more articulate bass lines.

Its comfortable body and familiar neck layout make it approachable for both new players and experienced musicians. The straightforward control setup allows the two pickup voices to be blended for a wide range of sounds.`,
        descriptionTwo:
          "A flexible four-string bass for musicians who want more tonal variety than a traditional single-pickup design can provide.",
        tags: ["Bass", "4 String"],
        color: ["Green", "Blue"],
      },
      {
        locale: "de",
        name: "Classic PJ Bass",
        title:
          "Vielseitiger viersaitiger E-Bass mit druckvollem Split-Coil-Sound und definierter Bridge-Tonabnehmer-Ansprache.",
        subtitle:
          "Traditionelles PJ-Layout für eine große Auswahl an Basssounds.",
        subtitleTwo:
          "Eine praktische Wahl für Rock, Pop, Indie und Studioarbeit",
        description: `Der Classic PJ Bass kombiniert zwei bekannte Tonabnehmercharaktere in einem vielseitigen Instrument. Der Split-Coil-Tonabnehmer liefert ein kräftiges und fokussiertes Fundament, während der Steg-Tonabnehmer zusätzliche Definition und Attack für präzisere Basslinien bietet.

Der komfortable Korpus und das vertraute Halslayout machen den Bass sowohl für Einsteiger als auch für erfahrene Musiker interessant.`,
        descriptionTwo:
          "Ein flexibler Viersaiter für Musiker, die mehr klangliche Möglichkeiten als bei einem klassischen Single-Pickup-Bass wünschen.",
        tags: ["Bass", "4 Saiten"],
        color: ["Grün", "Blau"],
      },
    ],
  },
  {
    sku: "MWOOP18",
    price: 499,
    oldPrice: 0,
    image: "/images/products/Yamaha-TRBX305.webp",
    groups: ["Latest"],
    categoryNames: ["Bass", "5 String", "Maple"],
    translations: [
      {
        locale: "en",
        name: "Yamaha TRBX305",
        title:
          "Modern five-string bass combining powerful low-end response with flexible active electronics and a comfortable body shape.",
        subtitle:
          "Extended-range bass designed for modern players and demanding low-end work.",
        subtitleTwo:
          "A strong fit for rock, metal, pop, funk, and studio production",
        description: `The Yamaha TRBX305 is a modern five-string bass designed for players who need extended low-end range without sacrificing playability. Its balanced body shape sits comfortably against the player while the extended scale provides a focused and controlled low B string.

The dual pickup configuration offers a broad tonal range, while the active electronics provide additional control over the instrument's overall character. This makes the bass suitable for everything from clean pop arrangements to aggressive modern rock and metal.`,
        descriptionTwo:
          "A versatile five-string instrument for players who want extended range, flexible tone shaping, and a modern stage-ready design.",
        tags: ["Bass", "5 String"],
        color: ["Red", "White", "Blue", "Green"],
      },
      {
        locale: "de",
        name: "Yamaha TRBX305",
        title:
          "Moderner fünfsaitiger Bass mit kraftvollem Tiefbass, flexibler aktiver Elektronik und komfortabler Korpusform.",
        subtitle:
          "Extended-Range-Bass für moderne Musiker und anspruchsvolle tiefe Frequenzen.",
        subtitleTwo: "Ideal für Rock, Metal, Pop, Funk und Studioarbeit",
        description: `Der Yamaha TRBX305 ist ein moderner fünfsaitiger Bass für Musiker, die einen erweiterten Tiefbassbereich mit guter Bespielbarkeit verbinden möchten. Die ausgewogene Korpusform liegt komfortabel am Körper an, während die zusätzliche H-Saite einen erweiterten Tonumfang ermöglicht.

Die vielseitige Tonabnehmerkonfiguration und die aktive Elektronik bieten zahlreiche Möglichkeiten zur Klanggestaltung. Dadurch eignet sich der Bass sowohl für klare Pop-Arrangements als auch für modernen Rock und Metal.`,
        descriptionTwo:
          "Ein vielseitiger Fünfsaiter für Musiker, die erweiterten Tonumfang, flexible Klanggestaltung und ein modernes bühnentaugliches Design suchen.",
        tags: ["Bass", "5 Saiten"],
        color: ["Rot", "Weiß", "Blau", "Grün"],
      },
    ],
  },
  {
    sku: "MWOOP19",
    price: 849,
    oldPrice: 0,
    image: "/images/products/PRS-SE-Custom-24.webp",
    groups: ["Latest", "Special"],
    categoryNames: [
      "Electric",
      "6 String",
      "Mahogany",
      "Maple",
      "Rosewood Fretboard",
    ],
    translations: [
      {
        locale: "en",
        name: "PRS SE Custom 24",
        title:
          "Versatile double-cut electric guitar with a comfortable body, dual humbuckers, and expressive tremolo system.",
        subtitle:
          "Balanced design combining modern playability with classic electric guitar character.",
        subtitleTwo:
          "Suitable for clean tones, blues, rock, progressive styles, and high gain",
        description: `The PRS SE Custom 24 is a versatile double-cut electric guitar designed to cover a wide range of musical styles. Its comfortable body shape provides easy access to the upper frets, while the dual humbuckers deliver everything from articulate clean sounds to powerful distorted tones.

The tremolo bridge adds expressive pitch control, while the 24-fret layout gives players an extended upper register for lead work. The combination of a comfortable neck and versatile electronics makes the instrument equally useful for rhythm and solo playing.`,
        descriptionTwo:
          "A modern all-purpose electric guitar for players who want one instrument capable of covering clean, classic, and high-gain sounds.",
        tags: ["Electric", "6 String"],
        color: ["Yellow", "Blue", "Red"],
      },
      {
        locale: "de",
        name: "PRS SE Custom 24",
        title:
          "Vielseitige Double-Cut-E-Gitarre mit komfortablem Korpus, zwei Humbuckern und ausdrucksstarkem Tremolo-System.",
        subtitle:
          "Ausgewogene Konstruktion mit moderner Bespielbarkeit und klassischem E-Gitarrencharakter.",
        subtitleTwo:
          "Geeignet für Clean-Sounds, Blues, Rock, Progressive und High-Gain",
        description: `Die PRS SE Custom 24 ist eine vielseitige Double-Cut-E-Gitarre für unterschiedlichste Musikstile. Die komfortable Korpusform ermöglicht einen einfachen Zugang zu den hohen Bünden, während die beiden Humbucker von klaren Clean-Sounds bis hin zu kräftigen verzerrten Klängen reichen.

Das Tremolo-System ermöglicht ausdrucksstarke Pitch-Effekte, während die 24 Bünde einen erweiterten Bereich für Solospiel bieten.`,
        descriptionTwo:
          "Eine moderne Allround-E-Gitarre für Musiker, die mit einem Instrument klare, klassische und High-Gain-Sounds abdecken möchten.",
        tags: ["E-Gitarre", "6 Saiten"],
        color: ["Gelb", "Blau", "Rot"],
      },
    ],
  },
  {
    sku: "MWOOP21",
    price: 599,
    oldPrice: 0,
    image: "/images/products/Ibanez-RGA742EX.webp",
    groups: ["Latest"],
    categoryNames: ["Electric", "7 String", "Maple Fretboard"],
    translations: [
      {
        locale: "en",
        name: "Ibanez-RGA742EX",
        title:
          "Modern seven-string electric guitar with a fast neck, double-cutaway body, and versatile pickup configuration.",
        subtitle:
          "Designed for comfortable upper-fret access and expressive lead playing.",
        subtitleTwo:
          "A versatile platform for rock, metal, alternative, and modern guitar styles",
        description: `The Ibanez RG Series combines a streamlined double-cutaway body with a fast-playing neck and a versatile electric guitar configuration. The ergonomic body provides easy access across the fretboard, making the instrument comfortable for both rhythm and lead playing.

Its pickup configuration offers a broad tonal range, from clear articulate sounds to heavier distorted tones. The tremolo system adds additional control for expressive bends and pitch effects.`,
        descriptionTwo:
          "A practical choice for players who want a modern-looking electric guitar with comfortable ergonomics and a wide range of usable tones.",
        tags: ["Electric", "7 String"],
        color: ["Pink"],
      },
      {
        locale: "de",
        name: "Ibanez-RGA742EX",
        title:
          "Moderne sechssaitige E-Gitarre mit schnellem Hals, Double-Cutaway-Korpus und vielseitiger Tonabnehmerkonfiguration.",
        subtitle:
          "Entwickelt für komfortablen Zugang zu den hohen Bünden und ausdrucksstarkes Solospiel.",
        subtitleTwo:
          "Eine vielseitige Plattform für Rock, Metal, Alternative und moderne Gitarrenstile",
        description: `Die Ibanez RG Series kombiniert einen schlanken Double-Cutaway-Korpus mit einem schnellen Hals und einer vielseitigen E-Gitarren-Konfiguration. Der ergonomische Korpus ermöglicht einen komfortablen Zugang über das gesamte Griffbrett und eignet sich sowohl für Rhythmus- als auch für Solospiel.

Die Tonabnehmerkonfiguration bietet ein breites Klangspektrum von klaren Sounds bis hin zu kräftiger Verzerrung. Das Tremolo-System erweitert die Möglichkeiten für ausdrucksstarke Pitch-Effekte.`,
        descriptionTwo:
          "Eine praktische Wahl für Musiker, die eine moderne E-Gitarre mit komfortabler Ergonomie und vielseitigen Sounds suchen.",
        tags: ["E-Gitarre", "8 Saiten"],
        color: ["Rosa"],
      },
    ],
  },
  {
    sku: "MWOOP20",
    price: 549,
    oldPrice: 0,
    image: "/images/products/Modern-Double-Cut-Electric.webp",
    groups: ["Latest", "Special"],
    categoryNames: ["Electric", "6 String"],
    translations: [
      {
        locale: "en",
        name: "Modern Double-Cut Electric",
        title:
          "Accessible double-cut electric guitar with a comfortable body shape and versatile modern tone.",
        subtitle:
          "Balanced design for rhythm playing, chords, riffs, and lead work.",
        subtitleTwo:
          "An affordable choice for players exploring electric guitar styles",
        description: `The Modern Double-Cut Electric is designed as an approachable all-purpose electric guitar for players developing their technique. Its double-cutaway body provides comfortable access to the upper frets while maintaining a balanced position when playing seated or standing.

The versatile pickup configuration allows the instrument to move from clean chord work to driven rhythm tones and expressive lead playing. The comfortable neck profile also makes it easy to move between positions across the fretboard.`,
        descriptionTwo:
          "A practical and affordable electric guitar for students, home players, and musicians looking for a dependable second instrument.",
        tags: ["Electric", "6 String"],
        color: ["Black", "Blue", "Grey"],
      },
      {
        locale: "de",
        name: "Modern Double-Cut Electric",
        title:
          "Zugängliche Double-Cut-E-Gitarre mit komfortabler Korpusform und vielseitigem modernem Klang.",
        subtitle:
          "Ausgewogenes Design für Rhythmusspiel, Akkorde, Riffs und Soli.",
        subtitleTwo:
          "Eine erschwingliche Wahl für Musiker, die verschiedene E-Gitarren-Stile ausprobieren möchten",
        description: `Die Modern Double-Cut Electric wurde als vielseitige E-Gitarre für Spieler entwickelt, die ihre Technik weiterentwickeln möchten. Der Double-Cutaway-Korpus ermöglicht einen komfortablen Zugang zu den höheren Bünden und bleibt sowohl im Sitzen als auch im Stehen ausgewogen.

Die vielseitige Tonabnehmerkonfiguration ermöglicht den Wechsel zwischen klaren Akkorden, verzerrten Rhythmusklängen und ausdrucksstarken Soli. Das komfortable Halsprofil erleichtert zudem schnelle Lagenwechsel.`,
        descriptionTwo:
          "Eine praktische und erschwingliche E-Gitarre für Schüler, Hobbymusiker und alle, die ein zuverlässiges Zweitinstrument suchen.",
        tags: ["E-Gitarre", "6 Saiten"],
        color: ["Schwarz", "Blau"],
      },
    ],
  },
];
