/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const Heuser = () => {
  return (
    <div className="bg-[#000000] py-[10rem]">
      <div className="bg-gradient-to-br from-[#18181b] to-[#09090b] rounded-[12px] p-6 flex flex-col shadow-lg mx-10 lg:mx-[15rem] xl:mx-[20rem]">
        <Link href="/">
          <button className="text-gray-100 bg-[#18181b] py-2 px-6 rounded-lg absolute -translate-y-[89px]">
            <ArrowLeft />
          </button>
        </Link>
        <div className="flex justify-center mt-2 h-80">
          {" "}
          {/* Adjust the height as needed */}
          <div className="relative w-full h-full">
            <Image
              src="/images/heuserbanner.png"
              alt=""
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-[16px] text-gray-400 mt-8">
            Full Stack Developer
          </span>
          <span className="text-[24px] text-white font-semibold">
            Heuser Edu
          </span>
        </div>
        <div className="mt-8">
          <p className="text-white">
            Heuser Edu is an educational and learning platform that provides
            aptitude test preparation for universities along with SATs and O/A
            Levels
          </p>
          <p className="text-white mt-4">
            I worked as a Full Stack Developer in this project and used Next.Js,
            React.Js, MongoDB, Tailwind CSS to build a platform that enables
            students to browse their favourite course, view teachers,
            timetables, latest announcements as well as apply for admission!.
          </p>
          <p className="text-white mt-4">
            The new website, which is both versatile and smartly designed,
            greatly improved Heuser's digital availability and admissions by as
            much as 200%.
          </p>
        </div>
        <Link href="https://www.heuserpk.com/" target="_blank">
          <button className="text-white bg-green-600 mx-auto p-2 rounded-lg mt-4">
            Visit Site
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Heuser;
