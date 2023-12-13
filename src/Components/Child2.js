import Child3 from './Child3'
function Child2({fname,lname}){
    return(
      <div>
        <h1>child2 component </h1>
        <Child3 fname={fname} lname={lname}/>
      </div>
    )
  }
  export default Child2