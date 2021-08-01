import React from "react";
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";

function LatestNews() {
  const validationYup = Yup.object().shape({
    Email: Yup.string()
      .email("invaild Email")
      .required("Required")
      .min(3, "too Short Bro !")
      .max(14, "Too Long Bro!"),
  });
  return (
    <div className="homne__latest_news">
      <div className="latest_news_Bg"></div>
      <div className="latest_news_overlay"></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-6">
            <h3 className="latest_news_title">trial start first 30 days.</h3>
            <h6 className="latest_news_subtitle">
              Enter your email to create or restart your membership.
            </h6>
          </div>
          <Formik
            initialValues={{ Email: "" }}
            validationSchema={validationYup}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <div className="col-6">
                <Form className="row">
                  <Field
                    className="col latest_news_input"
                    name="Email"
                    placeholder="Your Email"
                  />
                  {errors.Email && touched.Email ? (
                    <div className="Err">{errors.Email}</div>
                  ) : null}
                  <button type="submit" className="col-auto btn__main_0">
                    Subscribe
                  </button>
                </Form>
              </div>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default LatestNews;
