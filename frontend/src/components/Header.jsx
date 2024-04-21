import React, { useContext, useEffect, useRef } from "react"
import Logo from "../assets/images/logo.png"
import userImg from "../assets/images/avatar-icon.png"
import { Link, NavLink } from "react-router-dom"
import {BiMenu} from 'react-icons/bi'
import { authContext } from "../context/AuthContextProvider"
const navLinks = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/doctors",
    display: "Doctors",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/contacts",
    display: "Contact",
  },
]
export default function Header() {
  const headerRef = useRef(null)
  const menuRef = useRef(null)
  const {user, token, role} = useContext(authContext)
  const handleSticky = ()=>{
    window.addEventListener('scroll' , ()=>{
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky_header')
      }else{
        headerRef.current.classList.remove('sticky_header')

      }
    } )
  }
  useEffect(()=>{
   handleSticky()

   return ()=>{
    window.removeEventListener('scroll' , handleSticky)
   }
  } , [])
  const toggleMenu = () => menuRef.current.classList.toggle('show_menu')
  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* ==============Logo================= */}
          <div>
            <img src={Logo} alt="" />
          </div>

          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? " text-primaryColor text-[16px] leading-7 front-[600]"
                        : " text-textColor hover:text-primaryColor text-[16px] leading-7 front-[600]"
                    }
                  >
                    {item.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* ====================Nav right================ */}

          <div className="flex items-center gap-4">
          {
            user && token ? (
              <div>
              <Link to={ role === "doctor" ? "doctors/profile/me": "/users/profile/me"}>
              <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                <img src={user?.photo} alt="" className="w-full rounded-full" />
              </figure>
              </Link>
             </div>
            ) : (
              <Link to={'/login'}>
              <button className="
              bg-primaryColor py-2 px-6 text-white font-[600] h-[44px]
               flex items-center justify-center rounded-[50px]
               ">
               Login
              </button>
            </Link>
            )
          }
           

            <span className="md:hidden" onClick={toggleMenu}>
               <BiMenu className="h-6 w-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}
