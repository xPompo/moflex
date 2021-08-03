import React from "react";
import Search from "../Search/Search";
import SocialLinks from "../SocialLinks/SocialLinks";

function Footer() {
  const NAV_LIST = [
    { name: "Home", path: "/Home" },
    { name: "About", path: "/About" },
    { name: "Movies", path: "/Movies" },
    { name: "Tv Show", path: "/TvShow" },
  ];
  return (
    <div className="footer">
      <div className="container">
        <div className="row align-items-center ">
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
        </div>
        <hr className="line"></hr>
        <div className="row social__links_email my-4 ">
          <div className="col-4 me-auto">
            <h6 className="footer__email_contact">pompo@moflex.com</h6>
          </div>
          <div className="col-4  px-0">
            <SocialLinks />
          </div>
        </div>
      </div>
      <div className="copy__bg">
        <div className="row">
          <h6 className=" copyrights col">
            ©2021 <span>Pompo</span> All Rights Reserved
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Footer;
