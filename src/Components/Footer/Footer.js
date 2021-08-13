import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Home/Nav";
import SocialLinks from "../SocialLinks/SocialLinks";

function Footer({ baseImgURL, trending }) {
  return (
    <div className="footer">
      <div className="container">
        <div className="row align-items-center ">
          <div className="col-12">
            <h1 className="tittle__small">Moflex</h1>
          </div>
          <Nav />
        </div>
        <hr className="line"></hr>
        <div className="row social__links_email my-4 ">
          <div className="col-md-4 col-12 me-auto">
            <h6 className="footer__insta_head mb-4">Instagram:</h6>
            <div className="row footer__insta">
              {trending.map((item, index) => {
                if (index < 6) {
                  return (
                    <Link className="col-4 p-2 insta__img" key={index} to="/">
                      <img
                        src={`${baseImgURL}${item?.backdrop_path}`}
                        alt={index + " img"}
                        width={100}
                      />
                    </Link>
                  );
                } else return false;
              })}
            </div>
          </div>
          <div className="col-md-4 col-12  px-0">
            <SocialLinks />
            <Link to="/">
              <h6 className="footer__email d-flex justify-content-md-end justify-content-center me-md-4 me-0">
                <span>Email:</span> Pompo@Moflex.com
              </h6>
            </Link>
            <Link to="/">
              <h6 className="footer__phone d-flex justify-content-md-end justify-content-center me-md-4 me-0">
                <span>Phone:</span> +(12) 957-624-153
              </h6>
            </Link>
          </div>
        </div>
      </div>
      <div className="copy__bg">
        <div className="row">
          <h6 className=" copyrights col">
            ©2021 <span> Pompo </span> Rights Reserved
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Footer;
