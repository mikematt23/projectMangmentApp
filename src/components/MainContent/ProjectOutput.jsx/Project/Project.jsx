import styles from "./project.module.css"
import { useState, useRef } from "react"
import Input from "../../../UI/Input.jsx/Input"
import Button from "../../../UI/Button/Button"

const Project = (props)=>{
  const taskRef = useRef()
 console.log(props.project)
  const handleAddTask = ()=>{
    props.updateProject(props.project,props.project.tasks,taskRef.current.value)
  }

   return(
    <div>
      <div>
        <h1>{props.project.title}</h1>
        <h4>{props.project.decription}</h4>
      </div>
      <div>
        <h1>Task</h1>
        <div>
          <Input ref={taskRef} placeHolder="Add Task" type="text"/>
          <Button onClick={handleAddTask}>Add Task</Button>
        </div>
        <div>
          {props.project.tasks.map((task)=>{
            return <h4>{task}</h4>
           })}
        </div>
      </div>
    </div>
   )
}


export default Project