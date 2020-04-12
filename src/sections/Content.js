import React from 'react';
import {Helmet} from "react-helmet";
import {Switch, Route} from 'react-router-dom';

import Home from 'views/Home';
import Projects from 'views/Projects';
import WorkExperience from 'views/WorkExperience';
import NotFound from 'views/NotFound';


const content = [{
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
                <Helmet title='Seblaz'/>
                <Home/>
            </Route>
            {content.map(({label, route, Component}, key) =>
                <Route exact path={route} key={key}>
                    <Helmet title={`Seblaz | ${label}`}/>
                    <Component/>
                </Route>
            )}
            <Route>
                <Helmet
                    title={'Seblaz | 404 Not Found'}
                    meta={[{name: 'ROBOTS', content: 'NOINDEX'}]}
                />
                <NotFound/>
            </Route>
        </Switch>
    )
}

export {content};
