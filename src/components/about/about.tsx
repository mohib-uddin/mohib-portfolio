import {fetchAbout} from "@/services/content.service";
import Image from "next/image";
import AnimatedContainer from "@/components/animations/animated-container";
import {aboutType} from "@/_utils/types";

const About=async()=>{
    const about:aboutType=await fetchAbout();
    return(
        <section className={'flex w-full desktop:w-11/12 m-auto  flex-col    desktop:px-desktop__container large__desktop:px-large__screen_container p-4'}>
            {/*<AnimatedContainer initial={{y:-10,opacity:0}} animate={{ y: 10,opacity:1 }} transition={{ ease: "easeIn", duration: .5 }}  >*/}
            {/*    <h2 className={'mt-20 font-[700]   large__desktop:leading-snug  dark:text-white  text-3xl large__desktop:text-4xl'}>About Me</h2>*/}
            {/*</AnimatedContainer>*/}
            {/*<AnimatedContainer className={'mt-4 flex justify-between items-center'}  initial={{y:-10,opacity:0}} animate={{ y: 10,opacity:1 }} transition={{ ease: "easeIn", duration: .5 }} >*/}
            {/*    {about[0].imgUrl&&<Image className={'rounded-2xl object-cover mb-2'} width={300} height={50} alt={`${"aboutimg"}`} src={about[0].imgUrl}/>}*/}
            {/*    <p className={'w-3/5 text-color__secondary'}>{about[0].description}</p>*/}
            {/*</AnimatedContainer>*/}
        </section>

    )
}
export default About;
