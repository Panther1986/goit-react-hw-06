import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";
import { ErrorMessage } from "formik";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  usernumber: Yup.number().min(3, "Too Short!").required("Required"),
});

const initialValues = {
  username: "",
  usernumber: "",
};

const ContactForm = ({ onAdd }) => {
  const usernameId = nanoid();
  const usernumberId = nanoid();

  const handleSubmit = (values, actions) => {
    onAdd({
      id: nanoid(),
      name: values.username,
      number: values.usernumber,
    });
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.formContainer}>
        <div className={css.labelContainer}>
          <label className={css.labelForm} htmlFor={usernameId}>
            Name
          </label>
          <Field
            className={css.fieldForm}
            type="text"
            name="username"
            id={usernameId}
          />
          <ErrorMessage name="username" as="span" />
        </div>

        <div className={css.labelContainer}>
          <label className={css.labelForm} htmlFor={usernumberId}>
            Number
          </label>
          <Field
            className={css.fieldForm}
            type="number"
            name="usernumber"
            id={usernumberId}
          />
          <ErrorMessage name="usernumber" as="span" />
        </div>

        <button className={css.btnForm} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
