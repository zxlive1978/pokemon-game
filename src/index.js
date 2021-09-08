import React from  'react';
import ReactDOM  from 'react-dom';

// const el= React.createElement(
//   'h1',
//   null,
//   'Hello Word, React.js!'
// );

const Applist =()=> {
  return(
    <ul>
      <li>
            Первый
          </li>
          <li>
            Второй
          </li>
        </ul>
  );
}


const Appheader=()=> <h1> Hello Word</h1>;

const App=()=>{
return(<>
  <Appheader />
    <Applist />
    <Appheader />
    <Applist />
</>
)

}



ReactDOM.render(<App />, document.getElementById('root'));