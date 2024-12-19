import React from "react";

export default function NumOfQuestion({ index, questions }: any) {
  return (
    <>
      <div>
        <span className="text-[#4461F2] text-sm font-medium">
          Question {index + 1} of {questions.length}
        </span>
      </div>
    </>
  );
}
