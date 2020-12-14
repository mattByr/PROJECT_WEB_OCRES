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

 
export default function Timer(props) {
 
  var tampon
  if(props.timeMaj != null)
  {
  const timeTab = props.timeMaj
  //timeTab.time.map(element => {
    tampon = timeTab.time[0].timeMaj
 // });
  }
  
  var test = new Date("2020-12-22T00:00:00.000Z")


  if (tampon != null)
  {
   test = new Date(tampon); 
  }

  //time.setDate(22);
  
  return (
    <div>
      <MyTimer expiryTimestamp={test} />
    </div>
  );
}