import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";

register();

const Swiper = ({ slides, slidesPerView, spaceBetween, slidesPerGroup }) => {
	const swiperRef = useRef(null);

	useEffect(() => {
		const swiperContainer = swiperRef.current;
		const params = {
			navigation: true,
			slidesPerView: slidesPerView,
			speed: 1500,
			spaceBetween: spaceBetween,
			slidesPerGroup: slidesPerGroup,
			injectStyles: [
				`.swiper-button-next,
				.swiper-button-prev {
					width: 15px;
					height: 15px;
					background-color: rgba(19, 16, 17, 0.6);
					backdrop-filter: blur(2px);
					padding: 24px 16px;
					border-radius: 10px;
					color: white;
					stroke: white;
					stroke-width: 2;
					margin-top: calc(0px - (var(--swiper-navigation-size)/ 2) - 20px);
					opacity: 0;
					transition: opacity 0.5s ease;
				}
				.swiper:hover .swiper-button-next,
				.swiper:hover .swiper-button-prev {
					opacity: 1;
				}
				.swiper-button-prev.swiper-button-disabled,
				.swiper-button-next.swiper-button-disabled {
  				opacity: 0;
  				cursor: auto;
				pointer-events: none;
				transition: opacity 0s;
				}
				.swiper:hover .swiper-button-prev.swiper-button-disabled,
				.swiper:hover .swiper-button-next.swiper-button-disabled {
  				opacity: 0;
  				cursor: auto;
				pointer-events: none;
				}
				`,
			],
		};
		Object.assign(swiperContainer, params);
		swiperContainer.initialize();
	}, [slidesPerView, spaceBetween, slidesPerGroup]);

	return (
		<swiper-container ref={swiperRef} init={false}>
			{slides.map((slide) => (
				<swiper-slide key={slide.key}>{slide.element}</swiper-slide>
			))}
		</swiper-container>
	);
};

export default Swiper;
