import Button from "../UI/Button/Button"
import style from "./SideContent.module.css"
import ListItem from "./List/ListItem"

const SideContent = (props)=>{

  const handleClick = ()=>{
    props.handleProjectCreation(true)
  }
  return(
    <div className={style.holder}>
      <div>
        <h1 className={style.h1} >Your Projects</h1>
        {!props.createProject && <Button styles="addProject" onClick={handleClick}><h2>+ Add Project</h2></Button>}
      </div>
      {props.projects.map((project)=>{
        return <ListItem key={project.id} handleHasProject={props.handleHasProject} handleProjectInput = {props.handleProjectInput} project = {project}/>
      })}
    </div>
  )
}

export default SideContent