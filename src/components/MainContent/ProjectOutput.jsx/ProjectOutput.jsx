import Button from "../../UI/Button/Button"
import NoProject from "./NoProject.jsx/NoProject"
import Project from "./Project/Project"

const ProjectOutput = (props)=>
  
{
    return(
      <>
        {!props.hasProject && <NoProject handleProjectCreation={props.handleProjectCreation}/>}
        {props.hasProject && <Project deleteProjectTask = {props.deleteProjectTask} updateProject = {props.updateProject} projects={props.projects} project={props.project} handleProjectCreation={props.handleProjectCreation} />}
      </>
    )
}


export default ProjectOutput