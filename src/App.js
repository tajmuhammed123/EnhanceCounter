import './App.css';
import Tt from './counter';
import axios from 'axios';
import { useState,useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(()=>{
    console.log('Mounting...');
    return()=>{
      console.log('unmounting...');
    }
  })

  const addCount = async () => {
    if(count<10){
      setCount(count + 1);
    fetchUser(count)
    }
  };
  const decCount = async () => {
    if(count>1){
      setCount(count - 1);
      fetchUser(count)
    }
  };
  const fetchUser = async (count) => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      const filteredData = response.data.filter((user) => user.id === count+1);

      if (filteredData.length > 0 && filteredData.length <10) {
        console.log(filteredData);
        setData(filteredData); // Set the filtered data and replace the old data
      } else {
        console.log('User not found.');
      }
  };

  return (
    <div className="App">
      <h1 style={{fontSize:'50px'}}>{count}</h1>
      {data.map((obj1, index) => {
        return (
          <div key={index}>
            <Tt {...obj1} />
          </div>
        );
      })}
      <button onClick={addCount} className='btn'>+</button><br/>
      <button onClick={decCount} className='btn'>-</button>
    </div>
  );
}

export default App;
