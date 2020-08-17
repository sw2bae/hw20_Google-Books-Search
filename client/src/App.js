import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search"
import Saved from "./pages/Saved";
import Home from "./pages/Home";
import Nav from "./components/nav";
import Main from "./components/main";
import Footer from "./components/footer";



function App() {
  return (

    <Router>
      <Nav />
      <Main />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/saved/" component={Saved} />
      </Switch>
      <Footer />
    </Router>

  );
}


export default App;
