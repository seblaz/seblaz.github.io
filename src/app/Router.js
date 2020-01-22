import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from 'sections/Header';
import Home from 'views/Home';
import Projects from 'views/Projects';
import WorkExperience from 'views/WorkExperience';
import NotFound from 'views/NotFound';

export default () => {

  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/proyectos'>
          <Projects/>
        </Route>
        <Route path='/experiencia_laboral'>
          <WorkExperience/>
        </Route>
        <Route>
          <NotFound/>
        </Route>
      </Switch>
    </Router>
  );
}