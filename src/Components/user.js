import { useParams,useLocation} from "react-router-dom";
function User(){
    let {id,name}=useParams();

    let res=useLocation();
    let finalRes=new URLSearchParams(res.search)
   let pages=finalRes.get('posts')
    return(
        <div>
            <h1>welcome to user page</h1>
             
            <h1>id is:{id}</h1>
            <h1>name is:{name}</h1>
            <h1>pages is:{pages}</h1>
        </div>
    )
}




export default User;