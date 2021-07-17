import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { render } from "react-dom";
import AceEditor from "react-ace-builds";
import "react-ace-builds/webpack-resolver-min";
render( <
    AceEditor mode = "html"
    theme = "github"
    // onChange={onChange}
    name = "abcd" /
    > ,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();