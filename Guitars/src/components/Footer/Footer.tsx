import styles from "./Footer.module.css";
import { ComponentDict } from "@interfaces/dictionary.types";
import Logo from "@components/Logo/Logo";
import Link from "next/link";
import Image from "next/image";

interface PropsFooter {
  dict: ComponentDict<"footer">;
}

export default function Footer(props: PropsFooter) {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__innerLogo}>
        <Logo />
        <h1 className={styles.footer__caption}>{props.dict.caption}</h1>
      </div>
      <div className={styles.footer__innerInformation}>
        <h1 className={styles.footer__title}>
          {props.dict.information.caption}
        </h1>
        {props.dict.information.links.map((link) => (
          <Link href={link.url} key={link.id} className={styles.footer__link}>
            {link.text}
          </Link>
        ))}
      </div>
      <div className={styles.footer__innerServices}>
        <h1 className={styles.footer__title}>{props.dict.services.caption}</h1>
        {props.dict.services.links.map((link) => (
          <Link href={link.url} key={link.id} className={styles.footer__link}>
            {link.text}
          </Link>
        ))}
      </div>
      <div className={styles.footer__innerContact}>
        <h1 className={styles.footer__title}>
          {props.dict.contactinfo.caption}
        </h1>
        <h2 className={styles.footer__subtitle}>
          <b>Adress: </b>
          {props.dict.contactinfo.address}
        </h2>
        <h2 className={styles.footer__subtitle}>
          <b>Phone: </b>
          {props.dict.contactinfo.phone}
        </h2>
        <h2 className={styles.footer__subtitle}>
          <b>Fax: </b>
          {props.dict.contactinfo.fax}
        </h2>
        <h2 className={styles.footer__subtitle}>
          <b>E-mail: </b>
          {props.dict.contactinfo.email}
        </h2>
      </div>
      <div className={styles.footer__wrapPayment}>
        <h2 className={styles.footer__subtitle}>{props.dict.rights}</h2>
        <Image
          className={styles.footer__imagePayment}
          alt="Image Payment"
          src="/images/payment.webp"
          priority={false}
          width={100}
          height={24}
        />
      </div>
    </footer>
  );
}
