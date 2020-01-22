import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import {Link, useLocation} from 'react-router-dom';
import Tab from '@material-ui/core/Tab';

const tabs = [{
  label: 'Proyectos',
  route: '/proyectos'
}, {
  label: 'Experiencia laboral',
  route: '/experiencia_laboral'
}];

export default ({tabsProps, tabProps, ...other}) => {
  const location = useLocation();
  const tab = location.pathname.split('/')[1];
  const currentTab = tabs.find(e => e.route === `/${tab}`) || false;

  return (
    <div {...other}>
      <Tabs
        value={currentTab && currentTab.route}
        {...tabsProps}
      >
        {tabs.map(({label, route}, key) =>
          <Tab
            key={key}
            to={route}
            label={label}
            value={route}
            component={Link}
            {...tabProps}
          />
        )}
      </Tabs>
    </div>
  )
}
