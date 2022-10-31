import React from "react";
import { Header } from "./Header.js"
import { Footer } from "./Footer.js"
import { Link } from "react-router-dom";

const Profile = ({ guest, logOut, profileObj }) => {

    return (<>
        <Header 
            guest={guest} 
            logOut={logOut}
        />
        <div>
            <div className="current-user">
                <h3>Current User:</h3>
                {profileObj.username}
            </div>
            <div className="profile-posts-container">
                <h3>Posts:</h3>
                <h4>Total Number of Posts: {profileObj.posts.length}</h4>
                {profileObj.posts !== [] ? profileObj.posts.map((post) => {
                    return (
                        <div className="profile-inner" key={profileObj.posts._id}>
                            <h3>{post.title}</h3>
                            <h4>Description: {post.description}</h4>
                            <h4>Price: {post.price}</h4>
                            <h4>Is this post active? {post.active ? "Yes" : "No"}</h4>
                            <Link to={`/posts/${post._id}`}>View Listing</Link>
                        </div>
                    )
                }) : null}
            </div>
            <div className="profile-messages-container">
                <h3>Messages:</h3>
                <h4>Total Number of Messages: {profileObj.messages.length}</h4>
                {profileObj.messages !== [] ? profileObj.messages.map((message) => {
                    return (
                        <div className="profile-inner" key={profileObj.messages._id}>
                            <h4>Message By: {message.fromUser.username}</h4>
                            <p>{message.content}</p>
                        </div>
                    )
                }) : null}
            </div>
        </div>
        <Footer />
    </>);
}

export default Profile;