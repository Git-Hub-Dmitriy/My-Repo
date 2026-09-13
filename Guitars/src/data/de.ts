import { Dictionary } from "@interfaces/dictionary.types";
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
  },
  components: {
    header: {
      topBar: {
        welcome: "Willkommen in unserem Online-Shop!",
        tel: "Kundensupport: 123-456-7890",
        textAccount: "Mein Konto",
        textContact: "Kontaktieren Sie uns",
      },
      language: {
        languages: ["EN", "DE"],
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
