import { createContext } from "react";
import Child1 from './Components/Child1'
export let context=createContext()
console.log(context.Provider)
function App(){
  var val="kiran"
  return(
  <div>
    <context.Provider value={val}>
      <h1>parent component</h1>
      <Child1/>
    </context.Provider>
  </div>
)
}
export default App;