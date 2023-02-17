import { FC, useEffect, useState } from "react";
import './landing.scss';
import { BiChevronRight } from "react-icons/bi";


import wVector from '../../assets/svg/wVector.svg';
import landingImage from '../../assets/images/landingImage.png';

interface IProps {
}

const LandingComponent: FC<IProps> = () => {
	return (
		<div className="landing-component-container">
			<img className="background-image-w" src={wVector} alt="backgound w icon" />
			<div className="landing-information-box">
				<div className="landing-info-box">
					<h1 className="landing-title">Building exactly the eCommerce website you want.</h1>
					<p className="landing-sub-text">WooCommerce is a customizable, open-source eCommerce platform built on WordPress.
						Get started quickly and make your way.</p>
					<div className="landing-info-buttons-box">
						<button className="landing-info-start-new">Start a New Store</button>
						<p className="or-text">or</p>
						<p className="hyperlinkl">Customize & Extend <BiChevronRight/></p>
					</div>
				</div>
				<img className="landing-image" src={landingImage} alt="Landing information img" />
			</div>
		</div>
	);
};

export default LandingComponent;