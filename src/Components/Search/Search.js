import React, { useState, useEffect } from "react";
import * as BiIcons from "react-icons/bi";
import { Form, Field, Formik } from "formik";
import * as Yup from "yup";
import axios from "../../axios/axios";
import { indAction } from "../../ReduxStore/store";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Search({ fetchPopularMovies }) {
  const dispatch = useDispatch();
  const [allMovies, setAllMovies] = useState([]);
  const [filterSearch, setFilterSearch] = useState([]);
  const [id, setMovieId] = useState();

  const validate = Yup.object().shape({
    Search: Yup.string()
      .max(30, "Too long")
      .required("Required to start search"),
  });

  useEffect(() => {
    axios(fetchPopularMovies).then((res) => {
      return setAllMovies(res.data.results);
    });
  }, [fetchPopularMovies]);

  const getMovieDetailsHandler = (item) => {
    setMovieId(item?.id);
    dispatch(indAction.getID(id));
  };

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
          <Form>
            <Field
              className="searchbar__input"
              onChange={(e) => {
                handleChange(e);
                let someValue = e.currentTarget.value.toLowerCase();
                setFilterSearch(someValue);
                console.log(filterSearch.length);
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
          allMovies
            .filter((el) => {
              return el?.title.toLowerCase().includes(filterSearch);
            })
            .map((item, index) => {
              return (
                <Link key={index} to="/movieDetails">
                  <div
                    onClick={() => {
                      getMovieDetailsHandler(item);
                    }}
                    className="search__item"
                  >
                    {item?.title}
                  </div>
                </Link>
              );
            })}
      </div>
    </div>
  );
}

export default Search;
