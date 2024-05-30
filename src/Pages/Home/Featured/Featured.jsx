import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

import featuredImg from '../../../../assets/home/featured.jpg'

import './featured.css'

const Featured = () => {

    return (
        <div className="featured bg-fixed pt-8 mt-16 mb-16">
            <SectionTitle
            
                subHeading={'---Check it out---'}
                heading={'FROM OUR MENU'}

            >

            </SectionTitle>
            <div className="flex  px-36 py-20 items-center justify-center">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="ml-10 text-white">
                    <p>March 20, 2023</p>
                    <h2 className="uppercase">WHERE CAN I GET SOME?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur</p>
                    <button className="btn btn-outline border-0 border-b-4 border-white rounded-lg py-3 px-6 text-white">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;