import React from "react";

function Footer() {
  return (
    <div>
      <hr className="bg-[#e7988a] mb-4 border-1 border-[#e7988a] opacity-50" />
      <div className="flex sm:justify-between justify-center px-10 flex-wrap gap-0 sm:gap-3">
        <div className="flex justify-center items-center gap-4">
          <h3 className="monstserrat-medium tracking-wide lg:text-lg md:text-base text-sm ">
            @ 2025 Housemates, Inc
          </h3>
          <p className="lg:text-lg md:text-base text-sm">|</p>
   <a
  href="mailto:housemates.live@gmail.com"
  className="cursor-pointer"
>
  <h3 className="monstserrat-medium tracking-wide lg:text-lg md:text-base text-sm">
    Contact Us
  </h3>
</a>
        </div>

        <div className="flex justify-between">
          <div className="flex justify-center items-center gap-4">
            <a className="flex gap-2 justify-center items-center"
                         target="_blank"
              rel="noopener noreferrer"
            href="https://www.instagram.com/housemates.live/?igsh=ZTdkZWh5Y2k2Ym8z#"
            >
              <img
                className="h-[40px] w-[40px] sm:h-[60px] sm:w-[60px]"
                src="./images/instagram.svg"
                alt="image of instagram logo of housemates, the perfect website to find a flatmate and rentmate."
              />
   
            </a>
            <a className="flex gap-2 justify-center items-center"
            href="https://www.linkedin.com/company/housemates-live/"
                       target="_blank"
              rel="noopener noreferrer" >
              <img
                className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px]"
                src="./images/linkdin.svg"
                alt="image of instagram logo of housemates, the perfect website to find a flatmate and rentmate."
              />
        
            </a>
            {/* <button
              className="bg-[#BB4430] p-2 rounded-lg text-white font-bold montserrat-bold lg:text-lg md:text-base text-sm cursor-pointer border-2 border-[#BB4430] transition-all duration-300
        hover:bg-white hover:text-[#BB4430] hover:scale-110 hover:border-[#BB4430]"
            >
              Join our Crib
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
