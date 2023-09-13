import BackButton from "@/components/navbar/back-button";


export async function generateMetadata({ params }: { params:{slug:string} }) {
    const slug=params.slug;
    const project=await fetchProjectBySlug(slug);
    if(project)
    {
        return { title: project.title};
    }
    return { title: 'Project'};
}

import {fetchProjectBySlug, fetchProjects} from "@/services/content.service";
import StarsCanvas from "@/components/3d/stars";
import Image from "next/image";

const Project=async({ params }: { params:{slug:string} })=>{

    const slug=params.slug;
    const project=await fetchProjectBySlug(slug);
    console.log(project)

    return (
       <article className={'mt-4 desktop:px-desktop__container large__desktop:px-large__screen_container large__mobile::px-mobile__container'}>
           <StarsCanvas/>
           <div className={'flex items-center gap-4'}>
               <BackButton/>
               <h2 className={'font-[700] text-4xl'}>{project?.title}</h2>
           </div>
           {project?.imgUrl&&<Image className={'mt-10 rounded-2xl object-cover mb-2'} width={800} height={50} alt={`${"testimonial"}`} src={project.imgUrl}/>}
           <h4 className={'font-[700] text-2xl my-4'}>Project Overview:</h4>
           <p>{project?.description}</p>
           <h4 className={'font-[700] text-2xl my-4'}>Technologies Implemented:</h4>
           <ul className={'m-4 p-2'}>
               {project?.tags.map((e,index)=>{
                   return(
                       <li className={'list-disc'} key={index}>{e}</li>
                   )
               })}
           </ul>
       </article>
    )

}

export default Project;
