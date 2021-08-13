import React, { useState, useEffect } from "react";
import * as BiIcons from "react-icons/bi";
import { Form, Field, Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

function Search({ title, watchClickHandler }) {
  const [filterSearch, setFilterSearch] = useState("");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const filterdData = title?.filter((el) => {
      if (
        el?.titleName !== undefined &&
        el?.titleName.toLowerCase().includes(filterSearch.toLowerCase())
      ) {
        return true;
      } else return false;
    });
    setFiltered(filterdData);
  }, [filterSearch, title]);

  const validate = Yup.object().shape({
    Search: Yup.string()
      .max(30, "Too long")
      .required("Required to start search"),
  });
  return (
    <div className="searchbar ">
      <Formik
        initialValues={{ Search: "" }}
        validationSchema={validate}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
        }}
      >
        {({ handleChange, errors, touched }) => (
          <Form className="search__from" autoComplete="off">
            <Field
              className="searchbar__input"
              onChange={(e) => {
                handleChange(e);
                let someValue = e.currentTarget.value;
                setFilterSearch(someValue);
              }}
              placeholder="Search..."
              name="Search"
            />
            {errors.Search && touched.Search ? (
              <div className="Err">{errors.Search}</div>
            ) : null}
            <button className="searchbar__btn" type="submit">
              <BiIcons.BiSearchAlt />
            </button>
            <div className="search__list">
              {filterSearch.length !== 0 &&
                filtered.map((item, index) => {
                  return (
                    <Link
                      className="search__list_link"
                      key={index}
                      to="/movieDetails"
                    >
                      <div
                        onClick={() => {
                          watchClickHandler(item?.id);
                        }}
                        className="search__item"
                      >
                        {item?.titleName}
                      </div>
                    </Link>
                  );
                })}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Search;
