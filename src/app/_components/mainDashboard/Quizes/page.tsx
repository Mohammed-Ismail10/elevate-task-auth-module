"use client";
// import Image from "next/image";
import React, { useEffect, useState } from "react";
// import lab from "../../../../images/Rectangle 47.png";
import Subject from "./subject/page";
export default function Quizes() {
  const [subjects, setSubjects] = useState([]);
  async function getSubjects() {
    try {
      const res = await fetch("https://exam.elevateegy.com/api/v1/subjects", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token: `${localStorage.getItem("examToken")}`,
        },
      });
      const data = await res.json();
      console.log(data.subjects);
      setSubjects(data.subjects);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getSubjects();
  }, []);

  return (
    <>
      <div className="mt-10 rounded-[20px] bg-white py-8 px-4 shadow-xl">
        <div className="flex justify-between">
          <div>
            <h4 className="font-medium text-2xl text-[#4461F2]">Quizes</h4>
          </div>
          <div>
            <span className="font-medium text-2xl text-[#4461F2] cursor-pointer">
              View All
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mt-3">
          {subjects.map((subject)=><Subject key={subject._id} subject={subject}/>) }
        </div>
      </div>
    </>
  );
}
