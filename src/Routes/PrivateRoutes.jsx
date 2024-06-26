
import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";



const PrivateRoutes = ({ children }) => {
const {loading,user} =UseAuth()
    const location = useLocation()
  

    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if (user) {
        return children
    }



    return <Navigate to={'/login'} state={{ from: location }}></Navigate>
};

export default PrivateRoutes;