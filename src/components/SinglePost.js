import React from "react";
import { Button } from "@mui/material"
import { deletePost } from "../api"
import { Link } from 'react-router-dom'

const SinglePost = (props) => {

    const { id, title, description, location, price, willDeliver, isAuthor, setPosts, token, messages } = props

    const handleDelete = async (postID) => {
        console.log("postID:", postID)
        console.log("token", token)
        await deletePost(token, postID);
        setPosts((prevPosts) => 
            prevPosts.filter((post) => post._id !== postID)
        );
    }

    return (
        <div className="card">
            <div className="content">
                <div className="card-title">
                    <h2>{title}</h2>
                </div>
                <div className="card-description">
                    <h3>Info: {description}</h3>
                </div>
                <div className="card-location">
                    <h3>Location: {location}</h3>
                </div>
                <div className="card-price">
                    <h3>Price: {price}</h3>
                </div>
                <div className="card-deliver">
                    <h3>Will Deliver? {willDeliver ? "Yes" : "No"}</h3>
                </div>
                <div>
                    <Link to={`/posts/${id}`}>View Listing</Link>
                </div>
                <br />
                {isAuthor ? <h4><em>You posted this listing</em></h4> : null}
    
                {isAuthor ? <Button variant="contained" color="error" onClick={(() => handleDelete(id))}>
                    DELETE
                </Button> : null}
                <br/>
                <div className="comments-container">
                    {messages !== [] && isAuthor ? messages.map((comment) => {
                        return (
                            <div>
                                <h4>Comments:</h4>
                                <span>{comment.fromUser.username}</span>
                                <p>{comment.content}</p>
                            </div>
                        )
                    }) : null}
                </div>
            </div>
        </div>
    )
}

export { SinglePost }