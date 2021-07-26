import React from "react";
import { Link } from "react-router-dom";
import menuIcon from "../../../public/assets/icons/menu.png";

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
            <div className="btn__main col-auto ">
              <button className="btn__main_all">Sign In</button>
            </div>
          </div>
        </div>
        <div className="navbar__menu_icon">
          <img src={menuIcon} alt="icon" />
        </div>
      </div>
    </>
  );
}

export default Header;
