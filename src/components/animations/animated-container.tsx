"use client";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "framer-motion";
import {useEffect, useRef} from "react";
type animatedProps={
    children:React.ReactNode;
    className?:string;
    initial:any;
    animate:any;
    transition:any;

}

const AnimatedContainer=({children,initial,animate,transition,className}:animatedProps)=>{
    const ref = useRef(null)
    const isInView = useInView(ref,{once:true});
    const mainControls=useAnimation();
    useEffect(()=>{
        if(isInView){
            mainControls.start('visible')
        }
    },[isInView])
    return(
            <motion.div initial={'hidden'} ref={ref} animate={mainControls} variants={{hidden:initial,visible:animate}} transition={transition} className={className}>
                {children}
            </motion.div>

    )
}
export default AnimatedContainer;
