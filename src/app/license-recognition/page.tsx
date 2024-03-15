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
              src="/images/detect.png"
              alt=""
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-[16px] text-gray-400 mt-8">ML Engineer</span>
          <span className="text-[24px] text-white font-semibold">
            License Plate Recognition
          </span>
        </div>
        <div className="mt-8">
          <p className="text-white">
            Developed a License Plate Recognition (LPR) system using Python, the
            YOLOv8 object detection framework, and EasyOCR. To ensure accurate
            license plate detection, I trained YOLOv8 on a custom dataset. The
            program effectively extracts license plates and exports the data
            into a CSV format, facilitating convenient analysis and integration
            with other applications.
          </p>
        </div>
        <Link
          href="https://github.com/danishhraza/license-plate-recognition-python-yolov8"
          target="_blank"
        >
          <button className="text-white bg-green-600 mx-auto p-2 rounded-lg mt-4">
            Visit Repository
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Voxalinkpro;
