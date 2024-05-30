import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

import shopCart from '../../../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png'
import useCart from "../../Hooks/useCart";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const [cart] =useCart()
    console.log(cart)

    const handleSIgnOut = () => {
        logOut()
    }


    const navBar = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><a href="">CONTACT US</a></li>
        <li><a href="">DASHBOARD</a></li>
        <li><NavLink to='/menu'>OUR MENU</NavLink></li>
        <li><NavLink to='/order/salad'>ORDER FOOD</NavLink></li>
        <li><NavLink className="uppercase"  to='/secret'>Secret</NavLink></li>
        <li>
            <Link to="/dashboard/cart">
               <img className="w-[64px] h-[48px] " src={shopCart} alt="" />
                <div className="badge badge-secondary">+{cart? cart.length : 0}</div>
            </Link>
        </li>

        {
            user ?
                <>
                    <button onClick={handleSIgnOut} className="uppercase">Sign Out</button>
                </>
                :
                <>
                    <li><NavLink to='/login'>LOGIN</NavLink></li>
                </>
        }

    </>
    return (

        <div className="navbar max-w-6xl text-white bg-[#15151580] fixed z-10 ">
            <div className="flex-1 ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navBar}
                    </ul>
                </div>
                <div className="flex flex-col text-left">
                    <a className="btn btn-ghost  text-white text-3xl">BISTRO BOSS</a>                    <a className="text-white text-2xl ml-4 tracking-widest ">Restaurant</a>
                </div>
            </div>
            <div className="  hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navBar}
                </ul>
            </div>

        </div>

    );
};

export default Navbar;