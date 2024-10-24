import ProjectOutput from "./ProjectOutput.jsx/ProjectOutput"
import ProjectInput from "./ProjectInput.jsx/ProjectInput"

const MainContent = (props)=>{
    return(
        <div>
            {!props.createProject &&<ProjectOutput 
               hasProject={props.hasProject} 
               createProject={props.createProject} 
               project={props.project} 
               handleProjectCreation ={props.handleProjectCreation}
               handleUpdateTasks = {props.handleUpdateTasks}
               updateProject = {props.updateProject}
            />}
            {props.createProject && <ProjectInput
              handleProjectCreation={props.handleProjectCreation}
              handleProjectInput = {props.handleProjectInput}
              handleHasProject = {props.handleHasProject}
              handleListChange = {props.handleListChange}
            />}  
        </div>
    )
}


export default MainContent