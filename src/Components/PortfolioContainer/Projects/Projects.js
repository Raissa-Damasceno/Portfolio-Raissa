import ScreenHeading from "../../utilities/ScrennHeading/ScreenHeading";
import projectsJson from "../../../projects.json";

import "./Projects.css";

function Projects(props) {
  return (
    <div className="projects-container screen-container" id={props.id || ""}>
      <div className="projects-parent">
        <ScreenHeading title={"Projects"} subHeading={"My Projects"} />
        <div className="projects--list">
          {projectsJson.map((project) => (
            <div className="projects--card">
              <div className="projects--name">{project.name} </div>
              <div className="projects--type">{project.type} </div>
              <div className="projects--img">
                <img src={project.image} width={300} alt="No Connection"></img>
              </div>
              <div className="projects--language">{project.language} </div>
              <div className="projects--description">
                {project.description}{" "}
              </div>
              <a
                href={project.link}
                className="projects--link"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Repositório{" "}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
