import AnimatedContainer from "@/components/animations/animated-container";
import {fetchProjects} from "@/services/content.service";
import ProjectCard from "@/components/projects/project-card";
const Projects=async()=>{
    const projects=await fetchProjects();
    return(
        <section className={'flex w-full large__mobile:w-11/12 m-auto  flex-col    desktop:px-desktop__container large__desktop:px-large__screen_container p-4'}>
            <AnimatedContainer initial={{y:-10,opacity:0}} animate={{ y: 10,opacity:1 }} transition={{ ease: "easeIn", duration: .5 }}  >
                <h2 className={'mt-20 font-[700]   large__desktop:leading-snug  dark:text-white  text-3xl large__desktop:text-4xl'}>Recent Projects</h2>
            </AnimatedContainer>
            <div className={'grid laptop:grid-cols-2 large__desktop:grid-cols-3 grid-cols-1 gap-4'}>
                {projects.map((e,index)=>{
                    return(
                            <ProjectCard index={index} key={index} project={e}/>
                    )
                })}
            </div>
        </section>
    )
}
export default Projects;
