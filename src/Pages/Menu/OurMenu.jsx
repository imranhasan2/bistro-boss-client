import { Helmet } from "react-helmet-async";
import ChiefService from "../Shared/ChiefService";
import img from '../../../assets/menu/banner3.jpg'
import useMenu from "../../Hooks/UseMenu";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory";

import desertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'

import saladImg from '../../../assets/menu/salad-bg.jpg'

import soupImg from '../../../assets/menu/soup-bg.jpg'

const OurMenu = () => {

    const [menu] = useMenu()

    const desert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')



    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Menu</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>

            <ChiefService
                img={img}
                bgColor={'#15151599'}
                title='our menu'
                color={'#fff'}
                description={'Would you like to try a dish?'}
                textColor='#fff'


            >

            </ChiefService>

            <SectionTitle
                subHeading={"Don't miss"}
                heading={"TODAY'S OFFER"}
            ></SectionTitle>
            <MenuCategory
                items={offered}
            ></MenuCategory>

           

            <MenuCategory

                items={desert} title="dessert" img={desertImg}  description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                bgColor={'#15151599'}
                color={'#fff'}
                textColor={'#fff'}>

            </MenuCategory>
        

            <MenuCategory items={pizza} title="pizza" img={pizzaImg}  description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                bgColor={'#15151599'}
                color={'#fff'}
                textColor={'#fff'}>

            </MenuCategory>


            <MenuCategory items={salad} title="salad" img={saladImg}  description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                bgColor={'#15151599'}
                color={'#fff'}
                textColor={'#fff'}>

            </MenuCategory>


            <MenuCategory items={soup} title="soup" img={soupImg} description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                bgColor={'#15151599'}
                color={'#fff'}
                textColor={'#fff'} >

            </MenuCategory>


        </div>
    );
};

export default OurMenu;