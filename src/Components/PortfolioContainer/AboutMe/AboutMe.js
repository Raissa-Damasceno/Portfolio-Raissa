import ScreenHeading from "../../utilities/ScrennHeading/ScreenHeading";

import "./AboutMe.css";

function AboutMe(props) {
  const SCREEN_CONSTSANTS = {
    description:
      "I'm a full-stack web developer, with a background in finance ! My passion for solving problems led me to open my first company at the age of 16, where I was able to have contact with all areas of a company and learn a lot about business. After a few years managing my company, I had the opportunity to work at a product import and export company where my passion for numbers made me specialize in the financial area. I worked for a few years there, where I learned a lot and achieved great results. I was invited to become the financial manager of a customs commissioner, where I worked for 2 years. In the same period, I completed my MBA at the best university in Latin America, FGV. With the pandemic, came the desire to move abroad and look for other challenges and problems to be solved, so I decided to do my first course in full-stack web development. In this course I was able to use my knowledge, my passion for problem solving and numbers to create a personal finance organizer and an investment portfolio organizer using technologies such as: Javascript, Bootstrap, HTML, CSS, React, NodeJS, ExpressJS, MongoDB, AWS, Mongoose and APIs.",
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
