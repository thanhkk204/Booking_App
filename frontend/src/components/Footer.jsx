import React from "react"
import logo from "../assets/images/logo.png"
import { RiLinkedinFill } from "react-icons/ri"
import { AiFillYoutube, AiFillGithub, AiOutlineInstagram } from "react-icons/ai"
const socialMedia1 = [
  {
    icons: AiFillYoutube,
  },
  {
    icons: AiFillGithub,
  },
  {
    icons: AiOutlineInstagram,
  },
  {
    icons: RiLinkedinFill,
  },
]
const socialMedia2 = [
  {
    display: "Home",
    Link: "/",
  },
  {
    display: "About us",
    Link: "/",
  },
  {
    display: "Services",
    Link: "/",
  },
  {
    display: "Blog",
    Link: "/",
  },
]
const socialMedia3 = [
  {
    display: "Find a Doctor",
    Link: "/",
  },
  {
    display: "Request an Appointment",
    Link: "/",
  },
  {
    display: "Find a Location",
    Link: "/",
  },
  {
    display: "Get a Option",
    Link: "/",
  },
]
const socialMedia4 = [
  {
    display: "Donate",
    Link: "/",
  },
  {
    display: "Contact us",
    Link: "/",
  },
]
export default function Footer() {
  const date = new Date().getFullYear()
  return (
    <footer>
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-5 justify-between pb-12 pt-9 px-5">
          <div className="flex flex-col gap-3 order-2 lg:order-1 justify-center items-center lg:justify-start lg:items-start">
            <div className="hidden lg:block">
              <img src={logo} alt="" />
            </div>
            <div className="text-textColor font-[400] leading-5 lg:w-[350px] w-full text-center lg:text-start">
              CopyRight@ {date} developed by Le Huy Thanh
            </div>
            <ul className="flex gap-2 lg:gap-4">
              {socialMedia1.map((item, index) => (
                <li
                  key={index}
                  className="w-9 h-9 rounded-full border border-solid border-black flex items-center justify-center hover:bg-primaryColor hover:text-white hover:border-none"
                >
                  <item.icons />
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-7 sm:gap-0 sm:flex-row justify-between order-1 lg:order-2 w-full">
            <div className="flex flex-col gap-3">
              <h2 className="text-black font-[700px] leading-5 text-[24px] mb-2">
                Quick Links
              </h2>
              <ul className="flex gap-2 lg:gap-4 flex-col">
                {socialMedia2.map((item, index) => (
                  <li
                    key={index}
                    className="text-[16px] lg:text-[20px] hover:text-primaryColor hover:cursor-pointer"
                  >
                    {item.display}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-black font-[700px] leading-5 text-[24px] mb-2">
                I want to:
              </h2>
              <ul className="flex gap-2 lg:gap-4 flex-col">
                {socialMedia3.map((item, index) => (
                  <li
                    key={index}
                    className="text-[16px] lg:text-[20px] hover:text-primaryColor hover:cursor-pointer"
                  >
                    {item.display}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-black font-[700px] leading-5 text-[24px] mb-2">
               Support
              </h2>
              <ul className="flex gap-2 lg:gap-4 flex-col">
                {socialMedia4.map((item, index) => (
                  <li
                    key={index}
                    className="text-[16px] lg:text-[20px] hover:text-primaryColor hover:cursor-pointer"
                  >
                    {item.display}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
