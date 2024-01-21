"use client";
import Image from "next/image";
import { FileDown } from "lucide-react";
import { motion } from "framer-motion";

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
      <div className="flex justify-center py-[10rem] mx-[20rem]">
        <section className="grid grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-[#18181b] to-[#09090b] p-6 rounded-[12px] flex gap-5 col-span-2 row-span-1">
            <div>
              <Image
                src="/images/Professional Image.jpg"
                alt="my image"
                width={190}
                height={190}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[16px] text-white mt-5">
                A WEB DEVELOPER
              </span>
              <span className="text-[28px] text-white font-bold mt-10">
                Danish Raza
              </span>
              <span className="text-[16px] text-white">
                I am currently pursuing bachelors in computer science
              </span>
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#18181b] to-[#09090b] p-6 border border-green-500 rounded-[12px] flex flex-col gap-1 col-span-1 row-span-1">
            <Image
              src="/images/projects.png"
              alt="my image"
              className="hover:scale-110 transition-transform"
              width={300}
              height={300}
            />
            <span className="text-[16px] text-gray-400">Showcase</span>
            <span className="text-[20px] text-white">Projects</span>
          </div>
          <div className="bg-gradient-to-br from-[#18181b] to-[#09090b] p-6 rounded-[12px] flex flex-col shadow-lg col-span-1 row-span-1">
            <div className="flex justify-center">
              <FileDown
                size={100}
                className="text-green-500"
                strokeWidth={0.7}
              />
            </div>
            <span className="text-[16px] text-gray-400 mt-8">My CV/Resume</span>
            <span className="text-[20px] text-white">Download</span>
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
              <span className="text-[16px] text-white">
                Languages/Softwares/Frameworks
              </span>
              <span className="text-[28px] text-white font-bold">Skills</span>
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#18181b] to-[#09090b] p-6 rounded-[12px] flex flex-col shadow-lg col-span-2 row-span-1">
            <div className="flex justify-center">
              <FileDown
                size={100}
                className="text-green-500"
                strokeWidth={0.7}
              />
            </div>
            <span className="text-[16px] text-gray-400 mt-8">
              Frontend Developer
            </span>
            <span className="text-[20px] text-white font-semibold">
              Voxalink Pro
            </span>
          </div>
          <div className="bg-gradient-to-br from-[#18181b] to-[#09090b] p-6 rounded-[12px] flex flex-col shadow-lg col-span-1 row-span-2">
            <div className="flex justify-center">
              <FileDown
                size={100}
                className="text-green-500"
                strokeWidth={0.7}
              />
            </div>
            <span className="text-[16px] text-gray-400 mt-8">
              Full Stack Developer
            </span>
            <span className="text-[20px] text-white font-semibold">
              Heuser Edu
            </span>
          </div>
          <div className="bg-gradient-to-br from-[#18181b] to-[#09090b] p-6 rounded-[12px] flex flex-col shadow-lg col-span-2 row-span-1">
            <div className="flex justify-center">
              <FileDown
                size={100}
                className="text-green-500"
                strokeWidth={0.7}
              />
            </div>
            <span className="text-[16px] text-gray-400 mt-8">Stay with me</span>
            <span className="text-[20px] text-white font-semibold">
              Socials
            </span>
          </div>
        </section>
      </div>
    </main>
  );
}
