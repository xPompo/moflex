import React from "react";
import * as TiIcons from "react-icons/ti";

function SocialLinks() {
  const SOCIAL_LINKS = [
    { icon: "<TiIcons.TiSocialLinkedin/>" },
    { icon: "<TiIcons.TiSocialFacebook/>" },
    { icon: "<TiIcons.TiSocialInstagram/>" },
  ];
  return (
    <ul className="social__list">
      <li className="social-item">
        <TiIcons.TiSocialLinkedin />
      </li>
      <li className="social-item">
        <TiIcons.TiSocialFacebook />
      </li>
      <li className="social-item">
        <TiIcons.TiSocialInstagram />
      </li>
    </ul>
  );
}

export default SocialLinks;
