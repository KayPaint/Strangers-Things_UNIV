import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from "./components/Home.js";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import Posts from "./components/Posts.js";

const App = () => {

  const [posts, setPosts] = useState([]);

  return (<BrowserRouter>
    <Route path="/">
      <Home />
    </Route>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
    <Route path="/posts">
      <Posts posts={posts} setPosts={setPosts}/>
    </Route>
  </BrowserRouter>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
