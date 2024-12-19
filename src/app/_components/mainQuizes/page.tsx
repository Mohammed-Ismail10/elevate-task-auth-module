"use client";
import React, { useEffect, useState } from "react";
import Search from "../mainDashboard/search/page";
import CardExam from "./cardExam/page";
import { useParams } from "next/navigation";

export default function MainQuizes() {
  const [exam, setExams] = useState([]);
  const { id } = useParams();
  async function getExam() {
    try {
      const res = await fetch(`https://exam.elevateegy.com/api/v1/exams?subject=${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token: `${localStorage.getItem("examToken")}`,
        },
      });
      const data = await res.json();
      // console.log(data.exams);
      setExams(data.exams);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getExam();
  }, []);

  return (
    <>
      <section className="p-5">
        <Search />
        <div>
          <h5 className="font-medium text-lg mt-5">Front-End Quiz</h5>
        </div>

        {exam.map((exam) => (
          <CardExam key={exam._id} exam={exam} />
        ))}
      </section>
    </>
  );
}
