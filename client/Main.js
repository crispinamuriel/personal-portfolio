import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import Navbar from './Navbar';
import Projects from './Projects';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Landing from './Landing';

export default class Main extends React.Component {
  render () {
    return (
      <Router>
        <div id='main'>
          <div className='column container'>
            <div id='header'>
              <h1>Crispina R. Muriel</h1>
            </div>
            <Navbar />
          </div>
            <Route exact path="/projects"  component={Projects}  />
            <Route exact path="/about"  component={AboutMe}  />
            <Route exact path="/contact"  component={Contact}  />
            <Route exact path="/"  component={Landing}  />
        </div>
      </Router>
    )
  }
}
