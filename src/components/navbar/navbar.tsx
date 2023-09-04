import {menuList} from "@/_utils/constants/menu-list";
import Link from "next/link";

const NavBar=()=>{
    const pathname='/'
    return(
        <nav className={'fixed bottom-2 laptop:bottom-8 w-full overflow-hidden z-50'}>
            <div className={"container mx-auto"}>
                <div className={'w-full bg-black/20 h-[90px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50'}>
                    {menuList.map((e,index)=>{
                        return(
                            <Link key={index}  className={`${pathname===e.link&&"active"} flex rounded-full items-center justify-center  cursor-pointer w-[60px] h-[60px]`} href={`${e.link}`}>
                                {e.icon}
                            </Link>
                        )
                    })}

                </div>
            </div>
        </nav>
    )

}
export default NavBar;
