import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './landingpage';
import Contact from './contactme.js';
import About from './aboutme.js';
import Projects from './projects.js';
import Resume from './resume.js';
const Main = () => ( 
    <Switch>
     <Route exact path="/" component={LandingPage}/>
     <Route exact path="/contact" component={Contact}/>
     <Route exact path="/about" component={About}/>
     <Route exact path="/projects" component={Projects}/>
     <Route exact path="/resume" component={Resume}/>
    </Switch>
)

export default Main;