import logo from './logo.svg';
import './App.css';
import Test from './Components/Test/Test';
import Test2 from './Components/Test2/Test2';
import Counter from './Components/Counter/Counter';
import { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import AllGun from './Components/AllGun/AllGun';


function App() { 
  
  const [count, setCount] = useState(0);
  const countIncrease = () => {
    setCount(count + 1);
  }
  //  const handleAdd = () => {
  //    // console.log("clicked");
  //    setCount(count + 1);
  //  };
  //  const handleMinus = () => {
  //    // console.log("clicked");
  //    setCount(count - 1);
  //  };
  // useState() ekta hook
  return (
    <div>
      {/* <Test name="Ramisa"></Test> */}
      {/* <Counter count={count} handleAdd ={handleAdd} handleMinus={handleMinus}></Counter> */}

      <Navbar count={count}></Navbar>
      <AllGun countIncrease={countIncrease}></AllGun>
    </div>
  );
}
export default App;
