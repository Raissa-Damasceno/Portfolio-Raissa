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
    { skill: "Javascript" },
    { skill: "Javascript" },
    { skill: "Javascript" },
    { skill: "Javascript" },
    { skill: "Javascript" },
    { skill: "Javascript" },
    { skill: "Javascript" },
    { skill: "Javascript" },
    { skill: "Javascript" },
    { skill: "Javascript" },
    { skill: "Javascript" },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2021", toDate: "2022" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, Bootsrap",
    },
    {
      title: "Ecommerce Website ",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "Online ecommerce website for showcasing and selling products onlne with payment system integration",
      subHeading: "Technologies Used: HTML, CSS, PHP, Bootstrap.",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Ironhack - Lisbon"}
        subHeading={"FULL STACK DEVELOPER"}
        fromDate={"sep.2022"}
        toDate={"dez.2022"}
      />

      <ResumeHeading
        heading={"University FGV, São Paulo"}
        subHeading={"MBA in Corporate Finance"}
        fromDate={"2011"}
        toDate={"2015"}
      />
      <ResumeHeading
        heading={"University FMU, São Paulo"}
        subHeading={"Administration of Business"}
        fromDate={"2006"}
        toDate={"2011"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
    <ResumeHeading
      heading={"Full Stack Developer"}
      subHeading={"Youvisa, Remote"}
      fromDate={"jan/2022"}
      toDate={"present"}
    />
    <div className="experience-description">
      <span className="resume-description-text">
        - Tools: Node.js, React, Google API spreadsheet, Clickup API and AWS:
      </span>
      <br />
      <span className="resume-description-text">
        - Tools: Node.js, React, Google API spreadsheet, Clickup API and AWS:
      </span>
      <br />
      <span className="resume-description-text">
        - Tools: Node.js, React, Google API spreadsheet, Clickup API and AWS:
      </span>
      <br />
      <span className="resume-description-text">
        - Tools: Node.js, React, Google API spreadsheet, Clickup API and AWS:
      </span>
    </div>
    <br />
    <ResumeHeading
      heading={"Finance Manager"}
      subHeading={"CP Aduaneira, São Paulo"}
      fromDate={"jan/2022"}
      toDate={"present"}
    />
    <div className="experience-description">
      <span className="resume-description-text">
        - Tools: Node.js, React, Google API spreadsheet, Clickup API and AWS:
      </span>
      <br />
      <span className="resume-description-text">
        - Tools: Node.js, React, Google API spreadsheet, Clickup API and AWS:
      </span>
    </div>
    <br />
  </div>,

    /* PROGRAMMING SKILLS */
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

    /* PROJECTS */
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

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Teaching"
        description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
      />
      <ResumeHeading
        heading="Competitive Gaming"
        description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
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
     <div
       className="resume-container screen-container" id={props.id || ""}>
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
