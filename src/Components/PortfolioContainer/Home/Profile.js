import React from "react";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="profile-details-name">
            <div className="primary-text">
              Hello World! I'm{" "}
              <div className="highlighted-text">Raissa Damasceno</div>
            </div>
          </div>
          <div className="profile-details-role">
            <div>
              I'm a Full Stack web developer with a background in finance!
            </div>
          </div>
          <div className="profile-options">
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
                <a href="CV-RaissaDamasceno.pdf" download="RaissaDamascenoCV.pdf">
                <i class="fa fa-file-pdf-o" aria-hidden="true"></i>
                </a>
              </div>
            </div>
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
