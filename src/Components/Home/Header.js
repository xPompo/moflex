import React, { useEffect, useState } from "react";
import * as HiIcons from "react-icons/hi";
import * as AiIcons from "react-icons/ai";
import Search from "../Search/Search";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Header({ SignIn, fetchPopularMovies }) {
  const [locpath, setLocpath] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname === "/About" ||
      location.pathname === "/Movies" ||
      location.pathname === "/tvShow"
    ) {
      setLocpath(false);
    } else {
      setLocpath(true);
    }
  }, [location.pathname]);
  console.log(location);
  return (
    <>
      <div className="Header__main">
        <div className="container">
          <div className="row">
            <div className="col">
              <Link to="/">
                <h1 className="logo__brand">moflex</h1>
              </Link>
            </div>
            <div className="btn__favIcon__main col ">
              <div className="row">
                <div className="fav-icon col-auto">
                  <span>1</span> <AiIcons.AiTwotoneHeart />
                </div>
                {locpath && (
                  <>
                    <button onClick={SignIn} className="btn__main_0 col-auto">
                      Sign In
                    </button>
                    <div className="col">
                      <Search fetchPopularMovies={fetchPopularMovies} />
                    </div>
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
