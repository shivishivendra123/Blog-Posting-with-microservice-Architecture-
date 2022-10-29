import React from "react";
import Posts from "./Posts";
import AllPosts from "./PostsList";
export default function App(){
    return (<div className="container">
        <Posts/>
        <AllPosts/>
    </div>)
}