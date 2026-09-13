import { Dictionary } from "@interfaces/dictionary.types";
export const en: Dictionary = {
  errors: {
    fill_all_fields: "Please fill in all fields",
    email_exists: "This email is already taken",
    server_error: "Something went wrong",
  },
  success: {
    registered: "Registration successful! You can now log in.",
  },
  pages: {
    home: {
      features: [
        "free shipping worldwide",
        "cash on delivery",
        "special gift card",
        "24/7 customer service",
      ],
      bestseller: [
        {
          id: 0,
          url: "/images/sub-banner-1.webp",
          title: "Great Guitar Brands",
          text: "60% Off Best Sellers",
        },
        {
          id: 1,
          url: "/images/sub-banner-2.webp",
          title: "Imperial Guitar",
          text: "Affordable at only $2199.00",
        },
      ],
      ourProduct: {
        title: "Our Products",
        routes: [
          { href: "Featured", route: "Featured" },
          { href: "Latest", route: "Latest" },
          { href: "Bestseller", route: "Bestseller" },
          { href: "Special", route: "Special" },
        ],
      },
      testimonials: {
        slides: [
          {
            id: 0,
            image: "/images/photo-client-one.webp",
            name: "Jennifer",
            text: "I ordered a Jixing Guitar with delivery to another city. Honestly, I was worried about the truss rod and frets during shipping, but they packed it incredibly tightly—three layers of bubble wrap and a hard case. The instrument arrived perfectly tuned, and it stays in tune right out of the box. Huge respect for the service!",
          },
          {
            id: 1,
            image: "/images/photo-client-two.webp",
            name: "John Deo",
            text: "The consultants helped me find the perfect instrument for my budget and style. The sound is solid, the hardware is top-notch, and the paint job is flawless. From now on, I'll only come to you for strings and pedals.",
          },
          {
            id: 2,
            image: "/images/photo-client-trhee.webp",
            name: "Smith Green",
            text: "I was looking for my first electric guitar and was terrified of making the wrong choice. The catalog was very clearly laid out, and the sales team quickly answered a couple of technical questions. The guitar arrived in a couple of days, the neck is comfortable, and the strings are low-action—it's a joy to play!",
          },
        ],
        title: "Client Testimonials",
      },
      latestNews: {
        title: "Latest News",
      },
    },
    auth: {
      login: {
        title: "Login",
        email: "Username or email address",
        password: "Password",
        remember: "Remember me",
        btn: "Log In",
        lostPass: "Lost your password?",
      },
      register: {
        title: "Register",
        email: "Email address",
        text: "A password will be sent to your email address. Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our",
        linkPolicy: "privacy policy.",
        btn: "Register",
      },
    },
    product: {
      quanity: "Quantity",
      category: "Categories:",
      sku: "SKU:",
      tags: "Tags:",
      routes: {
        description: "DESCRIPTION",
        information: {
          routeName: "ADDITIONAL INFORMATION",
          color: "color",
        },
        reviews: {
          routeName: "REVIEWS",
          reviewName: "Reviews",
          reviewLengthZero: "There are not reviews yet",
          title: "Be the first review",
          warning:
            "Your email address will not be published. Required fields are marked",
          ratingText: "Your rating",
          reviewText: "Your review",
          name: "Name",
          email: "Email",
          saveName:
            "Save my name, email, and website in this browser for the next time I comment.",
        },
      },
    },
    about: {
      description: {
        url: "/images/about-us-1.webp",
        title: "About Us",
        subtitle: "Who We Are",
        description:
          "Your sound starts here We created Guitro so that every guitarist—from a beginner picking out their first acoustic to a seasoned gigging pro—could find an instrument with the perfect sound. Our catalog features electric guitars, acoustics, basses, and all the essential gear for the studio and the stage. We don’t just sell guitars; we help you find your unique tone.",
      },
      service: {
        title: "Our Services",
        list: [
          {
            url: "/icons/iconLamp.svg",
            title: "Creative Ideas",
            description:
              "Discover new sounds, experiment with different tones, and find the guitar that brings your musical ideas to life. From classic styles to modern setups, we’re here to inspire your next riff, song, or performance.",
          },
          {
            url: "/icons/iconMonitor.svg",
            title: "Web Development",
            description:
              "We built a fast, modern online store designed to make discovering and buying guitars simple and enjoyable. From smooth navigation to responsive design, every part of the experience is optimized for musicians on any device.",
          },
          {
            url: "/icons/iconHeart.svg",
            title: "Made With Passion",
            description:
              "We’re passionate about guitars and the music they create. Every part of our store is designed with musicians in mind — from discovering your next instrument to finding the perfect sound.",
          },
          {
            url: "/icons/iconGears.svg",
            title: "Powerfull Options",
            description:
              "Explore different guitars, gear, and accessories to create a setup that matches your style and helps you get the sound you’re looking for.",
          },
          {
            url: "/icons/iconSnow.svg",
            title: "Unique Design",
            description:
              "Every guitar has its own character. Discover instruments with distinctive designs, finishes, and details that make your style truly your own.",
          },
          {
            url: "/icons/iconMonitor.svg",
            title: "Customizable Options",
            description:
              "Explore products, compare your options, and find the gear that fits your style. Our online store makes it easy to create a setup that feels uniquely yours.",
          },
        ],
      },
      team: {
        title: "Our Team",
        list: [
          {
            url: "/images/team/team-2.webp",
            name: "Michael Brooks",
            position: "Founder & Guitar Expert",
          },
          {
            url: "/images/team/team-1.webp",
            name: "Sophie Bennett",
            position: "Customer Experience Manager",
          },
          {
            url: "/images/team/team-3.webp",
            name: "Lukas Steiner",
            position: "Product Specialist",
          },
          {
            url: "/images/team/team-4.webp",
            name: "Emma Sullivan",
            position: "Creative & Web Director",
          },
        ],
      },
    },
  },
  components: {
    header: {
      topBar: {
        welcome: "Welcome to our online store!",
        tel: "Customer Support: 123-456-7890",
        textAccount: "My account",
        textContact: "Contact Us",
      },
      language: {
        selectedLanguage: "EN",
        languages: ["EN", "DE"],
      },
      burger: {
        links: [
          {
            title: "Home",
            link: "/",
          },
          {
            title: "Shop",
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
            title: "About Us",
            link: "about",
          },
        ],
        burgerTitle: "MENU",
      },
    },
    navigate: [
      { page: "blogs", title: "BLOGS" },
      { page: "shop", title: "SHOP" },
      { page: "about", title: "ABOUT US" },
      { page: "account", title: "ACCOUNT" },
    ],
    navigation: {
      account: {
        title: "My Account",
        link: "Home",
        subtitle: "Account",
      },
    },
    subscribe: {
      title: "Subscribe Newsletter",
      text: "Get e-mail updates about our latest shop and special offers",
      placeholder: "Enter Email Address...",
      button: "Subscribe",
    },
    footer: {
      caption:
        "Create your own unique sound, share your music with the world, and find like-minded people who share your passion for guitar.",
      information: {
        caption: "INFORMATION",
        links: [
          { id: 0, text: "About Us", url: "about" },
          { id: 1, text: "Privacy Policy", url: "privacyPolicy" },
          { id: 2, text: "Returns", url: "returns" },
          { id: 3, text: "Terms & Conditions", url: "terms" },
        ],
      },
      services: {
        caption: "Services",
        links: [
          { id: 0, text: "Orders", url: "orders" },
          { id: 1, text: "Wishlist", url: "wishlist" },
          { id: 2, text: "Downloads", url: "downloads" },
          { id: 3, text: "Site Map", url: "siteMap" },
          { id: 4, text: "Contact Us", url: "contactUs" },
        ],
      },
      contactinfo: {
        caption: "CONTACT INFO",
        address: "Gasometer A, Guglgasse 6, 1110 Wien, Austria",
        phone: "+43 1 545 1700",
        email: "support@your-guitar-brand.com",
        fax: "+43 1 545 1700 90",
      },
      rights: "© 2026 Guitro. All Rights Reserved.",
    },
    buttons: {
      btnAddCart: "Add To Cart",
      btnSubmit: "Submit",
    },
  },
};
