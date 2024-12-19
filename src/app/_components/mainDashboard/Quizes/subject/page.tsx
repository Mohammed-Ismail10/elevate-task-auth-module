import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Subject({ subject }: any) {
  return (
    <>
      <Link href={`/quizes/${subject._id}`}>
        <div className="rounded-[8.5px] overflow-hidden relative cursor-pointer">
          <Image
            className="w-full"
            src={subject.icon}
            alt="labtop"
            width={1000}
            height={1000}
          />
          <div className="absolute rounded-xl bg-[#1935CA66] bottom-5 left-10 right-10 px-2 py-3 backdrop-blur-xl">
            <h5 className="text-white text-sm font-bold">
              {subject.name}
            </h5>
            <p className="text-white text-xs font-medium">
              Voluptatem aut ut dignissimos blanditiis
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}
