import styles from "./Auth.module.css";
import { Dictionary } from "@interfaces/dictionary.types";
import Navigation from "@components/Navigation/Navigation";
import dynamic from "next/dynamic";
const FormLogin = dynamic(() => import("./FormLogin/FormLogin"));
const FormRegister = dynamic(() => import("./FormRegister/FormRegister"));

interface PropsAuth {
  dict: Dictionary;
}

export default function Auth(props: PropsAuth) {
  return (
    <main className={styles.auth}>
      <Navigation dict={props.dict.components.navigation} />
      <FormLogin dict={props.dict.pages.auth.login} />
      <FormRegister dict={props.dict.pages.auth.register} />
    </main>
  );
}
