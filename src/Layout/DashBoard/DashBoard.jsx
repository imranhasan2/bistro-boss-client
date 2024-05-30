import { FaCalendar, FaHome, FaShoppingCart } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { MdOutlineRateReview } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../Hooks/useCart";


const DashBoard = () => {


    const [cart] =useCart()
    return (
        <div className="flex">
            <div className="w-64 min-h-screen p-6 space-y-4 bg-[#D1A054]">

                <NavLink to="userHome" className={"flex items-center"} ><FaHome ></FaHome> User Home</NavLink>

                <NavLink to="reservation" className={"flex items-center"} ><FaCalendar ></FaCalendar>Reservation</NavLink>


                <NavLink to="cart" className={"flex items-center"}><FaShoppingCart ></FaShoppingCart> My Cart ({cart.length})</NavLink>

                <NavLink to="review" className={"flex items-center"}><MdOutlineRateReview />Review</NavLink>

                <NavLink to="booing" className={"flex items-center"}><TbBrandBooking />My booking</NavLink>


                <div className="divider" ></div>


                <NavLink to="/" className={"flex items-center"} ><FaHome ></FaHome> Home</NavLink>


                <NavLink to="/menu" className={"flex items-center"}><IoIosMenu /> Menu</NavLink>

            </div>

            <div className="flex-1 p-6">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;