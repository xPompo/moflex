import React, { useState } from "react";
import * as BiIcons from "react-icons/bi";
import { Form, Field, Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/use-fetch";

function Search() {
  const { search, watchClickHandler } = useFetch();
  const [filterSearch, setFilterSearch] = useState("");
  const [filtered, setFiltered] = useState([]);

  const filterdata = search.filter((el) => {
    if (el?.original_title !== undefined) {
      const f = el?.original_title.includes(filterSearch.toLowerCase());
      return setFiltered(f);
      // return console.log(el?.title);
    }
  });
  console.log(filterSearch);
  console.log(filterdata + "  filter Data");

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
          <Form autoComplete="off">
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
          </Form>
        )}
      </Formik>

      <div className="search__list">
        {filterSearch.length !== 0 &&
          filtered.map((item, index) => {
            return (
              <Link key={index} to="/movieDetails">
                <div
                  onClick={() => {
                    watchClickHandler(item?.id);
                  }}
                  className="search__item"
                >
                  {item?.original_title}
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default Search;
