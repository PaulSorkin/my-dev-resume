import React from 'react';
import { ReactComponent as Github } from '../assets/svg/github.svg'
import { ReactComponent as Frontendmentor } from '../assets/svg/frontendmentor.svg'
import { ReactComponent as Linkedin } from '../assets/svg/linkedin.svg'
import { ReactComponent as Twitter } from '../assets/svg/twitter.svg'

const SocialBlock = () => {
    return (
        <div className="social__block">
            <p className="logo">paulsorkin</p>
            <div className="social__block__links">
                {/*<img src={Github} alt="Github" className="social_link"/>*/}
                <Github className="social_link" />
                <Frontendmentor className="social_link" />
                <Linkedin className="social_link" />
                <Twitter className="social_link" />
                {/*<img src={Frontendmentor} alt="Frontendmentor" className="social_link"/>*/}
                {/*<img src={Linkedin} alt="Linkedin" className="social_link"/>*/}
                {/*<img src={Twitter} alt="Twitter" className="social_link"/>*/}
            </div>
        </div>
    );
};

export default SocialBlock;