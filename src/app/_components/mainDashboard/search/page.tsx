import Image from "next/image";
import React from "react";
import { CiSearch } from "react-icons/ci";
import profileImage from '../../../../images/Frame 40.png'



export default function Search() {
  return (
    <>
      <div className="flex items-center gap-6">
        <div className="flex bg-white items-center rounded-[20px] ps-3 py-2 grow overflow-hidden shadow-xl">
          <div>
            <CiSearch size={30} color="#4461F2" />
          </div>
          <input
            className="border-none focus:shadow-none w-full"
            type="search"
            placeholder="Search Quiz"
          />
        </div>
        <div>
          <button className="bg-[#4461F2] text-white py-4 px-8 rounded-[20px] font-semibold text-[20px]">
            Start Quiz
          </button>
        </div>
        <div>
          <div className="size-16 rounded-full overflow-hidden">
            <Image className="w-full" src={profileImage} alt="profile Image" />
          </div>
        </div>
      </div>
    </>
  );
}
