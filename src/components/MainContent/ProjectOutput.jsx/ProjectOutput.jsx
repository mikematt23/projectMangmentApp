import Button from "../../UI/Button/Button"
import NoProject from "./NoProject.jsx/NoProject"
import Project from "./Project/Project"

const ProjectOutput = (props)=>
  
{
    return(
      <>
        {!props.hasProject && <NoProject handleProjectCreation={props.handleProjectCreation}/>}
        {props.hasProject && <Project updateProject = {props.updateProject} project={props.project} handleProjectCreation={props.handleProjectCreation} />}
      </>
    )
}


export default ProjectOutput