import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

function InputForm() {
  const validationYup = Yup.object().shape({
    Email: Yup.string()
      .min(3, "too Short Bro !")
      .max(14, "Too Long Bro!")
      .email("Invalid email")
      .required("Required"),
    Password: Yup.string()
      .max(30, "Too Long Bro!")
      .min(5, "Too Weak password Bro!")
      .required("Required"),
  });
  return (
    <div className="inputForm">
      <Formik
        initialValues={{ Email: "", Password: "" }}
        validationSchema={validationYup}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="row">
            <Field
              className="col-12 Email__input"
              placeholder="Email"
              name="Email"
            ></Field>
            {errors.Email && touched.Email ? (
              <div className="Err">{errors.Email}</div>
            ) : null}
            <Field
              className="col-12 Password__Input"
              placeholder="Password"
              type="password"
              name="Password"
            ></Field>
            {errors.Password && touched.Password ? (
              <div className="Err">{errors.Password}</div>
            ) : null}
            <button className="btn__main_0 col-12" type="submit">
              LOGIN NOW
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default InputForm;
