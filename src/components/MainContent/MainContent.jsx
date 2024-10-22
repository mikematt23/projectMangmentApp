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
            />}
            {props.createProject && <ProjectInput/>}  
        </div>
    )
}


export default MainContent