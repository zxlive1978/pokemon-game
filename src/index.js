import React from  'react';
import ReactDOM  from 'react-dom';

// const el= React.createElement(
//   'h1',
//   null,
//   'Hello Word, React.js!'
// );

const Applist =()=> {
  const items= ['Items 1','Items 2'];
  return(
    <ul>
      <li>
           {items[0]} 
          </li>
          <li>
            {items[1]}
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