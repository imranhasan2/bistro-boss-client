import { AiTwotoneDelete } from "react-icons/ai";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/UseMenu";
import { FaEdit } from "react-icons/fa";


const ManageItems = () => {

    const [menu] = useMenu()

    const handleUpdate =() =>{
        
    }
    const handleDeleteItem = item => {

    }
    return (
        <div>
            <SectionTitle heading={"Manage All Item "}
                subHeading={"Hurry Up!"}>

            </SectionTitle>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="bg-[#D1A054]  ">
                            <th>
                                Serial
                            </th>
                            <th>ITEM IMAGE</th>
                            <th>ITEM NAME</th>
                            <th>PRICE </th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menu.map((item, idx) => <tr key={item._id} >
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
                                <td>${item.price}</td>
                                <th>
                                    <button onClick={() => handleUpdate(item)} className="btn btn-lg bg-orange-400">
                                        <FaEdit
                                            className="" />
                                    </button>
                                </th>
                                <th>
                                    <button onClick={() => handleDeleteItem(item)} className="btn btn-lg bg-[#B91C1C]">
                                        <AiTwotoneDelete
                                            className=" text-2xl" />
                                    </button>
                                </th>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItems;