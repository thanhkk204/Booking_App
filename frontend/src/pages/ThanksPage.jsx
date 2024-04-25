import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { BASE_URL, token } from '../config';

export default function ThanksPage() {
    const [searchParams] = useSearchParams();
    const {bookingId} = JSON.parse(atob(searchParams.get('extraData')))

    useEffect(()=>{
      if (!bookingId) {
        return toast.error("Your bill hasn't completed yet")
      }
      const updateBooking = async()=>{
        try {
        
          const res = await fetch(`${BASE_URL}/payment`,{
            method: "PUT",
            headers:{
              "content-type":"application/json",
              Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({bookingId: bookingId})
          })
          const result = await res.json()
          if (!res.ok) {
            return toast.error(result.message)
          }

          toast.success(result.message)
        } catch (error) {
          toast.error(error.message)
        }
      }
      updateBooking()
    },[bookingId])
  return (
    <div>ThanksPage</div>
  )
}
