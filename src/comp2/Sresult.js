import React from 'react';

const Sresult = ({name}) =>{
     
    const url=`https://source.unsplash.com/300x400/?${name}`;
    return(
        <>
        <img src={url} alt="search"/>
        </>
    )
}
export default Sresult;