import ChiefService from "../../Shared/ChiefService";

import ourFoodImg from '../../../../assets/shop/banner2.jpg'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


import { useState } from "react";
import useMenu from "../../../Hooks/UseMenu";
import FoodCard from "../../../Components/FoodCard/FoodCard";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";





const OrderFood = () => {

    const categories =['salad','pizza','soup','dessert','drinks']
    const { category } = useParams()
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setActiveTab] = useState(initialIndex)
    const [menu] = useMenu()

   
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const drinks = menu.filter(item => item.category === 'drinks')




    return (
        <div>
            <ChiefService
                img={ourFoodImg}
                bgColor={'#15151599'}
                title={'OUR SHOP'}
                color={'#fff'}
                description={'Would you like to try a dish?'}
                textColor={'#fff'}

            ></ChiefService>

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setActiveTab(index)}>
                <TabList className="flex justify-around mb-12  mt-5" >
                    <Tab  >SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUPS</Tab>
                    <Tab>DESSERT</Tab>
                    <Tab>DRINKS</Tab>

                </TabList>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>


        </div>
    );
};

export default OrderFood;