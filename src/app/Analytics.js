import {useEffect} from "react";
import ReactGA from 'react-ga';
import {useLocation} from "react-router";


export default ({children}) => {
    const location = useLocation();

    useEffect(() => {
        ReactGA.initialize('UA-163948163-1', {testMode: process.env.NODE_ENV === 'test'});
    });

    useEffect(() => {
        ReactGA.pageview(location.pathname + location.search);
    }, [location]);

    return children
}
