import React, { Component } from 'react';
import Header from'./Components/Header/Header';
import Menu from './Components/Menu/Menu';
import Home from './Components/Home/Home';
import About from './Components/About/About'
import Contact from './Components/Contact/Contact';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
  let menuItems = [
      {
        name: "Home",
        subMenu: [],
        state: "/"
      },
      {
        name: "About",
        subMenu: [],
        state: "/about"
      },
      {
        name: "Classes",
        subMenu: ["Instructors"],
        state: ""
      },
      {
        name: "Contact",
        subMenu: [],
        state: "/contact"
      },
      {
        name: "Blog",
        subMenu: [],
        state: "/blog"
      }
    ]
  return (
    <div>  
      <Header/>
       <Router>
        <div className="content">
          <Menu menuItems = {menuItems}></Menu>
          <div  className="background-white">
            <Route exact path="" component={Home} ></Route>
            <Route path="/about" component={About} ></Route>
            <Route path="/contact" component={Contact}></Route>
          </div>
        </div>
      </Router>
    </div>   
    );
  }
}

export default App;
