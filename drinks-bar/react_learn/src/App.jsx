
import React, { useState } from 'react';
function App() {
  //moder syntex &  ES6 Arrow Function
  const testClick = (hobbies) => {
    alert(hobbies);
  };

  const conditionClick = (message) => {
    if (message === "Ride Bike") {
      alert("🚲Let's ride a bike");
    } else if (message === "Play Football") {
      alert("⚽Let's play football");
    }
  };

  // function testClick() {
  //   alert("function call");
  // }

  const [count, setCount] = useState(0);
  const increase = () => {
    setCount (count + 1);
  };

  
  return (
    <div>
      <div>
        <h2 style={{textAlign: "center", marginTop: "50px"}}>Counter App</h2>
        <h5>Count: {count}</h5>
        <button onClick={increase}>Increase</button>
        <button onClick={setCount}>Reset</button>
      </div>
      
      <h1  style={{ textAlign: "center", marginTop: "50px" }}>Omar Faruq React js Learning</h1>
      <img
        src="https://images.tractorjunction.com/5_Bajaj_Pulsar_N160_f00e3a2003.png?format=webp&quality=40"
        height={350}
        width={550}
      />

      <ul>
        <li>Name: Omar Faruq</li>
        <li>Designation: Software Engineer</li>
        <li>Hobbies: Football and time spend with family</li>
      </ul>
      <button onClick={() => testClick("🚲 Ride bike")}>Riding Bike</button>
      <button onClick={() => testClick("⚽ Play football")}>
        Playing Football
      </button>
      <div>
        <ul>
          <li>
            <button onClick={() => conditionClick("Ride Bike")}>
              Ride Bike?
            </button>
          </li>
          <li>
            <button onClick={() => conditionClick("Play Football")}>
              Play Football?
            </button>
          </li>
        </ul>
      </div>
      
    </div>
  );
}
export default App;
