import React from "react";
import { useEffect, useState } from "react";

function Landing_Middle_Section() {
   const [isDesktop, setIsDesktop] = useState(true);

    useEffect(() => {
    const updateMedia = () => {
      setIsDesktop(window.innerWidth >= 600); // Tailwind's `md` breakpoint
    };
    updateMedia();
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return (
    <div className="flex flex-col-reverse sm:flex-row justify-center items-center sm:gap-24 px-0 md:px-8 lg:px-32 py-0 mt-8">
      <div className="flex flex-col sm:justify-start items-center w-full sm:items-start justify-center gap-14 py-16">
        <h2 className="xl:text-4xl lg:text-3xl md:text-2xl text-lg montserrat-bold text-[#BB4430]">
          How It Works
        </h2>
        <div className="flex flex-col gap-14">
          <div className="flex flex-col gap-3">
            <h2 className="xl:text-4xl lg:text-3xl md:text-2xl text-lg text-center sm:text-left montserrat-bold text-[#BB4430]">
              1
            </h2>
            <h2 className="lg:text-xl md:text-lg text-base text-center sm:text-left montserrat-medium">
              Tell us about your location, budget,
              <br /> and preferences
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="xl:text-4xl lg:text-3xl md:text-2xl text-lg text-center sm:text-left montserrat-bold text-[#BB4430]">
              2
            </h2>
            <h2 className="lg:text-xl md:text-lg text-base montserrat-medium text-center sm:text-left">
              Our smart algorithm helps you find matches based on compatibility
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="xl:text-4xl lg:text-3xl md:text-2xl text-lg text-center sm:text-left montserrat-bold text-[#BB4430]">
              3
            </h2>
            <h2 className="lg:text-xl md:text-lg text-base montserrat-medium text-center sm:text-left">
              Match, chat, and move in together
            </h2>
          </div>
        </div>
      </div>
       <div className="flex justify-center md:justify-start items-center">
      <video
        src="./images/housematesAppVideo.mp4"
        className="rounded-2xl sm:w-full max-w-[30vw]"
        autoPlay
        loop
        muted
        playsInline
        onMouseEnter={isDesktop ? (e) => e.currentTarget.pause() : undefined}
        onMouseLeave={isDesktop ? (e) => e.currentTarget.play() : undefined}
      />
    </div>
    </div>
  );
}

export default Landing_Middle_Section;
