import React from 'react';
import Wrapper from "./Wrapper";
import SocialBlock from "./SocialBlock";

const Footer = () => {
    return (
        <div className="contacts__container">
            <Wrapper>
                <div className="footer__block">
                    <SocialBlock/>
                </div>
            </Wrapper>
        </div>
    );
};

export default Footer;