import { Field, Form, Formik } from "formik";
import React from "react";
import css from "./FormRequest.module.css";

const FormRequest = () => {
  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form className={css.formWrapper}>
        <Field
          type="text"
          name="username"
          placeholder="Name*"
          className={css.inputField}
        />
        <Field
          type="email"
          name="email"
          placeholder="Email*"
          className={css.inputField}
        />{" "}
        <Field
          type="text"
          name="date"
          placeholder="Booking date*"
          className={css.inputField}
        />
        <Field
          type="text"
          name="comment"
          placeholder="Comment"
          className={css.comment}
        />
        <div className={css.buttonWrapper}>
          <button className={css.formButton} type="submit">
            Send
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default FormRequest;
