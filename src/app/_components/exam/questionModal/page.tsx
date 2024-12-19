import { Modal } from "flowbite-react";
import React, { useEffect, useState } from "react";
import QuestionBody from "./questionBody/page";

export default function QuestionModal({ openModal2, setOpenModal2 }: any) {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  async function getQuestions() {
    try {
      const res = await fetch(
        "https://exam.elevateegy.com/api/v1/questions?exam=670070a830a3c3c1944a9c63",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            token: `${localStorage.getItem("examToken")}`,
          },
        }
      );
      const data = await res.json();
      setQuestions(data.questions);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <>
      <Modal
        className="[&>div>div]:p-5"
        show={openModal2}
        onClose={() => setOpenModal2(false)}
      >
        <QuestionBody
          questions={questions}
          index={index}
          setIndex={setIndex}
          setOpenModal2={setOpenModal2}
        />
      </Modal>

      
    </>
  );
}
