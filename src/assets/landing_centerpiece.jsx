import React, { useRef } from "react";
import AnimatedText from "./animated_text";
import { motion, useScroll, useTransform } from "framer-motion";

function Center() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Common animations for both keys
  const keyScale = useTransform(scrollYProgress, [0, 1], [1, 0.05]);
  const keyWidth = useTransform(scrollYProgress, [0, 1], ["1000px", "300px"]);
  
  // Vertical movement control (downward animation)
  const verticalMovement = useTransform(scrollYProgress, 
    [0, 1], 
    ["20%", "45%"] // Moves from 20% to 40% from top
  );

  const horizontalMovement = useTransform(scrollYProgress, 
    [0, 1], 
    ["10%", "-40%"] // Moves from 20% to 40% from top
  );

  const horizontal1Movement = useTransform(scrollYProgress, 
    [0, 1], 
    ["10%", "10%"] // Moves from 20% to 40% from top
  );

  // Key rotations (different angles)
  const key1Rotate = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const key2Rotate = useTransform(scrollYProgress, [0, 1], [0, 140]);

  return (
    <div ref={containerRef} className="flex gap-0 overflow-x-hidden w-full min-h-[200vh]">
      {/* Phone Container */}
      <div className="fixed left-0 top-0 w-4/12 lg:h-screen p-4 z-[1500]">
        <img 
          src="./images/iphone_frame.svg" 
          className="w-full h-full object-contain absolute"
          alt="Phone"
        />
        <div className="relative top-32 left-2">
  <h4 className="montserrat-bold text-2xl text-center text-[#BB4430]">Skip the hunt<br/>Match with your Housemate</h4>
</div>
<motion.img
    className="absolute left-[320px] top-[33%] z-2000"
    style={{ transform: "scaleX(-1)" }}
    src="./images/key_ring.svg"
    alt="image of a key ring that is attached to the key in the iphone screen"
    />
        <motion.img
    className="absolute left-[263px] top-[33%] z-2000"
    style={{}}
    src="./images/key_ring.svg"
    alt="image of a key ring that is attached to the key in the iphone screen"
    />
      </div>

      {/* Double Keys Container */}
      <div className="fixed top-0 w-4/12 h-screen p-4 z-[999]">
        {/* First Key */}
        <motion.img 
          className="absolute w-[1000px] origin-center"
          style={{
            top: verticalMovement,
            left: horizontalMovement,
            scale: keyScale,
            width: keyWidth,
            rotate: key1Rotate,
            zIndex: 1001,
            maxWidth: "none",
          }}
          src="./images/key_full.png" 
          alt="image of a key"
        />

        {/* Second Key */}
        <motion.img 
          className="absolute w-[1000px] origin-center"
          style={{
            top: verticalMovement,
            left: horizontal1Movement,
            scale: keyScale,
            width: keyWidth,
            rotate: key2Rotate,
            zIndex: 1000,
            maxWidth: "none",
          }}
          src="./images/key_full.png" 
          alt="image of a key duplicate"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-end h-screen w-8/12 justify-between z-0 relative left-[31%]">
        <img 
          src="./images/hm_logo.svg" 
          alt="logo" 
          className="relative z-10"
        />
        <div className="relative bottom-28 flex flex-col justify-between items-start max-w-full">
          <AnimatedText/>
        </div>
        <div className="flex gap-2 justify-center items-center justify-items-center pb-3">
        <p className="montserrat-regular text-[#BB4430] text-lg pb-3 pr-3">Scroll Down</p>
        <motion.img
        className="w-[15px]"
          src="./images/arrow.svg"
          alt="image of an arrow pointing vertically downwards"
          initial={{ y: 0 }}
          animate={{ 
            y: [0, -30, 0, -18, 0, -8, 0] // Decaying bounce heights
          }}
          transition={{
            duration: 1.2,
            times: [0, 0.2, 0.4, 0.6, 0.8, 0.9, 1],
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 3 // 3 seconds pause between bounces
          }}
        />
        </div>
      </div>
    </div>
  );
}

export default Center;