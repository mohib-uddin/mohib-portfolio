"use client";
import {workExperienceType} from "@/_utils/types";
import {motion} from "framer-motion";
import {useState} from "react";
const SelectedExperience=({experience}:{experience:workExperienceType[]})=>{
    const [selectedExperience,setSelectedExperience]=useState<workExperienceType>(experience[0]);

    return(
        <div className={'flex w-full p-4 mt-4 m-auto  h-[200px] gap-3 dark:text-white desktop:flex-row  flex-col'}>
            <div className={'flex flex-row laptop:flex-col border-l-2 border-l-white h-[fit-content] p-2'}>
                {experience.map((e,index)=>{
                    return(
                        <div key={index} className={'p-2'} onClick={()=>setSelectedExperience(e)}>
                            <h4 className={`cursor-pointer w-full text-base ${e.name===selectedExperience.name&&"active text-white"} p-[1rem] rounded `}>{e.company}</h4>
                        </div>
                    )
                })}
            </div>

            <motion.div key={selectedExperience.name} initial={{y:-10,opacity:0}} animate={{y:10,opacity:1}} transition={{duration:1,ease:"easeIn"}} className={'w-full desktop:w-1/2 text-xl'}>
                <h5 className={'font-[700] overlay'}>{selectedExperience.position}</h5>
                <p className={'text-sm text-color__secondary p-1'}>{`${selectedExperience.start}`} - {selectedExperience.end?`${selectedExperience.end}`:"Ongoing"}</p>
                {selectedExperience.desc[0]&&<ul className={'text-base dark:text-color__secondary p-2'}>
                    {selectedExperience?.desc?.map((e,index)=>{
                        return(
                            <li className={'mt-4 list-disc'} key={index}>{e}</li>
                        )
                    })}
                </ul>}
            </motion.div>
        </div>

    )

}
export default SelectedExperience;
