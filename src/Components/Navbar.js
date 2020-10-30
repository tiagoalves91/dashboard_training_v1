import React, {useState} from 'react'
import * as FaIcons from "react-icons/fa"
import * as IoIcons from "react-icons/io"
import { Link } from "react-router-dom"
import { NavbarData } from "./NavbarData"
import './Navbar.css'
import { IconContext } from 'react-icons/lib'

function Navbar() {
    const [sidebar, setSideBar] = useState(false)

    const showSideBar = () => setSideBar(!sidebar)
    
    return (
    <> 
    <IconContext.Provider value={{color : '#fff'}}>

        <div className= "navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSideBar}/>
          </Link>    
        </div>
         <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}> 
            <ul className='nav-menu-items' onClick={showSideBar}>
                <li className ='navbar-toggle'>
                    <Link to="#" className='menu-bars'>
                        <IoIcons.IoIosCloseCircleOutline />
                    </Link>
                </li>
                {NavbarData.map((item,index) => {
                  return (
                    <li key={index} className= {item.cName}>
                          <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                          </Link>
                      </li>
                  )
                })}
             </ul>
       </nav>
    </IconContext.Provider>
    </>
    )
}

export default Navbar
