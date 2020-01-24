import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from 'views/Home';
import Projects from 'views/Projects';
import WorkExperience from 'views/WorkExperience';
import NotFound from 'views/NotFound';

const routes = [{
  label: 'Proyectos',
  route: '/proyectos',
  Component: Projects
}, {
  label: 'Experiencia laboral',
  route: '/experiencia_laboral',
  Component: WorkExperience
}];

export default () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Home/>
      </Route>
      {routes.map(({label, route, Component}, key) =>
        <Route path={route} key={key}>
          <Component/>
        </Route>
      )}
      <Route>
        <NotFound/>
      </Route>
    </Switch>
  )
}

export {routes};
