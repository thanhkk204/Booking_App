import React from "react"
import heroImg1 from "../assets/images/hero-img01.png"
import heroImg2 from "../assets/images/hero-img02.png"
import heroImg3 from "../assets/images/hero-img03.png"
import icon01 from "../assets/images/icon01.png"
import icon02 from "../assets/images/icon02.png"
import icon03 from "../assets/images/icon03.png"
import { BsArrowRight } from "react-icons/bs"
import { Link } from "react-router-dom"
import AboutSection from "../components/AboutSection"
import ServiceList from "../components/services/ServiceList"
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
              Lorem ipsum dolor sit amet, consectetur adipisicing assumenda minima dolorum.
              </p>
          </div>
          <ServiceList />
        </div>
       </section>
      {/* End Services section */}
    </>
  )
}
