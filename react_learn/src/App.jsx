import Login, {Profile, Image, Setting, UserKey, Add} from './UserComponent'
function App(){
  return(
    <div>
      <h1>Import and Export Components as User Profile</h1>
      <Login/>
      <Profile/>
      <Image/>
      <Setting/>
      <h1>{UserKey}</h1>
      <Add/>      
    </div>
  )
}
export default App;