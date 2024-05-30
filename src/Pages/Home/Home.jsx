import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category";
import ChiefService from "../Shared/ChiefService";
import ContactUs from "./ContactUs/ContactUs";
import Featured from "./Featured/Featured";
import PopularItem from "./PopularItem";
import Review from "./Review/Review";
import img from '../../../assets/home/chef-service.jpg'


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Home</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <ChiefService
            
            img={img}
            bgColor="#ffff"
            title={'Bistro Boss'}
            color='#151515'
            description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.'}
            textColor='#151515'
            
            ></ChiefService>
            <PopularItem></PopularItem>
            <ContactUs></ContactUs>
            <Featured></Featured>
            <Review></Review>
        </div>
    );
};

export default Home;