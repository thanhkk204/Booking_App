import React from "react"
import { Link } from "react-router-dom"
import { BsArrowRight } from "react-icons/bs"
export default function ServiceCard({ item, index }) {
  const { name, desc, bgColor, textColor } = item
  return (
    <div className="py-[30px] px-3 lg:px-5">
      <h2 className="text-[26px] leading-9 text-headingColor font-[700]">
        {name}
      </h2>
      <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
        {desc}
      </p>
      <div className="flex items-center justify-between mt-7">
        <Link
          to={"/"}
          className="w-11 h-11 rounded-full border border-solid border-[#181A1E] 
            mt-7 mx-auto flex items-center justify-center hover:bg-primaryColor hover:border-none group"
        >
          <BsArrowRight className="w-6 h-6 group-hover:text-white" />
        </Link>
        <span
          className="w-11 h-11 flex items-center justify-center text-[18px] leading-[30px] font-[600]"
          style={{
            backgroundColor: `${bgColor}`,
            color: `${textColor}`,
            borderRadius: "6px 0 0 6px",
          }}
        >
          {index + 1}
        </span>
      </div>
    </div>
  )
}
