import {menuList} from "@/_utils/constants/menu-list";
import NavLink from "@/components/navbar/navlink";
import ThemeSwitcher from "@/components/theme-switcher/theme-switcher";

const Navbar=()=>{
    return(
        <nav className={'fixed bottom-2 laptop:bottom-8 w-full overflow-hidden z-50'}>
            <div className={"container mx-auto"}>
                <div className={'w-full bg-black/70 dark:bg-black/20 h-[90px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50'}>
                    {menuList.map((e,index)=>{
                        return(
                            <>
                            {e.name!='Theme'?<NavLink link={e.link} icon={e.icon} key={index}/>:<ThemeSwitcher props={e}/>}
                            </>
                        )
                    })}
                </div>
            </div>
        </nav>
    )

}
export default Navbar;
