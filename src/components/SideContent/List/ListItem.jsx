

const ListItem = (props)=>{
    const handleProjectChange = ()=>{
        props.handleProjectInput(props.project)
    }
    return(
        <h2 onClick={handleProjectChange}>{props.project.title}</h2>
    )
}

export default ListItem