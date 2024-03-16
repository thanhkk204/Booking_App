import React from "react"
import PatientAvatar from "../assets/images/patient-avatar.png"
import { HiStar } from "react-icons/hi"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

// import required modules
import { Pagination } from "swiper/modules"

export default function Testimonial() {
  return (
    <>
      <Swiper
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        modules={[Pagination]}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <div className="">
          <div className="pt-[30px] px-5 rounded-3 flex gap-4">
            <div className="flex items-center gap-[13px]">
              <img src={PatientAvatar} alt="" />
            </div>
            <div>
              <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                Lê Huy Thanh
              </h4>
              <div className="flex items-center gap-[2px]">
                <HiStar className="text-yellowColor w-[18px] h-5" />
                <HiStar className="text-yellowColor w-[18px] h-5" />
                <HiStar className="text-yellowColor w-[18px] h-5" />
                <HiStar className="text-yellowColor w-[18px] h-5" />
                <HiStar className="text-yellowColor w-[18px] h-5" />
              </div>
            </div>
          </div>
          <p className="text-[16px] px-5 leading-7 mt-4 text-textColor font-[400]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga vero
            voluptatibus inventore maiores cum provident eius officiis velit,
            laborum, hic dol
          </p>
          </div>
          </SwiperSlide>
        <SwiperSlide>
          <div className="">
          <div className="pt-[30px] px-5 rounded-3 flex gap-4">
            <div className="flex items-center gap-[13px]">
              <img src={PatientAvatar} alt="" />
            </div>
            <div>
              <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                Phạm Văn Tài
              </h4>
              <div className="flex items-center gap-[2px]">
                <HiStar className="text-yellowColor w-[18px] h-5" />
                <HiStar className="text-yellowColor w-[18px] h-5" />
                <HiStar className="text-yellowColor w-[18px] h-5" />
                <HiStar className="text-yellowColor w-[18px] h-5" />
                <HiStar className="text-yellowColor w-[18px] h-5" />
              </div>
            </div>
          </div>
          <p className="text-[16px] px-5 leading-7 mt-4 text-textColor font-[400]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga vero
            voluptatibus inventore maiores cum provident eius officiis velit,
            laborum, hic dol
          </p>
          </div>
          </SwiperSlide>
        <SwiperSlide>
          <div className="">
          <div className="pt-[30px] px-5 rounded-3 flex gap-4">
            <div className="flex items-center gap-[13px]">
              <img src={PatientAvatar} alt="" />
            </div>
            <div>
              <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                Nguyễn Thị Lung Linh
              </h4>
              <div className="flex items-center gap-[2px]">
                <HiStar className="text-yellowColor w-[18px] h-5" />
                <HiStar className="text-yellowColor w-[18px] h-5" />
                <HiStar className="text-yellowColor w-[18px] h-5" />
                <HiStar className="text-yellowColor w-[18px] h-5" />
                <HiStar className="text-yellowColor w-[18px] h-5" />
              </div>
            </div>
          </div>
          <p className="text-[16px] px-5 leading-7 mt-4 text-textColor font-[400]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga vero
            voluptatibus inventore maiores cum provident eius officiis velit,
            laborum, hic dol
          </p>
          </div>
          </SwiperSlide>
        <SwiperSlide>
          <div className="">
          <div className="pt-[30px] px-5 rounded-3 flex gap-4">
            <div className="flex items-center gap-[13px]">
              <img src={PatientAvatar} alt="" />
            </div>
            <div>
              <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                Phạm Thị Thanh Nhàn
              </h4>
              <div className="flex items-center gap-[2px]">
                <HiStar className="text-yellowColor w-[18px] h-5" />
                <HiStar className="text-yellowColor w-[18px] h-5" />
                <HiStar className="text-yellowColor w-[18px] h-5" />
                <HiStar className="text-yellowColor w-[18px] h-5" />
                <HiStar className="text-yellowColor w-[18px] h-5" />
              </div>
            </div>
          </div>
          <p className="text-[16px] px-5 leading-7 mt-4 text-textColor font-[400]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga vero
            voluptatibus inventore maiores cum provident eius officiis velit,
            laborum, hic dol
          </p>
          </div>
          </SwiperSlide>
      </Swiper>
    </>
  )
}
