"use client";
import React from "react";
import Typewriter from "typewriter-effect";

const TypewriterText = () => {
  return (
    <div>
      <h1 className="font-bold text-[20px] md:text-[35px] text-transparent bg-clip-text bg-gradient-to-r from-[#3ee25c] to-[#138146]">
        <Typewriter
          options={{
            strings: [
              "Software Engineer",
              "Full Stack Developer",
              "Aspiring Cloud Engineer",
              "Visual Storyteller"
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
