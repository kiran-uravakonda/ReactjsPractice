import { useState } from "react";

function Child(props){
let[val,setVal]=useState("")
  return(
    <>
  <input type="text" value={val} onChange={(e)=>{
       setVal(e.target.value);
  }}/>
  <button onClick={()=>{
     props.add(val)
  }}>submit</button>
    </>
  )
}
export default Child;