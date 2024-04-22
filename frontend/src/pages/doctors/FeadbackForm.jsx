import React, { useState } from "react"
import { AiFillStar } from "react-icons/ai"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"
import { BASE_URL, token } from "../../config"
import { HashLoader } from "react-spinners"
export default function FeadbackForm() {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [reviewText, setReviewText] = useState("")
  const [loading, setLoading] = useState(false)
  const { id } = useParams()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    console.log(token);

    try {
      if (!rating || !reviewText) {
        setLoading(false)
       return toast.error("Rating and Review filds are required")
      }
      console.log(`${BASE_URL}/doctor/${id}/review`);
      const res = await fetch(`${BASE_URL}/doctor/${id}/review`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ rating, reviewText }),
      })
      const result = await res.json()
      if (!res.ok) {
        throw new Error(result.message)
      }
      setLoading(false)
      toast.success("Successfully!")
    } catch (error) {
      setLoading(false)
      console.log(error);
      toast.error(error.message)
    }
  }
  return (
    <form action="">
      <div>
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4">
          How would you rate the overall experience?
        </h3>
        <div>
          {[...Array(5).keys()].map((item, index) => {
            index += 1
            return (
              <button
                key={index}
                type="button"
                className={`
            ${
              index <= rating || index <= hover
                ? "text-yellowColor"
                : "text-gray-400"
            } bg-transparent border-none outline-none text-[22px] cursor-pointer
            `}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
                onDoubleClick={() => {
                  setHover(0)
                  setRating(0)
                }}
              >
                <span>
                  <AiFillStar />
                </span>
              </button>
            )
          })}
        </div>
      </div>

      <div className="mt-[30px]">
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4">
          Share your feadback or suggestion*
        </h3>

        <textarea
          className="border border-solid border-[#0066ff34] focus:outline outline-primaryColor w-full px-4 py-3 rounded-md "
          rows="5"
          placeholder="Write your messages"
          onChange={(e) => setReviewText(e.target.value)}
        ></textarea>
        <button
          disabled={loading && true}
          className="btn"
          type="submit"
          onClick={handleSubmit}
        >
          {loading ? <HashLoader size={35} /> : "Submit Feadback"}
        </button>
      </div>
    </form>
  )
}
