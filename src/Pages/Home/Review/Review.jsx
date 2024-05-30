import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

import { Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from "swiper/react";

import { FaQuoteLeft } from "react-icons/fa";


const Review = () => {
    const [reviews, setReview] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => {
                setReview(data)
            })
    }, [])
    return (
        <div className="my-20">
            <SectionTitle
                subHeading={'What Our Clients Say'}
                heading={'TESTIMONIALS'}
            >

            </SectionTitle>

            <Swiper

                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >


                {reviews.map(review => <SwiperSlide


                    key={review._id}>

                    <div className="mx-24 flex flex-col items-center">

                      

                        <Rating
                            style={{ maxWidth: 180 }}
                            value={review.rating}

                        />
                          <FaQuoteLeft size={44} className="mt-8"></FaQuoteLeft>
                        <p className="my-12">{review.details}</p>
                        <h3 className="text-2xl text-[#CD9003]">{review.name}</h3>
                    </div>



                </SwiperSlide>)}





            </Swiper>


        </div>
    );
};

export default Review;