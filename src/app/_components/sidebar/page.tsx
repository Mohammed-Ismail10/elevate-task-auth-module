"use client";
import Image from "next/image";
import React, { useState } from "react";
import elevateLogo from "../../../images/Final Logo 1.png";
import Link from "next/link";
import { MdSpaceDashboard } from "react-icons/md";
import { GiBackwardTime } from "react-icons/gi";
import { RiLogoutBoxFill } from "react-icons/ri";
import { usePathname } from "next/navigation";
import { ModalLogout } from "./modalLogout/page";
import { Button, Drawer } from "flowbite-react";
import { FaBarsStaggered } from "react-icons/fa6";

export default function Sidebar() {
  const pathName = usePathname();
  const [openModal, setOpenModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className="p-6 hidden md:block">
        <div>
          <Image src={elevateLogo} alt="elevate logo" />
        </div>
        <div className="mt-10">
          <ul>
            <li>
              <Link
                href={"/"}
                className={`${
                  pathName === "/" ? "bg-[#4461f2]" : ""
                } flex items-center p-3 rounded-[10px]`}
              >
                <MdSpaceDashboard
                  size={30}
                  color={`${pathName === "/" ? "white" : "#4461F2"} `}
                />
                <span
                  className={`ps-6 text-xl font-semibold ${
                    pathName === "/" ? "text-white" : "text-[#696F79]"
                  } `}
                >
                  Dashboard
                </span>
              </Link>
            </li>
            <li className="mt-10">
              <Link
                href={"/quiz-history"}
                className={`${
                  pathName === "/quiz-history" ? "bg-[#4461f2]" : ""
                } flex items-center p-3 rounded-[10px]`}
              >
                <GiBackwardTime
                  size={30}
                  color={`${
                    pathName === "/quiz-history" ? "white" : "#4461F2"
                  } `}
                />
                <span
                  className={`ps-6 text-xl font-semibold ${
                    pathName === "/quiz-history"
                      ? "text-white"
                      : "text-[#696F79]"
                  } `}
                >
                  Quiz History
                </span>
              </Link>
            </li>
            <li
              className="mt-10 flex items-center ps-3"
              onClick={() => setOpenModal(true)}
            >
              <RiLogoutBoxFill size={30} color={"#4461F2"} />
              <span className="cursor-pointer ps-6 text-xl font-semibold text-[#696F79]">
                Logout
              </span>
            </li>
          </ul>
        </div>
      </div>





      <div className="md:hidden">
        <Button className="bg-[#4461F2]" onClick={() => setIsOpen(true)}>
          <FaBarsStaggered size={30} color="white" />
        </Button>
      </div>
      <Drawer open={isOpen} onClose={handleClose}>
        <Drawer.Header />
        <Drawer.Items>
        <div>
          <Image src={elevateLogo} alt="elevate logo" />
        </div>
        <div className="mt-10">
          <ul>
            <li>
              <Link
                href={"/"}
                className={`${
                  pathName === "/" ? "bg-[#4461f2]" : ""
                } flex items-center p-3 rounded-[10px]`}
              >
                <MdSpaceDashboard
                  size={30}
                  color={`${pathName === "/" ? "white" : "#4461F2"} `}
                />
                <span
                  className={`ps-6 text-xl font-semibold ${
                    pathName === "/" ? "text-white" : "text-[#696F79]"
                  } `}
                >
                  Dashboard
                </span>
              </Link>
            </li>
            <li className="mt-10">
              <Link
                href={"/quiz-history"}
                className={`${
                  pathName === "/quiz-history" ? "bg-[#4461f2]" : ""
                } flex items-center p-3 rounded-[10px]`}
              >
                <GiBackwardTime
                  size={30}
                  color={`${
                    pathName === "/quiz-history" ? "white" : "#4461F2"
                  } `}
                />
                <span
                  className={`ps-6 text-xl font-semibold ${
                    pathName === "/quiz-history"
                      ? "text-white"
                      : "text-[#696F79]"
                  } `}
                >
                  Quiz History
                </span>
              </Link>
            </li>
            <li
              className="mt-10 flex items-center ps-3"
              onClick={() => setOpenModal(true)}
            >
              <RiLogoutBoxFill size={30} color={"#4461F2"} />
              <span className="cursor-pointer ps-6 text-xl font-semibold text-[#696F79]">
                Logout
              </span>
            </li>
          </ul>
        </div>
        </Drawer.Items>
      </Drawer>

      <ModalLogout openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
}
