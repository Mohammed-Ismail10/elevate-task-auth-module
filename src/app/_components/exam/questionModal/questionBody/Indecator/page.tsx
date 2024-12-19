import React from 'react'

export default function Indecator({ questions, index }: any) {
  return (
    <>
      <div className='flex justify-around items-center mt-5 gap-2'>
        {questions.map((question: any, i: number) => (
          <div
            key={question._id}
            className={
              i <= index
                ? 'size-2.5 rounded-full bg-[#4461F2]' // الأزرق حتى السؤال الحالي
                : 'size-2.5 rounded-full bg-[#D9D9D9]' // الرمادي لبقية الأسئلة
            }
          ></div>
        ))}
      </div>
    </>
  )
}
