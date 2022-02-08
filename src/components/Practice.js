import React,{useReducer} from 'react';
const initialState={
    name:'krishna',
    age:36,
    profession:'web developer'
}
const reducer=(state,action)=>{
    switch(action.type){
        case 'CHANGE_NAME':
            return {...state,name:action.payload}
            case 'CHANGE_AGE':
                return {...state,age:action.payload}
                case 'CHANGE_PROFESSION':
                    return{...state,profession:action.payload}

        default:
            return state
    }
}

const Practice = () => {
    const [data,dispatch]= useReducer(reducer,initialState)
    return (
        <div>
            <h2>My name is {data.name} and My age is {data.age} and profession is {data.profession}</h2>
            <button onClick={()=>dispatch({type:"CHANGE_NAME",payload:'hari'})}>change Name</button>
            <button onClick={()=>dispatch({type:"CHANGE_AGE",payload:46})}>change age</button>
            <button onClick={()=>dispatch({type:"CHANGE_PROFESSION",payload:'JAVA DEVELOPER'})}>change profession</button>
        </div>
    );
};

export default Practice;