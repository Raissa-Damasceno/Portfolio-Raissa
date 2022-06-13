import ScreenHeading from "../../utilities/ScrennHeading/ScreenHeading";
import React, { useState } from "react";

import "./Resume.css";

function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "Javascript" },
    { skill: "Node.js" },
    { skill: "React" },
    { skill: "Express.js" },
    { skill: "Mongoose" },
    { skill: "HTML" },
    { skill: "CSS" },
    { skill: "AWS" },
    { skill: "MongoDB" },
    { skill: "APIs:" },
    { skill: "Bootstrap" },
    { skill: "Git" },
    { skill: "SourceTree" },
    { skill: "Github" },
  ];

  const projectsDetails = [
    {
      title: "Netflix Clone",
      duration: { fromDate: "", toDate: "" },
      description:
        "Netflix clone is a project that aims to copy an interface of netflix movies, using a TMDB API to get the data. This project was created in order to practice my skills.",
      subHeading: "Technologies Used: React JS, CSS, HTML",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Ironhack - Lisbon"}
        subHeading={"Full Stack Developer"}
        fromDate={"sep.2022"}
        toDate={"dez.2022"}
        description={""}
      />

      <ResumeHeading
        heading={"University FGV, São Paulo"}
        subHeading={"MBA in Corporate Finance"}
        fromDate={"2011"}
        toDate={"2015"}
        description={""}
      />
      <ResumeHeading
        heading={"University FMU, São Paulo"}
        subHeading={"Administration of Business"}
        fromDate={"2006"}
        toDate={"2011"}
        description={""}
      />
    </div>,

    <div className="resume-screen-container" key="work-experience">
      <ResumeHeading
        heading={"Full Stack Developer"}
        subHeading={"Youvisa, Remote"}
        fromDate={"jan/2022"}
        toDate={"present"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          - Clickup BI: fetch data from the Clickup API, analyze and convert it
          into data structures and store it in Excel spreadsheets.
        </span>
        <br />
        <span className="resume-description-text">
          - Mail Processor: redirect the download link of emails from a certain
          domain and attach in Clickup Manager tasks through the id.
        </span>
      </div>
      <br />
      <ResumeHeading
        heading={"Finance Manager"}
        subHeading={"CP Aduaneira, São Paulo"}
        fromDate={"nov/2018"}
        toDate={"jul/2021"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          - Purchase and implementation of finance software, 23% operation cost
          reduction through in-depth spending analysis and process creation, 83%
          of debt collected through negotiation with customers and creation and
          implementation of new processes.
        </span>
      </div>
      <br />
    </div>,

    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
        </div>
      ))}
    </div>,

    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Travel"
        description=""
      />
      <ResumeHeading
        heading="Astronomy and Astrophysics"
        description=""
      />
      <ResumeHeading
        heading="Running"
        description=""
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../../assets/Resume/${bullet.logoSrc}`)}
          alt="no"
        ></img>
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffSetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
