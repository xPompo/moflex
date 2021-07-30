import React from "react";
import { Link } from "react-router-dom";

function Nav({ onClick }) {
  const NAV_DATA = [
    { name: "Home", path: "/Home" },
    { name: "About", path: "/About" },
    { name: "Movies", path: "/Movies" },
    { name: "My List", path: "/My List" },
  ];
  return (
    <div className="main__nav">
      <div className="container ">
        <div className="row nav__list">
          <ul className=" col-5 mb-0">
            <div className="row">
              {NAV_DATA.map((item, index) => (
                <li className="nav__list_item col" key={index}>
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </div>
          </ul>
          <div className="col-auto">
            <button className="btn__main_1">+Discover</button>

            <button onClick={onClick} className="btn__main_0">
              +Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
