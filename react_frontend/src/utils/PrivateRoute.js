import {Route, Navigate, useLocation} from "react-router-dom"
import {useContext} from "react"
import AuthContext from "../context/AuthContext"


const PrivateRoute = ({children}) => {
    const location = useLocation()
    let {user} = useContext(AuthContext)
    console.log(user)
    if (!user){
        console.log("hhh");
       return <Navigate to="/login_page" 
    //    from={location}
       />
    }
    else{
        return children
    }
    // {!user? return  : children}
}

export default PrivateRoute
