import React from "react";

function Landing_Middle_Section() {
  return (
    <div className="flex flex-col-reverse sm:flex-row justify-center gap-24 pl-4 md:px-8 lg:px-32 py-8">
      <div className="flex flex-col justify-start gap-14 py-16">
        <h2 className="xl:text-4xl lg:text-3xl md:text-2xl text-lg montserrat-bold text-[#BB4430]">
          How It Works
        </h2>
        <div className="flex flex-col gap-14">
          <div className="flex flex-col gap-3">
            <h2 className="xl:text-4xl lg:text-3xl md:text-2xl text-lg montserrat-bold text-[#BB4430]">
              1
            </h2>
            <h2 className="lg:text-xl md:text-lg text-base montserrat-medium">
              Tell us about your location, budget,
              <br /> and preferences
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="xl:text-4xl lg:text-3xl md:text-2xl text-lg montserrat-bold text-[#BB4430]">
              2
            </h2>
            <h2 className="lg:text-xl md:text-lg text-base montserrat-medium">
              Our smart algorithm helps you find matches based on compatibility
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="xl:text-4xl lg:text-3xl md:text-2xl text-lg montserrat-bold text-[#BB4430]">
              3
            </h2>
            <h2 className="lg:text-xl md:text-lg text-base montserrat-medium">
              Match, chat, and move in together
            </h2>
          </div>
        </div>
      </div>
      <div className="flex justify-center md:justify-start items-center">
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
