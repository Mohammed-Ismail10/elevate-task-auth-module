"use client";
import { setUserAnswers } from "@/lib/answerSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ScoreModal from "../../../scoreModal/page";

export default function Buttons({
  setIndex,
  index,
  questions,
  setOpenModal2,
}: any) {
  const { selectedOptions } = useSelector((state: any) => state.answer);
  const dispatch = useDispatch();
  const [openModal3, setOpenModal3] = useState(false);
  const [timeTaken, setTimeTaken] = useState(0);
  const [startTime] = useState(Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeTaken(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);
    return () => clearInterval(timer);
  }, [startTime]);

  function finishExam() {
    const answers = [];
    for (let i = 0; i < questions.length; i++) {
      // إضافة الإجابة لكائن الإجابات
      answers.push({
        questionId: questions[i]._id,
        correct: selectedOptions[questions[i]._id] || null,
      });
    }
    const submissionPayload = {
      answers,
      time: timeTaken,
    };
    sendSubmission(submissionPayload);
  }

  async function sendSubmission(payload: any) {
    try {
      const response = await fetch(
        "https://exam.elevateegy.com/api/v1/questions/check",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            token: `${localStorage.getItem("examToken")}`,
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();
      console.log(data);
      dispatch(setUserAnswers(data));
    } catch (error) {
      console.log(error);
    }
  }

  function decrementIndex() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }
  function incrementIndex() {
    if (index < questions.length - 1) {
      setIndex(index + 1);
    } else if (index === questions.length - 1) {
      finishExam();
      setOpenModal3(true);
      setIndex(0);
    }
  }

  return (
    <>
      <div className="flex justify-between gap-12">
        <div className="w-full">
          <button
            onClick={decrementIndex}
            className="w-full border border-[#4461F2] rounded-[100px] py-2.5 px-6 font-medium text-[#4461F2] text-2xl"
          >
            Back
          </button>
        </div>
        <div className="w-full">
          <button
            onClick={incrementIndex}
            disabled={!selectedOptions[questions[index]?._id]}
            className="w-full bg-[#4461F2] text-white rounded-[100px] font-medium text-2xl py-2.5 px-6 disabled:bg-[#1D1B201F] disabled:text-[#7f7f7f]"
          >
            Next
          </button>
        </div>
      </div>

      <ScoreModal
        openModal3={openModal3}
        setOpenModal3={setOpenModal3}
        questions={questions}
        setOpenModal2={setOpenModal2}
      />
    </>
  );
}
