import { Dictionary } from "@interfaces/dictionary.types";
import { localesHeader } from "@data/dataLanguages";
export const de: Dictionary = {
  errors: {
    fill_all_fields: "Bitte füllen Sie alle Felder aus.",
    email_exists: "Diese E-Mail-Adresse ist bereits vergeben.",
    server_error: "Etwas ist schiefgelaufen.",
  },
  success: {
    registered: "Registrierung erfolgreich! Sie können sich jetzt einloggen.",
  },
  pages: {
    home: {
      banners: [
        {
          id: 0,
          src: "/images/main-banner-1.webp",
          alt: "banner",
        },
        {
          id: 1,
          src: "/images/main-banner-2.webp",
          alt: "banner",
        },
      ],
      features: [
        "Weltweiter kostenloser Versand",
        "Nachnahme",
        "besondere Geschenkkarte",
        "Kundensupport rund um die Uhr",
      ],
      bestseller: [
        {
          id: 0,
          url: "/images/sub-banner-1.webp",
          title: "Großartige Gitarrenmarken",
          text: "60 % Rabatt auf Bestseller",
        },
        {
          id: 1,
          url: "/images/sub-banner-2.webp",
          title: "Imperial-Gitarre",
          text: "Günstiger Preis für nur 2199,00 $",
        },
      ],
      ourProduct: {
        title: "Unsere Produkte",
        routes: [
          { href: "Featured", route: "Hervorgehoben" },
          { href: "Latest", route: "Letzte" },
          { href: "Bestseller", route: "Bestseller" },
          { href: "Special", route: "Besonders" },
        ],
      },
      testimonials: {
        slides: [
          {
            id: 0,
            image: "/images/photo-client-one.webp",
            name: "Jennifer",
            text: "Ich habe eine Jixing-Gitarre mit Lieferung in eine andere Stadt bestellt. Ehrlich gesagt hatte ich Bedenken wegen des Stimmstocks und der Bünde während des Transports, aber sie war unglaublich gut verpackt – drei Lagen Luftpolsterfolie und ein Hartschalenkoffer. Das Instrument kam perfekt gestimmt an und behält die Stimmung auch direkt nach dem Auspacken. Großartiger Service!",
          },
          {
            id: 1,
            image: "/images/photo-client-two.webp",
            name: "John Deo",
            text: "Die Berater haben mir geholfen, das perfekte Instrument für mein Budget und meinen Stil zu finden. Der Klang ist hervorragend, die Hardware erstklassig und die Lackierung makellos. Ab sofort werde ich Saiten und Pedale nur noch bei Ihnen kaufen.",
          },
          {
            id: 2,
            image: "/images/photo-client-trhee.webp",
            name: "Smith Green",
            text: "Ich war auf der Suche nach meiner ersten E-Gitarre und hatte Angst, die falsche Wahl zu treffen. Der Katalog war sehr übersichtlich gestaltet, und das Verkaufsteam beantwortete schnell meine technischen Fragen. Die Gitarre kam innerhalb weniger Tage an, der Hals ist komfortabel, und die niedrige Saitenlage macht das Spielen zum Vergnügen!",
          },
        ],
        title: "Kundenrezensionen",
      },
      latestNews: {
        title: "Neueste Nachrichten",
      },
    },
    auth: {
      login: {
        title: "Ausfahrt",
        email: "Benutzername oder E-Mail-Adresse",
        password: "Passwort",
        remember: "Erinnere dich an mich",
        btn: "Einloggen",
        lostPass: "Passwort vergessen?",
      },
      register: {
        title: "Registrieren",
        email: "E-Mail-Adresse",
        text: "Ihr Passwort wird Ihnen per E-Mail zugesendet. Ihre personenbezogenen Daten werden verwendet, um Ihre Nutzung dieser Website zu optimieren, Ihren Kontozugriff zu verwalten und für weitere in unserer Datenschutzerklärung beschriebene Zwecke.",
        linkPolicy: "Datenschutzrichtlinie.",
        btn: "Registrieren",
      },
    },
    product: {
      quanity: "Menge",
      category: "Kategorien:",
      sku: "SKU:",
      tags: "Schlagwörter:",
      routes: {
        description: "BESCHREIBUNG",
        information: {
          routeName: "WEITERE INFORMATIONEN",
          color: "Farbe",
        },
        reviews: {
          routeName: "REZENSIONEN",
          reviewName: "Rezensionen",
          reviewLengthZero: "Es gibt noch keine Bewertungen.",
          title: "Schreiben Sie die erste Bewertung.",
          warning:
            "Ihre E-Mail-Adresse wird nicht veröffentlicht. Pflichtfelder sind gekennzeichnet.",
          ratingText: "Ihre Bewertung",
          reviewText: "Ihre Bewertung",
          name: "Name",
          email: "Email",
          saveName:
            "Speichere meinen Namen, meine E-Mail-Adresse und meine Website in diesem Browser für meinen nächsten Kommentar.",
        },
      },
    },
    about: {
      description: {
        url: "/images/about-Us.avif",
        title: "Über uns",
        subtitle: "Wer wir sind",
        description:
          "Hier beginnt dein Sound. Wir haben Guitro ins Leben gerufen, damit jeder Gitarrist – vom Anfänger, der seine erste Akustikgitarre aussucht, bis zum erfahrenen Profi auf der Bühne – ein Instrument mit dem perfekten Klang findet. Unser Sortiment umfasst E-Gitarren, Akustikgitarren, Bässe sowie das gesamte wichtige Equipment für Studio und Bühne. Wir verkaufen nicht einfach nur Gitarren; wir helfen dir dabei, deinen ganz eigenen Sound zu finden.",
      },
      service: {
        title: "Unsere Leistungen",
        list: [
          {
            url: "/icons/iconLamp.svg",
            title: "Kreative Ideen",
            description:
              "Entdecken Sie neue Sounds, experimentieren Sie mit verschiedenen Klangfarben und finden Sie die Gitarre, die Ihre musikalischen Ideen zum Leben erweckt. Von klassischen Stilen bis hin zu modernen Setups – wir sind hier, um Sie zu Ihrem nächsten Riff, Song oder Auftritt zu inspirieren.",
          },
          {
            url: "/icons/iconMonitor.svg",
            title: "Webentwicklung",
            description:
              "Wir haben einen schnellen, modernen Online-Shop entwickelt, der das Entdecken und Kaufen von Gitarren einfach und angenehm macht. Von der reibungslosen Navigation bis hin zum Responsive Design ist das gesamte Erlebnis für Musiker optimiert – auf jedem Gerät.",
          },
          {
            url: "/icons/iconHeartOrange.svg",
            title: "Mit Leidenschaft hergestellt",
            description:
              "Wir lieben Gitarren und die Musik, die mit ihnen entsteht. Unser gesamtes Geschäft ist auf die Bedürfnisse von Musikern ausgerichtet – von der Entdeckung Ihres nächsten Instruments bis hin zur Suche nach dem perfekten Sound.",
          },
          {
            url: "/icons/iconGears.svg",
            title: "Leistungsstarke Optionen",
            description:
              "Entdecke verschiedene Gitarren, Ausrüstung und Zubehör, um ein Setup zusammenzustellen, das zu deinem Stil passt und dir hilft, den gewünschten Sound zu erzielen.",
          },
          {
            url: "/icons/iconSnow.svg",
            title: "Einzigartiges Design",
            description:
              "Jede Gitarre hat ihren eigenen Charakter. Entdecken Sie Instrumente mit unverwechselbarem Design, speziellen Lackierungen und Details, die Ihren Stil zu etwas ganz Persönlichem machen.",
          },
          {
            url: "/icons/iconMonitor.svg",
            title: "Anpassbare Optionen",
            description:
              "Entdecken Sie Produkte, vergleichen Sie Ihre Optionen und finden Sie die Ausrüstung, die zu Ihrem Stil passt. Unser Online-Shop macht es Ihnen leicht, sich ein Setup zusammenzustellen, das ganz individuell zu Ihnen passt.",
          },
        ],
      },
      team: {
        title: "Unser Team",
        list: [
          {
            url: "/images/team/team-2.webp",
            name: "Michael Brooks",
            position: "Gründer & Gitarrenexperte",
          },
          {
            url: "/images/team/team-1.webp",
            name: "Sophie Bennett",
            position: "Manager für Kundenerlebnisse",
          },
          {
            url: "/images/team/team-3.webp",
            name: "Lukas Steiner",
            position: "Produktspezialist",
          },
          {
            url: "/images/team/team-4.webp",
            name: "Emma Sullivan",
            position: "Kreativ- und Webdirektor",
          },
        ],
      },
    },
    privacyPolicy: {
      title: "Datenschutzerklärung",
      updated: {
        text: "Zuletzt aktualisiert:",
        data: "Oktober 2026",
      },
      informationCollect: {
        title: "Von uns erfasste Informationen",
        paragraphOne:
          "Wenn Sie unsere Website nutzen, erfassen wir möglicherweise Informationen, die Sie bei der Erstellung eines Kontos oder der Aufgabe einer Bestellung angeben, wie z. B. Ihren Namen, Ihre E-Mail-Adresse, Versandinformationen und Bestelldetails.",
        paragraphTwo:
          "Zudem erfassen wir technische Informationen wie Ihre IP-Adresse, den Browsertyp und grundlegende Informationen darüber, wie Sie unsere Website nutzen.",
      },
      howUseInformation: {
        title: "Verwendung Ihrer Informationen",
        subtitle: "Wir verwenden Ihre Informationen, um:",
        paragraph:
          "Ihr Konto zu erstellen und zu verwalten, Bestellungen zu bearbeiten und zu verwalten, mit Ihnen bezüglich Ihrer Bestellungen zu kommunizieren, Kundensupport zu leisten, unsere Website zu warten und zu verbessern sowie unsere Website vor unbefugten Aktivitäten zu schützen.",
      },
      accounts: {
        title: "Konten",
        paragraphOne:
          "Wenn Sie ein Konto erstellen, speichern wir die Informationen, die zur Bereitstellung der Kontofunktionen und zur Verwaltung Ihrer Bestellungen erforderlich sind.",
        paragraphTwo:
          "Sie sind dafür verantwortlich, Ihre Zugangsdaten sicher aufzubewahren.",
      },
      cookies: {
        title: "Cookies",
        paragraphOne:
          "Wir verwenden Cookies und ähnliche Technologien, die für das ordnungsgemäße Funktionieren der Website erforderlich sind, einschließlich der Aufrechterhaltung Ihrer Authentifizierungssitzung und der Speicherung bestimmter Einstellungen.",
        paragraphTwo:
          "Wir können auch Cookies verwenden, die für die Leistung und Funktionalität der Website erforderlich sind.",
      },
      dataSharing: {
        title: "Weitergabe von Daten",
        subtitle: "Wir verkaufen Ihre personenbezogenen Daten nicht.",
        paragraphOne:
          "Ihre Daten können von vertrauenswürdigen Dienstleistern verarbeitet werden, die uns beim Betrieb der Website unterstützen und Hosting-, Datenbank-, Zahlungs-, Authentifizierungs- oder andere notwendige Dienste bereitstellen.",
        paragraphTwo:
          "Diese Dienstleister erhalten nur die Informationen, die zur Erbringung ihrer Dienstleistungen erforderlich sind.",
      },
      dataRetention: {
        title: "Datenspeicherung",
        paragraph:
          "Wir bewahren personenbezogene Daten so lange auf, wie es für die Erbringung unserer Dienstleistungen, die Verwaltung von Bestellungen, die Führung von Konten sowie zur Einhaltung geltender rechtlicher und sicherheitsrelevanter Anforderungen erforderlich ist.",
      },
      yourRights: {
        title: "Ihre Rechte",
        paragraphOne:
          "Je nach geltendem Recht haben Sie möglicherweise das Recht, Auskunft über Ihre personenbezogenen Daten zu verlangen sowie deren Berichtigung oder Löschung zu fordern.",
        paragraphTwo:
          "Um eine datenschutzbezogene Anfrage zu stellen, kontaktieren Sie uns bitte über die auf unserer Website angegebenen Kontaktdaten.",
      },
      security: {
        title: "Sicherheit",
        paragraphOne:
          "Wir treffen angemessene technische und organisatorische Maßnahmen, um Ihre personenbezogenen Daten vor unbefugtem Zugriff, Verlust oder Missbrauch zu schützen.",
        paragraphTwo:
          "Es kann jedoch keine Methode der Online-Übertragung oder -Speicherung von Informationen als absolut sicher garantiert werden.",
      },
      changesPolicy: {
        title: "Änderungen dieser Datenschutzerklärung",
        paragraph:
          "Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren. Änderungen werden auf dieser Seite unter Angabe des Aktualisierungsdatums veröffentlicht.",
      },
      contactUs: {
        title: "Kontakt",
        paragraph:
          "Wenn Sie Fragen zu dieser Datenschutzerklärung oder zum Umgang mit Ihren Daten haben, kontaktieren Sie uns bitte über die auf unserer Website angegebenen Kontaktdaten.",
      },
    },
  },
  components: {
    header: {
      topBar: {
        welcome: "Willkommen in unserem Online-Shop!",
        tel: "Kundensupport: +43 1 545 1700",
        textAccount: "Mein Konto",
        textContact: "Kontaktieren Sie uns",
      },
      language: {
        languages: localesHeader,
        selectedLanguage: "DE",
      },
      burger: {
        links: [
          {
            title: "Heim",
            link: "/",
          },
          {
            title: "Geschäft",
            link: "shop",
          },
          {
            title: "Blogs",
            link: "blogs",
          },
          {
            title: "Portfolio",
            link: "portfolio",
          },
          {
            title: "Über uns",
            link: "about",
          },
        ],
        burgerTitle: "SPEISEKARTE",
      },
    },
    navigate: [
      { page: "blogs", title: "BLOGS" },
      { page: "shop", title: "GESCHÄFT" },
      { page: "about", title: "ÜBER UNS" },
      { page: "account", title: "KONTO" },
    ],
    navigation: {
      account: {
        title: "Mein Konto",
        link: "Home",
        subtitle: "Mein Konto",
      },
    },
    subscribe: {
      title: "Newsletter abonnieren",
      text: "Erhalten Sie E-Mail-Updates zu unseren neuesten Angeboten und Aktionen.",
      placeholder: "Geben Sie Ihre E-Mail-Adresse ein...",
      button: "Melden Sie sich an",
    },
    footer: {
      caption:
        "Kreiere deinen eigenen, einzigartigen Sound, teile deine Musik mit der Welt und finde Gleichgesinnte, die deine Leidenschaft für das Gitarrenspiel teilen.",
      information: {
        caption: "INFORMATION",
        links: [
          { id: 0, text: "Über uns", url: "about" },
          { id: 1, text: "Datenschutzrichtlinie", url: "privacyPolicy" },
          { id: 2, text: "Zurückkehren", url: "returns" },
          { id: 3, text: "Geschäftsbedingungen", url: "terms" },
        ],
      },
      services: {
        caption: "DIENSTLEISTUNGEN",
        links: [
          { id: 0, text: "Befehl", url: "orders" },
          { id: 1, text: "Wunschliste", url: "wishlist" },
          { id: 2, text: "Laden", url: "downloads" },
          { id: 3, text: "Sitemap", url: "siteMap" },
          { id: 4, text: "Kontaktieren Sie uns", url: "contactUs" },
        ],
      },
      contactinfo: {
        caption: "KONTAKTINFORMATIONEN",
        address: "Gasometer A, Guglgasse 6, 1110 Wien, Austria",
        phone: "+43 1 545 1700",
        email: "support@your-guitar-brand.com",
        fax: "+43 1 545 1700 90",
      },
      rights: "© 2026 Guitro. Alle Rechte vorbehalten.",
    },
    buttons: {
      btnAddCart: "In den Warenkorb legen",
      btnSubmit: "Einreichen",
    },
  },
};
