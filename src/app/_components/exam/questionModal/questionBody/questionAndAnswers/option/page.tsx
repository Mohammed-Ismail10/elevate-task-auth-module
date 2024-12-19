import { setSelectedOption } from "@/lib/answerSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Option({ answer, questionId }: any) {
  const { selectedOptions } = useSelector((state: any) => state.answer);
  const dispatch = useDispatch();
  // console.log(Object.keys(selectedOptions))
  return (
    <>
      <div className="flex items-center gap-2 mb-3 bg-[#EDEFF3] py-4 px-2 rounded-[10px]">
        <div>
          <input
            checked={selectedOptions[questionId] === answer.key}
            value={answer.key}
            onChange={() => {dispatch(setSelectedOption({ questionId, answerKey: answer.key }));}}
            className="border-[#02369C] size-5"
            type="radio"
            name={`option-${questionId}`}
          />
        </div>
        <div>
          <label>{answer.answer}</label>
        </div>
      </div>
    </>
  );
}
