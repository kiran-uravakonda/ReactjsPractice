import { useContext } from 'react'
import { context } from '../App'
function Child3({val}){
    var data=useContext(context)
    return(
      <div>
        <h1>child3 component </h1>
        <h1>{data}</h1>
      </div>
    )
  }
  export default Child3