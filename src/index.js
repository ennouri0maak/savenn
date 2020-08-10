import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import About from "../src/components/about";
import Contact from "../src/components/contact";
import Navbar from "../src/components/navbar";
import Home from "../src/components/home";

import "./styles.css";
import FooterPage from "./components/footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/" component={Home}/>
            

          </Switch>
          <FooterPage  />

        </div>
      </div>
    </Router>

  );
}




const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

