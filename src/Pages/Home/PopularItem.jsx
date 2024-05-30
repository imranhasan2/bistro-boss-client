
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useMenu from "../../Hooks/UseMenu";
import MenuItem from "../Shared/MenuItem/MenuItem";


const PopularItem = () => {

const [menu] = useMenu();

const popular =menu.filter(item => item.category === 'popular')


  



    return (
        <div className="mb-14">
            <SectionTitle

                subHeading={'---Check it out---'}
                heading={'FROM OUR MENU'}
            >

            </SectionTitle>
            <div className="grid grid-cols-2 mt-14 gap-5">
                {popular.map(item => 
                    <MenuItem 
                    key={item._id}
                    
                    item ={item}>
                    
                    </MenuItem>
                )}
            </div>



        </div>
    );
};

export default PopularItem;