import React from "react";
import AnimatedText from "./animated_text";

function Center() {
  return (
    <section className="relative w-full min-h-screen bg-white">
      {/* Phone Container */}
      <div className="relative w-full lg:w-4/12 h-[800px] mx-auto lg:mx-0 lg:ml-[8%] mt-20 lg:mt-0">
        {/* Phone Frame */}
        <img
          src="./images/iphone_frame.svg"
          className="w-full h-full object-contain absolute bg-[#F0ECE3] rounded-[100px] border-white"
          alt="Phone"
        />
        
        {/* Text Overlay */}
        <div className="absolute top-[25%] left-1/2 transform -translate-x-1/2 w-full px-4">
          <h4 className="montserrat-bold text-2xl text-center text-[#BB4430]">
            Skip the hunt
            <br />
            Match with your Housemate
          </h4>
        </div>

        {/* Key Rings */}
        <div className="absolute top-[33%] left-1/2 -translate-x-1/2">
          <img
            className="absolute left-16 -scale-x-100"
            src="./images/key_ring.svg"
            alt="Key ring"
          />
          <img
            className="absolute right-16"
            src="./images/key_ring.svg"
            alt="Key ring"
          />
        </div>

        {/* Static Keys */}
        <div className="absolute top-[45%] left-1/2 -translate-x-1/2 w-full">
          {/* First Key */}
          <img
            className="absolute left-[10%] origin-center w-[300px]"
            style={{
              transform: "scale(0.05) rotate(220deg)",
              zIndex: 1001,
            }}
            src="./images/key_full.png"
            alt="image of a key"
          />

          {/* Second Key */}
          <img
            className="absolute right-[10%] origin-center w-[300px]"
            style={{
              transform: "scale(0.05) rotate(140deg)",
              zIndex: 1000,
            }}
            src="./images/key_full.png"
            alt="image of a key duplicate"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="relative lg:absolute lg:right-[8%] lg:top-1/2 lg:-translate-y-1/2 w-full lg:w-6/12 px-4 mt-8 lg:mt-0">
        <div className="flex flex-col items-center lg:items-end">
          <img 
            src="./images/hm_logo.svg" 
            alt="logo" 
            className="w-32 lg:w-48 mb-8"
          />
          <div className="w-full max-w-xl">
            <AnimatedText />
          </div>
          <div className="mt-12 flex items-center gap-2">
            <p className="montserrat-regular text-[#BB4430] text-lg">
              Scroll Down
            </p>
            <img
              className="w-[15px]"
              src="./images/arrow.svg"
              alt="image of an arrow pointing vertically downwards"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Center;