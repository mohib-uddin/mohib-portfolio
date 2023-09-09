"use client";
import {useTheme} from "next-themes";
import {BsSunFill} from "react-icons/bs";
import {BsFillMoonFill} from "react-icons/bs";

import {useEffect, useState} from "react";
const ThemeSwitcher=()=>{
 const {resolvedTheme,setTheme}=useTheme();
 const [mounted,setMounted]=useState(false);
 useEffect(()=>{setMounted(true)},[])
 if(!mounted){
  return null;
 }
 return(
     <button className={`${resolvedTheme==='dark'?'bg-white text-black':'bg-black text-white'} p-2 rounded`} onClick={()=>setTheme(resolvedTheme==='dark'?'light':'dark')}>
      {resolvedTheme==='dark'?(<BsSunFill/>):(<BsFillMoonFill/>)}
     </button>
 )
}
export default ThemeSwitcher;
