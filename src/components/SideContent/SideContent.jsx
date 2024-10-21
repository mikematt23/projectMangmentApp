import Button from "../UI/Button/Button"
import style from "./SideContent.module.css"
import List from "../List/List"

const SideContent = (props)=>{
  const handleListChange =()=>{
    
  }
  return(
    <div className={style.holder}>
      <div>
        <h1>Projects</h1>
        <Button><h2>+ Add Project</h2></Button>
      </div>
    </div>
  )
}

export default SideContent