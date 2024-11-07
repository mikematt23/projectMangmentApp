import styles from "./project.module.css"
import { useState, useRef } from "react"
import Input from "../../../UI/Input.jsx/Input"
import Button from "../../../UI/Button/Button"
import TaskItem from "./TaskItem/TaskItme"
const Project = (props)=>{
  const taskRef = useRef()

  const handleAddTask = ()=>{
    props.updateProject(props.project,props.project.tasks,taskRef.current.value)
  }

   return(
    <div>
      <div>
        <h1>{props.project.title}</h1>
        <h3>{props.project.discription}</h3>
      </div>
      <div>
  
        <div>
          <Input ref={taskRef} placeHolder="Add Task" type="text"/>
          <Button onClick={handleAddTask}>Add Task</Button>
        </div>
        <div>
          {props.project.tasks.map((task)=>{
            return <TaskItem task={task}/>
           })}
        </div>
      </div>
    </div>
   )
}


export default Project