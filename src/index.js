import React from  'react';
import ReactDOM  from 'react-dom';
import './index.css';

import HeaderBlock from './components/HeaderBlock';

// const el= React.createElement(
//   'h1',
//   null,
//   'Hello Word, React.js!'
// );

const Applist =()=> {
  const items= ['Items 1','Items 2', 'Items 3','Items 4'];
  const firstelment =<li> Item 0</li> 
  const isAuth = true
  return(
    <ul>
      {
        isAuth ? firstelment : null
      }
      {items.map( item=><li>{item}</li>)}
        <li>{items[0]} </li>
        <li>{items[1]}</li>
        </ul>
  );
}

const Apppinput=()=>{
  
  const placeholder="Text search";

  return(
    
    <label htmlFor="search">
      
      <input id ="seacrh" placeholder={placeholder} />
    </label>
  )
}
const Appheader=()=> {

return (
<h1
 className="header"
 > This header
 
 </h1>
);
};

const App=()=>{
return(<>
  <Appheader />
    <Apppinput />
    <Applist />
    <Appheader />
    <Applist />
</>
)

}



ReactDOM.render(<App />, document.getElementById('root'));