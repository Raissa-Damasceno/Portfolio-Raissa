import React from "react";
import "./Profile.css"

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://api.whatsapp.com/send?phone=351926973707">
                <i className="fa fa-whatsapp"></i>
              </a>
              <a href="https://github.com/Raissa-Damasceno">
                <i className="fa fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/raissa-damasceno/">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I'm{" "}
              <span className="highlighted-text">Raissa Damasceno</span>
            </span>
          </div>
          <div className="profile-details-role">
            {/* <p className="primary-text">
  
            FullStack Developer
            </p> */}
            <div>I'm a full-stack web developer with a background in finance!</div>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">Hire Me</button>
            <a href="CV-RaissaDamasceno.pdf" download="RaissaDamascenoCV.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
