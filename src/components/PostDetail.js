import React, { useState } from "react";
import { Header } from "./Header.js"
import { Footer } from "./Footer.js"
import { useParams } from "react-router-dom";
import { addMessage } from "../api/index.js";
import { SinglePost } from "./SinglePost.js"
import { Button } from "@mui/material";

const PostDetail = ({ posts, token, getPosts, logOut, guest}) => {

    const { postID } = useParams();
    const [message, setMessage] = useState('');

    const detailedPost = posts.find((post) => {
        const particularPost = post._id == postID
        return particularPost;
    })

    if (!detailedPost) {
        return (
            <h3>Loading...</h3>
        )
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        const response = await addMessage(token, postID, message);

        if (response) {
            console.log("Added new comment", response.message)
            await getPosts();
        } else {
            console.log("Failed to add new comment")
        }
    }

    return (<>
        <Header 
            logOut={logOut}
            guest={guest}
        />
        <SinglePost 
            title={detailedPost.title}
            description={detailedPost.description}
            location={detailedPost.location}
            price={detailedPost.price}
            willDeliver={detailedPost.willDeliver}
            isAuthor={detailedPost.isAuthor}
            messages={detailedPost.messages}
        />
        <form type="text">
            <input 
                type="text" 
                placeholder="Add New Comment" 
                value={message} 
                onChange={(event) => {
                    setMessage(event.target.value)
                }}>
            </input>
            <Button 
                variant="contained" 
                color="success" 
                onClick={onSubmitHandler}
            >
                Send Comment
            </Button>
        </form>
        <Footer />
    </>)
}

export default PostDetail;