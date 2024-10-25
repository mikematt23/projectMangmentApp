import { useRef } from "react"
import Input from "../../UI/Input.jsx/Input"
import Button from "../../UI/Button/Button"

const ProjectInput = (props)=>{

    const titleRef = useRef()
    const descriptionRef = useRef()

    const handleAddProject = ()=>{
        console.log(titleRef.current.value, descriptionRef.current.value)
        const project = {
          title:titleRef.current.value,
          description:descriptionRef.current.value,
          tasks:[]
        }

        props.handleProjectInput(project)
        props.handleListChange(project)
        props.handleHasProject(true)
        props.handleProjectCreation()
    }

   return(
     <div>
       <Input ref={titleRef} placeHolder="title" type="text"/>
       <Input ref={descriptionRef} placeHolder="description" type="text"/>
       <div>
        <Button onClick= {handleAddProject} ><h2>Add</h2></Button>
       </div>
     </div>
   )
}

export default ProjectInput