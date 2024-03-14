import React from "react"
import aboutImg from "../assets/images/about.png"
import aboutCardImg from "../assets/images/about-card.png"
import { Link } from "react-router-dom"
export default function AboutSection() {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          {/* About image */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={aboutImg} alt="" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
              <img src={aboutCardImg} alt="" />
            </div>
          </div>
          {/* About content */}
          <div className="w-full order-1 lg:order-2 lg:w-1/2 xl:w-[670px] ">
            <h2 className="heading">Proud to be one of the nations best</h2>
            <p className="text__para">
              for 30 years in a row , U.S News & World Report has recongnized us
              as one of the best publics hospitals in the Nation and #1 in
            </p>
            <p className="text__para mt-[30px]">
              Our best is someethinf we strive for each day . caring for our
              patients-not looking back at what we accomplised but towords what
              we can do tomorrow . Providing the best. Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Quis perspiciatis suscipit
              neque sed ratione illo quos incidunt. Animi labore itaque ipsum
              distinctio accusantium. Quos, ratione? Necessitatibus eos sequi
              nulla fugiat!
            </p>
            <Link to={'/'}>
              <button className="btn">Learn more</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
