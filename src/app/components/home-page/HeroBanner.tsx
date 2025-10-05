// components/HeroBanner.tsx
'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs, Autoplay, EffectFade } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import 'swiper/css/effect-fade';

const HeroBanner = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  const slides = [
    {
      id: 1,
      bgImage: '/assets/img/1-updated-images/Hero-Section/Hero-section-slider-1.jpg',
      title: 'Direct Admission For Nursing <span>and</span> Paramedical',
      buttonText: 'Enquiry Now',
      buttonLink: 'https://enlight-enquiry-form.vercel.app',
      thumb: '/assets/img/herobanner/bg-1.jpg'
    },
    {
      id: 2,
      bgImage: '/assets/img/1-updated-images/Hero-Section/Hero-section-slider-2.jpg',
      title: 'Direct Nursing Admission For <span>B.Sc. Nursing</span> & <span>GNM</span> Courses Eligibility',
      buttonText: 'Enquiry Now',
      buttonLink: 'https://enlight-enquiry-form.vercel.app',
      thumb: '/assets/img/herobanner/bg-2.jpg'
    },
    {
      id: 3,
      bgImage: '/assets/img/1-updated-images/Hero-Section/Hero-section-slider-3.jpg',
      title: 'Direct Admission For Nursing <span>and</span> Paramedical',
      buttonText: 'Enquiry Now',
      buttonLink: 'https://enlight-enquiry-form.vercel.app',
      thumb: '/assets/img/herobanner/bg-3.jpg'
    }
  ];

  return (
    <div className="herobannerarea herobannerarea__2 herobannerarea__university">
      {/* Main Slider */}
      <Swiper
        modules={[Navigation, Pagination, Thumbs, Autoplay, EffectFade]}
        spaceBetween={0}
        effect="fade"
        loop={true}
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
        className="university__slider"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="herobannerarea__single__slider"
              style={{
                backgroundImage: `url(${slide.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '80vh',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12 col-12">
                    <div className="herobannerarea__content__wraper text-center">
                      <div className="herobannerarea__title">
                        <div className="herobannerarea__small__title">
                          <span>Welcome to Enlight Group of Institutions</span>
                        </div>
                        <div
                          className="herobannerarea__title__heading__2 herobannerarea__title__heading__3"
                          dangerouslySetInnerHTML={{ __html: `<h2>${slide.title}</h2>` }}
                        />
                      </div>
                      <div className="hreobannerarea__button__2">
                        <a
                          className="default__button"
                          target="_blank"
                          rel="noopener noreferrer"
                          href={slide.buttonLink}
                        >
                          {slide.buttonText}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Slider */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={3}
        watchSlidesProgress
        className="university__slider__thumb"
      >
        {slides.map((slide) => (
          <SwiperSlide key={`thumb-${slide.id}`}>
            <div
              className="thumbnail-slide"
              style={{
                backgroundImage: `url(${slide.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '80px',
                borderRadius: '4px',
                cursor: 'pointer',
                opacity: 0.7,
                transition: 'opacity 0.3s ease',
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Controls */}
      {/* <div className="slider__controls__wrap slider__controls__pagination slider__controls__arrows">
        <div className="swiper-button-next arrow-btn">
          <i className="icofont-long-arrow-right"></i>
        </div>
        <div className="swiper-button-prev arrow-btn">
          <i className="icofont-long-arrow-left"></i>
        </div>
      </div> */}
    </div>
  );
};

export default HeroBanner;