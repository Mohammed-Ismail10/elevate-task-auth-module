import React, { useState, useEffect } from 'react';
import clock from '../../../../../../../images/image 2.png';
import Image from 'next/image';

export default function Duration({ questions }: any) {
  const initialDuration = questions[0]?.exam?.duration || 0; // تأكد من وجود البيانات
  const [remainingTime, setRemainingTime] = useState(initialDuration * 60); // بالثواني

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (remainingTime > 0) {
      intervalId = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => clearInterval(intervalId); // تنظيف المؤقت عند إلغاء التحميل أو التوقف
  }, [remainingTime]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  if (!questions || !questions[0] || !questions[0].exam || !questions[0].exam.duration){
    return <div>Loading duration...</div> // عرض رسالة انتظار لحين تحميل البيانات
  }

  return (
    <div className='flex items-center gap-2'>
      <div>
        <Image src={clock} alt='clock' />
      </div>
      <div>
        <span className='text-[#11CE19] text-[20px]'>
          {formatTime(remainingTime)}
        </span>
      </div>
    </div>
  );
}