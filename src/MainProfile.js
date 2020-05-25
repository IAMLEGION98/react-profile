import React from "react";

import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
const MainProfile = () => {
  return (
    <div>
      <header>
        
        <div className="row banner">
          <div className="banner-text">
            <h1>I'm Anupam Rajanish</h1>
            <h2>Mobile/Web/Backend Developer, Hackathon enthusiast</h2>
          </div>
        </div>
        <ul className="social">
        <li key="instagram"><a href="https://www.instagram.com/iamlegion98/"><InstagramIcon className="svgIcons"/></a></li>
        <li key="facebook"><a href="https://www.facebook.com/anupam.rajanish.5"><FacebookIcon className="svgIcons"/></a></li>
        <li key="Github"><a href="https://github.com/IAMLEGION98"><GitHubIcon className="svgIcons"/></a></li>
            </ul>
      </header>
    </div>
  );
};

export default MainProfile;
