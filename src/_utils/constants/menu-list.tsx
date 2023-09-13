import {BiHomeAlt} from "react-icons/bi";
import {BiUser} from "react-icons/bi";
import {BsClipboard2Data,BsBriefcase,BsChatSquare} from "react-icons/bs";
export const menuList=[

    {
        name:"Home",
        link:"/",
        icon:<BiHomeAlt/>
    },
    {
        name:"Blogs",
        link:"/blogs",
        icon:<BiUser/>
    },
    {
        name:"Projects",
        link:"/projects",
        icon:<BsClipboard2Data/>
    },
    {
        name:"Courses",
        link:"/courses",
        icon:<BsBriefcase/>
    },
    {
        name:"Theme",
        link:"/theme",
        icon:<BsChatSquare/>
    }

]

export const projectFilter=[
    {
        title:'Next 13'
    },
    {
        title:'Reactjs'
    },
    {
        title:'React Native'
    },
    {
        title:'Full Stack'
    },
];
