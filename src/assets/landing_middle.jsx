import React from "react";

function Landing_Middle_Section() {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12">
      <div className="flex flex-col gap-10 justify-around py-16 px-16">
        <h2 className="lg:text-5xl md:text-3xl text-xl montserrat-bold text-[#BB4430]">
          How It Works
        </h2>
        <div className="flex flex-col gap-14">
          <div className="flex flex-col gap-3">
            <h2 className="lg:text-5xl md:text-3xl text-xl montserrat-bold text-[#BB4430]">
              1
            </h2>
            <h2 className="lg:text-2xl md:text-xl text-lg montserrat-medium">
              Tell us about your location, budget,
              <br /> and preferences
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="lg:text-5xl md:text3xl text-xl montserrat-bold text-[#BB4430]">
              2
            </h2>
            <h2 className="lg:text-2xl md:text-xl text-lg montserrat-medium">
              Our smart algorithm helps you find matches based on compatibility
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="lg:text-5xl md:text-3xl text-xl montserrat-bold text-[#BB4430]">
              3
            </h2>
            <h2 className="lg:text-2xl md:text-xl text-lg montserrat-medium">
              Match, chat, and move in together
            </h2>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
 <video
          src="./images/housematesAppVideo.mp4" // or use {demoVideo} if imported
          className="rounded-2xl w-full max-w-md"
          autoPlay
          loop
          muted
          onMouseEnter={e => e.currentTarget.pause()}
          onMouseLeave={e => e.currentTarget.play()}
        />
      </div>
    </div>
  );
}

export default Landing_Middle_Section;
