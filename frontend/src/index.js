import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './components/App';
import ReadMe from './components/ReadMe';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {createBrowserHistory as history} from "history";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter history={history}>
        <Routes>
            <Route path="/" element={<App aria-labelledby="Displays the main application" />} />
            <Route path="/readme" element={<ReadMe aria-labelledby="Displays the demo" />} />
        </Routes>
    </BrowserRouter>
);
