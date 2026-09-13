import styles from "./Auth.module.css";
import { Dictionary } from "@interfaces/dictionary.types";
import Navigation from "@components/Navigation/Navigation";
import FormLogin from "./FormLogin/FormLogin";
import FormRegister from "./FormRegister/FormRegister";
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
