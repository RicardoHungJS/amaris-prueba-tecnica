import { FC } from "react";
import './benefitsCards.scss';
import { BiChevronRight } from "react-icons/bi";

import imageCard1a from '../../assets/images/card1.1.png'
import imageCard1b from '../../assets/images/card1.2.png'
import imageCard1c from '../../assets/images/card1.3.png'
import imageCard2a from '../../assets/images/card2.1.png'
import imageCard2b from '../../assets/images/card2.2.png'
import imageCard2c from '../../assets/images/card2.3.png'
import imageCard2d from '../../assets/images/card2.4.png'
import imageCard2e from '../../assets/images/card2.5.png'
import imageCard2f from '../../assets/images/card2.6.png'
import imageCard3a from '../../assets/images/card3.1.png'
import imageCard3b from '../../assets/images/card3.2.png'
import imageCard3c from '../../assets/images/card3.3.png'
import imageCard3d from '../../assets/images/card3.4.png'

interface IProps {
}

const BenefitsCardsComponent: FC<IProps> = () => {
    return (
        <section className="benefitsCards-component-container">
            <h1 className="benefitsCards-title">Your eCommerce made simple</h1>
            <section className="benefitsCards-cards-box">
                <div className="card-box">
                    <div className="images-box">
                        <img className="img1" src={imageCard1a} alt="informative card img 1" />
                        <img className="img2" src={imageCard1b} alt="informative card img 2" />
                        <img className="img3" src={imageCard1c} alt="informative card img 3" />
                    </div>
                    <div className="text-box">
                        <h2 className="cardsTitle">All You Need to Start</h2>
                        <p className="cardsInfoText">Add WooCommerce plugin to any WordPress site and set up a new store in minutes.</p>
                        <p className="hyperlinkl">Ecommerce for Wordpress <BiChevronRight /></p>
                    </div>
                </div>

                <div className="card-box">
                    <div className="images-box">
                        <img className="img4" src={imageCard2a} alt="informative card 2 img 1" />
                        <img className="img5" src={imageCard2b} alt="informative card 2 img 2" />
                        <img className="img6" src={imageCard2c} alt="informative card 2 img 3" />
                        <img className="img7" src={imageCard2d} alt="informative card 2 img 4" />
                        <img className="img8" src={imageCard2e} alt="informative card 2 img 5" />
                        <img className="img9" src={imageCard2f} alt="informative card 2 img 6" />
                    </div>
                    <div className="text-box">
                        <h2 className="cardsTitle">Customize and Extend</h2>
                        <p className="cardsInfoText">From subscriptions to gym classes to luxury cars, WooCommerce is fully customizable.</p>
                        <p className="hyperlinkl">Browse Extensions <BiChevronRight /></p>
                    </div>
                </div>

                <div className="card-box">
                    <div className="images-box">
                        <img className="img10" src={imageCard3a} alt="informative card 3 img 1" />
                        <img className="img11" src={imageCard3b} alt="informative card 3 img 2" />
                        <img className="img12" src={imageCard3c} alt="informative card 3 img 3" />
                        <img className="img13" src={imageCard3d} alt="informative card 3 img 4" />
                    </div>
                    <div className="text-box">
                        <h2 className="cardsTitle">Active Community</h2>
                        <p className="cardsInfoText">WooCommerce is one of the fastest-growing eCommerce communities.</p>
                        <p className="hyperlinkl">Check our Forums <BiChevronRight /></p>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default BenefitsCardsComponent;