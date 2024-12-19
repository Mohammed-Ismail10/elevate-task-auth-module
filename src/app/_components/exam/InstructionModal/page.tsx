import { Modal } from "flowbite-react";
import React, { useState } from "react";
import QuestionModal from "../questionModal/page";

export default function InstructionModal({ openModal, setOpenModal }: any) {

  const [openModal2, setOpenModal2] = useState(false);
  return (
    <>
      <Modal
        className="[&>div>div]:p-5"
        show={openModal}
        onClose={() => setOpenModal(false)}
      >
        <div>
          <div>
            <h4 className="font-medium text-2xl">Instructions</h4>
          </div>
          <div>
            <ul className="list-disc ps-7 mt-4">
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
            </ul>
          </div>
          <div className="mt-10">
            <button onClick={() => {setOpenModal2(true); setOpenModal(false)}} className="rounded-[100px] bg-[#4461F2] text-white py-2 px-4 font-medium w-full">
              Start
            </button>
          </div>
        </div>
      </Modal>

      <QuestionModal openModal2={openModal2} setOpenModal2={setOpenModal2} />
    </>
  );
}
