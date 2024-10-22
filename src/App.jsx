import SideContent from "./components/SideContent/SideContent"
import MainContent from "./components/MainContent/MainContent"
import { useState, useRef } from "react"
import './App.css'

function App() {

  const [projects,setProjects] = useState([])
  const [createProject,setCreateProject] = useState(false)
  const [project,setProject] = useState()
  const [hasProject,setHasProject] = useState(false)



  const handleListChange = (listItem)=>{
    setProjects((prevProjects)=>{
      [...prevProjects,listItem]
    })
  }

  const handleProjectInput = (project)=>{
    setProject(project)
  }

  const handleProjectCreation = ()=>{
    setCreateProject(!createProject)
  }
   const handleHasProject = ()=>{
    setHasProject(!hasProject)
   }

  return (
    <div className="holder">
      <SideContent 
        projects = {projects} 
        createProject={createProject} 
        handleListChange={handleListChange} 
        handleProjectCreation={handleProjectCreation}
      />
      <MainContent 
        project={project} 
        hasProject={hasProject}
        handleHasProject={handleHasProject}
        handleProjectInput={handleProjectInput} 
        createProject={createProject} 
        handleProjectCreation={handleProjectCreation} 
      />
    </div>
  )
}

export default App
