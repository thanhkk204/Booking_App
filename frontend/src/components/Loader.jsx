import React from 'react'
import { HashLoader } from 'react-spinners'

export default function Loader() {
  return (
    <div className='flex items-center justify-center w-full h-full'>
        <HashLoader color='#0067FF' />
    </div>
  )
}
