import React,{useState} from 'react'

function App() {
  let[isLogin,setLogin]=useState(false)
  return (
    <div>
      {isLogin ? (
        <div>
          <h1>Welcome Back</h1>
          <button onClick={Logout}>logout</button>
        </div>
      ) : (
        <div>
          <h1>Please Login</h1>
          <button onClick={Login}>login</button>
        </div>
      )}
    </div>
  );

  function Login(){
      setLogin(true)
  }
  function Logout(){
    setLogin(false)
  }
  
}





export default App;
