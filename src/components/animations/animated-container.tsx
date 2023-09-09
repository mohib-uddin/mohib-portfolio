"use client";
import {motion} from "framer-motion";

type animatedProps={
    children:React.ReactNode;
    className?:string;
    initial:any;
    animate:any;
    transition:any;
}

const AnimatedContainer=({children,initial,animate,transition,className}:animatedProps)=>{

    return(
        <motion.div initial={initial} animate={animate} transition={transition} className={className}>
            {children}
        </motion.div>
    )
}
export default AnimatedContainer;
