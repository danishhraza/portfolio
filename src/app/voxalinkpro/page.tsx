/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const Voxalinkpro = () => {
  return (
    <div className="bg-[#000000] py-[10rem]">
      <div className="bg-gradient-to-br from-[#18181b] to-[#09090b] rounded-[12px] p-6 flex flex-col shadow-lg mx-10 lg:mx-[15rem] xl:mx-[20rem]">
        <Link href="/">
          <button className="text-gray-100 bg-gray-900 py-2 px-6 rounded-lg absolute -translate-y-[89px]">
            <ArrowLeft />
          </button>
        </Link>
        <div className="flex justify-center mt-2 h-80">
          {" "}
          {/* Adjust the height as needed */}
          <div className="relative w-full h-full">
            <Image
              src="/images/voxalinkbanner.png"
              alt=""
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-[16px] text-gray-400 mt-8">
            Frontend Developer
          </span>
          <span className="text-[24px] text-white font-semibold">
            Voxalink Pro
          </span>
        </div>
        <div className="mt-8">
          <p className="text-white">
            Voxalink Pro is a SaaS Voice AI platform integrated with Blockchain
            technology and it's very own ERC-20 token for monetization.
          </p>
          <p className="text-white mt-4">
            My role in this project was to work on the front-end and make a
            appealing user interface with web3 wallet functionality enabling
            users to connect their crypto wallet and perform transactions as
            well as sign blockchain contracts.
          </p>
          <p className="text-white mt-4">
            This was a collaborative project with a team of experience
            developers all collaborating through GitHub!
          </p>
        </div>
        <Link href="https://www.voxalinkpro.io/" target="_blank">
          <button className="text-white bg-green-600 mx-auto p-2 rounded-lg mt-4">
            Visit Site
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Voxalinkpro;
