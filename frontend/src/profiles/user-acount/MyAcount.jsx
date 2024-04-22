import React, { useContext, useState } from "react"
import userImg from "../../assets/images/doctor-img01.png"
import {authContext} from '../../context/AuthContextProvider'
import MyBookings from "./MyBookings"
import Profile from "./Profile"
import useFetchData from "../../hooks/useFetchData"
import { BASE_URL } from "../../config"
import Loader from "../../components/Loader"
import ErrorComponent from "../../components/ErrorComponent"
export default function MyAcount() {
  const {dispatch} = useContext(authContext)
  const [tab, setTab] = useState('bookings')
  const {data: userData, loading, error} = useFetchData(`${BASE_URL}/user/profile/me`)
  const handleLogOut = ()=>{
    dispatch({type: "LOGOUT"})
  }
  console.log('userData' , userData);
  return (
    <div className="max-w-[1170px] px-5 mx-auto">
      {
        loading && !error && <Loader/>
      }
      {
        error && !loading && <ErrorComponent errMessage={error}/>
      }
      {
        !loading && !error && (
          <div className="grid md:grid-cols-3 gap-10 ">
        <div className="pd-[50px] px-[30px] rounded-md">
          <div className="flex items-center justify-center">
            <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor">
              <img src={userData.photo} className="w-full h-full rounded-full" />
            </figure>
          </div>

          <div className="text-center mt-4">
            <h3 className="text-[18px] leading-[30px] text-headingColor font-bold ">
              {userData.name}
            </h3>
            <p className="text-textColor text-[15px] leading-6 font-medium">
              {userData.email}
            </p>
            <p className="text-textColor text-[15px] leading-6 font-medium">
              Blood Type:{" "}
              <span className="ml-2 text-headingColor text-[22px] leading-8">
              {userData.bloodType}
              </span>
            </p>
          </div>

          <div className="mt-[50px] md:mt-[100px]">
            <button className="w-full bg-[#181A1E] mb-3 p-3 text-[16px] leading-7 rounded-md text-white" onClick={handleLogOut}>Logout</button>
            <button className="w-full bg-red-600 p-3 text-[16px] leading-7 rounded-md text-white">Delete Account</button>
          </div>
        </div>

        <div className="md:col-span-2 md:px-[30px] ">
         
         <div>
          <button onClick={()=>setTab('bookings')} className={`${tab=== 'bookings' && 'bg-primaryColor text-white font-normal'} p-2 mr-5 rounded-md text-headingColor font-semibold text-[16px] 
          leading-7 border border-solid border-primaryColor`}>My Bookings</button>
          <button onClick={()=>setTab('settings')} className={`${tab=== 'settings' && 'bg-primaryColor text-white font-normal'} p-2 rounded-md text-headingColor font-semibold text-[16px] 
          leading-7 border border-solid border-primaryColor`}>Profile Setting</button>
         </div>

         {
          tab === "bookings" ? <MyBookings/> : <Profile userData={userData}/>
         }
        </div>
      </div>
        )
      }
    </div>
  )
}
