import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

function SignUpForm() {
  const validationYup = Yup.object().shape({
    UserName: Yup.string()
      .max(40, "Too Long Name")
      .required("Required")
      .min(4, "please Enter Full name"),
    Email: Yup.string()
      .min(3, "too Short Bro !")
      .max(14, "Too Long Bro!")
      .email("Invalid email")
      .required("Required"),
    Password: Yup.string()
      .max(30, "Too Long Bro!")
      .min(5, "Too Weak password Bro!")
      .required("Required"),
    RepeatPassword: Yup.string()
      .max(30, "Too Long Bro!")
      .min(5, "Too Weak password Bro!")
      .required("Required")
      .oneOf([Yup.ref("Password"), null], "Passwords must match"),
  });
  return (
    <div className="signup__Form">
      <Formik
        initialValues={{
          UserName: "",
          Email: "",
          Password: "",
          RepeatPassword: "",
        }}
        validationSchema={validationYup}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="row">
            <Field
              className="col-12 Email__input"
              placeholder="UserName"
              name="UserName"
            ></Field>
            {errors.UserName && touched.UserName ? (
              <div className="Err">{errors.UserName}</div>
            ) : null}
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
            <Field
              className="col-12 Password__Input"
              name="RepeatPassword"
              type="password"
              placeholder="confirm your password"
            />
            {errors.RepeatPassword && touched.RepeatPassword ? (
              <div className="Err">{errors.RepeatPassword}</div>
            ) : null}
            <button className="btn__main_0 col-12" type="submit">
              Creat Your Account
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SignUpForm;
