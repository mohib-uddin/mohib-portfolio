import {fetchProjects} from "@/services/content.service";
import ProjectFilter from "@/components/projects/project-filter";



const ProjectPage=async()=>{
    const project=await fetchProjects();
    console.log(project)
 return(
     <ProjectFilter initialProject={project}/>
 )
}
export default ProjectPage;
