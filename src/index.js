import React from  'react';
import ReactDOM  from 'react-dom';

// const el= React.createElement(
//   'h1',
//   null,
//   'Hello Word, React.js!'
// );

const el =( <React.Fragment><h1> Hello Word</h1>
  <ul>
    <li>
      Первый
    </li>
    <li>
      Второй
    </li>
  </ul></React.Fragment>
  );
console.log(el);


ReactDOM.render(el, document.getElementById('root'));