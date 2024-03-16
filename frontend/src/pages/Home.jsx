import React from "react"
import heroImg1 from "../assets/images/hero-img01.png"
import heroImg2 from "../assets/images/hero-img02.png"
import heroImg3 from "../assets/images/hero-img03.png"
import icon01 from "../assets/images/icon01.png"
import icon02 from "../assets/images/icon02.png"
import icon03 from "../assets/images/icon03.png"
import featureImg from "../assets/images/feature-img.png"
import videoIcon from "../assets/images/video-icon.png"
import avatarIcon from "../assets/images/avatar-icon.png"
import faqImg from "../assets/images/faq-img.png"
import { BsArrowRight } from "react-icons/bs"
import { Link } from "react-router-dom"
import AboutSection from "../components/AboutSection"
import ServiceList from "../components/services/ServiceList"
import DoctorList from "../components/doctors/DoctorList"
import FaqList from "../components/faq/FaqList"
import Testimonial from "../components/Testimonial"
export default function Home() {
  return (
    <>
      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* =============hero content============ */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  We help patients live healthy, longer live
                </h1>
                <p className="text__para">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Reprehenderit provident aspernatur quasi quaerat nobis quidem
                  praesentium perferendis alias similique officia? Reprehenderit
                  rem ullam deserunt non perferendis maiores est repellat odio.
                </p>
                <button className="btn">Request an appointment</button>
              </div>
              {/* ==========hero counter=========== */}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] font-[700] text-headingColor">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px] lg:mt-[-10px]"></span>
                  <p className="text__para">Years of experience</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] font-[700] text-headingColor">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px] lg:mt-[-10px]"></span>
                  <p className="text__para">Clinic location</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] font-[700] text-headingColor">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px] lg:mt-[-10px]"></span>
                  <p className="text__para">Patient satisfaction</p>
                </div>
              </div>
            </div>
            {/* ===========hero content=============== */}
            <div className="flex justify-end gap-[30px]">
              <div>
                <img src={heroImg1} alt="" className="w-full" />
              </div>
              <div>
                <img src={heroImg2} alt="" className="my-[30px]" />
                <img src={heroImg3} alt="" className="my-[30px]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="w-full lg:w-[470px] mx-auto ">
            <h2 className="heading text-center">
              Providing best madical services
            </h2>
            <p className="text__para text-center">
              World-class care for everyone. Our health system offers unmatched
              exprt health care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[50px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>
              <div className="mt-[30px] ">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a doctor
                </h2>
                <p className="text-[16px] leading-9 text-textColor font-[400] text-center mt-4">
                  World-class care for everyone. Our health system offers
                  matched expert health care. From the lab to the clinic
                </p>
                <Link
                  to={"/"}
                  className="w-11 h-11 rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center hover:bg-primaryColor hover:border-none group"
                >
                  <BsArrowRight className="w-6 h-6 group-hover:text-white" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>
              <div className="mt-[30px] ">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a local
                </h2>
                <p className="text-[16px] leading-9 text-textColor font-[400] text-center mt-4">
                  World-class care for everyone. Our health system offers
                  matched expert health care. From the lab to the clinic
                </p>
                <Link
                  to={"/"}
                  className="w-11 h-11 rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center hover:bg-primaryColor hover:border-none group"
                >
                  <BsArrowRight className="w-6 h-6 group-hover:text-white" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>
              <div className="mt-[30px] ">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find an appointment
                </h2>
                <p className="text-[16px] leading-9 text-textColor font-[400] text-center mt-4">
                  World-class care for everyone. Our health system offers
                  matched expert health care. From the lab to the clinic
                </p>
                <Link
                  to={"/"}
                  className="w-11 h-11 rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center hover:bg-primaryColor hover:border-none group"
                >
                  <BsArrowRight className="w-6 h-6 group-hover:text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About hero section */}
      <AboutSection />
      {/*End About hero section */}
      {/* Services section */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Medical Services</h2>
            <p className="text__para text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing assumenda
              minima dolorum.
            </p>
          </div>
          <ServiceList />
        </div>
      </section>
      {/* End Services section */}

      {/* Featured section */}
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Get Vitual Treatment <br />
                Any Time
              </h2>
              <ul className="pl-4 leading-9">
                <li className="text__para">
                  1.Schechule the appointment directly.
                </li>
                <li className="text__para">
                  2.voluptate nemo adipisci nulla perspiciatis ad aliquam! Illo
                  ratione accusantium maiores?
                </li>
                <li className="text__para">
                  3. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Ea, beatae
                </li>
              </ul>
              <Link to={"/"}>
                <button className="btn">Learn more</button>
              </Link>
            </div>
            
            <div className="relative z-10 lg:w-[770px] flex justify-end mt-[50px] lg:mt-0">
            <img src={featureImg} alt="" className="w-3/4" />
              
              <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 
              md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pd-[26px] rounded-[10px]">
                 <div className="flex items-center justify-center">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                      true , 24
                    </p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">
                      10: 10AM
                    </p>
                    <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[16px] lg:py-3 lg:px-[9px]">
                      <img src={videoIcon} alt="" />
                    </span>
                  </div>
                </div>
                <div className="w-[65px] lg:w-[96px] bg-[#ccf0f3] py-1 px-2 lg:py-[6px] lg;px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">
                  Consulation
                </div>
                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img src={avatarIcon} alt="" />
                  <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor ">
                    Wayne Collins
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Featured section */}
      {/* Doctors section */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Greate Doctor</h2>
            <p className="text__para text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
              aspernatur ex, temporibus praesentium eligendi
            </p>
          </div>
        <DoctorList />
        </div>
      </section>
      {/* End Doctors section */}
      {/* Faq section */}
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
                <div className="w-1/2 hidden md:block">
                  <img src={faqImg} alt="" />
                </div>
                <div className="w-full md:w-1/2">
                 <h2 className="heading">Most Questions By Our Patients</h2>
                 <FaqList/>
                </div>
          </div>
        </div>
      </section>
      {/* End Faq section */}
       {/* Testination */}
       <section>
        <div className="container overflow-hidden">
        <div className="lg:w-[570px] mx-auto">
            <h2 className="heading text-center">
              What Our patients say
            </h2>
            <p className="text__para text-center">
              World-class care for everyone. Our health system offers unmatched
              exprt health care
            </p>
          </div>
          <Testimonial/>
        </div>
      </section>
      {/* Testination */}
    </>
  )
}
