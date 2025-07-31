function App() {
  
  //moder syntex &  ES6 Arrow Function
  const testClick = () => {
    alert("Function work")
  }

  // function testClick() {
  //   alert("function call");
  // }
  return (
    <div>
      <h1>Omar Faruq React js Learning</h1>
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
      <button onClick={testClick}>Click me</button>
    </div>
  );
}
export default App;
