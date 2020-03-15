import React from 'react';
import Theme from 'app/Theme';
import Router from 'app/Router';
import Header from 'sections/Header';
import Footer from 'sections/Footer';
import Content from 'sections/Content';

import 'assets/css/app.css'
import ScrollToTop from "../components/ScrollToTop";


export default () => {
    return (
        <Theme>
            <Router>
                <ScrollToTop/>
                <Header/>
                <Content/>
                <Footer/>
            </Router>
        </Theme>
    )
}
