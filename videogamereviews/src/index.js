import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './route.js';
import registerServiceWorker from './registerServiceWorker';

const mongoose = require('mongoose');

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
