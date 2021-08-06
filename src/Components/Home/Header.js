import React, { useEffect, useState } from "react";
import * as HiIcons from "react-icons/hi";
import Search from "../Search/Search";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Header({ SignIn }) {
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
                <h1 className="logo__brand">moflex</h1>
              </Link>
            </div>
            <div className="btn__favIcon__main col ">
              <div className="row">
                {locpath && (
                  <>
                    <div className="col">
                      <Search />
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
