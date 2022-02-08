import React, { useState,useMemo } from 'react';

function CounterUseMemo() {
    const [counterOne,setCounterOne]= useState(0)
    const [counterTwo,setCounterTwo] = useState(0)
    const handleClicked1 =() =>{
        setCounterOne(counterOne+1)
    }
    const handleClicked2 =() =>{
        setCounterTwo(counterTwo+1)
    }
    const isEven = useMemo(() => {
        let i=0
        while(i>10000) i++
        return counterOne % 2=== 0},[counterOne])
    
    return (
        <div>
           <div> <button onClick={handleClicked1}>CounterOne - {counterOne}</button>
            <span>{isEven ?'even':'odd'}</span> </div>
          <div> <button onClick ={handleClicked2}>CounterTwo -{counterTwo}</button></div>
            
        </div>
    );
}

export default CounterUseMemo;