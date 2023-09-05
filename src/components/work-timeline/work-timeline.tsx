import {fetchWorkExperiences} from "@/services/content.service";
import Image from "next/image";

const WorkTimeline=async ()=>{
    const workExperiences=await fetchWorkExperiences();
   return(
       <div className={'desktop:px-desktop__container large__desktop:px-large__screen_container'}>
           {workExperiences.map((e,index)=>{
               return(
                   <div key={index} className={'flex mt-20 w-full p-4 desktop:w-1/2 items-center h-[200px] gap-3 text-white'}>
                       <div>
                           {e.imgurl&&<Image width={500} height={60} className={'rounded-full'} alt={`${"testimonial"+index}`} src={e.imgurl}/>}
                       </div>
                       <div className={'flex flex-col'}>
                           <h4 className={'font-[700]'}>{e.company}</h4>
                           <h5>{e.position}</h5>
                           <p className={'text-base text-color__secondary'}>{`${e.start}`}-{e.end?`${e.end}`:"Ongoing"}</p>
                           <p className={'text-base text-color__secondary'}>{e.desc}</p>
                       </div>
                   </div>
               )
           })}
       </div>

   )
}
export default WorkTimeline;
