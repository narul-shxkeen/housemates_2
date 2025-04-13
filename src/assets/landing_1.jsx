import React from "react";
import Centerpiece from "./landing_centerpiece.jsx"

function Landing(){
    return <div>
        <div className="flex justify-between p-4 align-middle">
            <img src="./images/Group 4.svg" alt="Image of the housemates logo"/>
            <div className="bg-[#BB4430] flex p-3 gap-4 align-middle items-center rounded-2xl">
                <h2 className="montserrat-bold text-2xl text-white p-0 text-center align-middle flex items-center justify-center">Join the Waitlist</h2>
    <h2 className="text-white montserrat-bold text-4xl flex items-center justify-center">|</h2>
            <img src="./images/instagram.svg" alt="Logo of instagram"/>
            <img src="./images/linkdin.svg" alt="Logo of linkdin"/>
            </div>
           
        </div>
<hr className="bg-[#BB4430] h-0.5 mx-4 border-0 rounded"/>
<Centerpiece/>
    </div>
}

export default Landing;