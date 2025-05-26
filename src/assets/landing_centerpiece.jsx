import React from "react";

function Landing() {
  return (
    <div className="flex flex-col gap-12 mt-12">
      <h1 className="montserrat-bold lg:text-6xl md:text-4xl sm:text-2xl text-xl text-center">
        Skip the hunt
        <br />
        Match with your housemate
      </h1>
      <div className="w-full flex justify-center items-center">
        <img
          className="w-1/2"
          src="./images/landing_image.svg"
          alt="image of three keys hanging on a key holder, symbolic of how housemates will help you find perfect partners to share your home with"
        />
      </div>
      <p className="monstserrat-medium lg:text-3xl md:text-2xl sm:text-lg text-md text-center">
        No more random housemates! Find a compatible housemate
        <br /> who shares your lifestyle preferences and vibe 👀
      </p>
      <div className="flex justify-center items-center">
        <button
          className="bg-[#BB4430] p-4 rounded-3xl text-white font-bold montserrat-bold lg:text-4xl md:text-2xl text-xl cursor-pointer border-2 border-[#BB4430] transition-all duration-300
        hover:bg-white hover:text-[#BB4430] hover:scale-110 hover:border-[#BB4430] z-10"
        >
          Join our Crib
        </button>
      </div>
    </div>
  );
}

export default Landing;
