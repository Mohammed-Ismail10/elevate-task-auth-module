import Image from "next/image";
import React from "react";
import { FaFlag } from "react-icons/fa6";
import profileImage from "../../../../images/Frame 40.png";
import { Progress } from "flowbite-react";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";
export default function ProfileHeader() {
  return (
    <>
      <div className="mt-10 rounded-[20px] bg-white p-4 gap-10 shadow-xl ">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="md:col-span-1">
            <Image className="w-full" src={profileImage} alt="profile image" />
          </div>

          <div className=" md:col-span-4">
            <div>
              <h2 className="text-[#4461F2] font-bold text-[32px]">
                Ahmed Mohammed
              </h2>
            </div>
            <div>
              <p className="text-[#979CA3] text-[20px]">Voluptatem aut</p>
            </div>
            <div className="mt-5 w-3/4">
              <Progress progress={70} color="blue" />
            </div>

            <div className="mt-5 flex gap-6 justify-between">
              <div className="flex flex-col md:flex-row gap-5 items-center">
                <div className="size-[70px] shadow-xl rounded-[10px] flex justify-center items-center">
                  <FaFlag size={30} color="#4461F2" />
                </div>
                <div className="text-center md:text-left">
                  <div>
                    <span className="text-[#696F79] font-bold text-3xl">
                      27
                    </span>
                  </div>
                  <div>
                    <span className="text-[#696F79]">Quiz Passed</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-5 items-center">
                <div className="size-[70px] shadow-xl rounded-[10px] flex justify-center items-center">
                  <MdAccessTimeFilled size={30} color="#4461F2" />
                </div>
                <div className="text-center md:text-left">
                  <div>
                    <span className="text-[#696F79] font-bold text-3xl">
                      13 min
                    </span>
                  </div>
                  <div>
                    <span className="text-[#696F79]">Fastest Time</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-5 items-center">
                <div className="size-[70px] shadow-xl rounded-[10px] flex justify-center items-center">
                  <FaCircleCheck size={30} color="#4461F2" />
                </div>
                <div className="text-center md:text-left">
                  <div>
                    <span className="text-[#696F79] font-bold text-3xl">
                      200
                    </span>
                  </div>
                  <div>
                    <span className="text-[#696F79]">Correct Answers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
