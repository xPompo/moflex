import React from "react";
import { Link } from "react-router-dom";
import SubscribeButtons from "./SubscribeButtons";

function Nav({ signInHandler }) {
  const NAV_DATA = [
    { name: "Home", path: "/Home" },
    { name: "About", path: "/About" },
    { name: "Movies", path: "/Movies" },
    { name: "Tv Show", path: "/tvShow" },
  ];
  return (
    <div className="main__nav">
      <div className="container ">
        <div className="row nav__list">
          <ul className=" col-md-5 col-12 mb-md-0 mb-4 mb-0">
            <div className="row ">
              {NAV_DATA.map((item, index) => (
                <li className="nav__list_item col" key={index}>
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </div>
          </ul>
          <SubscribeButtons signInHandler={signInHandler}></SubscribeButtons>
        </div>
      </div>
    </div>
  );
}

export default Nav;
