import React from  'react';
import reactDom from 'react-dom';

const el= React.createElement(
  'h1',
  null,
  'Hello Word, React.js!'
)

ReactDOM.render(el, document.getElementsById('root'));