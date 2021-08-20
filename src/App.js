import { BrowserRouter, Redirect, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import About from "./Pages/About";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Path from "./Pages/Path";
import Profile from "./Pages/Profile";
import React, { useState } from "react";

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
        {login ? <Profile /> : <Redirect to="/" />}
      </Route>
      <Route component={Error} exact />
      <Route path="/path/:id" component={Path} />
    </BrowserRouter>
  );
}

export default App;
