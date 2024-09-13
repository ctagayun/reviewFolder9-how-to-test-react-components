import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const title = 'Step1 Testing React with Webpack and Babel';

//Implement your entry point
ReactDOM.render(
  <App title={title} />,
  document.getElementById('app')
);

module.hot.accept();
