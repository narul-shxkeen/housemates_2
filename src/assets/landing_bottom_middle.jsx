import React from "react";
import Card from "./parts/landingPageCard";

function LowerMiddle() {
  return (
    <div className="flex flex-col gap-12 mb-10">
<div
  className="relative py-28 sm:w-[100vw] z-10 flex items-center justify-center 
             bg-[url('/images/pattern.png')] bg-repeat"
>
<button
  className="shadow-[0_0_30px_40px_white] z-50 bg-[#BB4430] p-4 rounded-3xl text-white font-bold montserrat-bold 
             lg:text-4xl md:text-2xl text-xl cursor-pointer border-2 border-[#BB4430] 
             transition-all duration-300 hover:bg-white hover:text-[#BB4430] hover:scale-110 hover:border-[#BB4430]"
>
  Join our Crib
</button>

</div>

      <div className="flex justify-around items-center flex-wrap gap-6 px-12 sm:px-6">
        <Card
          title="Match Made in (Housemate) Heaven"
          text="We match you with people who share your lifestyle and preferences"
          image_url="./images/landing/Handshake.svg"
        />
        <Card
          title="No More Random DMs"
          text="Skip the social media hunt! We bring compatible housemates to you"
          image_url="./images/landing/Unavailable.png"
        />
        <Card
          title="Your Number, Your Rules"
          text="Your contact stays private until you match"
          image_url="./images/landing/phone_bubble.png"
        />
        <Card
          title="Real People Only"
          text="All profiles are verified. No fakes, no outdated listings"
          image_url="./images/landing/Calling.png"
        />
      </div>
    </div>
  );
}

export default LowerMiddle;
