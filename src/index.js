import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from "./components/Home.js";
import AccountForm from "./components/AccountForm.js";
import Posts from "./components/Posts.js";

const App = () => {

  const [posts, setPosts] = useState([]);

  return (<BrowserRouter>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/account">
      <AccountForm />
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
