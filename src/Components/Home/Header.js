import React from "react";
import { Link } from "react-router-dom";
import * as HiIcons from "react-icons/hi";
import * as AiIcons from "react-icons/ai";

function Header() {
  const NAV_DATA = [
    { name: "Home", path: "/Home" },
    { name: "About", path: "/About" },
    { name: "Movies", path: "/Movies" },
    { name: "My List", path: "/My List" },
  ];
  return (
    <>
      <div className="Header__main">
        <div className="container">
          <div className="row">
            <div className="col-auto">
              <h1 className="logo__brand">moflex</h1>
            </div>
            <div className="col nav__list">
              <ul className="row">
                {NAV_DATA.map((item, index) => (
                  <li className="nav__list_item col" key={index}>
                    <Link to={item.path}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="btn__favIcon__main col-auto ">
              <div className="row">
                <div className="fav-icon col-auto">
                  <span>1</span> <AiIcons.AiTwotoneHeart />
                </div>
                <button className="btn__main_0 col-auto">Sign In</button>
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
