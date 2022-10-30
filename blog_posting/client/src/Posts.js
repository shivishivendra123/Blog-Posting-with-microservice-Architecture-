import React from "react";
import axios from 'axios'; 
import { useState } from "react";

export default  function Posts(){

    const [ title,setTitle ] = useState('');

    const onSubmit =  async(event)=>{
        event.preventDefault();
        await axios.post('http://localhost:4000/posts',{
            title
        });
        setTitle('');
    };

    return(
      <div>
          <form onSubmit={ onSubmit }>
          <div className="form-group">
            <label >Post Title</label>
            <input type="texts" value = { title } onChange= { e=>setTitle(e.target.value) } className="form-control" aria-describedby="emailHelp" placeholder="Enter Title"/>
            <small id="emailHelp" className="form-text text-muted">Enter Title here</small>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
         
    )
}