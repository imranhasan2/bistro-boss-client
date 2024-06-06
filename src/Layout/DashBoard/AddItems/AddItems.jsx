import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import usePublicAxios from "../../../Hooks/usePublicAxios";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;

const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddItems = () => {
    const axiosPublic = usePublicAxios()
    const axiosSecure = UseAxiosSecure()

    const { register, handleSubmit,reset } = useForm()

    const onSubmit = async (data) => {
        console.log(data)
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        if (res.data.success) {
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                image: res.data.data.display_url
            }
            const menuRes = await axiosSecure.post('/menu', menuItem)
            console.log(menuRes.data)
            if (menuRes.data.insertedId) {
                reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is addeded to menu`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }


    }

    return (
        <div>
            <SectionTitle
                subHeading={"What's new?"}
                heading={'ADD AN ITEM'}

            ></SectionTitle>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="from-control my-6">
                    <label className="label">
                        <span className="">Recipe name*</span>
                    </label>
                    <input

                        {...register('name', { required: true })}
                        className="input
                     input-bordered w-full" type="text" placeholder="Recipe Name" />
                </div>
                <div className="flex gap-6 my-6">
                    {/* Category  */}
                    <div className="from-control w-full">
                        <label className="label">
                            <span className="">Category</span>
                        </label>
                        <select defaultValue="default"
                            {...register('category', { required: true })}
                            className="select select-bordered w-full">
                            <option disabled value="default" >Select a category</option>
                            <option value="salad">Salad</option>
                            <option value="soup">Soup</option>

                            <option value="pizza">Pizza</option>

                            <option value="dessert">Dessert</option>
                            <option value="drinks">Drinks</option>
                        </select>
                    </div>
                    {/* Price */}
                    <div className="from-control w-full">
                        <label className="label">
                            <span className="">Price</span>
                        </label>
                        <input
                            {...register('price', { required: true })}
                            className="input input-bordered w-full" type="text" placeholder="Price" />
                    </div>
                </div>

                <div className="from-control my-6">

                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Recipe Details*</span>

                        </div>
                        <textarea {...register('recipe')} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>

                    </label>
                </div>
                <div>
                    <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                </div>
                <button className="btn my-3">
                    Add Item <FaUtensils></FaUtensils>
                </button>

            </form>

        </div>
    );
};

export default AddItems;