import React from "react";

function Landing() {
  return (
    <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 mt-8 sm:mt-12 px-4 sm:px-6 md:px-12">
      <h1 className="montserrat-bold text-balance text-center text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl leading-snug">
        Skip the hunt
        <br />
        Match with your housemate
      </h1>

      <div className="w-full flex justify-center items-center">
        <img
          className="w-full max-w-md sm:max-w-lg md:max-w-2xl"
          src="./images/landing_image.svg"
          alt="Three keys hanging on a key holder, symbolizing housemates helping find perfect partners."
        />
      </div>

      <p className="monstserrat-medium text-center text-base sm:text-md md:text-lg lg:text-xl xl:text-2xl leading-relaxed">
        No more random housemates! Find a compatible housemate
        <br className="hidden sm:block" /> who shares your lifestyle preferences and vibe
      </p>

      <div className="flex justify-center items-center">
        <button
          className="bg-[#BB4430] px-6 py-3 sm:px-8 sm:py-4 sm:rounded-3xl rounded-xl text-white font-bold montserrat-bold text-base sm:text-xl md:text-2xl lg:text-4xl cursor-pointer border-2 border-[#BB4430] transition-all duration-300 hover:bg-white hover:text-[#BB4430] hover:scale-110"
        >
          Join our Crib
        </button>
      </div>
    </div>
  );
}

export default Landing;
