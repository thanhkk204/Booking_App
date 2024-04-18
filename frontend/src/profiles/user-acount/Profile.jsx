import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import uploadCloudinary from "../../utils/uploadCloudinary"
import { toast } from "react-toastify"
import { BASE_URL, token } from "../../config"
import { ClockLoader } from "react-spinners"

export default function Profile({ userData }) {
  const [selectedFile, setSelectedFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: null,
    gender: "",
    bloodType: "",
  })
  const navigate = useNavigate()
  useEffect(() => {
    setFormData({
      name: userData.name,
      email: userData.email,
      photo: userData.photo,
      gender: userData.gender,
      bloodType: userData.bloodType,
    })
  }, [userData])
  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleFileInputChanges = async (e) => {
    const file = e.target.files[0]

    const data = await uploadCloudinary(file)

    console.log(data)

    setSelectedFile(data.url)
    setFormData({ ...formData, photo: data.url })
  }
  const handleSubmitForm = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch(`${BASE_URL}/user/${userData._id}`, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      console.log(data)
      const { message } = data

      if (!res.ok) {
        throw new Error(message)
      }

      toast.success(message)
      setLoading(false)
      navigate("/users/profile/me")
    } catch (error) {
      console.log(error)
      toast.success("Failed in sign up")
      setLoading(false)
    }
  }
  return (
    <div className="mt-10">
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
              aria-readonly
              readOnly
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
            value={formData.password}
            onChange={handleInput}
          />
        </div>

        <div className="mb-5">
          <input
            type="text"
            placeholder="Blood Type"
            name="bloodType"
            className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] 
              focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
              placeholder:text-textColor rounded-md cursor-pointer"
            required
            value={formData.bloodType}
            onChange={handleInput}
          />
        </div>

        <div className="mb-5 flex items-center justify-between">
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
          {formData.photo && (
            <figure
              className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor
                 flex items-center justify-center overflow-hidden"
            >
              <img
                src={formData.photo}
                alt=""
                className="w-full rounded-full"
              />
            </figure>
          )}

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
            disabled={loading && true}
            type="submit"
            className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3"
          >
            {loading ? <ClockLoader size={25} color="#ffffff" /> : "Update"}
          </button>
        </div>
      </form>
    </div>
  )
}
