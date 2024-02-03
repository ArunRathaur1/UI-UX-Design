import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import '../Assets/css/pageslide.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import Card1 from '../component/Cards/Card1'
import Card2 from '../component/Cards/Card2'
import Card3 from '../component/Cards/Card3'
import Card4 from '../component/Cards/Card4'
import Card5 from '../component/Cards/Card5'
import Card6 from '../component/Cards/Card6'
// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
    <div className='pageslide'style={{paddingBottom:"50px"}}>
    <div style={{display:'flex',justifyContent:"center",width:'100%'}}>
    <div className='pageslideheading1'style={{paddingTop:'50px'}}>Get inspired by someone like you</div>
    </div>
    <div style={{display:'flex',justifyContent:"center",width:'100%'}}>
    <div className='pageslideheading2'style={{paddingTop:'50px'}}>Who is now living their dream at top-tech companies</div>
    </div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        style={{width:"100%"}}
      >
        <SwiperSlide>
          <Card1></Card1>
        </SwiperSlide>
        <SwiperSlide>
        <Card2></Card2>
        </SwiperSlide>
        <SwiperSlide>
          <Card3></Card3>
        </SwiperSlide>
        <SwiperSlide>
          <Card4></Card4>
        </SwiperSlide>
        <SwiperSlide>
          <Card5></Card5>
        </SwiperSlide>
        <SwiperSlide>
          <Card6></Card6>
        </SwiperSlide>
      </Swiper>
      <div style={{display:'flex',justifyContent:'center'}}>
      <button className='slidepagebutton' style={{marginTop:'30px'}}>Read More Views</button>
      </div>
      </div>
    </>
  );
}
