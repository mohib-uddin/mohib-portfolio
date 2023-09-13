"use client";
import {useTheme} from "next-themes";
const ThemeSwitcher=({props}:any)=>{
 const {resolvedTheme,setTheme}=useTheme();

 return(
    <span onClick={()=>resolvedTheme==='light'?setTheme('dark'):setTheme('light')}   className={`flex rounded-full items-center justify-center  cursor-pointer w-[60px] h-[60px]`} >
        {props.icon}
    </span>
 )
}
export default ThemeSwitcher;
