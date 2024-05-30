import Swal from "sweetalert2";
import UseAuth from "../../Hooks/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import useCart from "../../Hooks/useCart";




const FoodCard = ({ item }) => {
    const { price, name, recipe, image, _id } = item;
    const location = useLocation()
    const navigate = useNavigate()
    const auth = UseAuth()
    const { user } = auth;
    const axiosSecure =UseAxiosSecure()

    const [,refetch] =useCart()

    const handleAddToCart = () => {
        if (user && user.email) {

            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                price,
                image,
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added successFully`,
                            showConfirmButton: false,
                            timer: 1500
                        });

                        //refetch data

                        refetch()
                    }
                })
        } else {
            Swal.fire({
                title: "You are not Logged In",
                text: "please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }

    }



    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} /></figure>
                <p className="absolute right-0 bg-slate-900 text-white px-3 py-1 mr-6 mt-6">${price}</p>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <div>
                            <button onClick={handleAddToCart} className="btn btn-primary">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;