import styles from "./PrivacyPolicy.module.css";
import { PageDict } from "@interfaces/dictionary.types";

interface PropsPrivacyPolicy {
  translate: PageDict<"privacyPolicy">;
}

export default function PrivacyPolicy(props: PropsPrivacyPolicy) {
  const t = props.translate;

  return (
    <main className={styles.policy}>
      <h1 className={styles.policy__mainTitle}>{t.title}</h1>
      <div className={styles.policy__innerRules}>
        <h2 className={styles.policy__subtitle}>
          {t.updated.text}
          <span> {t.updated.data}</span>
        </h2>
      </div>
      <div className={styles.policy__innerRules}>
        <h2 className={styles.policy__title}>{t.informationCollect.title}</h2>
        <p className={styles.policy__text}>
          {t.informationCollect.paragraphOne}
        </p>
        <p className={styles.policy__text}>
          {t.informationCollect.paragraphTwo}
        </p>
      </div>
      <div className={styles.policy__innerRules}>
        <h2 className={styles.policy__title}>{t.howUseInformation.title}</h2>
        <h3 className={styles.policy__subtitle}>
          {t.howUseInformation.subtitle}
        </h3>
        <p className={styles.policy__text}>{t.howUseInformation.paragraph}</p>
      </div>
      <div className={styles.policy__innerRules}>
        <h2 className={styles.policy__title}>{t.accounts.title}</h2>
        <p className={styles.policy__text}>{t.accounts.paragraphOne}</p>
        <p className={styles.policy__text}>{t.accounts.paragraphTwo}</p>
      </div>
      <div className={styles.policy__innerRules}>
        <h2 className={styles.policy__title}>{t.cookies.title}</h2>
        <p className={styles.policy__text}>{t.cookies.paragraphOne}</p>
        <p className={styles.policy__text}>{t.cookies.paragraphTwo}</p>
      </div>
      <div className={styles.policy__innerRules}>
        <h2 className={styles.policy__title}>{t.dataSharing.title}</h2>
        <h3 className={styles.policy__subtitle}>{t.dataSharing.subtitle}</h3>
        <p className={styles.policy__text}>{t.dataSharing.paragraphOne}</p>
        <p className={styles.policy__text}>{t.dataSharing.paragraphTwo}</p>
      </div>
      <div className={styles.policy__innerRules}>
        <h2 className={styles.policy__title}>{t.dataRetention.title}</h2>
        <p className={styles.policy__text}>{t.dataRetention.paragraph}</p>
      </div>
      <div className={styles.policy__innerRules}>
        <h2 className={styles.policy__title}>{t.yourRights.title}</h2>
        <p className={styles.policy__text}>{t.yourRights.paragraphOne}</p>
        <p className={styles.policy__text}>{t.yourRights.paragraphTwo}</p>
      </div>
      <div className={styles.policy__innerRules}>
        <h2 className={styles.policy__title}>{t.changesPolicy.title}</h2>
        <p className={styles.policy__text}>{t.changesPolicy.paragraph}</p>
      </div>
      <div className={styles.policy__innerRules}>
        <h2 className={styles.policy__title}>{t.contactUs.title}</h2>
        <p className={styles.policy__text}>{t.contactUs.paragraph}</p>
      </div>
    </main>
  );
}
