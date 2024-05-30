import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';




import slide1 from '../../assets/home/slide1.jpg'
import slide2 from '../../assets/home/slide2.jpg'
import slide3 from '../../assets/home/slide3.jpg'
import slide4 from '../../assets/home/slide4.jpg'
import slide5 from '../../assets/home/slide5.jpg'
import SectionTitle from '../Components/SectionTitle/SectionTitle';



const Category = () => {
  return (

    <div>
      <SectionTitle
      
      subHeading={'---From 11:00am to 10:00pm---'}

      heading={'ORDER ONLINE'}
      >

      </SectionTitle>
      <Swiper
        slidesPerView={4}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper mt-16 mb-16"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h2 className='text-4xl text-center text-white absolute bottom-12 left-1/2 transform -translate-x-1/2 uppercase'>Salads</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h2 className='text-4xl text-center text-white absolute bottom-12 left-1/2 transform -translate-x-1/2 uppercase'>Pizza</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h2 className='text-4xl text-center text-white absolute bottom-12 left-1/2 transform -translate-x-1/2 uppercase'>Soups</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h2 className='text-4xl text-center text-white absolute bottom-12 left-1/2 transform -translate-x-1/2 uppercase'>Desserts</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h2 className='text-4xl text-center text-white absolute bottom-12 left-1/2 transform -translate-x-1/2 uppercase'>Salads</h2>
        </SwiperSlide>

      </Swiper>
    </div>

  );
};

export default Category;