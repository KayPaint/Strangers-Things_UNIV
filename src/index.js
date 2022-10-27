import React, { useState } from 'react';
import { useEffect } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { fetchPosts } from "./api/index.js"

import Home from "./components/Home.js";
import AccountForm from "./components/AccountForm.js";
import Posts from "./components/Posts.js";

const App = () => {

  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState(window.localStorage.getItem("token")||"");

  useEffect(() => {
    const getPosts = async () => {
        try {
            let response = await fetchPosts();
            console.log("Response", response)
            setPosts(response)    
        } catch {
            console.error()
        }
    } 
    getPosts()
  }, []);

  useEffect(() => {
    window.localStorage.setItem("token", token)
  }, [token])

  return (
    <BrowserRouter>
    <div>
      <div className="nav">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/posts">Posts</Link>
        <div>
          {token ? (
            <button>Log Out</button>
          ) : (
            <>
                <Link className="nav-link" to="/account/login">Log In</Link>
                <Link className="nav-link" to="/account/register">Register User</Link>
            </>
          )}
        </div>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/account/:action">
          <AccountForm setToken={setToken} />
        </Route>
        <Route path="/posts">
          <Posts posts={posts} />
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
