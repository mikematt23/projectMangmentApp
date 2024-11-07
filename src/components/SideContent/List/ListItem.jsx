import styles from "./listItem.module.css"

const ListItem = (props)=>{
    const handleProjectChange = ()=>{
        props.handleProjectInput(props.project)
    }
    return(
        <h2 className={styles.listItem} onClick={handleProjectChange}>{props.project.title}</h2>
    )
}

export default ListItem