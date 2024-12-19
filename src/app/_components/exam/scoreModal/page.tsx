import { Modal } from "flowbite-react";
import React from "react";
import { useSelector } from "react-redux";

export default function ScoreModal({
  openModal3,
  setOpenModal3,
  questions,
  setOpenModal2,
}: any) {
  const { userAnswers } = useSelector((state: any) => state.answer);

  return (
    <>
      <Modal
        className="[&>div>div]:p-5"
        show={openModal3}
        onClose={() => setOpenModal3(false)}
      >
        <div>
          <h5 className="font-medium text-2xl">Your Score</h5>
        </div>

        <div className="flex justify-center items-center gap-28 mt-10">
          <div>
            <span className="font-medium text-xl">{userAnswers.total}</span>
          </div>
          <div>
            <div className="flex justify-between items-center gap-7">
              <div>
                <span className="font-medium text-2xl text-[#02369C]">
                  Correct
                </span>
              </div>
              <div className=" size-8 rounded-full border border-[#02369C] flex justify-center items-center">
                <span className="font-medium text-[#02369C]">
                  {userAnswers.correct}
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center gap-7 mt-2">
              <div>
                <span className="font-medium text-2xl text-[#CC1010]">
                  Incorrect
                </span>
              </div>
              <div className=" size-8 rounded-full border border-[#CC1010] flex justify-center items-center">
                <span className="font-medium text-[#CC1010]">
                  {userAnswers.wrong}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between gap-12 mt-10">
          <div className="w-full">
            <button
              onClick={() => {
                setOpenModal3(false);
                setOpenModal2(false);
              }}
              className="w-full border border-[#4461F2] rounded-[100px] py-2.5 px-6 font-medium text-[#4461F2] text-2xl"
            >
              Back
            </button>
          </div>
          <div className="w-full">
            <button
              className={`w-full bg-[#4461F2] text-white rounded-[100px] font-medium text-2xl py-2.5 px-6 disabled:bg-[#1D1B201F] disabled:text-[#7f7f7f]`}
            >
              Show results
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
