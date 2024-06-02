import { FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaShoppingCart, FaUser, FaUsers, FaUtensils } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { MdOutlineRateReview } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../Hooks/useCart";


const DashBoard = () => {

    const isAdmin = true;
    const [cart] = useCart()
    return (
        <div className="flex">
            <div className="w-64 min-h-screen p-6 space-y-4 bg-[#D1A054]">

                {
                    isAdmin ? <>
                        <NavLink to="adminHome" className={"flex items-center"} ><FaHome ></FaHome> Admin Home</NavLink>

                        <NavLink to="addItems" className={"flex items-center"} ><FaUtensils ></FaUtensils> Add Items</NavLink>

                        <NavLink to="manageItems" className={"flex items-center"} ><FaList ></FaList>Manage Items</NavLink>

                        <NavLink to="bookings" className={"flex items-center"} ><FaBook ></FaBook>Manage Bookings</NavLink>

                        <NavLink to="users" className={"flex items-center"} ><FaUsers ></FaUsers>All Users</NavLink>
                    </>
                        :
                        <>
                            <NavLink to="userHome" className={"flex items-center"} ><FaHome ></FaHome> User Home</NavLink>

                            <NavLink to="reservation" className={"flex items-center"} ><FaCalendar ></FaCalendar>Reservation</NavLink>


                            <NavLink to="cart" className={"flex items-center"}><FaShoppingCart ></FaShoppingCart> My Cart ({cart?.length})</NavLink>

                            <NavLink to="review" className={"flex items-center"}><MdOutlineRateReview />Review</NavLink>

                            <NavLink to="booing" className={"flex items-center"}><TbBrandBooking />My booking</NavLink>

                        </>
                }

                <div className="bg-white h-1" ></div>


                <NavLink to="/" className={"flex items-center"} ><FaHome ></FaHome> Home</NavLink>


                <NavLink to="/menu" className={"flex items-center"}><IoIosMenu /> Menu</NavLink>
                <NavLink to="/shop" className={"flex items-center"}><FaShoppingCart /> Shop</NavLink>
                <NavLink to="/contact" className={"flex items-center"}><FaEnvelope /> Contact</NavLink>

            </div>

            <div className="flex-1 p-6">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;