import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";


const PrivateRoutes = ({ children }) => {

    const location = useLocation()
    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if (user) {
        return children
    }



    return <Navigate to={'/login'} state={{ from: location }}></Navigate>
};

export default PrivateRoutes;