import React from "react";
import { useState } from "react";
import axio from "axios";
import { useEffect } from "react";
import { useReducer } from "react";
export default function AddComment({ postId }){

    const [ content,SetContent ] = useState('');
    const [commentList , SetCommentList ] = useState([]);
    const [ reducerValue , ForceUpdate ] = useReducer(x=>x+1,0);

    const PostComment = async(event)=>{
        event.preventDefault();
        await axio.post(`http://localhost:4001/posts/${ postId }/comments`,{
            content
        });
        SetContent('');
        ForceUpdate();
    }
    const ShowCommentById = async()=>{
        const Comments = await axio.get(`http://localhost:4001/posts/${postId}/comments`);  
        SetCommentList(Comments.data);
    } 

    const RederList = commentList.map(comment=>{
        return (
            <div>
                <h2> { comment.content }</h2>
            </div>
        );
    });
    
    useEffect(()=>{
        ShowCommentById();
    },[reducerValue])

    return(
        <div>
            <form onSubmit={ PostComment }> 
            <div className="form-group">
            <label >Add your Comment</label>
            <input type="text" className="form-control" value = { content } onChange = { e=>SetContent(e.target.value)} placeholder="Write A comment"/>
            <small id="" className="form-text text-muted">Add your commnets</small>
            </div>
            <button type="submit" className="btn btn-primary">Comment</button>
        </form>
        <div>
            { RederList }
        </div>
        </div>
        
    );
}