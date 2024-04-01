import {Route, Navigate, useLocation} from "react-router-dom"
import {useContext} from "react"
import AuthContext from "../context/AuthContext"


const TeacherRoute = ({children}) => {
    const location = useLocation()
    let {user} = useContext(AuthContext)
    console.log(user)
    if (!user){
        console.log("hhh");
       return <Navigate to="/login_page" 
       />
    }
    else if(user){
        if(user.is_staff){
            return children
        }
        else{
            return <Navigate to="/login_page" 
            /> 
        }
    }
}

export default TeacherRoute
