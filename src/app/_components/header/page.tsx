import Image from "next/image";
import React from "react";
import sign from '../../../images/bro.png'

export default function Header() {
  return (
    <>
      <div className="p-20 bg-[#F0F4FC] h-full rounded-tr-[100px] rounded-br-[100px] shadow-xl">
        <div>
          <h1 className="font-bold text-5xl leading-normal">
            Welcome to <br />
            <span className="text-[#122D9C] text-[60px] leading-[90px]">
              Elevate
            </span>
          </h1>
        </div>
        <div className="mt-7">
          <p className="text-[18px] leading-10">
            Quidem autem voluptatibus qui quaerat aspernatur <br /> architecto
            natus
          </p>
        </div>
        <div className="mt-7">
          <Image src={sign} alt="sign" />
        </div>
      </div>
    </>
  );
}
