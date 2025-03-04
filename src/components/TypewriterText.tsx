"use client";
import React from "react";
import Typewriter from "typewriter-effect";

const TypewriterText = () => {
  return (
    <div>
      <h1 className="font-bold text-[20px] md:text-[35px] text-transparent bg-clip-text bg-gradient-to-r from-[#E23E57] to-[#d31497]">
        <Typewriter
          options={{
            strings: [
              "Software Engineer",
              "Full Stack Developer",
              "Aspiring Cloud Engineer",
              "Photographer"
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
    </div>
  );
};

export default TypewriterText;
