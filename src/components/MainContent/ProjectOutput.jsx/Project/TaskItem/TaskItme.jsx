import Button from "../../../../UI/Button/Button"
import styles from "./TaskItem.module.css"

const TaskItem = (props)=>{
  return(
    <div className={styles.holder}>
      <h4 >{props.task}</h4>
      <Button><h3>Clear</h3></Button>
    </div>
  )
}


export default TaskItem