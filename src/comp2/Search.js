import React, { useState } from 'react';
import Sresult from './Sresult';

const Search = () =>{

    const [value,setValue] = useState('');

    const inputHandle = (e)=>{
        setValue(e.target.value)
        
    }
    return(
        <>
      <input  placeholder="search..." 
               value = {value}
               type="text"
             onChange={inputHandle}
               />

               <Sresult name={value}/>
               </>
    );
}
export default Search;