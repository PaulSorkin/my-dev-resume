import React from 'react';
import CustomLink from "./CustomLink";
import SocialBlock from "./SocialBlock";
import Rings from '../assets/svg/header_rings.svg'
import Wrapper from "./Wrapper";
import Photo from "../assets/img/pixlr.png"
import {HashLink} from "react-router-hash-link";

const Header = () => {
    return (
        <Wrapper>
            <header>
                <SocialBlock/>
                <div className="photo__background">
                    <img className="photo__background__img" src={Photo} alt="Photo"/>
                </div>
                <img src={Rings} alt="Rings" className="header__block__background"/>
                <div className="greeting__block">
                    <h1>Nice to meet you! I’m <span>Paul Sorkin</span></h1>
                    <p className="about_text">Experienced Front End Developer with a passion for building responsive and
                        user-friendly web
                        applications using cutting-edge technologies and modern frameworks.</p>
                </div>
                <HashLink to="/#contacts" smooth style={{textDecoration: 'none'}}>
                    <CustomLink text="CONTACT ME"/>
                </HashLink>
            </header>
        </Wrapper>
    );
};

export default Header;