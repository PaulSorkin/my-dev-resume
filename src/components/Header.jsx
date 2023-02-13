import React from 'react';
import {motion} from "framer-motion";
import {MCustomLink} from "./CustomLink";
import SocialBlock from "./SocialBlock";
import Rings from '../assets/svg/header_rings.svg'
import Wrapper from "./Wrapper";
import Photo from "../assets/img/pixlr.png"
import {HashLink} from "react-router-hash-link";

const textAnimation = {
    hidden: {
        x: 100,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 },
    }),
};
const picAnimation = {
    hidden: {
        opacity: 0,
    },
    visible: custom => ({
        opacity: 1,
        transition: { delay: custom * 0.2 },
    }),
}

const Header = () => {
    return (
        <Wrapper>
            <motion.header
            initial='hidden'
            whileInView='visible'
            viewport={{amount: 0.2, once: true}}
            >
                <SocialBlock/>
                <div className="photo__background">
                    <motion.img custom={3} variants={picAnimation} className="photo__background__img" src={Photo} alt="Photo"/>
                </div>
                <img src={Rings} alt="Rings" className="header__block__background"/>
                <div className="greeting__block">
                    <motion.h1 custom={1} variants={textAnimation}>Nice to meet you! I’m <span>Paul Sorkin</span></motion.h1>
                    <motion.p custom={2} variants={textAnimation} className="about_text">Experienced Front End Developer with a passion for building responsive and
                        user-friendly web
                        applications using cutting-edge technologies and modern frameworks.</motion.p>
                </div>
                <HashLink to="/#contacts" smooth style={{textDecoration: 'none'}}>
                    <MCustomLink custom={3} variants={textAnimation} text="CONTACT ME"/>
                </HashLink>
            </motion.header>
        </Wrapper>
    );
};

export default Header;