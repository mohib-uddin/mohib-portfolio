"use client";
import {IoArrowBackSharp} from "react-icons/io5";
import {useRouter} from "next/navigation";
const BackButton=()=>{
    const router=useRouter();
    return(
        <span className={'cursor-pointer text-2xl'} onClick={()=>router.back()}>
            <IoArrowBackSharp/>
        </span>
    )

}
export default BackButton;
