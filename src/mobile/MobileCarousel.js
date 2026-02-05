import React, { useMemo, useRef, useState } from 'react';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './mobile.css';

function NavArrow({ direction, onClick, disabled, ariaLabel }) {
  const Icon = direction === 'prev' ? FaChevronLeft : FaChevronRight;
  return (
    <button
      type="button"
      className={`mobile-carousel-arrow mobile-carousel-nav-btn mobile-carousel-arrow-${direction}`}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      <Icon />
    </button>
  );
}

export default function MobileCarousel({
  children,
  className = '',
  slidesToShow = 1,
  slidesToScroll = 1,
  infinite = false,
  dots = false,
  adaptiveHeight = true,
  initialSlide = 0,
  ariaLabel = 'Carousel',
}) {
  const sliderRef = useRef(null);
  const totalSlides = useMemo(() => React.Children.count(children), [children]);
  const [currentSlide, setCurrentSlide] = useState(initialSlide);

  const maxIndex = Math.max(0, totalSlides - slidesToShow);
  const isPrevDisabled = !infinite && currentSlide <= 0;
  const isNextDisabled = !infinite && currentSlide >= maxIndex;

  const settings = {
    dots,
    infinite,
    speed: 350,
    slidesToShow,
    slidesToScroll,
    arrows: false,
    swipeToSlide: true,
    adaptiveHeight,
    initialSlide,
    afterChange: (index) => setCurrentSlide(index),
  };

  return (
    <div className={`mobile-carousel ${className}`}>
      <div className="mobile-carousel-nav" aria-label={`${ariaLabel} navigation`}>
        <NavArrow
          direction="prev"
          ariaLabel={`${ariaLabel}: Previous`}
          onClick={() => sliderRef.current?.slickPrev?.()}
          disabled={isPrevDisabled}
        />
        <NavArrow
          direction="next"
          ariaLabel={`${ariaLabel}: Next`}
          onClick={() => sliderRef.current?.slickNext?.()}
          disabled={isNextDisabled}
        />
      </div>
      <Slider ref={sliderRef} {...settings}>
        {children}
      </Slider>
    </div>
  );
}
