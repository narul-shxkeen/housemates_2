import React, { useRef } from "react";
import AnimatedText from "./animated_text";
import { motion, useScroll, useTransform } from "framer-motion";

function Center() {
  return (
    <div className="flex gap-0 overflow-x-hidden w-full min-h-[100vh]">
      {/* Phone Container */}
      <div className="relative w-4/12 z-[1000]">
        <img
          src="./images/iphone_frame.svg"
          className="absolute h-full w-full object-contain"
          alt="Phone"
        />
        {/* Text inside phone */}
        <div className="relative xl:top-[15%] lg:top-[23%] md:top-[30%] top-[33%] left-1/2 transform -translate-x-1/2 w-[80%] text-center">
          <h4 className="montserrat-medium xl:text-2xl md:text-xl sm:text-lg text-md text-[#BB4430] leading-snug">
            Skip the hunt
            <br />
            Match with your Housemate
          </h4>
        </div>
        {/* Key below text */}
        <img
          src="./images/key_full.png"
          className="absolute xl:top-[28%] lg:top-[36%] md:top-[43%] top-[44%] left-1/2 w-[45vw] transform -translate-x-1/4 max-w-none"
          alt="Key"
        />
      </div>

      {/* Content Section */}
      <div className="relative w-8/12 h-[100vh] z-0 flex flex-col justify-center items-center z-10">
  {/* Logo at top right */}
  <div className="absolute top-3 right-2">
    <img src="./images/hm_logo.svg" alt="logo" className="z-10" />
  </div>
  {/* Centered content */}
  <div className="flex flex-col items-center gap-6 w-full max-w-full">
    <AnimatedText className="" />
    <button
      className="bg-[#BB4430] p-3 rounded-xl text-white font-bold montserrat-bold lg:text-2xl md:text-xl text-lg cursor-pointer border-2 border-[#BB4430] transition-all duration-300
        hover:bg-white hover:text-[#BB4430] hover:scale-110 hover:border-[#BB4430]"
    >
      Join our Crib
    </button>
  </div>
  {/* Arrow at bottom right */}
  <div className="flex gap-1 justify-center items-center fixed bottom-3 right-2">
    <p className="montserrat-regular text-[#BB4430] text-lg pb-3 pr-1">
      Scroll Down
    </p>
    <motion.img
      className="w-[15px]"
      src="./images/arrow.svg"
      alt="Scroll arrow"
      initial={{ y: 0 }}
      animate={{ y: [0, -15, 0, -10, 0, -5, 0] }}
      transition={{
        duration: 1.2,
        times: [0, 0.2, 0.4, 0.6, 0.8, 0.9, 1],
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 3,
      }}
    />
  </div>
</div>
    </div>
  );
}

export default Center;
