"use client"
import Link from "next/link";
import {usePathname} from "next/navigation";

type navLinkProps={
    icon:React.ReactElement;
    link:string;
    key:number;
}

const NavLink=({icon,link,key}:navLinkProps)=>{
    const pathname=usePathname();
    return(
        <Link key={key}  className={`${pathname===link&&"active"} flex rounded-full items-center justify-center  cursor-pointer w-[60px] h-[60px]`} href={`${link}`}>
            {icon}
        </Link>
    )
}

export default NavLink;
