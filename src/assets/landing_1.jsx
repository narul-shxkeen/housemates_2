
// Parent Landing component with two-way communication
import React, { useState } from "react";
import Centerpiece from "./landing_centerpiece.jsx";

function Landing() {    
    return (
        <div className="min-h-screen">
            <Centerpiece/>
        </div>
    );
}

export default Landing;
