import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';


const data = window.__STATE__;
const div = document.getElementById('app');

ReactDOM.render(<App {...data} />, div);
