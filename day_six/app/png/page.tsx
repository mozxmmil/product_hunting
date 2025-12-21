"use client";

import React from "react";
import { motion } from "motion/react";

const Page = () => {
  return (
    <div className="w-full h-screen bg-neutral-700 flex justify-center items-center">
      <div
        className=" rounded-xl 
      shadow-neutral-300 bg-black shadow-2xl p-10 "
      >
        <div className="flex  justify-between items-center">
          <div>
            <div className="flex items-center ">
              <h1 className="text-white">this is our second line </h1>
              <Svg />
            </div>
            <div className="flex items-center">
              <h1 className="text-white">
                and this is going to be the third line{" "}
              </h1>
              <Svg />
            </div>
            <div className="flex items-center">
              <h1 className="text-white">this is our first line </h1>
              <Svg />
            </div>
          </div>
          <div className="size-20 bg-white rounded-md overflow-hidden  relative p-px">
            <div className="w-full h-full bg-black relative z-100 rounded-[5px] flex justify-center items-center ">
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="icon icon-tabler icons-tabler-filled icon-tabler-bell"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M14.235 19c.865 0 1.322 1.024 .745 1.668a3.992 3.992 0 0 1 -2.98 1.332a3.992 3.992 0 0 1 -2.98 -1.332c-.552 -.616 -.158 -1.579 .634 -1.661l.11 -.006h4.471z" />
                <path d="M12 2c1.358 0 2.506 .903 2.875 2.141l.046 .171l.008 .043a8.013 8.013 0 0 1 4.024 6.069l.028 .287l.019 .289v2.931l.021 .136a3 3 0 0 0 1.143 1.847l.167 .117l.162 .099c.86 .487 .56 1.766 -.377 1.864l-.116 .006h-16c-1.028 0 -1.387 -1.364 -.493 -1.87a3 3 0 0 0 1.472 -2.063l.021 -.143l.001 -2.97a8 8 0 0 1 3.821 -6.454l.248 -.146l.01 -.043a3.003 3.003 0 0 1 2.562 -2.29l.182 -.017l.176 -.004z" />
              </motion.svg>
            </div>
            <div className="absolute w-full h-full inset-0 bg-conic from-transparent via-blue-500 to-transparent to animate-spin delay-300 scale-[1.5]"></div>
            <div className="absolute w-full h-full inset-0 bg-conic from-transparent via-pink-500 to-transparent to animate-spin  scale-[1.5]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

const Svg = () => {
  return (
    <motion.svg width="300" height="" viewBox="0 0 300 100">
      <motion.line
        x1="20"
        y1="50"
        x2="280"
        y2="50"
        stroke="url(#lineGradient)"
      
        
      />
      {/* <rect x="20" y="40" width="260" height="20" fill="url(#lineGradient)" /> */}
      <defs>
        <motion.linearGradient
          gradientUnits="userSpaceOnUse"
          id="lineGradient"
          initial={{ x1: "0%", x2: "10%" }}
          animate={{ x1: "90%", x2: "100%" }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
          }}
          
        >
          <stop stopColor="#ff00cc" />
          <stop offset={0.33} stopColor="#fff" />

          <stop offset={1} stopColor="#ff00cc" />
        </motion.linearGradient>
      </defs>
    </motion.svg>
  );
};
