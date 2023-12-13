import Child1 from './Components/Child1'
function App(){
  let firstName="kiran";
  let lastName="uravakonda";
return(
  <div>
    <h1>parent component</h1>
    <Child1 fname={firstName} lname={lastName}/>
  </div>
)
}
export default App;