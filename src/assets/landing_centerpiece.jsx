import React from "react";

function Center(){
    return <div className="flex flex-col gap-12 px-[400px] py-[100px] justify-center items-center">
        <div className="flex flex-col gap-5 justify-center items-center">
            <h1 className="text-5xl montserrat-extra-bold leading-relaxed flex justify-center items-center text-center">Skip the hunt<br/>Match with your Housemate!</h1>
        <p className="montserrat-medium leading-relaxed text-2xl text-center">No more random housemates! Find a compatible<br/> housemate who shares your lifestyle preferences and vibe 👀</p>
        </div>
        <button className="bg-[#BB4430] montserrat-bold text-2xl text-white rounded-xl p-4">Join our crib!</button>
    </div>
}

export default Center;