import React from 'react'
import Barchart from '../../molecule/barchart/Barchart';

const data = [
    { name: "S", Request: 245, Earnings: 233},
    { name: "M", Request: 815, Earnings: 801,},
    { name: "T", Request: 740, Earnings: 706,},
    { name: "W", Request: 825, Earnings: 812,},
    { name: "T", Request: 975, Earnings: 952,},
    { name: "F", Request: 947, Earnings: 921,},
    { name: "S", Request: 581, Earnings: 540,}
];
export default function IncomingRequest() {
  
  return (
    <Barchart data={data} title={'Incoming Request'} keyData={'Request'}/>
  )
}
