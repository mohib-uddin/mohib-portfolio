"use client";
import {useEffect, useState} from "react";
import {fetchProjects, fetchProjectsByTag} from "@/services/content.service";
import {projectType} from "@/_utils/types";
import AnimatedContainer from "@/components/animations/animated-container";
import {projectFilter} from "@/_utils/constants/menu-list";
import ProjectCard from "@/components/projects/project-card";

interface filterProps{
    initialProject:projectType[];
}


const ProjectFilter=({initialProject}:filterProps)=>{
    const [tag,setTag]=useState<string>('');
    const [projects,setProjects]=useState<projectType[]>(initialProject);
    const fetchProject=async()=>{
        const project=await fetchProjectsByTag(tag);
        setProjects(project);
    }
    useEffect(()=>{
        if(tag!=''){
           fetchProject();
        }
    },[tag])

    return(
        <section className={'flex w-full desktop:w-11/12 m-auto  flex-col    desktop:px-desktop__container large__desktop:px-large__screen_container p-4'}>
            <AnimatedContainer initial={{y:-10,opacity:0}} animate={{ y: 10,opacity:1 }} transition={{ ease: "easeIn", duration: .5 }}  >
                <h2 className={'mt-2 font-[700]   large__desktop:leading-snug  dark:text-white  text-3xl large__desktop:text-4xl'}>Featured Projects</h2>
            </AnimatedContainer>
            <ul className={`flex justify-around mt-6 cursor-pointer`}>
                {projectFilter.map((e,index)=>{
                    return(
                        <li className={`${e.title===tag?'overlay':''}`} onClick={()=>setTag(e.title)} key={index}>{e.title}</li>
                    )
                })}
            </ul>
            <div className={'mt-2 grid laptop:grid-cols-2 desktop:grid-cols-3 grid-cols-1 gap-4'}>
                {projects.map((e,index)=>{
                    return(
                        <ProjectCard index={index} key={index} project={e}/>
                    )
                })}
            </div>
        </section>
    )

}
export default ProjectFilter;
