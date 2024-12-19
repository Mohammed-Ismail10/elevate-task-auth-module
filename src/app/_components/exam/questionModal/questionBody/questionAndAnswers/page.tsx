import React from "react";
import Question from "./question/page";
import Option from "./option/page";

export default function QuestionAndAnswers({ questions, index }: any) {
  return (
    <>
      <div className="mt-5">
        <Question questions={questions} index={index} />
        <div className="mt-5">
          {questions[index].answers.map((answer: any) => (
            <Option key={answer.key} answer={answer} index={index} questionId={questions[index]._id} />
          ))}
        </div>
      </div>
    </>
  );
}
