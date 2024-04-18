import React from 'react'

export default function ErrorComponent({errMessage}) {
  return (
    <div className='flex items-center justify-center w-full h-full'>
       <h3 className='text-headingColor text-[20px] leading-8 font-semibold'>{errMessage}</h3>
    </div>
)
}
