import Child3 from './Child3'
import { useContext } from 'react'
import { context } from '../App'
function Child2(){
    var data=useContext(context)
    return(
      <div>
        <h1>child2 component </h1>
        <h1>{data}</h1>
        <Child3/>
      </div>
    )
  }
  export default Child2