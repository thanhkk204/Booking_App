import React, { useEffect, useState } from "react"
import Testimonial from "../../components/Testimonial"
import DoctorCard from "../../components/doctors/DoctorCard"
import { doctors } from "../../assets/data/doctors"
import { BASE_URL } from "../../config"
import Loader from "../../components/Loader"
import ErrorComponent from "../../components/ErrorComponent"
import useFetchData from "../../hooks/useFetchData"
export default function Doctors() {
  const [query, setQuery] = useState('')
  const [debounceQuery, setDebounceQuery] = useState('')
  
  useEffect(()=>{
    const timeOut = setTimeout(()=>{
      setDebounceQuery(query)
    }, 700)

    return ()=> clearTimeout(timeOut)
  }, [query])
  
  const handleSearch = ()=>{
    setQuery(query.trim())
  }
  const { data: doctors, loading, error } = useFetchData(`${BASE_URL}/doctor?query=${debounceQuery}`)
  return (
    <>
      <section className="bg-[#fff9ea]">
        <div className="container text-center">
          <h2 className="heading">Find a Doctor</h2>
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between ">
            <input
              type="search"
              className="py-4 pl-4 pr-2 bg-transparent  w-full focus:outline-none cursor-pointer placeholder:text-textColor text-[20px] font-[500]"
              placeholder="Search Doctor's name or specification"
              onChange={e=>setQuery(e.target.value)}
            />
            <button onClick={handleSearch}
            className="btn mt-0 rounded-none rounded-r-md h-[62px] ">
              Search
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          {loading && <Loader />}
          {error && <ErrorComponent />}
          {!loading && !error && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-[30px] ">
              {doctors.map((doctor, index) => (
                <DoctorCard doctor={doctor} key={doctor._id} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section>
        <div className="container">
          <div className="lg:w-[570px] mx-auto ">
            <h2 className="heading text-center">What Our Patients Said</h2>
            <p className="text__para text-center">
              World-class care for everyone. Our health system offers unmatched
              exprt health care
            </p>
          </div>
          <Testimonial />
        </div>
      </section>
    </>
  )
}
