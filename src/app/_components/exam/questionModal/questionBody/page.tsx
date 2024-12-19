import React from 'react'
import NumOfQuestionAndDuration from './numOfQuestionAndDuration/page'
import Indecator from './Indecator/page'
import QuestionAndAnswers from './questionAndAnswers/page'
import Buttons from './buttons/page'

export default function QuestionBody({questions, index, setIndex, setOpenModal2}: any) {
  return (
    <>
      <NumOfQuestionAndDuration index={index} questions={questions} />
      <Indecator questions={questions} index={index} />
      <QuestionAndAnswers questions={questions} index={index} />
      <Buttons index={index} setIndex={setIndex} questions={questions} setOpenModal2={setOpenModal2}/>
    </>
  )
}
