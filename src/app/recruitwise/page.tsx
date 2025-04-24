/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const Voxalinkpro = () => {
  return (
    <div className="bg-[#000000] py-[10rem]">
      <div className="bg-gradient-to-br from-[#18181b] to-[#09090b] rounded-[12px] p-6 flex flex-col shadow-lg mx-10 lg:mx-[15rem] xl:mx-[20rem]">
        <Link href="/">
          <button className="text-gray-100 bg-[#18181b] py-2 px-6 rounded-lg absolute -translate-y-[89px]">
            <ArrowLeft />
          </button>
        </Link>
        <div className="flex justify-center mt-2 h-96">
          {" "}
          {/* Adjust the height as needed */}
          <div className="relative w-full h-full">
            <Image
              src="/images/recruitwisebanner.png"
              alt=""
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-[16px] text-gray-400 mt-8">
            Fullstack Developer
          </span>
          <span className="text-[24px] text-white font-semibold">
            RecruitWise.io
          </span>
        </div>
        <div className="mt-8">
          <p className="text-white">
            RecruitWise.io is a SaaS AI recruitment platform to handle all hiring process including batch AI interviews, candidate ranking, cheating detection, detailed interview result and etc
          </p>
          <p className="text-white mt-4">
            My role in this project was to work with a team of fullstack developers to build the platform using React, Tailwind CSS, ShadCn and Nest.js.
          </p>
          <p className="text-white mt-4">
            My final year project - backed by <span className="bg-gray-700 p-1">Folio3</span>
          </p>
        </div>
        <Link href="https://recruitwise-frontend.vercel.app/" target="_blank">
          <button className="text-white bg-green-600 mx-auto p-2 rounded-lg mt-4">
            Visit Site
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Voxalinkpro;
