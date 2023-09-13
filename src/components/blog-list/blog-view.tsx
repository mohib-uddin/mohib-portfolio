"use client";
import {useRouter} from "next/navigation";

type slugType={
    current:string;
}
const BLogView=({slug,title}:{slug:slugType,title:string})=>{
    const router=useRouter();
    return(
        <h2 className={'text-lg font-[700] cursor-pointer hover:underline'} onClick={()=>router.push(`/blogs/${slug.current}`)}>{title}</h2>
    )
}
export default BLogView;
