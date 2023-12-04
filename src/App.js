import './App.css'
var isLogin=false;
let isAdmin=true
function App() {
  return (
    <div>
     <Header></Header>
    
     { 
      isAdmin &&  <Admin/>
     }
    </div>
  );
}

function Header(){
  return(
    <div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        {
          isLogin?<li>Logout</li>:<li>Login</li>
        }
      </ul>
    </div>
  )
}

function Admin(){
  return(
    <h1>Welcome to the Admin page</h1>
  )
}

export default App;
