import React from "react"
import convertTime from "../../utils/convertTime"
import { BASE_URL, token } from "../../config"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

export default function SidePanel({ doctorId, ticketPrice, timeSlots }) {
  const handleBooking = async (e)=>{
    e.preventDefault()
    try {
      
      const res = await fetch(`${BASE_URL}/payment`,{
        method: "POST",
        headers:{
          "content-type":"application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({price: ticketPrice, doctorId: doctorId})
      })
      if (!res.ok) {
        return toast.error("Can't impliment")
      }
      const result = await res.json()
      window.location = result.data.payUrl
    } catch (error) {
      toast.error(error.message)
      
    }
  }
  return (
    <div className="shadow-panelShadow p-3 lg:p-5 rounded-md ">
      <div className="flex items-center justify-between">
        <p className="text__para mt-0 font-semibold">Ticket Price</p>
        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold ">
           {ticketPrice} $
        </span>
      </div>

      <div className="mt-[30px]">
        <p className="text__para mt-0 font-semibold text-headingColor">
          Available Time Slots :
        </p>

        <ul className="mt-3">
          {
            timeSlots?.map((item, index)=>(
              <li key={index} className="flex items-center justify-between mb-2">
              <p className="text-[15px] leading-6 text-textColor font-semibold">
                {item.day.charAt(0).toUpperCase() + item.day.slice(1)}
              </p>
              <p className="text-[15px] leading-6 text-textColor font-semibold">
                {convertTime(item.startingTime)} - {convertTime(item.endingTime)}
              </p>
            </li>
            ))
          }
          
        </ul>
      </div>

      <button
      onClick={handleBooking}
      className="btn px-2 w-full rounded-md">Book Appoitment</button>
    </div>
  )
}
