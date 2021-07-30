import React from "react";
import { Link } from "react-router-dom";
import * as HiIcons from "react-icons/hi";
import * as AiIcons from "react-icons/ai";

function Header({ onClick }) {
  return (
    <>
      <div className="Header__main">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="logo__brand">moflex</h1>
            </div>
            <div className="btn__favIcon__main col ">
              <div className="row">
                <div className="fav-icon col-auto">
                  <span>1</span> <AiIcons.AiTwotoneHeart />
                </div>
                <button onClick={onClick} className="btn__main_0 col-auto">
                  Sign In
                </button>
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
