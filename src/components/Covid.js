import React, { useState, useEffect } from 'react';
import axios from 'axios';
const url='https://covid19.mathdro.id/api';

function Covid() {
    const [data,setData] = useState({});
  
   

    useEffect(()=>{
        axios.get(url)
        .then(res=>{
            console.log(res.data)
            const {confirmed,recovered,deaths,lastUpdate}=res.data;
        
            const modifiedData ={
                confirmed,
                recovered,
                deaths,
                lastUpdate
            }
            setData({modifiedData})
            
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
    return (
        <div>
            {if(confirmed){} && <h}
            confirmed: {data.confirmed.value}
        </div>
    );
}

export default Covid;