import Image from "next/image";
import { FileDown } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-[#000000] h-[100vh]">
      <div className="flex justify-center pt-[10rem]">
        <section className="grid grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-[#18181b] to-[#09090b] p-6 rounded-[12px] flex gap-5 shadow-[rgba(61,_61,_61,_0.34)_0px_10px_10px] col-span-2 row-span-1">
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
          <div className="bg-gradient-to-br from-[#18181b] to-[#09090b] p-6 rounded-[12px] flex flex-col shadow-lg">
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
          <div className="p-6 border border-green-500 rounded-[12px] flex flex-col gap-1">
            <span className="text-[16px] text-white">Starting from</span>
            <span className="text-[28px] text-white font-bold">$1000</span>
          </div>
        </section>
      </div>
    </main>
  );
}
