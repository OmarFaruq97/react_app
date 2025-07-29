function Login() {
  return (
    <div>
      <h1>Login</h1>
    </div>
  );
}
export default Login;

export function Profile() {
  return (
    <div>
      <h2>Profile</h2>
    </div>
  );
}

export function Image() {
  return (
    <div>
      <p>Image</p>
      <img height={300}
      width={250}
        src="https://www.motorcyclevalley.com/images/wallpapers/Bajaj%20Pulsar%20N160-4-1669629558.jpg"
        alt="Picture for test"
      />
    </div>
  );
}

export function Setting() {
  return (
    <div>
      <h2>Setting</h2>
    </div>
  );
}

export const UserKey ="@#@#";

export function Add (){
  const result = 10+20;
  return(
    <div>
      {result}
    </div>
    
  )
}