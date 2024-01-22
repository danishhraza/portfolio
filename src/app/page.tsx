"use client";
import Image from "next/image";
import { FileDown, Github, Linkedin, Instagram } from "lucide-react";
import { Spotify } from "react-spotify-embed";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

interface DraggableTextBoxProps {
  text: string;
}

const DraggableTextBox: React.FC<DraggableTextBoxProps> = ({ text }) => {
  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 150, top: 0, bottom: 150 }}
      whileHover={{ scale: 1.1 }}
      className="flex text-white bg-blue-800 mx-auto p-1 rounded-lg"
    >
      {text}
    </motion.div>
  );
};

export default function Home() {
  return (
    <main className="bg-[#000000]">
      <div className="flex justify-center py-[10rem] xl:mx-[20rem] lg:mx-[15rem] md:mx-[10rem] mx-[3rem]">
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
                <h1 className="font-bold text-[22px] text-transparent bg-clip-text bg-gradient-to-r from-[#E23E57] to-[#A91079]">
                <Typewriter
                  options={{
                    strings: ["Full Stack Developer", "Aspiring ML Engineer", "Adventurer"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
              </span>

              <span className="text-[38px] text-white font-bold md:mt-10 mt-5">
                Danish Raza
              </span>
              <span className="text-[16px] text-white">
                I am currently pursuing bachelors in computer science
              </span>
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#18181b] to-[#09090b] p-6 border border-green-500 rounded-[12px] flex flex-col gap-1 md:col-span-1 col-span-2 row-span-1 justify-between">
            <div className="flex justify-center">
              <Image
                src="/images/projects.png"
                alt="my image"
                className="hover:scale-110 transition-transform"
                width={300}
                height={300}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[16px] text-gray-400">Showcase</span>
              <span className="text-[24px] text-white font-semibold">Projects</span>
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#18181b] to-[#09090b] p-6 rounded-[12px] flex flex-col shadow-lg md:col-span-1 col-span-2 row-span-1 justify-between">
            <div className="flex justify-center mt-4">
              <FileDown
                size={100}
                className="text-green-500"
                strokeWidth={0.7}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[16px] text-gray-400 mt-8">My CV/Resume</span>
              <span className="text-[24px] text-white font-semibold">Download</span>
            </div>
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
              <span className="text-[24px] text-white font-semibold">Skills</span>
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#18181b] to-[#09090b] rounded-[12px] p-6 flex flex-col justify-between shadow-lg col-span-2 row-span-1">
            <div className="flex justify-center mt-2">
              <Image src="/images/voxalink.png" alt="" width={180} height={250}/>
            </div>
            <div className="flex flex-col">
              <span className="text-[16px] text-gray-400 mt-8">
                Frontend Developer
              </span>
              <span className="text-[24px] text-white font-semibold">
                Voxalink Pro
              </span>
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#18181b] to-[#09090b] p-6 rounded-[12px] flex flex-col shadow-lg md:col-span-1 col-span-2 row-span-1 justify-between">
            <div className="flex justify-center mt-6">
              <Image src="/images/heuser.png" alt="" width={100} height={100}/>
            </div>
            <div className="flex flex-col">
              <span className="text-[16px] text-gray-400 mt-8">Full Stack Developer</span>
              <span className="text-[24px] text-white font-semibold">Heuser Edu</span>
            </div>  
          </div>
          <div className="bg-gradient-to-br from-[#18181b] to-[#09090b] p-6 rounded-[12px] flex flex-col justify-between shadow-lg md:col-span-1 col-span-2 row-span-1">
            <div className="flex justify-center gap-4 mt-4">
              <Github
                size={35}
                className="text-gray-200"
                strokeWidth={0.7}
              />
              <Linkedin 
                size={35}
                className="text-gray-200"
                strokeWidth={0.7}
              />
              <Instagram
                size={35}
                className="text-gray-200"
                strokeWidth={0.7}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[16px] text-gray-400 mt-8">Stay with me</span>
              <span className="text-[20px] text-white font-semibold">
                Socials
              </span>
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#18181b] to-[#09090b] rounded-[12px] p-6 flex flex-col justify-between shadow-lg col-span-2 row-span-1">
            <span className="text-[20px] text-gray-300 font-light">
              On Repeat
             </span>
            <div className="flex justify-center mt-2">
            <Spotify wide link="https://open.spotify.com/track/5rLyYxZNzca00ENADO9m54?si=34bf30ab7e384a47" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
