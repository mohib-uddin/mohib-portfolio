import {AiFillGithub} from "react-icons/ai";
import {BiLogoLinkedin} from "react-icons/bi";
import AnimatedContainer from "@/components/animations/animated-container";
const Social=()=>{
    return(
        <>
            <AnimatedContainer initial={{y:20,opacity:0}} animate={{y:-20,opacity:1}} transition={{duration:1,ease:'easeOut'}} className={'hidden desktop:flex  flex-col fixed bottom-2 px-10'}>
                <h3 className={'text-3xl hover:text-[#4776e6] cursor-pointer'}><AiFillGithub/></h3>
                <h3 className={'text-3xl mt-2 mb-4 hover:text-[#4776e6] cursor-pointer'}><BiLogoLinkedin/></h3>
                <div className={'h-40 border-l-2 border-l-overlay m-auto'}>
                </div>
            </AnimatedContainer>
            <AnimatedContainer initial={{y:50,opacity:0}} animate={{y:-50,opacity:1}} transition={{duration:1,ease:'easeOut'}} className={'right-[-5%] hidden desktop:flex  flex-col fixed bottom-[-2%] px-10'}>

                <p style={{transform:'rotate(90deg)'}} className={'mb-20 text-[#4776e6]'}>mohib@gmail.com</p>
                <div className={'h-40 border-l-2 border-l-overlay m-auto'}>
                </div>
            </AnimatedContainer>
        </>

    )

}
export default Social;
