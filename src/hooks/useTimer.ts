import {Dispatch, MutableRefObject, SetStateAction, useState} from 'react';

const useTimer = (
  setTimer: Dispatch<SetStateAction<string>>,
  intervalRef: MutableRefObject<NodeJS.Timer | null>,
) => {
  const [isTimeOut, setIsTimeOut] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(1);
  const getTimeRemaining = (endTime: number) => {
    const now = Date.now();
    const total = endTime - now;
    const seconds = Math.floor((total / 1000) % 60);
    const mins = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return {total, days, hours, mins, seconds};
  };

  const startTimer = (deadLine: number) => {
    let {total, days, hours, mins, seconds} = getTimeRemaining(deadLine);
    setTotal(total);
    if (total >= 0) {
      const _days = days > 0 ? `${days}d : ` : '';
      const _hours = hours > 9 ? hours : `0${hours}`;
      const _mins = mins > 9 ? mins : `0${mins}`;
      const _seconds = seconds > 9 ? seconds : `0${seconds}`;
      const fullTimeDisplay = `${_days}${_hours}h : ${_mins}min : ${_seconds}sec`;
      setTimer(fullTimeDisplay);
      if (total < 1000) {
        setIsTimeOut(true);
      } else {
        setIsTimeOut(false);
      }
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      setIsTimeOut(true);
      setTotal(0);
    }
  };

  const clearTimer = (endTime: number, defaultDisplay: string): void => {
    setTimer(defaultDisplay);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    const id = setInterval(() => {
      startTimer(endTime);
    }, 1000);
    intervalRef.current = id;
  };

  return {isTimeOut, clearTimer, total};
};

const getDeadLineTimer = ({
  mins,
  seconds,
}: {
  mins?: number;
  seconds?: number;
}): number => {
  let deadLine = new Date();
  if (mins) {
    deadLine.setMinutes(deadLine.getMinutes() + mins);
  }
  if (seconds) {
    deadLine.setSeconds(deadLine.getSeconds() + seconds);
  }
  return Date.parse(deadLine.toString());
};

export {useTimer, getDeadLineTimer};
