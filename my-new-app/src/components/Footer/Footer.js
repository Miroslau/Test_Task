import React from 'react';
import './Style.scss';

function Footer(props) {
    return (
        <footer>
        <div className="content"></div>
        <div className="footer__style">
            <div className="footer__bar words">
                <div className="words__text">© 2020 Movie Catalog<sup>TM</sup></div>
                <div className="words__text text_config"><span>Design by RobbyDesigns.com</span>Dev by Loremipsum.com</div>
            </div>
        </div>
    </footer>
    )
}

export default Footer;