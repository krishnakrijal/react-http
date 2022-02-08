import React, { useState,useEffect,useReducer } from 'react';

const initialState = [];
const reducer = (state,action) => {
    switch (action.type){
        case 'POPULATE_NOTE':
        return action.notes;
        case 'ADD_NOTE':
            return [...state,{body:action.body,title:action.title}];
        case 'REMOVE_Note': 
        return state.filter(note=>note.title !== action.title)

        default: return state;
    }
}
function Krishna1() {
    //const [notes,setNotes] = useState([]);
    const [notes,dispatch] = useReducer(reducer,initialState)
    const [title,setTitle] = useState('');
    const [body,setBody] =  useState('');

    const addTitle = e =>{
        e.preventDefault();
        dispatch({
            type:'ADD_NOTES',
            title,
            body
           })
        setTitle('')
        setBody('')
    }
    const removeTitle =(title)=>{
        //setNotes(notes.filter((note)=>note.title !== title))
        dispatch({
            type:'REMOVE_NOTE',
            title,
            
        })

    }
    useEffect(()=>{
        console.log('get item use effect')
        const notesData = JSON.parse(localStorage.getItem('notes'))
         if (notesData){
            dispatch({
                type:'POPULATE_NOTES',
                notes:notesData
            })
         }

    },[])

    useEffect(()=>{
        console.log('set item use effect')
        localStorage.setItem('notes',JSON.stringify(notes))
    },[notes])
    return (
        <div>
            <h3>Notes:</h3>
            {notes.map((note) => <div key={note.title}>{
            note.title}{note.body} 
            <button onClick={()=>removeTitle(note.title)}>X</button>
            </div>)}
            <form onSubmit={addTitle}>
            <input value={title} onChange={e => setTitle(e.target.value)}/>
            <textarea value={body} onChange={e=>setBody(e.target.value)}></textarea>
            <button>Add Title</button>
            </form>
            
            
        </div>
    );
}

export default Krishna1;