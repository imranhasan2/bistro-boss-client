import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import OurMenu from "../Pages/Menu/OurMenu";
import OrderFood from "../Pages/Order/Order/OrderFood";
import Login from "../Pages/Login/Login";
import SignUp from "../SignUp/SignUp";
import Secret from "../Pages/Shared/Secret/Secret";
import PrivateRoutes from "./PrivateRoutes";
import DashBoard from "../Layout/DashBoard/DashBoard";
import Cart from "../Pages/DashBoard/Cart/Cart";
import AllUsers from "../Layout/DashBoard/AllUsers/AllUsers";
import AddItems from "../Layout/DashBoard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/DashBoard/ManageItems/ManageItems";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }, {
                path: '/menu',
                element: <OurMenu></OurMenu>
            }, {
                path: '/order/:category',
                element: <OrderFood></OrderFood>
            }, {
                path: '/login',
                element: <Login></Login>
            }, {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/secret',
                element: <PrivateRoutes><Secret></Secret></PrivateRoutes>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoutes><DashBoard></DashBoard></PrivateRoutes>,
        children: [{
            path: 'cart',
            element: <Cart></Cart>
        },
        // Admin  Routes

        {
            path: 'users',
            element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        },{
            path: 'addItems',
            element:<AdminRoute> <AddItems></AddItems></AdminRoute>
        },{
            path: 'manageItems',
            element:<ManageItems></ManageItems>
        }

        ]
    }
]);