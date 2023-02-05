import React from 'react';
import Link from "./Link";
import SocialBlock from "./SocialBlock";
import Rings from '../assets/svg/header_rings.svg'

const Header = () => {
    return (
        <header>
            <SocialBlock />
            <div className="photo__background"></div>
            <img src={Rings} alt="Rings" className="header__block__background"/>
            <div className="greeting__block">
                <h1>Nice to meet you! I’m <span>Paul Sorkin</span>.</h1>
                <p className="about_text">Based in the UK, I’m a front-end developer passionate about building
                    accessible web apps that users love.</p>
            </div>
            <Link text="CONTACT ME"/>
        </header>
    );
};

export default Header;