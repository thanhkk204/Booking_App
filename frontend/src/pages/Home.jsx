import React from "react"
import heroImg1 from "../assets/images/hero-img01.png"
import heroImg2 from "../assets/images/hero-img02.png"
import heroImg3 from "../assets/images/hero-img03.png"
export default function Home() {
  return (
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
  )
}
