import Button from "../../../../UI/Button/Button"
import styles from "./TaskItem.module.css"

const TaskItem = (props)=>{
 
  const handleDeleteTask = ()=> {
     props.deleteProjectTask(props.project.id,props.task)
  }

  return(
    <div className={styles.holder}>
      <h4 >{props.task}</h4>
      <Button onClick={handleDeleteTask}><h3>Clear</h3></Button>
    </div>
  )
}


export default TaskItem