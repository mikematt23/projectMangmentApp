import SideContent from "./components/SideContent/SideContent"
import { useState } from "react"
import './App.css'

function App() {
  const [projects,setProjects] = useState([])

  const handleListChange = (listItem)=>{
    setProjects((prevProjects)=>{
      [...prevProjects,listItem]
    })
  }

  return (
    <div className="holder">
      <SideContent projects = {projects} handleListChange={handleListChange}/>
    </div>
  )
}

export default App
