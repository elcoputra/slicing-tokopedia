import "swiper/css";
import "swiper/css/navigation";

import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import SwiperCore, { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  WrapperCarouse,
  PrevContainer,
  NextContainer,
  PagingDotContainer,
  PagingDot,
  MorePromoContainer,
} from "@/components/Molecules/Carousel/style";

import AtomImage from "@/components/Atoms/Image";
import AtomMainIcon from "@/components/Atoms/MainIcon/index";

const Carousel = ({
  loop = true,
  slidesPerView = 1,
  autoplay = {
    delay: 5000,
    disableOnInteraction: false,
  },
  containerBorderRadius = 12,
  content = [],
  pagination = false,
}) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  return (
    <WrapperCarouse>
      <Swiper
        style={{ borderRadius: containerBorderRadius, height: 302 }}
        modules={[Navigation, Autoplay]}
        slidesPerView={slidesPerView}
        loop={loop}
        speed={1000}
        autoplay={autoplay}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        onSlideChange={(swiper) => setCurrentSlideIndex(swiper.realIndex)}
        // onSwiper={(swiper) => console.log(swiper.activeIndex)}
      >
        {content &&
          content.map((item, index) => (
            <SwiperSlide
              key={index}
              style={{
                height: item?.heightRoot,
                width: item?.widthRoot,
              }}
            >
              {item.component}
            </SwiperSlide>
          ))}
      </Swiper>
      {pagination && (
        <>
          <PagingDotContainer id="special-carousel-dot" style={{ zIndex: 1 }}>
            {content.map((item, index) => (
              <PagingDot
                key={index}
                style={{
                  backgroundColor: currentSlideIndex === index && "#FFFFFF",
                }}
              />
            ))}
          </PagingDotContainer>
          <MorePromoContainer>Lihat Promo Lainnya</MorePromoContainer>
        </>
      )}
      <PrevContainer id="carousel-prev" className="prev">
        <AtomMainIcon
          icon="arrowDown"
          size={{ x: 25, y: 25 }}
          style={{ transform: "rotate(90deg)" }}
        />
      </PrevContainer>
      <NextContainer id="carousel-next" className="next">
        <AtomMainIcon
          icon="arrowDown"
          size={{ x: 25, y: 25 }}
          style={{ transform: "rotate(270deg)" }}
        />
      </NextContainer>
    </WrapperCarouse>
  );
};

Carousel.propTypes = {
  loop: PropTypes.bool,
  slidesPerView: PropTypes.number,
  containerBorderRadius: PropTypes.number,
  content: PropTypes.array,
  pagination: PropTypes.bool,
  autoplay: PropTypes.shape({
    delay: PropTypes.number,
    disableOnInteraction: PropTypes.bool,
  }),
};

export default Carousel;
