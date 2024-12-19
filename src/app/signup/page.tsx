"use client";
import React from "react";
import Header from "../_components/header/page";
import NavSign from "../_components/navSign/page";
import FormSignup from "./formSignup/page";

export default function Signup() {


  return (
    <>
      <section className="grid grid-cols-2 h-screen">
        <div className="hidden md:block">
          <Header />
        </div>
        <div className="w-3/4 mx-auto pt-10 ">
          <div className="h-full flex flex-col">
            <NavSign />

            <div className="flex-grow">
              <div className="flex items-center h-full">
                <div className="w-full">
                  <div>
                    <h2 className="font-bold text-2xl leading-[30px]">
                      Sign up
                    </h2>
                  </div>

                  <FormSignup/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
