import React from "react";
import HeroPng from "../../assets/hero.png";
// import { motion } from "framer-motion";
// import { SlideUp } from "../../animation/animate";

const Hero = () => {
  return (
    <>
    <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[600px] gap-10">
          {/* Text section */}
          <div className="flex flex-col justify-center gap-7 md:pr-8 xl:pr-52 text-center md:text-left pt-20 md:pt-0 px-10">
            <h1 className="text-4xl font-bold font-serif uppercase">
            Formed by Design
            Defined by Feeling
            </h1>
            <p className="text-sm md:text-base text-gray-500 leading-7 font-serif"
            >
              At Linéa Haus, design is more than how it looks.
We shape interiors that move you,
and make daily living feel effortlessly refined.
            </p>
            <div className="space-x-4">
              <button
                // variants={SlideUp(0.8)}
                // initial="initial"
                // animate="animate"
                className="primary-btn uppercase bg-black text-white shadow-[5px_5px_0px_0px_#6c6c6c]"
              >
                Get started
              </button>
              <button
                // variants={SlideUp(1.1)}
                // initial="initial"
                // animate="animate"
                className="primary-btn uppercase"
              >
                Contact Us
              </button>
            </div>
          </div>
          {/* Images section */}
          <div className="flex flex-col items-center justify-center ">
            <img
            //   initial={{ x: 100, opacity: 0 }}
            //   animate={{ x: 0, opacity: 1 }}
            //   transition={{ duration: 0.5, delay: 0.5 }}
              src={HeroPng}
              alt=""
              className="w-[80%] md:w-[700px] object-cover "
            />
          </div>
        </div>
      </div>
    </>
)
}

export default Hero;