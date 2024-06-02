import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { AiTwotoneDelete } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {

    const axiosSecure = UseAxiosSecure()

    const { data: users, isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const token = localStorage.getItem('access-token');
            if (!token) {
                throw new Error('No access token found');
            }
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })


    const handleMakeAdmin = (user) => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is a Admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }


    const handleDeleteUser = (user) => {
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

                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "User has Been Deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }


    if (isLoading) return <div>Loading...</div>;


    return (
        <div>
            <SectionTitle

                subHeading={'How many??'}
                heading={'MANAGE ALL USERS'}
            >

            </SectionTitle>
            <div>
                <h2 className="text-3xl ">Total Users: {users?.length}</h2>

                <div className="overflow-x-auto">
                    <table className="table table-zebra">

                        <thead>
                            <tr className="bg-[#D1A054]  ">
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role </th>
                                <th>Action </th>
                            </tr>
                        </thead>


                        <tbody>
                            {users?.map((user, idx) => (
                                <tr key={user._id}>
                                    <th>{idx + 1}</th>
                                    <td>{user?.name}</td>
                                    <td>{user?.email}</td>
                                    <td>
                                        {
                                            user?.role === 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(user)} className="btn bg-[#D1A054]">
                                                <FaUsers className="text-2xl text-white"></FaUsers>
                                            </button>
                                        }
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteUser(user)} className="btn btn-lg bg-[#B91C1C]">
                                            <AiTwotoneDelete
                                                className=" text-2xl" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>




                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;