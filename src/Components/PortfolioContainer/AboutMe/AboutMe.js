import ScreenHeading from "../../utilities/ScrennHeading/ScreenHeading";

import "./AboutMe.css";

function AboutMe(props) {
  const SCREEN_CONSTSANTS = {
    description:
      "I'm a full-stack web developer, with a background in finance ! My passion for solving problems led me to open my first company at the age of 16, where I was able to have contact with all areas of a company and learn a lot about business. After a few years managing my company, I had the opportunity to work at a product import and export company where my passion for numbers made me specialize in the financial area. I completed my MBA in Corporate Finance at the best university in Latin America, FGV. I decided to do my first course in full-stack web development. In this course I was able to use my knowledge, my passion for problem solving and numbers to create x projects.",
    highlights: {
      bullets: [
        "Javascript",
        "Node.js",
        "React.js",
        "Java",
        "Python",
        "AWS",
        "MongoDB",
      ],
      heading: "Programming Skills",
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div className="about-me-container screen-container" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTSANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highligth-heading">
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button className="btn primary-btn">Hire Me</button>
              <a href="CV-RaissaDamasceno.pdf" download="RaissaDamascenoCV.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
