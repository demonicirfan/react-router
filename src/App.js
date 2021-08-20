import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import About from "./Pages/About";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
      </div>

      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} exact />
      <Route path="/profile" component={Profile} exact />
      <Route component={Error} exact />
      <Route path="/post" component={Post}/>
    </BrowserRouter>
  );
}

export default App;
