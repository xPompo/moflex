import React from "react";
import { useDispatch } from "react-redux";
import { indAction } from "../../ReduxStore/store";

function Pagination() {
  const dispatch = useDispatch();
  const pageHandler = () => {
    dispatch(indAction.getPage(2));
  };

  return (
    <>
      <button className="btn__main_0" onClick={pageHandler}>
        1
      </button>
    </>
  );
}

export default Pagination;
