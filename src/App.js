import React ,{useState,useEffect} from 'react'
function App() {
  let [update,setUpdate]=useState(0)
 useEffect(()=>{
  console.log("use effect")
 },[update])

//  useEffect(()=>{
//   console.log("use effect")
//  },[])

//  useEffect(()=>{
//   console.log("use effect")
//  })
 
function Increase(){
     setUpdate(update+1)
}

  return (
    <div>
      {console.log("functional compont")}
     <h1>Functional Component</h1>
     <h1>value is:{update}</h1>
     <button onClick={Increase}>click</button>
    </div>
  );

  }



export default App;
