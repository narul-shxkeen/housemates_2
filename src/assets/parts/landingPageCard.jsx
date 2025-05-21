import React from "react";

function Card({ title, text, image_url }) {
  return (
    <div className="bg-white rounded-2xl shadow-[#e6a89d] shadow-xl border-1 border-[#BB4430] flex flex-col items-center md:w-[263px] md:h-[357px] lg:w-[300px] lg-h-[400px] overflow-hidden">
      <h3 className="text-[#BB4430] font-bold text-2xl mb-2 mt-6 mx-6 montserrat-bold">{title}</h3>
      <p className="text-base mb-4 mx-6 montserrat-medium">{text}</p>
      <div className='flex w-full h-full justify-end relative'><img
        src={image_url}
        alt={title}
        className="w-[60%] h-[60%] object-cover rounded-xl mt-auto relative left-[20px]"
      />
      </div>
    </div>
  );
}

export default Card;