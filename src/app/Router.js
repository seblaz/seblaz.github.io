import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";

export default ({children}) => {

  return (
    <Router>
      {children}
    </Router>
  );
}