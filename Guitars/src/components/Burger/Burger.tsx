"use client";
import styles from "./Burger.module.css";
import { ComponentDict } from "@interfaces/dictionary.types";
import IconClose from "@icons/iconClose.svg";
import Link from "next/link";
import { useState } from "react";
import classNames from "classnames";
interface PropsBurger {
  dict: ComponentDict<"header">["burger"];
}

export default function Burger(props: PropsBurger) {
  const [activeModal, setActiveModal] = useState(false);

  return (
    <>
      <div
        onClick={() => setActiveModal(!activeModal)}
        className={styles.burger}
      >
        <div className={styles.burger__line}></div>
        <div className={styles.burger__line}></div>
        <div className={styles.burger__line}></div>
      </div>
      <div
        className={classNames(
          styles.burger__modal,
          activeModal && styles.burger__modal_active,
        )}
      >
        <div className={styles.burger__innerTitle}>
          <h1 className={styles.burger__title}>{props.dict.burgerTitle}</h1>
          <IconClose
            onClick={() => setActiveModal(false)}
            className={styles.burger__btnClose}
          />
        </div>
        <nav className={styles.burger__innerList}>
          {props.dict.links.map((item, index) => (
            <Link className={styles.burger__link} href={item.link} key={index}>
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
      <nav className={styles.navigate}>
        {props.dict.links.map((link, index) => (
          <Link key={index} className={styles.navigate__link} href={link.link}>
            {link.title}
          </Link>
        ))}
      </nav>
    </>
  );
}
