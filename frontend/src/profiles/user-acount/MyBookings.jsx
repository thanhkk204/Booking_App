import React from 'react'
import userFetchData from '../../hooks/userFetchData'
import { BASE_URL } from '../../config'
import DoctorCard from '../../components/doctors/DoctorCard'
import Loader from '../../components/Loader'
import ErrorComponent from '../../components/ErrorComponent'
export default function MyBookings() {

  const {data: appointments , loading , error} = userFetchData(`${BASE_URL}/user/appointment/my-appointment`)
  return (
    <div>
      {
        loading && !error && <Loader/>
      }
      {
        error && !loading && <ErrorComponent errMessage={error}/>
      }
      {
        !error && !loading && (
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
          {
            appointments.map(doctor =>(
              <DoctorCard doctor={doctor} key={doctor._id}/>
            ))
          }
          </div>
        )
      }
      {
        !loading && !error && appointments.length === 0 && (
          <h2 className='mt-5 text-center leading-7 text-[20px] font-semibold text-primaryColor'>You haven't had any appointments</h2>
        )
      }
    </div>
  )
}
