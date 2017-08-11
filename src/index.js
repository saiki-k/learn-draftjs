import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import registerServiceWorker from './sw';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
