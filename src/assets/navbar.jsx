import React from "react";

function Nav() {
  return (
    <div>
      <div className="flex justify-between p-2 sm:p-4 items-center gap-4 sm:gap-0">
        {/* Logo - responsive sizing */}
        <img
          src="./images/hm_logo.svg"
          alt="Image of the housemates logo"
          className="md:w-auto w-1/3 mb-3 sm:mb-0"
        />

        {/* Action bar - responsive layout */}
        <div className="bg-[#BB4430] flex p-2 sm:p-3 gap-3 sm:gap-4 items-center rounded-xl sm:rounded-2xl md:w-auto xs:w-1/4">
          {/* Waitlist button - responsive text size */}
          <button
            className="montserrat-bold text-lg sm:text-xl md:text-2xl text-white p-1 sm:p-2 text-center flex items-center justify-center hover:bg-white hover:text-[#BB4430] transform hover:scale-105 transition-all duration-300 ease-in-out border-2 border-transparent hover:border-white rounded-lg w-full sm:w-auto"
          >
            Join the Waitlist
          </button>

          {/* Divider - hidden on extra small screens */}
          <h2 className="hidden sm:flex text-white montserrat-bold text-2xl md:text-4xl items-center justify-center">
            |
          </h2>

          {/* Social icons - responsive layout */}
          <div className="flex gap-4 sm:gap-3 md:gap-4 items-center">
            <a
              href="https://www.instagram.com/housemates.live/?igsh=ZTdkZWh5Y2k2Ym8z#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./images/instagram2.svg"
                alt="Logo of instagram"
                className="w-7 md:w-auto cursor-pointer transform hover:scale-125 transition-all duration-300 ease-in-out"
              />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <img
                src="./images/linkdin2.svg"
                alt="Logo of linkdin"
                className="w-7 md:w-auto cursor-pointer transform hover:scale-125 transition-all duration-300 ease-in-out"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Horizontal line */}
      <hr className="bg-[#BB4430] h-0.5 mx-2 sm:mx-4 border-0 rounded mt-2 sm:mt-0" />
    </div>
  );
}

export default Nav;
