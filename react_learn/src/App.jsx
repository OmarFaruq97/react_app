import Login, {Profile, Image, Setting} from './UserComponent'
function App(){
  return(
    <div>
      <h1>Import and Export Components as User Profile</h1>
      <Login/>
      <Profile/>
      <Image/>
      <Setting/>
    </div>
  )
}
export default App;