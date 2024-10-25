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

  const handleProjectCreation = (bool)=>{
    setCreateProject(bool)
  }
   const handleHasProject = (bool)=>{
    setHasProject(bool)
   }

   const updateProject = (projectItem,tasks, newTask)=>{
    setProject({...project,tasks:[...tasks,newTask]})
    
    setProjects(projects.map((project)=>{
        if(projectItem.title === project.title){
          return project = {
            title:project.title,
            discription: project.discription,
            tasks:[...tasks,newTask]
          }
          }else{
            return project
          }
         }
       )
     )
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
        handleListChange={handleListChange} 
        updateProject = {updateProject}
      />
    </div>
  )
}

export default App
