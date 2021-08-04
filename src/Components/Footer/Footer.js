import React from "react";
import Nav from "../Home/Nav";
import SocialLinks from "../SocialLinks/SocialLinks";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row align-items-center ">
          <div className="col">
            <h1 className="logo__brand">Moflex</h1>
          </div>
          <Nav />
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
