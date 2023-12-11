import { Outlet } from "react-router-dom";
import { Link} from "react-router-dom";
function User(){
    return(
        <div>

        <div>
            <button><Link to='orders'>Orders</Link></button>
            <button><Link to='profile'>Profile</Link></button>
        </div>

        <h1>Welcome to User Page</h1>
        <Outlet/>
        </div>
    )
}

export function Profile(){
    return(
        <div>
            <h1>This is user's profile</h1> 
        </div>
    )
}

export function Orders(){
    return(
        <div>
            <h1>This is user's orders</h1>
        </div>
    )
}

export default User;