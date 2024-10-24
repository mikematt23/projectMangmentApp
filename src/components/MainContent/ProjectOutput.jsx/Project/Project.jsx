

const Project = (props)=>{
 
   return(
    <div>
      <div>
        <h1>{props.project.title}</h1>
        <h4>{props.project.decription}</h4>
      </div>
      <div>
        <h1>Task</h1>
      </div>
    </div>
   )
}


export default Project