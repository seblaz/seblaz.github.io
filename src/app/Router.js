import React, {useEffect, useRef} from "react";
import {Router} from "react-router";
import {createBrowserHistory as createHistory} from "history";


/**
 * Same as BrowserRouter but doesn't push a location of it's the same
 * as the current location.
 */
export default (props) => {
    const history = createHistory(props);
    const prevHistoryPush = history.push;
    const lastLocation = useRef(null);

    useEffect(() => {
        // monkey patching to prevent pushing same url into history stack
        history.listen(location => {
            lastLocation.current = location
        });

        history.push = (pathname, state = {}) => {
            if (lastLocation.current === null ||
                pathname !== lastLocation.current.pathname + lastLocation.current.search + lastLocation.current.hash ||
                JSON.stringify(state) !== JSON.stringify(lastLocation.current.state)
            ) {
                prevHistoryPush(pathname, state)
            }
        };
    }, [prevHistoryPush, history]);

    return (
        <Router history={history} children={props.children}/>
    )
}
