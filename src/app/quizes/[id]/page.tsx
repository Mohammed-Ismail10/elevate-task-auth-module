'use client'
import MainQuizes from "@/app/_components/mainQuizes/page";
import Sidebar from "@/app/_components/sidebar/page";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function Exam() {


  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("examToken")) {
      router.push("/signin");
    }
  }, [router]);
  return (
    <>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-5 ">
          <div className="md:col-span-1">
            <Sidebar />
          </div>
          <div className="md:col-span-4">
            <MainQuizes />
          </div>
        </div>
      </section>
    </>
  );
}
