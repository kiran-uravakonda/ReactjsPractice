import { useState,useEffect} from "react";
import Axios from "axios";
function CustomApi(url){
   let [value,updateValue]=useState([]);
   useEffect(()=>{
       Apicall(url);
   },[])

   async function Apicall(){
    var finalRes=await Axios(url);
        // var finalRes=res.json()
        updateValue(finalRes.data)
        console.log(finalRes.data)
    }
    return value;
}

export default CustomApi;