'use client';

import { useEffect, useState, useCallback, useRef } from 'react';

const COUNTDOWN_TARGET = '2023-08-05';

const Timer1 = () => {
  const year = new Date().getFullYear().toString().substr(-2);
  const [countDownTime, setCountDownTIme] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });
  let intervalId: any;
  const intervalIdRef = useRef(intervalId);
  const getTimeDiffrence = (countDownTime: number) => {
    const currentTime = new Date().getTime();
    const timeDiffrence = countDownTime - currentTime;
    let days =
      Math.floor(timeDiffrence / (24 * 60 * 60 * 1000)) >= 10
        ? `${Math.floor(timeDiffrence / (24 * 60 * 60 * 1000))}`
        : `0${Math.floor(timeDiffrence / (24 * 60 * 60 * 1000))}`;
    const hours =
      Math.floor((timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)) >= 10
        ? `${Math.floor((timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60))}`
        : `0${Math.floor((timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60))}`;
    const minutes =
      Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60)) >= 10
        ? `${Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60))}`
        : `0${Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60))}`;
    const seconds =
      Math.floor((timeDiffrence % (60 * 1000)) / 1000) >= 10
        ? `${Math.floor((timeDiffrence % (60 * 1000)) / 1000)}`
        : `0${Math.floor((timeDiffrence % (60 * 1000)) / 1000)}`;
    if (timeDiffrence < 0) {
      setCountDownTIme({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
      });
      clearInterval(intervalIdRef.current);
    } else {
      setCountDownTIme({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      });
    }
  };
  const startCountDown = useCallback(() => {
    {
      const countDownDate = new Date(COUNTDOWN_TARGET);
      intervalIdRef.current = setInterval(() => {
        getTimeDiffrence(countDownDate.getTime());
      }, 1000);
    }
  }, [intervalIdRef]);
  useEffect(() => {
    startCountDown();
  }, [startCountDown]);
  return (
    <div>
      <p className="my-6">
        <span className="font-semibold">You want to be an early app adopter ?</span> The first 100 subscribers will get
        a free subscription! Offer valid until August 5th
      </p>
      <div className="flex items-center justify-center gap-2">
        <div className="flex flex-col gap-1 ">
          <div className="flex gap-1">
            <span className="rounded bg-yellow-800 px-2 py-1 text-[10px] font-semibold text-[#FBFAF8]  drop-shadow-xl sm:text-[20px]">
              {countDownTime?.days?.charAt(0)}
            </span>
            <span className="rounded bg-yellow-800 px-2 py-1 text-[10px] font-semibold text-[#FBFAF8]  drop-shadow-xl sm:text-[20px]">
              {countDownTime?.days?.charAt(1)}
            </span>
            <span
              className={
                countDownTime?.days?.length <= 2
                  ? 'hidden'
                  : 'rounded bg-yellow-800 px-2 py-1 text-[10px] font-semibold text-[#FBFAF8]  drop-shadow-xl sm:text-[20px]'
              }
            >
              {countDownTime?.days?.charAt(2)}
            </span>
          </div>
          <div className="text-center text-sm">Days</div>
        </div>
        <span className="text-[10px] text-[#FBFAF8] sm:text-[20px]">:</span>
        <div className="flex flex-col gap-1">
          <div className="flex gap-1">
            <span className="rounded bg-yellow-800 px-2 py-1 text-[10px] font-semibold text-[#FBFAF8]  drop-shadow-xl sm:text-[20px]">
              {countDownTime?.hours?.charAt(0)}
            </span>
            <span className="rounded bg-yellow-800 px-2 py-1 text-[10px] font-semibold text-[#FBFAF8]  drop-shadow-xl sm:text-[20px]">
              {countDownTime?.hours?.charAt(1)}
            </span>
          </div>
          <div className="text-center text-sm">Hours</div>
        </div>
        <span className="text-[10px] text-[#FBFAF8] sm:text-[20px]">:</span>
        <div className="flex flex-col gap-1">
          <div className="flex gap-1">
            <span className="rounded bg-yellow-800 px-2 py-1 text-[10px] font-semibold text-[#FBFAF8]  drop-shadow-xl sm:text-[20px]">
              {countDownTime?.minutes?.charAt(0)}
            </span>
            <span className="rounded bg-yellow-800 px-2 py-1 text-[10px] font-semibold text-[#FBFAF8]  drop-shadow-xl sm:text-[20px]">
              {countDownTime?.minutes?.charAt(1)}
            </span>
          </div>
          <div className="text-center text-sm">Minutes</div>
        </div>
        <span className="text-[10px] text-[#FBFAF8] sm:text-[20px]">:</span>
        <div className="flex flex-col gap-1">
          <div className="flex gap-1">
            <span className="rounded bg-yellow-800 px-2 py-1 text-[10px] font-semibold text-[#FBFAF8]  drop-shadow-xl sm:text-[20px]">
              {countDownTime?.seconds?.charAt(0)}
            </span>
            <span className="rounded bg-yellow-800 px-2 py-1 text-[10px] font-semibold text-[#FBFAF8]  drop-shadow-xl sm:text-[20px]">
              {countDownTime?.seconds?.charAt(1)}
            </span>
          </div>
          <div className="text-center text-sm">Seconds</div>
        </div>
      </div>
    </div>
  );
};
export default Timer1;
