import React, { useEffect, useState } from "react"
import { AiOutlineDelete } from "react-icons/ai"
import uploadCloudinary from "../../utils/uploadCloudinary"
import { BASE_URL, token } from "../../config"
import { toast } from "react-toastify"
import { HashLoader } from "react-spinners"
export default function Profile({ doctorData }) {
  const [loading , setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    bio: "",
    gender: "",
    specialization: "",
    ticketPrice: 0,
    qualifications: [],
    experiences: [],
    timeSlots: [],
    about: "",
    photo: null,
  })
  
  useEffect(()=>{
   setFormData({
    name: doctorData?.name,
    email: doctorData?.email,
    phone: doctorData?.phone,
    bio: doctorData?.bio,
    gender: doctorData?.gender,
    specialization: doctorData?.specialization,
    ticketPrice: doctorData?.ticketPrice,
    qualifications: doctorData?.qualifications,
    experiences: doctorData?.experiences,
    timeSlots: doctorData?.timeSlots,
    about: doctorData?.about,
    photo: doctorData?.photo,
   })
  },[doctorData])
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleInputFileChange = async (e) => {
    const file = e.target.files[0]
    const data = await uploadCloudinary(file)
    setFormData({ ...formData, photo: data?.url })
  }
  const handleUpdateProfile = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const res = await fetch(`${BASE_URL}/doctor/${doctorData._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      })
      const result = await res.json()

      if (!res.ok) {
        throw new Error(result.message)
      }
      toast.success(result.message)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      toast.error(error.message)
    }
  }
  // reusable func for add item

  const addItem = (key, item) => {
    setFormData((preFormData) => ({
      ...preFormData,
      [key]: [...preFormData[key], item],
    }))
  }
  // reusable func for change item
  const handleReusableInputChangeFuc = (key, index, e) => {
    const { name, value } = e.target
    setFormData((preFormData) => {
      const updateItems = [...preFormData[key]]

      updateItems[index][name] = value

      return {
        ...preFormData,
        [key]: updateItems,
      }
    })
  }
  // reusable func for delete item
  const deleteItem = (key, index) => {
    setFormData((preFormData) => ({
      ...preFormData,
      [key]: preFormData[key].filter((_, i) => i !== index),
    }))
  }
  const addQualification = (e) => {
    e.preventDefault()

    addItem("qualifications", {
      startingDate: "",
      endingDate: "",
      degree: "Good certificate",
      university: "FPT",
    })
  }
  const handleQualificationChange = (e, index) => {
    handleReusableInputChangeFuc("qualifications", index, e)
  }
  const deleteQualification = (e, index) => {
    e.preventDefault(), deleteItem("qualifications", index)
  }

  const addExperiences = (e) => {
    e.preventDefault()

    addItem("experiences", {
      startingDate: "",
      endingDate: "",
      position: "senior Surgeon",
      hospital: "Hensein hospital",
    })
  }
  const handleExperiencesChange = (e, index) => {
    handleReusableInputChangeFuc("experiences", index, e)
  }
  const deleteExperiences = (e, index) => {
    e.preventDefault(), deleteItem("experiences", index)
  }

  const addTimeSlots = (e) => {
    e.preventDefault()

    addItem("timeSlots", {
      startingTime: "10:30",
      endingTime: "04:00",
      day: "sunday",
    })
  }
  const handleTimeSlotsChange = (e, index) => {
    handleReusableInputChangeFuc("timeSlots", index, e)
  }
  const deleteTimeSlots = (e, index) => {
    e.preventDefault(), deleteItem("timeSlots", index)
  }

  return (
    <div>
      <h2 className="text-headingColor font-bold text-[24px] leading-9 mb-10">
        Profile Information
      </h2>

      <form>
        <div className="mb-5">
          <p className="form_label">Name*</p>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Full Name"
            className="form__input"
          />
        </div>
        <div className="mb-5">
          <p className="form_label">Email*</p>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="form__input"
            disabled={true}
            readOnly
            aria-readonly
          />
        </div>
        <div className="mb-5">
          <p className="form_label">Phone*</p>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone Number"
            className="form__input"
          />
        </div>

        <div className="mb-5">
          <p className="form_label">Bio*</p>
          <input
            type="text"
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            placeholder="Bio"
            className="form__input"
          />
        </div>

        <div className="mb-5">
          <div className="grid grid-cols-3 gap-5 mb-[30px] ">
            <div>
              <p className="form__label">Gender</p>
              <select
                name="gender"
                value={formData.gender}
                className="form__input"
                onChange={handleInputChange}
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <p className="form__label">Specialization</p>
              <select
                name="specialization"
                value={formData.specialization}
                className="form__input"
                onChange={handleInputChange}
              >
                <option value="">Select</option>
                <option value="surgeon">Surgeon</option>
                <option value="neurologist">Neurologist</option>
                <option value="dermatologist">Dermatologist</option>
              </select>
            </div>
            <div>
              <p className="form__label">Ticker Price*</p>
              <input
                className="form__input"
                type="number"
                placeholder="100"
                name="ticketPrice"
                value={formData.ticketPrice}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <div className="mb-5">
          <p className="form__label">Qualification*</p>
          {formData.qualifications?.map((item, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <p className="form__label">Starting Date*</p>
                    <input
                      type="date"
                      name="startingDate"
                      value={item.startingDate}
                      className="form__input"
                      onChange={(e) => handleQualificationChange(e, index)}
                    />
                  </div>
                  <div>
                    <p className="form__label">Ending Date*</p>
                    <input
                      type="date"
                      name="endingDate"
                      value={item.endingDate}
                      className="form__input"
                      onChange={(e) => handleQualificationChange(e, index)}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <p className="form__label">Degree*</p>
                    <input
                      type="text"
                      name="degree"
                      value={item.degree}
                      className="form__input"
                      onChange={(e) => handleQualificationChange(e, index)}
                    />
                  </div>
                  <div>
                    <p className="form__label">University*</p>
                    <input
                      type="text"
                      name="university"
                      value={item.university}
                      className="form__input"
                      onChange={(e) => handleQualificationChange(e, index)}
                    />
                  </div>
                </div>

                <button
                  onClick={(e) => deleteQualification(e, index)}
                  className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer"
                >
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          ))}
          <button
            onClick={addQualification}
            className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer"
          >
            Add Qualification
          </button>
        </div>
        <div className="mb-5">
          <p className="form__label">Experiences*</p>
          {formData.experiences?.map((item, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <p className="form__label">Starting Date*</p>
                    <input
                      type="date"
                      name="startingDate"
                      value={item.startingDate}
                      className="form__input"
                      onChange={(e) => handleExperiencesChange(e, index)}
                    />
                  </div>
                  <div>
                    <p className="form__label">Ending Date*</p>
                    <input
                      type="date"
                      name="endingDate"
                      value={item.endingDate}
                      className="form__input"
                      onChange={(e) => handleExperiencesChange(e, index)}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <p className="form__label">Position*</p>
                    <input
                      type="text"
                      name="position"
                      value={item.position}
                      className="form__input"
                      onChange={(e) => handleExperiencesChange(e, index)}
                    />
                  </div>
                  <div>
                    <p className="form__label">Hospital*</p>
                    <input
                      type="text"
                      name="hospital"
                      value={item.hospital}
                      className="form__input"
                      onChange={(e) => handleExperiencesChange(e, index)}
                    />
                  </div>
                </div>

                <button
                  onClick={(e) => deleteExperiences(e, index)}
                  className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer"
                >
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          ))}
          <button
            onClick={addExperiences}
            className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer"
          >
            Add Experiences
          </button>
        </div>
        <div className="mb-5">
          <p className="form__label">Time Slot*</p>
          {formData.timeSlots?.map((item, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-2 md:grid-cols-4 mb-[30px] gap-5">
                  <div>
                    <p className="form__label">Day*</p>
                    <select
                      name="day"
                      value={item.day}
                      className="form__input py-3.5"
                      onChange={(e) => handleTimeSlotsChange(e, index)}
                    >
                      <option value="">Select</option>
                      <option value="monday">Monday</option>
                      <option value="tuesday">Tuesday</option>
                      <option value="wednesday">Wednesday</option>
                      <option value="thursday">Thursday</option>
                      <option value="friday">Friday</option>
                      <option value="saturday">Saturday</option>
                      <option value="sunday">Sunday</option>
                    </select>
                  </div>
                  <div>
                    <p className="form__label">Starting time*</p>
                    <input
                      type="time"
                      name="startingTime"
                      value={item.startingTime}
                      className="form__input"
                      onChange={(e) => handleTimeSlotsChange(e, index)}
                    />
                  </div>
                  <div>
                    <p className="form__label">Ending time*</p>
                    <input
                      type="time"
                      name="endingTime"
                      value={item.endingTime}
                      className="form__input"
                      onChange={(e) => handleTimeSlotsChange(e, index)}
                    />
                  </div>

                  <div className="flex items-center">
                    <button
                      onClick={(e) => deleteTimeSlots(e, index)}
                      className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-6 cursor-pointer"
                    >
                      <AiOutlineDelete />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <button
            onClick={addTimeSlots}
            className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer"
          >
            Add Time Slot
          </button>
        </div>

        <div className="mb-5">
          <p className="form__label">About*</p>
          <textarea
            name="about"
            rows="5"
            value={formData.about}
            placeholder="Write about you"
            className="form__input"
            onChange={handleInputChange}
          ></textarea>
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
              onChange={handleInputFileChange}
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
            onClick={handleUpdateProfile}
            disabled={loading && true}
            className="bg-primaryColor rounded-md text-white text-[18px] leading-7 w-full py-3 px-4 cursor-pointer"
          >
            {loading ? <HashLoader size={25}/>: "Update Profile"}
          </button>
        </div>
      </form>
    </div>
  )
}
