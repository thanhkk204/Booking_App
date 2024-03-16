import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
export default function FaqItem({item}) {
    const [isOpen , setIsOpen] = useState(false)
    const toggleIsOpen = ()=> setIsOpen(!isOpen)
  return (
    <div
    onClick={toggleIsOpen}
    className='p-3 lg:p-5 rounded-[12px] border border-solid border-[#D9DCE2] mb-5 cursor-pointer'
    >
       <div className='flex items-center justify-between gap-5'>
        <h4 className='text-[16px] leading-7 lg:text-[24px] lg:leading-8 text-headingColor'>
            {item.question}
        </h4>
        <div 
        onClick={toggleIsOpen}
        className='w-7 h-7 lg:w-8 lg:h-8 border border-solid border-[#141F21] rounded flex items-center justify-center'
        >
        {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
       </div>
       {
        isOpen && <div className="tex-[14px] leading-6 lg:tẽt-[16px] lg:leading-7 font-[400] text-textColor">
           {item.content}</div>
      }
    </div>
  )
}
