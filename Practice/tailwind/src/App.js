import './App.css';
import Logo from './images/logo-1-1.png';
import Header from './Header';
import { useState } from 'react';

function App() {
  let templete = '';
  let [count, setCount] = useState(1);
  let [pshow, setPshow] = useState(false);

  if (pshow) {
    templete = 
    <>
    <button className='bg-red-400 p-[10px] text-white' onClick={()=>setPshow(!pshow)}>Hide</button>
    <p>Welcome to LEED</p>
    </>
  }
  else {
    templete = <button className='bg-red-400 p-[10px] text-white' onClick={()=>setPshow(!pshow)}>Show</button>
  };

  // let n=10;
  let displayData = () => {
    console.log(count)
    setCount(count + 5);
    // n++
    // console.log(n);
    // alert("Welcome to LEED")
  };
  let addData = (a, b) => {
    console.log(a + b);
  }
  return (
    <div className="App">
      {templete}

      <div>
        {count}
      </div>

      <button className='bg-red-400 p-[10px] mr-4' onClick={() => addData(20, 40)}>Add Data</button>
      <button className='bg-red-400 p-[10px]' onClick={displayData}>Save</button>
      <img width={200} height={150} src={Logo} alt='LEED LOGO' />
      <Header />
      <h1 className='text-[40px] text-violet-600 font-bold'>Welcome to LEED</h1>
    </div>
  );
}

export default App;
