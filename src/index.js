import React, { useState } from 'react';
import { useEffect } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, useHistory } from 'react-router-dom'
import { fetchPosts, fetchGuest } from "./api/index.js"
import { Button, Breadcrumbs } from '@mui/material';

import Home from "./components/Home.js";
import AccountForm from "./components/AccountForm.js";
import Posts from "./components/Posts.js";
import PostForm from "./components/PostForm.js"

const App = () => {

  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState(window.localStorage.getItem("token") || null);
  const [guest, setGuest] = useState(null);
  const history = useHistory();

  const logOut = () => {
    setToken(null);
    setGuest(null);
    history.push("/");
    // ^^^^ For reasons I do not know, this yields an error, saying, ".push is undefined"
  }

  useEffect(() => {
    const getPosts = async () => {
        try {
            const response = await fetchPosts();
            console.log("getPosts Response:", response)
            setPosts(response)    
        } catch (error) {
            console.error("getPosts failed:", error)
        }
    } 
    getPosts()
  }, []);

  useEffect(() => {
    if (token) {
      console.log("Token:", token)

      const getGuest = async () => {
        try {
          const response = await fetchGuest(token);
          console.log("getGuest Response:", response)
          setGuest(response.username)
        } catch (error) {
          console.error("getGuest failed:", error)
        }
      };
      getGuest()
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      window.localStorage.setItem("token", token)
    } else {
      window.localStorage.removeItem("token", token)
    }
    
  }, [token])

  return (
    <BrowserRouter>
    <Breadcrumbs>
      <Link to="/" underline="hover" color="inherit">Home</Link>
      <Link to="/posts" underline="hover" color="inherit">Posts</Link>
      {guest ? (
            <Button variant="outlined" onClick={logOut}>Log Out</Button>
          ) : (
            <Breadcrumbs>
                <Link to="/account/login">Log In</Link>
                <Link to="/account/register">Register User</Link>
            </Breadcrumbs>
            
            // For some reason, ^^^^ randomly when no token, and logged out, the log out button is visible
          )}
    </Breadcrumbs>
    {/* <div>
      <div className="nav">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/posts">Posts</Link>
        <div>
          {guest ? (
            <button onClick={logOut}>Log Out</button>
          ) : (
            <>
                <Link className="nav-link" to="/account/login">Log In</Link>
                <Link className="nav-link" to="/account/register">Register User</Link>
            </>
            // For some reason, ^^^^ randomly when no token, and logged out, the log out button is visible
          )}
        </div>
      </div> */}
      <Switch>
        <Route exact path="/">
          <Home guest={guest}/>
        </Route>
        <Route path="/account/:action">
          <AccountForm setToken={setToken} />
        </Route>
        <Route path="/posts/create">
          <PostForm token={token} setPosts={setPosts} />
        </Route>
        <Route path="/posts">
          <Posts posts={posts} />
        </Route>
      </Switch>
    {/* </div> */}
    </BrowserRouter>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
