import React from 'react'
import DoctorCard from './DoctorCard'
import useFetchData from '../../hooks/useFetchData'
import { BASE_URL } from '../../config'
import Loader from '../Loader'
import ErrorComponent from '../ErrorComponent'
export default function DoctorList() {
  const {data: doctors, loading, error} = useFetchData(`${BASE_URL}/doctor`)
  return (
    <>
     {loading && <Loader/>}
     {error && <ErrorComponent/>}
     {
      !loading && !error && <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
      {doctors.map((doctor) => (
        <DoctorCard doctor={doctor} key={doctor._id} />
      ))}
    </div>
     }
    </>
    
  )
}
