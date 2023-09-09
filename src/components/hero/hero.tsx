import AnimatedContainer from "@/components/animations/animated-container";

const Hero=()=>{
 return(
         <section className={'flex w-full desktop:w-11/12 m-auto  flex-col    desktop:px-desktop__container large__desktop:px-large__screen_container p-4'}>
             <AnimatedContainer initial={{y:-10,opacity:0}} animate={{ y: 10,opacity:1 }} transition={{ ease: "easeIn", duration: .5 }}  >
                 <h2 className={'mt-20 font-[700] overlay  large__desktop:leading-snug  dark:text-white  text-5xl large__desktop:text-6xl'}>Mohib Uddin.</h2>
             </AnimatedContainer>
             <AnimatedContainer initial={{y:-10,opacity:0}} animate={{ y: 10,opacity:1 }} transition={{ ease: "easeIn", duration: .5,delay:.5 }} >
                 <h2 className={'font-[700]  large__desktop:leading-snug dark:text-white  text-4xl large__desktop:text-5xl'}>I Code Your Ideas Into Reality.</h2>
             </AnimatedContainer>
             <AnimatedContainer initial={{y:-10,opacity:0}} animate={{ y: 10,opacity:1 }} transition={{ ease: "easeIn", duration: .5,delay:1}} >
                 <p className={' mt-4 dark:text-color__secondary text-lg '}>Hi My Name is Mohib Uddin, a passionate software developer specializing in Python/Django. With a knack for problem-solving, I love creating efficient and user-friendly applications, constantly seeking innovative ways to improve myself and the world at large</p>
             </AnimatedContainer>
         </section>
 )
}
export default Hero;
