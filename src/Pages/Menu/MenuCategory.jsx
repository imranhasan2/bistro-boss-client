import { Link } from "react-router-dom";
import MenuItem from "../Shared/MenuItem/MenuItem";
import ChiefService from "../Shared/ChiefService";


const MenuCategory = ({ items, title, img,description,bgColor,color,textColor }) => {
    return (
        <div className="mb-8">
            {title && <ChiefService img={img} title={title} description={description} bgColor={bgColor} color={color} textColor={textColor}></ChiefService>}
            <div className="grid grid-cols-2 mt-14 gap-5">
                {items.map(item =>
                    <MenuItem
                        key={item._id}

                        item={item}>

                    </MenuItem>
                )}
            </div>

            <div className="text-center mt-5 mb-5">
                <Link to={`/order/${title}`}>
                    <button className="btn btn-outline border-0  border-b-4  rounded-lg py-3 px-6 text-black">Order Your Favourite Food</button>
                </Link>
            </div>

        </div>

    );
};

export default MenuCategory;