import React from 'react';
import { useTimer } from 'react-timer-hook';
import {MdTimer} from  'react-icons/md';
function MyTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
 
 
  return (
    <div style={{textAlign: 'center'}}>
      <div style={{fontSize: '30px'}}>
        Update in   <br></br>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
        <br></br>
        <MdTimer></MdTimer>
      </div>
      
    </div>
  );
}
 
export default function Timer() {
  const time = new Date('December 23, 2020 23:15:30');
  //time = "2020-05-02T00:00:00";
  //time.setSeconds(time.getSeconds() + 600000); // 10 minutes timer
  //time.setDate(29);
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}