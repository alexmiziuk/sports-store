import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import Container from '../Container/Container';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './mainSlider.scss'

export default class MainSlider extends React.Component {
	render() {
		return (
			<section className="main-slider">

				<CarouselProvider
					naturalSlideWidth={1366}
					naturalSlideHeight={448}
					totalSlides={3}
					infinite={true}
				>
					<Slider>
						<Slide index={0}>
							<div className="main-slider__slide">
								<Container>
									<div className="main-slider__wrapper">
										<div className="main-slider__left-section">
											<ul className="main-slider__items">
												<li className="main-slider__item">Швидше.</li>
												<li className="main-slider__item">Вище.</li>
												<li className="main-slider__item">Сильніше.</li>
											</ul>
											<h1 className="main-slider__title">
												Разом із Nike
											</h1>
										</div>
										<div className="main-slider__right-section">
											<div className="main-slider__box-discount">
												<div className="main-slider__text-discount">
													Знижки до 40%
												</div>
											</div>
											<p className="main-slider__text-deadline">
												Залишився лише тиждень
											</p>
										</div>
									</div>
								</Container>
							</div>
						</Slide>
						<Slide index={1}><div className="main-slider__slide"></div></Slide>
						<Slide index={2}><div className="main-slider__slide"></div></Slide>
					</Slider>
					<div className="main-slider__buttons">
						<ButtonBack></ButtonBack>
						<ButtonNext></ButtonNext>
					</div>
					<DotGroup />
				</CarouselProvider>
			</section>
		);
	}
}

