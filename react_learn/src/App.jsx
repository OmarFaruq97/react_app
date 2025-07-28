import Picture from './UserComponent';
function Fruit() {
  return (
    <div>
      <h1>Main Component</h1>
      <Color></Color>
      <Fish></Fish>
      <Car></Car>
      {sum()}
    </div>
  );
}
function Color(){
  return(
    <div>
      <h1>Red</h1>
    <Picture/>
    </div>
  )
}
function Fish(){
  return(
    <h2>Hilsha Fish</h2>
  )
}
function Car(){
  return(
    <h3>BMW</h3>
  )
}
function sum(){
  return 10+10  
}
export default Fruit;
