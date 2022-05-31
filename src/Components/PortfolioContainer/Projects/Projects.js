import ScreenHeading from "../../utilities/ScrennHeading/ScreenHeading";

import './Projects.css'

function Projects(props) {
    return ( 
        <div className="projects-container screen-container" id={props.id || ""}>
      <div className="projects-parent">
        <ScreenHeading title={"Projects"} subHeading={"My Projects"} />
      </div>
    </div>
     );
}

export default Projects;