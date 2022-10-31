import React, { useState } from 'react';
import { useEffect } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom'
import { fetchPosts, fetchGuest } from "./api/index.js"

import Home from "./components/Home.js";
import AccountForm from "./components/AccountForm.js";
import Posts from "./components/Posts.js";
import PostForm from "./components/PostForm.js"
import PostDetail from "./components/PostDetail.js"
import Profile from "./components/Profile.js"

const App = () => {

  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState(window.localStorage.getItem("token") || null);
  const [guest, setGuest] = useState(null);
  const [profileObj, setProfileObject] = useState(null);
  const history = useHistory();

  const logOut = () => {
    setToken(null);
    setGuest(null);
    setProfileObject(null);
    history.push("/");
    // ^^^^ For reasons I do not know, this yields an error, saying, ".push is undefined"
  }

  const getPosts = async () => {
      try {
          const response = await fetchPosts(token);
          console.log("getPosts Response:", response)
          setPosts(response)    
      } catch (error) {
          console.error("getPosts failed:", error)
      }
  } 

  useEffect(() => {
    getPosts()
  }, []);

  useEffect(() => {
    if (token) {
      console.log("Token:", token)

      const getGuest = async () => {
        try {
          const response = await fetchGuest(token);
          console.log("getGuest Response:", response)
          setGuest(response.username);
          setProfileObject(response);
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
      <Switch>
        <Route exact path="/">
          <Home 
            guest={guest} 
            logOut={logOut}
          />
        </Route>
        <Route path="/account/:action">
          <AccountForm 
            setToken={setToken} 
          />
        </Route>
        <Route path="/posts/create">
          <PostForm 
            token={token} 
            setPosts={setPosts} 
          />
        </Route>
        <Route path="/posts/:postID">
          <PostDetail 
            token={token}
            posts={posts}
            getPosts={getPosts}
            guest={guest}
            logOut={logOut}
          />
        </Route>
        <Route path="/posts">
          <Posts 
            guest={guest} 
            logOut={logOut} 
            posts={posts} 
            setPosts={setPosts} 
            token={token} />
        </Route>
        <Route>
          <Profile
            guest={guest} 
            logOut={logOut}
            profileObj={profileObj}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
