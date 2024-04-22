import React, { useState } from "react"
import Loader from "../../components/Loader"
import ErrorComponent from "../../components/ErrorComponent"
import useFetchData from "../../hooks/useFetchData"
import { BASE_URL } from "../../config"
import Tabs from "./Tabs"
import starIcon from "../../assets/images/Star.png"
import DoctorAbout from '../../pages/doctors/DoctorAbout'
import Profile from "./Profile"
import Appointments from "./Appointments"

export default function DoctorProfile() {
  const [tab, setTab] = useState("overview")
  const { data, loading, error } = useFetchData(
    `${BASE_URL}/doctor/profile/me`
  )

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        {loading && !error && <Loader />}
        {/* {
        error && !loading && <ErrorComponent errMessage={error}/>
      } */}

        {!loading && !error && (
          <div className="grid lg:grid-cols-3 gap-[30px] lg:gap-[50px]">
            <Tabs tab={tab} setTab={setTab} />
            <div className="lg:col-span-2">
              {data.isApproved === "pending" && (
                <div className="flex p-4 mb-4 text-yellow-800 bg-yellow-50 rounded-lg">
                  <svg
                    className="flex-shrink-0 w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z"></path>
                  </svg>
                  <span className="sr-only">Info</span>
                  <div className="ml-3 text-sm font-medium">
                    To get approval please complete your profile. We'll review
                    manually and approve whithin 3days
                  </div>
                </div>
              )}

              <div className="mt-8">
                {tab === "overview" && (
                  <div>
                  <div className="flex items-center gap-4 mb-10">
                    <figure className="max-w-[200px] max-h-[200px]">
                      <img src={data?.photo} alt="" className="w-full" />
                    </figure>

                    <div>
                      <span
                        className="bg-[#CCF0F3] text-irisBlueColor py-1 px-4 lg:py-2 lg:px-6 rounded
                  text-[12px] leading-4 lg:text-[16px] lg:leading-6 font-semibold"
                      >
                        {data.specialization}
                      </span>
                      <h3 className="text-[22px] leading-9 font-bold text-headingColor mt-3">
                        {data.name}
                      </h3>

                      <div className="flex items-center gap-[6px]">
                        <span
                          className="flex items-center gap-[6px] text-headingColor text-[14px]
                          leading-5 lg:text-[16px] lg:leading-6 font-semibold"
                        >
                          <img src={starIcon} alt="" /> {data.averageRating}
                        </span>
                        <span
                          className=" text-textColor text-[14px]
                          leading-5 lg:text-[16px] lg:leading-6 font-semibold"
                        >
                          {data.total}
                        </span>
                      </div>

                      <p className="text__para font-[15px] lg:max-w-[390px] leading-6">{data.bio}</p>
                    </div>
                  </div>
                  <DoctorAbout 
                  name={data.name} 
                  about={data.about}
                  qualifications={data.qualifications}
                  experiences={data.experiences}
                  />
                  </div>
                )}
                {tab === "appointments" && <Appointments appointments={data.appointments}/>}
                {tab === "settings" && <Profile doctorData={data}/>}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
