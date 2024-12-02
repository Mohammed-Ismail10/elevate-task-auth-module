"use client";
import Image from "next/image";
import React from "react";
import google from "../../../images/Logo Google.png";
import x from "../../../images/x.png";
import facbook from "../../../images/facbook.png";
import apple from "../../../images/apple.png";
import { signIn } from "next-auth/react";

export default function SocialSign() {
  return (
    <>
      <div className="mt-5 flex justify-center gap-5">
        <div
          onClick={() => signIn("google", { redirect: true, callbackUrl: "/" })}
          className="size-16 rounded-2xl shadow-lg border cursor-pointer flex justify-center items-center"
        >
          <Image src={google} alt="google logo" />
        </div>
        <div className="size-16 rounded-2xl shadow-lg border cursor-pointer flex justify-center items-center">
          <Image src={x} alt="" />
        </div>
        <div className="size-16 rounded-2xl shadow-lg border cursor-pointer flex justify-center items-center">
          <Image src={facbook} alt="" />
        </div>
        <div className="size-16 rounded-2xl shadow-lg border cursor-pointer flex justify-center items-center">
          <Image src={apple} alt="" />
        </div>
      </div>
    </>
  );
}
