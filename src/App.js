import logo from './logo.svg';
import './App.css';
import TestApp from './components/TestApp';

import {useState} from 'react';


function App() {

  const{counter, setcounter} = useState(100);


  const incrace =(data)=>{
    setcounter(counter + data)
  }
  const decrace = (data) => {
    setcounter (counter - data)
  }
  // let counter = 0;
  // const increace =() =>{
  //   counter ++;
  //   console.log(counter)
  // }
  // const decreace =() =>{
  //   counter --;
  //   console.log(counter)
  // }

  return (
    <div className='state'>
      <p>this is number of 0 {counter} </p>

      <button onClick={()=>incrace(1)}>
        this number incrace 1</button>
        <button onClick={()=>incrace(100)}>
        this number incrace 100</button>
        <button onClick={()=>incrace(300)}>
        this number incrace 300</button>

      <button onClick={() => decrace(1)}>
        this number decrace  1</button>
        <button onClick={() => decrace(70)}>
        this number decrace  70</button>
        <button onClick={() => decrace(200)}>
        this number decrace  200</button>
    </div>
  );
}

export default App;
 