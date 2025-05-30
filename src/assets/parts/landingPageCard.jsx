import React from "react";

function Card({ title, text, image_url }) {
  return (
    <div className="bg-white rounded-2xl shadow-[0_0_20px_#e6a89d]
 flex flex-col items-center md:w-[263px] md:h-[357px] lg:w-[300px] lg-h-[400px] overflow-hidden">
      <h3 className="text-[#BB4430] w-full px-6 font-bold lg:text-xl md:text-lg text-base mb-2 mt-6 montserrat-bold text-left">{title}</h3>
      <p className="text-base mb-4 mx-6 montserrat-medium">{text}</p>
      <div className='flex w-full h-full justify-end relative'><img
        src={image_url}
        alt={title}
        className="w-[60%] h-[60%] object-cover mt-auto relative"
      />
      </div>
    </div>
  );
}

export default Card;