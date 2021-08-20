import { BrowserRouter, Redirect, Route } from "react-router-dom";
import React, { useState } from "react";

import Header from "./Components/Header";
import About from "./Pages/About";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Path from "./Pages/Path";
import Profile from "./Pages/Profile";

import "./App.css";

function App() {
  const [login, setLogin] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <button onClick={() => setLogin(!login)}>
          {login ? "logout" : "login"}
        </button>
      </div>

      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} exact />
      <Route path="/profile" exact>
       <Profile login={login}/>
      </Route>
      <Route component={Error} exact />
      <Route path="/path/:id" component={Path} />
    </BrowserRouter>
  );
}

export default App;
