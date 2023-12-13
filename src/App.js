import useCustomApi from "./utlis";
function App() {
  var val=useCustomApi('https://fakestoreapi.com/products?limit=5')
return(
  <div>
    <h1>Custom Hooks</h1>
    {
      val.map((ele)=>{
  return(
    <h1 key={ele.id}> {ele.title}</h1>
  )
      })
    }
    
  </div>
)
}
export default App;
