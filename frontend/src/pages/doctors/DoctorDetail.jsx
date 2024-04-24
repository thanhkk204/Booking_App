import React, { useState } from "react"
import startIcon from "../../assets/images/Star.png"
import DoctorAbout from "./DoctorAbout"
import DoctorFeadback from "./DoctorFeadback"
import SidePanel from "./SidePanel"
import { useParams } from "react-router-dom"
import Loader from "../../components/Loader"
import ErrorComponent from "../../components/ErrorComponent"
import useFetchData from "../../hooks/useFetchData"
import { BASE_URL } from "../../config"
export default function DoctorDetail() {
  const [tab, setTab] = useState("about")
  const { id } = useParams()
  const {
    data: doctor,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/doctor/${id}`)

  const {
    name,
    bio,
    specialization,
    averageRating,
    qualifications,
    totalRating,
    reviews,
    experiences,
    about,
    photo,
    ticketPrice,
    timeSlots
  } = doctor
  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        {loading && <Loader />}
        {error && <ErrorComponent />}
        {!loading && !error && (
          <div className="grid md:grid-cols-3 gap-[50px]">
            <div className="md:col-span-2">
              <div className="flex items-center gap-5">
                <figure className="max-w-[200px] max-h-[200px]">
                  <img src={photo} alt="" className="w-full" />
                </figure>

                <div>
                  <span
                    className="bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 text-[12px]
                leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded"
                  >
                   {specialization}
                  </span>
                  <h3 className="text-headingColor text-[22px] leading-9">
                   {name}
                  </h3>
                  <div className="flex items-center gap-[6px]">
                    <span
                      className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px]
                    lg:leading-7 font-semibold text-headingColor
                   "
                    >
                      <img src={startIcon} alt="" /> {averageRating?.toFixed(1)}
                    </span>
                    <span className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-textColor">
                      ({reviews?.length})
                    </span>
                  </div>
                  <p className="text__para text-[14px] md:text-[15px] leading-5 lg:max-w-[390px]">
                    {bio}
                  </p>
                </div>
              </div>

              <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
                <button
                  onClick={() => setTab("about")}
                  className={`${
                    tab === "about" &&
                    "border-b border-solid border-primaryColor"
                  } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
                >
                  About
                </button>
                <button
                  onClick={() => setTab("feadback")}
                  className={`${
                    tab === "feadback" &&
                    "border-b border-solid border-primaryColor"
                  } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
                >
                  Feadback
                </button>
              </div>

              <div className="mt-[50px]">
                {tab === "about" ?
                <DoctorAbout name={name} about={about} experiences={experiences} qualifications={qualifications}/>:
                <DoctorFeadback reviews={reviews} totalRating={totalRating}/>}
              </div>
            </div>

            <div> 
              <SidePanel 
              doctorId={doctor._id} 
              ticketPrice={ticketPrice} 
              timeSlots={timeSlots}/>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
