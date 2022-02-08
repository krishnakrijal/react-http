import React,{useState,useEffect} from 'react';
import Axios from 'axios';

function DataFetching() {
    const [posts,setPost] = useState({})
    const [id,setId] = useState(1)
    const [idButtonClick,setIdButtonClick] = useState(1)
    useEffect(() =>{
        console.log('useEffect')
        Axios.get(`https://jsonplaceholder.typicode.com/posts/${idButtonClick}`)
        .then(res =>{
            console.log(res)
            setPost(res.data)
        })
        .catch(err =>{
            console.log('you got error')
        })

    },[idButtonClick])
     
    const buttonClick =() =>{
        setIdButtonClick(id)
    }


    return (
        <div>
            <input type='text' value={id} onChange={e =>setId(e.target.value)}/>
            <button type='button' onClick={buttonClick}>Click Post</button>
            
            {/* {<div>{post.title}</div> } */}
            
            
               <ul>{
                    posts.map(post => <li key={post.id}>{post.title}</li>)
               }
                </ul>
             
        </div>
    );
}

export default DataFetching;