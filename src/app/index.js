import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";

import Theme from 'app/Theme';
import ScrollToTop from "app/ScrollToTop";
import Background from "app/Background";
import Header from 'sections/Header';
import Footer from 'sections/Footer';
import Content from 'sections/Content';


export default () => {
    return (
        <Theme>
            <Router>
                <Background>
                <ScrollToTop/>
                <Header/>
                <Content/>
                <Footer/>
                </Background>
            </Router>
        </Theme>
    )
}
