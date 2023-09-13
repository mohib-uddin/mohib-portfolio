import {fetchWorkExperiences} from "@/services/content.service";
import Image from "next/image";
import SelectedExperience from "@/components/work-timeline/selected-experience";
import AnimatedContainer from "@/components/animations/animated-container";

const WorkTimeline=async ()=>{
    const workExperiences=await fetchWorkExperiences();
    return(
        <div className={'mt-40 desktop:w-11/12 m-auto  mb-40   desktop:px-desktop__container large__desktop:px-large__screen_container px-4'}>
            <AnimatedContainer initial={{y:-10,opacity:0}} animate={{ y: 10,opacity:1 }} transition={{ ease: "easeIn", duration: .5 }}  >
                <h2 className={'mt-20 font-[700]   large__desktop:leading-snug  dark:text-white  text-3xl large__desktop:text-4xl'}>Work Experience</h2>
            </AnimatedContainer>
            <SelectedExperience experience={workExperiences}/>
        </div>

    )
}
export default WorkTimeline;
