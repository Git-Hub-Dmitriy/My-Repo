import styles from "./HeaderBody.module.css";
import { ComponentDict } from "@interfaces/dictionary.types";
import Logo from "@components/Logo/Logo";
import ShoppingCart from "@components/ShoppingCart/ShoppingCart";
import Search from "@components/forms/Search/Search";
import Burger from "@components/Burger/Burger";
import { Suspense } from "react";
import Lang from "@components/Lang/Lang";

interface PropsHeaderBody {
  dictionary: ComponentDict<"header">;
}

export default function HeaderBody(props: PropsHeaderBody) {
  return (
    <div className={styles.headerBody}>
      <div className={styles.headerBody__row}>
        <Logo />
        <Suspense fallback={null}>
          <Lang dict={props.dictionary} />
        </Suspense>
        <ShoppingCart />
      </div>
      <div className={styles.headerBody__innerBurger}>
        <Burger dict={props.dictionary.burger} />
        <Search />
      </div>
      <div className={styles.headerBody__innerAll}>
        <Logo />
        <Burger dict={props.dictionary.burger} />
        <Search />
        <div className={styles.headerBody__innerLang}>
          <Suspense fallback={null}>
            <Lang dict={props.dictionary} />
          </Suspense>
          <ShoppingCart />
        </div>
      </div>
    </div>
  );
}
