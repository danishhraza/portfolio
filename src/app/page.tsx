"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FileDown, Github, Linkedin, Instagram } from "lucide-react";
import { Spotify } from "react-spotify-embed";
import TypewriterText from "@/components/TypewriterText";
import DraggableTextBox from "@/components/DraggableTextBox";

export default function Home() {
  const voxalinkRef = useRef<HTMLDivElement>(null);

  const scrollToVoxalink = () => {
    if (voxalinkRef && voxalinkRef.current) {
      voxalinkRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="bg-[#000000]">
      <div className="flex justify-center py-[10rem] xl:mx-[20rem] lg:mx-[8rem] md:mx-[6rem] mx-[3rem]">
        <section className="grid md:grid-cols-3 grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-[#18181b] to-[#09090b] p-6 rounded-[12px] md:flex-row flex-col flex gap-5 col-span-2 row-span-1">
            <div className="flex justify-center">
              <Image
                src="/images/Professional Image.jpg"
                alt="Danish Raza"
                className="rounded-br-2xl rounded-tl-2xl"
                width={190}
                height={190}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[22px] text-white mt-5 flex">
                <TypewriterText />
              </span>
              <span className="text-[38px] text-white font-bold md:mt-10 mt-5">
                Danish Raza
              </span>
              <span className="text-[16px] text-white">
                I am currently pursuing bachelors in computer science
              </span>
            </div>
          </div>
          <div
            onClick={scrollToVoxalink}
            className="group bg-gradient-to-br from-[#18181b] to-[#09090b] p-6 border border-green-500 rounded-[12px] flex flex-col gap-1 md:col-span-1 col-span-2 row-span-1 justify-between transform transition-transform"
          >
            <div className="flex justify-center">
              <Image
                src="/images/projects.png"
                alt="my image"
                className="group-hover:scale-110 transition-transform"
                width={300}
                height={300}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[16px] text-gray-400">Showcase</span>
              <span className="text-[24px] text-white font-semibold">
                Projects
              </span>
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#18181b] to-[#09090b] p-6 rounded-[12px] flex flex-col shadow-lg md:col-span-1 col-span-2 row-span-1 justify-between">
            <Link href="Muhammad Danish Raza CV 2024.pdf" target="_blank">
              <div className="flex justify-center mt-4">
                <FileDown
                  size={100}
                  className="text-green-500"
                  strokeWidth={0.7}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[16px] text-gray-400 mt-8">
                  My CV/Resume
                </span>
                <span className="text-[24px] text-white font-semibold">
                  Download
                </span>
              </div>
            </Link>
          </div>
          <div className="bg-gradient-to-br from-[#18181b] to-[#09090b] p-6 rounded-[12px] flex flex-col justify-between gap-8 overflow-hidden col-span-2 row-span-1">
            <div className="flex flex-wrap gap-3">
              <DraggableTextBox text="React.js" />
              <DraggableTextBox text="Next.js" />
              <DraggableTextBox text="Java" />
              <DraggableTextBox text="Oracle SQL" />
              <DraggableTextBox text="MongoDB" />
              <DraggableTextBox text="Tailwind CSS" />
              <DraggableTextBox text="AWS" />
              <DraggableTextBox text="Python" />
              <DraggableTextBox text="Javascript" />
              <DraggableTextBox text="Typescript" />
              <DraggableTextBox text="Wordpress" />
              <DraggableTextBox text="Node.js" />
              <DraggableTextBox text="Express.js" />
              <DraggableTextBox text="Github" />
              <DraggableTextBox text="Trello" />
            </div>
            <div className="flex flex-col">
              <span className="text-[16px] text-gray-400">
                Languages/Softwares/Frameworks
              </span>
              <span className="text-[24px] text-white font-semibold">
                Skills
              </span>
            </div>
          </div>

          <div className="relative bg-gradient-to-br from-[#18181b] to-[#09090b] p-6 rounded-[12px] shadow-lg col-span-2 md:col-span-1 row-span-2">
            {/* New code for the added text */}
            <span className="absolute top-0 left-0 text-[16px] text-green-500 mt-8 ml-8">
              Project
            </span>
            <Link
              href="/license-recognition"
              className="flex flex-col justify-between"
            >
              <div className="flex justify-center mt-6">
                <Image
                  src="/images/license.png"
                  alt=""
                  width={190}
                  height={190}
                />
              </div>
              <div className="flex flex-col md:mt-[80px]">
                <span className="text-[16px] text-gray-400 mt-8">
                  ML Engineer
                </span>
                <span className="text-[24px] text-white font-semibold">
                  License Plate Recognition
                </span>
              </div>
            </Link>
          </div>

          <div
            ref={voxalinkRef}
            className="relative bg-gradient-to-br from-[#18181b] to-[#09090b] rounded-[12px] p-6 flex flex-col justify-between shadow-lg col-span-2 row-span-1"
          >
            {/* New code for the added text */}
            <span className="absolute top-0 left-0 text-[16px] text-green-500 mt-8 ml-8">
              Project
            </span>
            <Link href="/voxalinkpro">
              <div className="flex justify-center mt-2">
                <Image
                  src="/images/voxalink.png"
                  alt=""
                  width={130}
                  height={200}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[16px] text-gray-400 mt-8">
                  Frontend Developer
                </span>
                <span className="text-[24px] text-white font-semibold">
                  Voxalink Pro
                </span>
              </div>
            </Link>
          </div>

          <div className="relative bg-gradient-to-br from-[#18181b] to-[#09090b] p-6 rounded-[12px] flex flex-col shadow-lg md:col-span-2 col-span-2 row-span-1 justify-between">
            {/* New code for the added text */}
            <span className="absolute top-0 left-0 text-[16px] text-green-500 mt-8 ml-8">
              Project
            </span>
            <Link href="/heuser">
              <div className="flex justify-center mt-6">
                <Image src="/images/heuser.png" alt="" width={90} height={90} />
              </div>
              <div className="flex flex-col">
                <span className="text-[16px] text-gray-400 mt-8">
                  Full Stack Developer
                </span>
                <span className="text-[24px] text-white font-semibold">
                  Heuser Edu
                </span>
              </div>
            </Link>
          </div>

          <div className="bg-gradient-to-br from-[#18181b] to-[#09090b] rounded-[12px] p-6 flex flex-col justify-between shadow-lg col-span-2 row-span-1">
            <span className="text-[20px] text-gray-300 font-light">
              On Repeat
            </span>
            <div className="flex justify-center mt-2">
              <Spotify
                wide
                link="https://open.spotify.com/track/4o120XeV8els1S5bu7mzBX?si=2e40179421554f63"
              />
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#18181b] to-[#09090b] p-6 rounded-[12px] flex flex-col justify-between shadow-lg md:col-span-1 col-span-2 row-span-1">
            <div className="flex justify-center gap-4 mt-4">
              <Link href="https://github.com/danishhraza" target="_blank">
                <Github size={35} className="text-gray-200" strokeWidth={0.7} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/danishhraza/"
                target="_blank"
              >
                <Linkedin
                  size={35}
                  className="text-gray-200"
                  strokeWidth={0.7}
                />
              </Link>
              <Link
                href="https://www.instagram.com/danishh.raza/"
                target="_blank"
              >
                <Instagram
                  size={35}
                  className="text-gray-200"
                  strokeWidth={0.7}
                />
              </Link>
            </div>
            <div className="flex flex-col">
              <span className="text-[16px] text-gray-400 mt-8">
                Stay with me
              </span>
              <span className="text-[20px] text-white font-semibold">
                Socials
              </span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
