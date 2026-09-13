export type PageDict<K extends keyof Dictionary["pages"]> =
  Dictionary["pages"][K];
export type ComponentDict<K extends keyof Dictionary["components"]> =
  Dictionary["components"][K];
export interface Dictionary {
  errors: {
    fill_all_fields: string;
    email_exists: string;
    server_error: string;
  };
  success: {
    registered: string;
  };
  pages: {
    home: {
      banners: Array<{ id: number; src: string; alt: string }>;
      features: Array<string>;
      bestseller: Array<{
        id: number;
        url: string;
        title: string;
        text: string;
      }>;
      ourProduct: {
        title: string;
        routes: Array<{ href: string; route: string }>;
      };
      testimonials: {
        slides: Array<{
          id: number;
          image: string;
          text: string;
          name: string;
        }>;
        title: string;
      };
      latestNews: {
        title: string;
      };
    };
    auth: {
      login: {
        title: string;
        email: string;
        password: string;
        remember: string;
        btn: string;
        lostPass: string;
      };
      register: {
        title: string;
        email: string;
        text: string;
        linkPolicy: string;
        btn: string;
      };
    };
    product: {
      quanity: string;
      category: string;
      tags: string;
      sku: string;
      routes: {
        description: string;
        information: {
          routeName: string;
          color: string;
        };
        reviews: {
          routeName: string;
          reviewName: string;
          reviewLengthZero: string;
          title: string;
          warning: string;
          ratingText: string;
          reviewText: string;
          name: string;
          email: string;
          saveName: string;
        };
      };
    };
    about: {
      description: {
        title: string;
        subtitle: string;
        description: string;
        url: string;
      };
      service: {
        title: string;
        list: Array<{
          url: string;
          title: string;
          description: string;
        }>;
      };
      team: {
        title: string;
        list: Array<{
          url: string;
          name: string;
          position: string;
        }>;
      };
    };
    privacyPolicy: {
      title: string;
      updated: {
        text: string;
        data: string;
      };
      informationCollect: {
        title: string;
        paragraphOne: string;
        paragraphTwo: string;
      };
      howUseInformation: {
        title: string;
        subtitle: string;
        paragraph: string;
      };
      accounts: {
        title: string;
        paragraphOne: string;
        paragraphTwo: string;
      };
      cookies: {
        title: string;
        paragraphOne: string;
        paragraphTwo: string;
      };
      dataSharing: {
        title: string;
        subtitle: string;
        paragraphOne: string;
        paragraphTwo: string;
      };
      dataRetention: {
        title: string;
        paragraph: string;
      };
      yourRights: {
        title: string;
        paragraphOne: string;
        paragraphTwo: string;
      };
      security: {
        title: string;
        paragraphOne: string;
        paragraphTwo: string;
      };
      changesPolicy: {
        title: string;
        paragraph: string;
      };
      contactUs: {
        title: string;
        paragraph: string;
      };
    };
  };
  components: {
    header: {
      topBar: {
        welcome: string;
        tel: string;
        textAccount: string;
        textContact: string;
      };
      language: {
        languages: string[];
        selectedLanguage: string;
      };
      burger: {
        links: Array<{ title: string; link: string }>;
        burgerTitle: string;
      };
    };
    navigate: Array<{ page: string; title: string }>;
    navigation: {
      account: {
        title: string;
        link: string;
        subtitle: string;
      };
    };
    subscribe: {
      title: string;
      text: string;
      placeholder: string;
      button: string;
    };
    footer: {
      caption: string;
      information: {
        caption: string;
        links: Array<{ id: number; text: string; url: string }>;
      };
      services: {
        caption: string;
        links: Array<{ id: number; text: string; url: string }>;
      };
      contactinfo: {
        caption: string;
        address: string;
        phone: string;
        fax: string;
        email: string;
      };
      rights: string;
    };
    buttons: {
      btnAddCart: string;
      btnSubmit: string;
    };
  };
}
