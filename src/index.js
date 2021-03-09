import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import 'normalize.css';
import App from './app';
import { GlobalStyles } from './global-style';

render(
    <Router>
        <GlobalStyles />
        <App />
    </Router>,
    document.getElementById('root')
);
