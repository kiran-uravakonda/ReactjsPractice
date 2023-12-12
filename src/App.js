import { useEffect, useRef } from "react";
import { useState } from "react";
function App() {
  const [val,setValue]=useState("");

  const count=useRef(0);
  // console.log(count)

  useEffect(()=>{
    count.current=count.current+1;
  })
  // let res=useRef(0)  // variable declared  with useRef
//  console.log(res)

// let a=100 // variable declared  without useRef
  return (
    <div>

           
      <input type="text" value={val} onChange={(event)=>{
         setValue(event.target.value);
         
      }} />

      <h1>count is:{count.current}</h1>





     {/* <h1>useRef value is:{res.current}</h1>
     <h1>a value is:{a}</h1>
     <button onClick={()=>{
      res.current=res.current+1;
       console.log(res.current)
       a=a+10
       console.log(a)
       setValue(val+1)
     }}>Add</button> */}
      
      {/* <h1 ref={res}>kiran</h1>
      <button onClick={()=>{
        console.log(res.current)
        console.log(res)
        res.current.innerHTML="ReactJs"

        }}>Submit</button> */}
    </div>
  )
}
export default App;
