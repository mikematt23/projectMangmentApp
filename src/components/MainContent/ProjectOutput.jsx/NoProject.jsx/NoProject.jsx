import Button from "../../../UI/Button/Button"
import Card from "../../../UI/Card/Card"

const NoProject = (props)=>{
    const handleChange = ()=>{
        props.handleProjectCreation(true)
    }
    return(
        <Card>
          <h1>No Project Selected</h1>
          <h3>Select A Project Or Get Started With A New One</h3>
          <Button styles="addProject" onClick={handleChange}><h2>Create A New Project</h2></Button>
        </Card>
    )
}


export default NoProject