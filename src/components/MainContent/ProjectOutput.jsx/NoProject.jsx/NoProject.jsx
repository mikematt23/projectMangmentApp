import Button from "../../../UI/Button/Button"

const NoProject = (props)=>{
    const handleChange = ()=>{
        props.handleProjectCreation(true)
    }
    return(
        <div>
          <h1>No Project Selected</h1>
          <h3>Select A Project Or Get Started With A New One</h3>
          <Button onClick={handleChange}>Create A New Project</Button>
        </div>
    )
}


export default NoProject