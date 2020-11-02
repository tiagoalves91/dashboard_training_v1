import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as IoIcons from "react-icons/io" 
import * as BiIcons from "react-icons/bi"
import * as FcIcons from "react-icons/fc"
import * as AiIcons from "react-icons/ai"
import * as BsIcons from "react-icons/bs"


export const NavbarData = [
{
    title:'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
},
{
    title:'Drivers',
    path: '/drivers',
    icon: <BsIcons.BsPersonFill />,
    cName: 'nav-text'
},
{
    title:'Cars',
    path: '/cars',
    icon: <AiIcons.AiFillCar />,
    cName: 'nav-text'
},
 {
    title:'Map',
    path: '/map',
    icon: <BiIcons.BiMapAlt />,
    cName: 'nav-text'
},
{
    title:'Support',
    path: '/support',
    icon: <FaIcons.FaQuestion />,
    cName: 'nav-text'
}
]
