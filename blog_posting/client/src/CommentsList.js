import React from "react";
import { useState } from "react";
import axio from 'axios';
import { useEffect } from "react";

export default function ShowAllComments({ postId} ){
    
    const [commentList , SetCommentList ] = useState([]);

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
    },[])

    return (
        <div>
            { RederList }
        </div>
    );
}