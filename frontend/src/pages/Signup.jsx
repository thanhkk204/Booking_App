import React, { useState } from "react"
import signUpImg from "../assets/images/signup.gif"
import avatar from "../assets/images/doctor-img01.png"
import { Link, useNavigate } from "react-router-dom"
import uploadCloudinary from '../utils/uploadCloudinary'
import {BASE_URL} from '../config'
import { toast } from "react-toastify"
import {ClockLoader} from 'react-spinners'
export default function Signup() {
  const [selectedFile, setSelectedFile] = useState(null)
  const [previewURL, setPreviewURL] = useState(null)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: selectedFile,
    gender: "",
    role: "patient",
  })
  const navigate = useNavigate()
  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleFileInputChanges = async(e)=>{
    const file = e.target.files[0];

    const data = await uploadCloudinary(file)


    setPreviewURL(data.url)
    setSelectedFile(data.url)
    setFormData({...formData, photo: data.url})
  }
  const handleSubmitForm = async (e)=>{
    e.preventDefault()
    setLoading(true)
    try {
      
      const res = await fetch(`${BASE_URL}/auth/register`,{
        method: "post",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })
      const data = await res.json()
      const {message} = data

      if (!res.ok) {
         throw new Error(message)
      }

      toast.success(message)
      setLoading(false)
      navigate('/login')
    } catch (error) {
      toast.success(error.message)
      setLoading(false)
      
    }
  }
  return (
    <section className="px-5 xl:px-0">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Img box */}
          <div className="hidden lg:block bg-primaryColor rounded-l-lg">
            <figure className="rounded-l-lg">
              <img src={signUpImg} alt="" className="w-full rounded-l-lg" />
            </figure>
          </div>

          {/* SignUp Form */}
          <div className="rounded-l-lg lg:pl-16 py-10">
            <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
              Create an <span className="text-primaryColor">account</span>
            </h3>

            <form onSubmit={handleSubmitForm}>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Full name"
                  name="name"
                  className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] 
              focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
              placeholder:text-textColor rounded-md cursor-pointer"
                  required
                  value={formData.name}
                  onChange={handleInput}
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] 
              focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
              placeholder:text-textColor rounded-md cursor-pointer"
                  required
                  value={formData.email}
                  onChange={handleInput}
                />
              </div>
              <div className="mb-5">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] 
              focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
              placeholder:text-textColor rounded-md cursor-pointer"
                  required
                  value={formData.password}
                  onChange={handleInput}
                />
              </div>

              <div className="mb-5 flex items-center justify-between">
                <label className="text-headingColor font-bold text-[16px] leaidng-7">
                  Are you a:
                  <select
                    className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none cursor-pointer"
                    name="role"
                    value={formData.role}
                  onChange={handleInput}
                  >
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                  </select>
                </label>

                <label className="text-headingColor font-bold text-[16px] leaidng-7">
                  Gender:
                  <select
                    className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none cursor-pointer"
                    name="gender"
                    value={formData.gender}
                  onChange={handleInput}
                  required
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </label>
              </div>

              <div className="mb-5 flex items-center gap-3">
                {selectedFile &&  <figure
                  className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor
                 flex items-center justify-center overflow-hidden"
                >
                  <img src={previewURL} alt="" className="w-full rounded-full" />
                  
                </figure>}
               

                <div className="relative w-[130px] h-[50px]">
                  <input
                    type="file"
                    name="photo"
                    id="customFile"
                    accept=".jpg, .png"
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                    onChange={handleFileInputChanges}
                  />
                  <label
                    htmlFor="customFile"
                    className="absolute top-0 left-0 w-full h-full flex items-center justify-center px-[0.75rem] py-[0.375rem] text-[15px]
                  leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer
                  "
                  >
                    Upload Photo
                  </label>
                </div>
              </div>

              <div className="mt-7">
                <button
                disabled = {loading && true}
                  type="submit"
                  className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3"
                >
                 {loading ? <ClockLoader size={35} color="#ffffff"/> : "Sign Up"}
                </button>
              </div>
              <p className="mt-5 text-textColor text-center">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-primaryColor ml-1 font-medium"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
