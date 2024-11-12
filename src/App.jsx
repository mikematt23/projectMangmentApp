import SideContent from "./components/SideContent/SideContent"
import MainContent from "./components/MainContent/MainContent"
import { useState } from "react"
import './App.css'

function App() {

  const [id,setId] = useState(0)
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

   const upDateId = ()=>{
    setId(id+1)
   }

   const updateProject = (projectItem,tasks, newTask)=>{
    setProject({...project,tasks:[...tasks,newTask]})
    
    setProjects(projects.map((project)=>{
        if(projectItem.id === project.id){
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
      <div className="mainContentHolder">
        <MainContent 
          project={project} 
          projects={projects}
          upDateId = {upDateId}
          id = {id}
          hasProject={hasProject}
          createProject={createProject} 
          handleHasProject={handleHasProject}
          handleProjectInput={handleProjectInput} 
          handleProjectCreation={handleProjectCreation}
          handleListChange={handleListChange} 
          updateProject = {updateProject}
        />
      </div>
    </div>
  )
}

export default App
