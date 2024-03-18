import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import Container from '../Container/Container';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './mainSlider.scss';

export default class MainSlider extends React.Component {
    renderSlides() {
        const slidesData = [
            {
                id: 0,
                text: 'Швидше.',
                title: 'Разом із Nike',
                discount: 'Знижки до 40%',
                deadline: 'Залишився лише тиждень'
            },
            {
                id: 1,
                text: 'Швидше.',
                title: 'Разом із Nike',
                discount: 'Знижки до 40%',
                deadline: 'Залишився лише тиждень'
            },
            {
                id: 2,
                text: 'Швидше.',
                title: 'Разом із Nike',
                discount: 'Знижки до 40%',
                deadline: 'Залишився лише тиждень'
            }
        ];

        return slidesData.map(slide => (
            <Slide key={slide.id} index={slide.id}>
                <div className="main-slider__slide">
                    <Container>
                        <div className="main-slider__wrapper">
                            <div className="main-slider__left-section">
                                <ul className="main-slider__items">
                                    <li className="main-slider__item">{slide.text}</li>
                                    <li className="main-slider__item">Вище.</li>
                                    <li className="main-slider__item">Сильніше.</li>
                                </ul>
                                <h1 className="main-slider__title">
                                    {slide.title}
                                </h1>
                            </div>
                            <div className="main-slider__right-section">
                                <div className="main-slider__box-discount">
                                    <div className="main-slider__text-discount">
                                        {slide.discount}
                                    </div>
                                </div>
                                <p className="main-slider__text-deadline">
                                    {slide.deadline}
                                </p>
                            </div>
                        </div>
                    </Container>
                </div>
            </Slide>
        ));
    }

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
                        {this.renderSlides()}
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

