import React, { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import {authContext} from '../context/AuthContextProvider'
import { BASE_URL } from "../config"
export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [loading, setLoading] = useState(false)
  const {dispatch} = useContext(authContext)
  const navigate = useNavigate()
  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleSubmitForm = async (e)=>{
    e.preventDefault()
    setLoading(true)
    try {
      
      const res = await fetch(`${BASE_URL}/auth/login`,{
        method: "post",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })
      const result = await res.json()
      

      if (!res.ok) {
         throw new Error(result.message)
      }
      dispatch({
        type:"LOGIN_SUCCESS",
        payload:{
          user: result.data,
          token: result.token,
          role: result.role,
        }
      })
      toast.success(result.message)
      setLoading(false)
      navigate('/')
    } catch (error) {
      toast.success("Failed in sign up")
      setLoading(false)
      
    }
  }
  return (
    <section className="px-5 lg:px-0">
      <div className="w-full md:max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
          Hello! <span className="text-primaryColor">Welcome</span> Back 🎉
        </h3>

        <form className="py-4 md:py-0" onSubmit={handleSubmitForm}>
          <div className="mb-5">
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] 
              focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
              placeholder:text-textColor rounded-md cursor-pointer"
              required
              value={formData.name}
              onChange={handleInput}
            />
          </div>

          <div className="mb-5">
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] 
              focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
              placeholder:text-textColor rounded-md cursor-pointer"
              required
              value={formData.name}
              onChange={handleInput}
            />
          </div>

          <div className="mt-7">
            <button
              type="submit"
              className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3"
            >
              Login
            </button>
          </div>
          <p className="mt-5 text-textColor text-center">
            Don't have an account?{" "}
            <Link to="/signup" className="text-primaryColor ml-1 font-medium">
              Register
            </Link>
          </p>
        </form>
      </div>
    </section>
  )
}
