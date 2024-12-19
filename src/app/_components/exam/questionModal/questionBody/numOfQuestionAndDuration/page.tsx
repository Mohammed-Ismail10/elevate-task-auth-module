import React from 'react'
import NumOfQuestion from './numOfQuestion/page'
import Duration from './duration/page'

export default function NumOfQuestionAndDuration({index, questions}: any) {
  return (
    <>
      <div className='flex justify-between'>
        <NumOfQuestion index={index} questions={questions} />
        <Duration  questions={questions} />
      </div>
    </>
  )
}
