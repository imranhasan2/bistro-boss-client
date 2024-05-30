import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";
import UseAuth from "./UseAuth";


const useCart = () => {
    const axiosSecure = UseAxiosSecure()

    const auth = UseAuth();
    const { user } = auth

    const { refetch, data: cart } = useQuery({
        queryKey: ['cart'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user.email}`)
            return res.data
        }
    })

    return [cart, refetch]
};

export default useCart;