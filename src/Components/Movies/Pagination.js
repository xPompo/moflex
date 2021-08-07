import React from "react";
import useFetch from "../../hooks/use-fetch";

function Pagination() {
  const { pageHandler, isDisabled, count } = useFetch();

  return (
    <div className="row justify-content-center align-items-center movie__pagination">
      <button
        disabled={isDisabled}
        className={`col-auto ${count === 1 ? "btn__main_1" : "btn__main_0"} `}
        onClick={() => {
          pageHandler(true);
        }}
      >
        {"< Prev"}
      </button>
      <h2 className="col-auto page__count">{count}</h2>
      <button
        disabled={isDisabled}
        className="col-auto btn__main_0"
        onClick={() => {
          pageHandler(false);
        }}
      >
        {"Next >"}
      </button>
    </div>
  );
}

export default Pagination;
