
// Parent Landing component with two-way communication
import React, { useState } from "react";
import Nav from "./navbar.jsx"
import Centerpiece from "./landing_centerpiece.jsx";
import Midpage from "./landing_middle.jsx";
import LowerMiddle from "./landing_bottom_middle.jsx";
import Footer from "./parts/footer.jsx";

function Landing() {    
    return (
        <div className="">
            <Nav/>
            <Centerpiece/>
            <Midpage/>
            <LowerMiddle/>
            <Footer/>
        </div>
    );
}

export default Landing;
