import ProjectOutput from "./ProjectOutput.jsx/ProjectOutput"
import ProjectInput from "./ProjectInput.jsx/ProjectInput"
import Card from "../UI/Card/Card"

const MainContent = (props)=>{
    return(
        <div>
            {!props.createProject &&<ProjectOutput 
               hasProject={props.hasProject} 
               createProject={props.createProject} 
               project={props.project} 
               projects = {props.projects}
               handleProjectCreation ={props.handleProjectCreation}
               handleUpdateTasks = {props.handleUpdateTasks}
               updateProject = {props.updateProject}
               deleteProjectTask = {props.deleteProjectTask}
               deleteProject = {props.deleteProject}
            />}
            {props.createProject && <ProjectInput
              handleProjectCreation={props.handleProjectCreation}
              handleProjectInput = {props.handleProjectInput}
              handleHasProject = {props.handleHasProject}
              handleListChange = {props.handleListChange}
              projects = {props.projects}
              id= {props.id}
              upDateId = {props.upDateId}
            />}  
        </div>
    )
}


export default MainContent