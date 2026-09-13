"use client";
import { ComponentDict, PageDict } from "@interfaces/dictionary.types";
import styles from "./FormReview.module.css";
import Submit from "@components/buttons/Submit/Submit";

interface PropsFormReview {
  dict: PageDict<"product">["routes"]["reviews"];
  dictComponent: ComponentDict<"buttons">["btnSubmit"];
}

export default function FormReviews(props: PropsFormReview) {
  return (
    <form
      name="review"
      id="formReview"
      className={styles.formReviews__form}
      action=""
    >
      <div className={styles.formReviews__innerTextarea}>
        <h2 className={styles.formReviews__reviewText}>
          {props.dict.reviewText}
        </h2>
        <textarea
          className={styles.formReviews__textarea}
          name="message"
          rows={6}
          required
          autoComplete="off"
        ></textarea>
      </div>
      <div className={styles.formReviews__innerName}>
        <h2 className={styles.formReviews__name}>{props.dict.name}</h2>
        <input
          className={styles.formReviews__inputName}
          type="text"
          name="name"
          required
          autoComplete="off"
        />
      </div>
      <div className={styles.formReviews__innerEmail}>
        <h2 className={styles.formReviews__email}>{props.dict.email}</h2>
        <input
          className={styles.formReviews__inputEmail}
          type="email"
          name="email"
          required
          autoComplete="off"
        />
      </div>
      <div className={styles.formReviews__innerSaveBtn}>
        <input
          className={styles.formReviews__checkbox}
          type="checkbox"
          name="save"
          autoComplete="off"
        />
        <h2 className={styles.formReviews__saveText}>{props.dict.saveName}</h2>
        <div className={styles.formReviews__innerBtn}>
          <Submit dict={props.dictComponent} />
        </div>
      </div>
    </form>
  );
}
