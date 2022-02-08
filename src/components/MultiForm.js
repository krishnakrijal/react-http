import React, { useState } from 'react';

const MultiForm = () => {

    const [data, setData] = useState({fName:'',lName:''});

    const dataEvent = event =>{
        const {name, value} = event.target;
        setData((preVal) =>{
           return {
               ...preVal,
               [name]:value
            }
        })
    }

    const clickSubmit = e =>{
        e.preventDefaut();
        alert('successful');
    }
    return (
        <>
        <div>
            Your Full Name is {data.fName} {data.lName}
            <form onSubmit={clickSubmit}>
            First Name : <input type = 'text' name='fName' 
            placeholder='Enter your first Name'
            value={data.fName}
            onChange ={dataEvent}
            /><br/>
            Last Name  : <input type = 'text' name='lName' 
            placeholder='Enter your first Name'
            value={data.lName}
            onChange ={dataEvent}/><br/>
            <button type="submit">Submit</button>

            </form>
           

        </div>
        </>

    );
    
}

export default MultiForm;