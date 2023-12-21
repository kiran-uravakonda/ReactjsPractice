import './App.css'
import Child from './Components/Add'
import {useState} from 'react'
function App() {
  let[data,setData]=useState(['list1','list2'])

  let test=(item)=>{
    setData([...data,item])
  }
 return(
  <>
  <Child  add={test} />
 <ul>
    {
      data.map((t)=>(
        <li key={t}>{t}</li>
      ))
    }
 </ul>
  </>
 )
}

export default App;
