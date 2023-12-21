import './App.css'
import Child from './Components/Add'
function App() {

  let data=(item)=>{
      return(
        <h1>{item}</h1>
      )
  }
  return(
<Child val={data}/>
  )
}

export default App;
