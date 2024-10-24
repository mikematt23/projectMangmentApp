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
    setProjects([...projects,listItem])
  }

  const handleProjectInput = (project)=>{
    setProject(project)
  }

  const handleProjectCreation = (bool)=>{
    setCreateProject(bool)
  }
   const handleHasProject = (bool)=>{
    setHasProject(bool)
   }

   const updateProject = (project,tasks, newTask)=>{
    setProject({...project,tasks:[...tasks,newTask]})
   }


  return (
    <div className="holder">
      <SideContent 
        projects = {projects} 
        createProject={createProject} 
        handleListChange={handleListChange} 
        handleProjectCreation={handleProjectCreation}
        handleProjectInput = {handleProjectInput}
      />
      <MainContent 
        project={project} 
        hasProject={hasProject}
        createProject={createProject} 
        handleHasProject={handleHasProject}
        handleProjectInput={handleProjectInput} 
        handleProjectCreation={handleProjectCreation} 
        handleListChange = {handleListChange} 
        updateProject = {updateProject}
      />
    </div>
  )
}

export default App
