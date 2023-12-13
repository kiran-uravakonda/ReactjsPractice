import Child2 from './Child2'
function Child1({fname,lname}){
    return(
      <div>
        <h1>child1 component </h1>
        <Child2 fname={fname} lname={lname}/>
      </div>
    )
  }
  export default Child1