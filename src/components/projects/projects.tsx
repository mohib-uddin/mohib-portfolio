import AnimatedContainer from "@/components/animations/animated-container";
import {fetchProjects, fetchWorkExperiences} from "@/services/content.service";
import Image from "next/image";
const Projects=async()=>{
    const projects=await fetchProjects();

    const colorArray=['red-overlay','blue-overlay','green-overlay','overlay']


    return(
        <section className={'mt-60 flex w-full desktop:w-11/12 m-auto  flex-col    desktop:px-desktop__container large__desktop:px-large__screen_container p-4'}>
            <AnimatedContainer initial={{y:-10,opacity:0}} animate={{ y: 10,opacity:1 }} transition={{ ease: "easeIn", duration: .5 }}  >
                <h2 className={'mt-20 font-[700]   large__desktop:leading-snug  dark:text-white  text-3xl large__desktop:text-4xl'}>Recent Projects</h2>
            </AnimatedContainer>
            <div className={'grid laptop:grid-cols-2 desktop:grid-cols-3 grid-cols-1 gap-4'}>
                {projects.map((e,index)=>{
                    return(
                        <AnimatedContainer className={' glass mt-4 p-4 rounded shadow-4xl'} key={index} initial={{y:-10,opacity:0}} animate={{ y: 10,opacity:1 }} transition={{ ease: "easeIn", duration: 1,delay:0.25*(index+1) }}  >
                            {e.imgUrl&&<Image className={'rounded-2xl object-cover mb-2'} width={400} height={50} alt={`${"testimonial"+index}`} src={e.imgUrl}/>}
                            <h2 className={'text-lg font-[700]'}>{e.title}</h2>
                            <p className={'text-sm text-color__secondary mt-2'}>{e.description}</p>
                            <div className={'grid grid-cols-4 gap-y-2  my-2'}>
                                {e.tags.map((e,tagIndex)=>{
                                    return(
                                        <span className={`${colorArray[tagIndex]}`} key={tagIndex}>{e}</span>
                                    )
                                })}
                            </div>
                        </AnimatedContainer>
                    )
                })}
            </div>



        </section>
    )
}
export default Projects;
