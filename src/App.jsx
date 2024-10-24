import SideContent from "./components/SideContent/SideContent"
import MainContent from "./components/MainContent/MainContent"
import { useState } from "react"
import './App.css'

function App() {

  const [projects,setProjects] = useState([])
  const [project,setProject] = useState()
  const [createProject,setCreateProject] = useState(false)
  const [hasProject,setHasProject] = useState(false)

 
  const handleListChange = (listItem)=>{

    setProjects([...projects,listItem])
  }

  const handleProjectInput = (item)=>{
    setProject(item)
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
        createProject={createProject} 
        handleHasProject={handleHasProject}
        handleProjectInput={handleProjectInput} 
        handleProjectCreation={handleProjectCreation}
        handleListChange={handleListChange} 
      />
    </div>
  )
}

export default App
