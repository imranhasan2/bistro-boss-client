import { AiTwotoneDelete } from "react-icons/ai";
import useCart from "../../../Hooks/useCart";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";


const Cart = () => {


    const [cart, refetch] = useCart()

    const axiosSecure = UseAxiosSecure()

    const totalPrice = cart?.reduce((total, item) => total + item.price, 0)


    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }


    return (
        <div>

            <div >
                <SectionTitle

                    subHeading="My Cart"
                    heading="WANNA ADD MORE?"
                >

                </SectionTitle>

            </div>
            <div className="shadow-md p-16">
                <div className="flex justify-evenly mb-4">
                    <h2 className="text-3xl">Total bookings:{cart?.length}</h2>
                    <h2 className="text-3xl">total price: ${totalPrice}</h2>
                    <button className="btn bg-[#D1A054]">PAY</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead >
                            <tr className="bg-[#D1A054]  ">
                                <th>

                                </th>
                                <th>Item Image</th>
                                <th>ITEM NAME</th>
                                <th>PRICE </th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        {
                            cart?.map((item, idx) => <tbody key={item._id}>
                                {/* row 1 */}
                                <tr>
                                    <th>
                                        {idx + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>${item?.price}</td>
                                    <th  >
                                        <button onClick={() => handleDelete(item._id)} className="btn btn-lg">
                                            <AiTwotoneDelete
                                                className="text-[#B91C1C]" />
                                        </button>
                                    </th>
                                </tr>


                            </tbody>)
                        }



                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;