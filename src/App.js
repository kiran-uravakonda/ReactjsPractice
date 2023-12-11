import Home from './Components/Home';
import About from './Components/about';
import Contact from './Components/contact';
import User from './Components/user'
import { BrowserRouter , Routes, Route,Link} from "react-router-dom";


function App() {
  
  return (
    <div>
       <BrowserRouter>
       <Linked/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/user/:id/:name' element={<User/>}/>
       </Routes>
       </BrowserRouter>
    </div>
  )
}

function Linked(){
  return(
    <div>
      <ul>
        <li>
        <Link to='/'>Home</Link>
        </li>
        <li>
  
      <Link to='/about'>About</Link>
     
        </li>

        <li>
        
      <Link to='/contact'>Contact</Link>
     
        </li>
        <li>
      <Link to='/user/500/kiran?posts=200'>User</Link>
        </li>
      </ul>
    </div>
  )
}

export default App;
