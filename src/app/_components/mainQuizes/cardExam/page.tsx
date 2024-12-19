import React, { useState } from "react";
import InstructionModal from "../../exam/InstructionModal/page";

export default function CardExam({ exam }: any) {


  const [openModal, setOpenModal] = useState(false);




  return (
    <>
      <div className="mt-5 py-4 px-6 bg-white rounded-[10px] flex justify-between shadow-lg">
        <div>
          <p className="font-medium">{exam.title}</p>
          <span className="text-[13px]">{exam.numberOfQuestions} Question</span>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-[13px]">{exam.duration} minutes</p>
          <button onClick={() => setOpenModal(true)} className="text-xs bg-[#4461F2] text-white rounded-[10px] py-1 px-6">
            start
          </button>
        </div>
      </div>

      <InstructionModal openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
}
