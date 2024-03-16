import React from 'react'
import {faqs} from '../../assets/data/faqs'
import FaqItem from './FaqItem'
export default function FaqList() {
  return (
       <ul className='mt-10'>
        {
            faqs.map((item, index)=>
             <FaqItem key={index} item={item}/>
            )
        }
       </ul>
  )
}
