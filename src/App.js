import React,{useState, useEffect} from 'react'
import Product from './Components/Add'
import './App.css'
function App(){
  let [data,updateData]=useState([])
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>updateData(json))
  },[])

 if(data.length===0){
  return <h1>Fetched data is empty</h1>
 }
 return (
          <div className='product-list'>
          {
          data.map(item=>{
            return(
          
         <Product {...item}  key={item.id}/>

         
          
            )
           })
          }
          </div>
         )
  }



export default App;
