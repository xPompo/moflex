import React, { useEffect, useState } from "react";
import * as HiIcons from "react-icons/hi";
import Search from "../Search/Search";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function Header({ SignIn, title, watchClickHandler }) {
  const like = useSelector((state) => state.likes);

  const [locpath, setLocpath] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/Home") {
      setLocpath(true);
    } else {
      setLocpath(false);
    }
  }, [location.pathname]);
  return (
    <>
      <div className="Header__main">
        <div className="container">
          <div className="row">
            <div className="col-auto">
              <Link to="/">
                <h1 className="tittle__small">moflex</h1>
              </Link>
            </div>
            <div className="btn__favIcon__main col ">
              <div className="row justify-content-end w-100">
                <Link to="/" className="col-auto fav-icon-link">
                  <div className="fav-icon">
                    <HiIcons.HiHeart />
                    {like !== 0 && <span>{like}</span>}
                  </div>
                </Link>
                {locpath && (
                  <>
                    <div className="col-4">
                      <Search
                        title={title}
                        watchClickHandler={watchClickHandler}
                      />
                    </div>
                    <button onClick={SignIn} className="btn__main_0 col-auto">
                      Sign In
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="navbar__menu_icon">
            <HiIcons.HiMenuAlt3 />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
