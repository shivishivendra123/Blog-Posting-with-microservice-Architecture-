import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import AddComment from "./Comments";
import ShowAllComments from "./CommentsList";

export default function AllPosts(){
    const [allPosts , SetAllPosts] = useState({});
    const ShowAllPosts = async()=>{
        const AllPosts = await axios.get("http://localhost:4000/posts");
        SetAllPosts(AllPosts.data);
    };

    const DeletePost = (id)=>{
        axios.delete("http://localhost:4000/posts/"+id+"/delete");
    };

    useEffect(()=>{
        ShowAllPosts();
    },[]);

    const toberendered = Object.values(allPosts).map(post=>{
        return (
            <div className="card" style={{ width: '18rem', marginBottom:"10px" }}>
            <div className="card-body">
                <h5 className="card-title">{ post.id }</h5>
                <p className="card-text">{ post.title }</p>
                <a href="#" className="btn btn-danger" onClick={ ()=>DeletePost(post.id)}>Delete</a>
                <h3> commnets </h3>
                <AddComment postId={ post.id }/>
            </div>
            </div>
        );
    });
    return (
        <div className="d-flex flex-row flex-wrap justify-content">
                { toberendered  }
        </div>
    );
}