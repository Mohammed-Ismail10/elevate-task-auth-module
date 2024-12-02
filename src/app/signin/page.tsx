"use client";
import React from "react";
import Header from "../_components/header/page";
import NavSign from "../_components/navSign/page";
import FormSignin from "./formSignin/page";

export default function Signin() {


  return (
    <>
      <section className="grid grid-cols-2 h-screen">
        <div>
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
                      Sign in
                    </h2>
                  </div>

                  <FormSignin/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
