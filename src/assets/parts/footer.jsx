import React from "react";

function Footer() {
  return (
    <div>
      <hr className="bg-[#D9D9D9] mb-4" />
      <div className="flex sm:justify-between justify-center px-10 flex-wrap gap-7">
        <div className="flex justify-center items-center gap-4">
          <h3 className="monstserrat-medium tracking-wide lg:text-xl md:text-lg text-md ">
            @ 2025 Housemates, Inc
          </h3>
          <p className="lg:text-xl md:text-lg text-md">|</p>
          <button className="cursor-pointer">
            <h3 className="monstserrat-medium tracking-wide lg:text-xl md:text-lg text-md">
              Contact Us
            </h3>
          </button>
        </div>

        <div className="flex justify-between">
          <div className="flex justify-center items-center gap-4">
            <a className="flex gap-2 justify-center items-center"
                         target="_blank"
              rel="noopener noreferrer"
            href="https://www.instagram.com/housemates.live/?igsh=ZTdkZWh5Y2k2Ym8z#"
            >
              <img
                className="h-[60px] w-[60px]"
                src="./images/instagram.svg"
                alt="image of instagram logo of housemates, the perfect website to find a flatmate and rentmate."
              />
              <h3 className="monstserrat-medium text-[#BB4430] tracking-wide lg:text-xl md:text-lg text-md">
                Instagram
              </h3>
            </a>
            <a className="flex gap-2 justify-center items-center" >
              <img
                className="h-[40px] w-[40px]"
                src="./images/linkdin.svg"
                alt="image of instagram logo of housemates, the perfect website to find a flatmate and rentmate."
              />
              <h3 className="monstserrat-medium text-[#BB4430] tracking-wide lg:text-xl md:text-lg text-md">
                LinkdIn
              </h3>
            </a>
            <button
              className="bg-[#BB4430] p-2 rounded-lg text-white font-bold montserrat-bold lg:text-xl md:text-lg text-md cursor-pointer border-2 border-[#BB4430] transition-all duration-300
        hover:bg-white hover:text-[#BB4430] hover:scale-110 hover:border-[#BB4430]"
            >
              Join our Crib
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
