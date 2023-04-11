import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import image1 from '../../../images/assets/gal1.png'
import image2 from '../../../images/assets/gal2.png'
import image3 from '../../../images/assets/gal3.png'
import image4 from '../../../images/assets/gal4.png'

// import required modules
import { Pagination, Autoplay } from "swiper";
import Button from '../../Shared/Button';

const HeaderCard = () => {
    return (
        <>
            <div className='container'>
                <h2 className='text-3xl font-bold font-akira sub-title-gradient text-center mt-12 md:mt-20 '>Header text here</h2>
                <p className='text-lg text-white font-poppins text-center mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
            </div>

            {/* swiper slider  */}

            <div className='my-10'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src={image1} alt="image1" /></SwiperSlide>
                    <SwiperSlide><img src={image2} alt="image2" /></SwiperSlide>
                    <SwiperSlide><img src={image3} alt="image3" /></SwiperSlide>
                    <SwiperSlide><img src={image4} alt="image4" /></SwiperSlide>
                </Swiper>
            </div>

            <div className='text-center container'>
                <p className='text-lg text-white font-poppins text-center mx-auto md:w-1/3 mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                <div className='mt-12'>
                    <Button btn_text={'CTA'}></Button>
                </div>
            </div>
        </>
    );
};

export default HeaderCard;