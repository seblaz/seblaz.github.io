import React from 'react';
import Theme from 'app/Theme';
import Router from 'app/Router';
import Header from 'sections/Header';
import Footer from 'sections/Footer';
import Content from 'sections/Content';
import 'assets/css/app.css'

export default () => {
  return (
    <Theme>
      <Router>
        <Header/>
        <Content/>
        <Footer/>
      </Router>
    </Theme>
  )
}
