import React, { useState } from 'react';
import { useEffect } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, useHistory } from 'react-router-dom'
import { fetchPosts, fetchGuest } from "./api/index.js"

import Home from "./components/Home.js";
import AccountForm from "./components/AccountForm.js";
import Posts from "./components/Posts.js";

const App = () => {

  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState(window.localStorage.getItem("token")||"");
  const [guest, setGuest] = useState(null);
  const history = useHistory();

  const logOut = () => {
    setToken("");
    setGuest(null);
    history.push("/");
  }

  useEffect(() => {
    const getPosts = async () => {
        // try {
        //     let response = await fetchPosts();
        //     console.log("Response", response)
        //     setPosts(response)    
        // } catch {
        //     console.error()
        // }
      const {error, posts} = await fetchPosts();

      if (error) {
        console.error(error)
      }

      setPosts(result);
    } 
    getPosts()
  }, []);

  useEffect(() => {
    if (token) {
      const getGuests = async () => {
        const {guest} = await fetchGuest(token);
        console.log("Username", guest);
        setGuest(guest.username)
      };
      getGuests()
    }
  }, [token]);

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
            <button onClick={logOut}>Log Out</button>
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
          <Home guest={guest}/>
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
