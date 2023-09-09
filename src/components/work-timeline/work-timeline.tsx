import {fetchWorkExperiences} from "@/services/content.service";
import Image from "next/image";

const WorkTimeline=async ()=>{
    const workExperiences=await fetchWorkExperiences();
   return(
       <div className={'mb-80 desktop:px-desktop__container large__desktop:px-large__screen_container'}>
           {workExperiences.map((e,index)=>{
               return(
                   <div key={index} className={'flex mt-80  w-full p-4 desktop:w-11/12 m-auto  h-[200px] gap-3 dark:text-white desktop:flex-row  flex-col'}>
                       <div className={'flex flex-row desktop:flex-col border-l-2 border-l-white h-[fit-content] p-2'}>
                           <h4 className={'cursor-pointer w-full text-base active p-[1rem] rounded '}>{e.company}</h4>
                           <h4 className={'text-base p-[1rem]'}>{e.company}</h4>
                           <h4 className={'text-base p-[1rem]'}>{e.company}</h4>
                           <h4 className={'text-base p-[1rem]'}>{e.company}</h4>
                       </div>
                       <div className={'w-full desktop:w-1/2 text-xl'}>
                           <h5 className={'font-[700] overlay'}>{e.position}</h5>
                           <p className={'text-sm text-color__secondary p-1'}>{`${e.start}`} - {e.end?`${e.end}`:"Ongoing"}</p>
                           <ul className={'text-base dark:text-color__secondary p-2'}>
                               {e.desc?.map((e,index)=>{
                                   return(
                                       <li className={'mt-4 list-disc'} key={index}>{e}</li>
                                   )
                               })}
                           </ul>
                       </div>
                   </div>
               )
           })}

       </div>

   )
}
export default WorkTimeline;
