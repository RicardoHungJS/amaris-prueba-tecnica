import { FC, useState } from "react";
import './testimonials.scss';

import bgCards from '../../assets/svg/backgroundCards.svg'
import quotes from '../../assets/svg/quotes.svg'
import peopleLeft from '../../assets/svg/peopleGroupLeft.svg'
import peopleRight from '../../assets/svg/peopleGroupRight.svg'
import colorPoints from '../../assets/svg/colorPoints.svg'

import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

interface IProps {
}


const TestimonialsComponent: FC<IProps> = () => {
    const texts: Array<string> = [
        "No other eCommerce platform allows people to start for free and grow their store as their business grows. More importantly, WooCommerce doesn't charge you a portion of your profits as your business grows!",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus risus finibus nibh varius, at elementum nisl euismod. Aenean ultricies ante sed iaculis varius. Praesent at rhoncus ante.",
        "Vestibulum varius rhoncus purus, sed iaculis ante aliquam sed. Integer ante metus, fringilla ac est sit amet, egestas vehicula sapien. Ut ultrices arcu eu ante porttitor."
    ]

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedText, setSelectedText] = useState(texts[0]);

    const selectNewImage = (texts: string[], next = true) => {
        const condition = next ? selectedIndex < texts.length - 1 : selectedIndex > 0;
        const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : texts.length - 1;
        setSelectedText(texts[nextIndex]);
        setSelectedIndex(nextIndex);
    };

    const previous = () => {
        selectNewImage(texts, false);
    };

    const next = () => {
        selectNewImage(texts);
    };

    return (
        <div className="testimonials-component-container">
            <h2 className="testimonials-title">Trusted by Agencies <br /> & Store Owners</h2>
            <div className="slider-box">
                <div className="slider-white-container">
                    <p className="card-text">{selectedText}</p>
                    <img className="quotes" src={quotes} alt="card watermark" />
                </div>
                <img className="bgCards" src={bgCards} alt="background cards" />
                <HiOutlineArrowNarrowLeft className="arrowLeft" onClick={previous} />
                <HiOutlineArrowNarrowRight className="arrowRight" onClick={next} />
            </div>
            <img className="peopleLeft" src={peopleLeft} alt="smiling people" />
            <img className="peopleRight" src={peopleRight} alt="smiling people" />
            <img className="colorPoints" src={colorPoints} alt="color dots" />
        </div>
    );
};

export default TestimonialsComponent;