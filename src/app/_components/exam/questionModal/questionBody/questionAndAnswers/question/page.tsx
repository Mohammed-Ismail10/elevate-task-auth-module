import React from 'react'

export default function Question({questions, index}: any) {
  return (
    <>
      <div>
        <h5 className='font-medium text-2xl'>{questions[index].question}</h5>
      </div>
    </>
  )
}
