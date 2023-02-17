import { FC } from "react";
import './documentations.scss';
import bgPurple from '../../assets/svg/backgroundPurple.svg'
import wooBg from '../../assets/svg/wooBackground.svg'
import workerGirls from '../../assets/images/workerGirls.png'
import workerGuys from '../../assets/images/workerGuys.png'
import leftSvgBg from '../../assets/svg/leftBgSvg.svg'
import rightSvgBg from '../../assets/svg/rightBgSvg.svg'

interface IProps {
}

const DocumentationsComponent: FC<IProps> = () => {
    return (
        <section className="documentations-component-container">
            <img className="rectangle-background" src={bgPurple} alt="background rectangle" />
            <img className="woo-background" src={wooBg} alt="background Woo" />
            <img className="leftSvgBg" src={leftSvgBg} alt="background designs" />
            <img className="rightSvgBg" src={rightSvgBg} alt="background designs" />
            <div className="documentation-card-box">
                <section className="documentation-card" id="1">
                    <img src={workerGirls} alt="girls working" />
                    <div className="card-texts-box">
                        <h3 className="card-title">Develop <br /> Without Limits</h3>
                        <p className="card-information-text">WooCommerce is developer friendly, too. Built with a REST API, WooCommerce is scalable and can integrate with virtually any service. Design a complex store from scratch, extend a store for a client, or simply add a single product to a WordPress site—your store, your way.</p>
                        <button className="documentation-button">Read the Documentation</button>
                    </div>
                </section>
                <section className="documentation-card" id="2">
                    <div className="card-texts-box">
                        <h3 className="card-title">Know our <br /> Global Community</h3>
                        <p className="card-information-text">WooCommerce is one of the fastest-growing eCommerce communities. We’re proud that the helpfulness of the community and a wealth of online resources are frequently cited as reasons our users love it. There are 80+ meetups worldwide!</p>
                        <button className="documentation-button">Read the Documentation</button>
                    </div>
                    <img className="workerGuys" src={workerGuys} alt="girls working" />
                </section>
            </div>
        </section>
    );
};

export default DocumentationsComponent;