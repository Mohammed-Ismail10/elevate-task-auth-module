"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavSign() {
  const pathName = usePathname();

  return (
    <>
      <nav className="flex justify-end">
        <div className="flex gap-7 items-center">
          <Link
            className={`text-xl leading-6 text-[#4461F2] ${
              pathName === "/signin"
                ? "py-3 px-5 shadow-md rounded-2xl border border-[#E0E0E9]"
                : ""
            }`}
            href={"/signin"}
          >
            Sign in
          </Link>
          <Link
            className={`text-xl leading-6 text-[#4461F2] ${
              pathName === "/signup"
                ? "py-3 px-5 shadow-md rounded-2xl border border-[#E0E0E9]"
                : ""
            }`}
            href={"/signup"}
          >
            Register
          </Link>
        </div>
      </nav>
    </>
  );
}
