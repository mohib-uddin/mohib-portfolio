import Image from "next/image";
import ProjectView from "@/components/projects/project-view";
import AnimatedContainer from "@/components/animations/animated-container";
import {projectType} from "@/_utils/types";

const ProjectCard=({project,index}:{project:projectType,index:number})=>{
    const colorArray=['red-overlay','blue-overlay','green-overlay','overlay'];
    return(
        <AnimatedContainer className={'relative bg-glass-light dark:bg-glass mt-4 p-4 rounded shadow-4xl'} initial={{y:-10,opacity:0}} animate={{ y: 10,opacity:1 }} transition={{ ease: "easeIn", duration: 1,delay:0.25*(index+1) }}  >
            {project.imgUrl&&<Image className={'rounded-2xl object-cover mb-2'} width={400} height={50} alt={`${"testimonial"+index}`} src={project.imgUrl}/>}
            <ProjectView slug={project.slug} title={project.title}/>
            <p className={'text-sm text-color__secondary mt-2'}>{project.description}</p>
            <div className={'grid grid-cols-3 large__desktop:grid-cols-4 gap-y-2  my-2'}>
                {project.tags.map((e,tagIndex)=>{
                    return(
                        <span className={`${colorArray[tagIndex]}`} key={tagIndex}>{e}</span>
                    )
                })}
            </div>
        </AnimatedContainer>
    )
}
export default ProjectCard;
