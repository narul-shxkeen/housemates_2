
// Parent Landing component with two-way communication
import React, { useState } from "react";
import Centerpiece from "./landing_centerpiece.jsx";
// import Midpage from "./landing_2.jsx";

function Landing() {    
    return (
        <div className="min-h-screen">
            <Centerpiece/>
            {/* <Midpage/> */}
        </div>
    );
}

export default Landing;
