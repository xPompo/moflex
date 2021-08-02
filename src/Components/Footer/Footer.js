import React from "react";
import Search from "../Search/Search";
import SocialLinks from "../SocialLinks/SocialLinks";

function Footer({ fetchPopularMovies }) {
  const NAV_LIST = [
    { name: "Home", path: "/Home" },
    { name: "About", path: "/About" },
    { name: "Movies", path: "/Movies" },
    { name: "Tv Show", path: "/TvShow" },
  ];
  return (
    <div className="footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col">
            <h1 className="logo__brand">Moflex</h1>
          </div>
          <div className="col">
            <div className="row">
              <ul className="footer__nav_list col ">
                {NAV_LIST.map((item, index) => (
                  <li className="footer__nav_item " key={index}>
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="row ">
            <div className="col-4 me-auto">
              <Search fetchPopularMovies={fetchPopularMovies} />
            </div>
            <div className="col-4 social__links px-0">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
