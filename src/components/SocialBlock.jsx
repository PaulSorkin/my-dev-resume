import React from 'react';
import { ReactComponent as Github } from '../assets/svg/github.svg'
import { ReactComponent as Linkedin } from '../assets/svg/linkedin.svg'
import { ReactComponent as Codewars } from '../assets/svg/codewars.svg'

const SocialBlock = () => {
    return (
        <div className="social__block">
            <p className="logo">paulsorkin</p>
            <div className="social__block__links">
                <a href="https://github.com/PaulSorkin"><Github className="social_link" /></a>
                <a href="https://www.linkedin.com/in/paul-sorkin-tech/"><Linkedin className="social_link" /></a>
                <a href="https://www.codewars.com/users/PaulSorkin"><Codewars className="social_link" /></a>
            </div>
        </div>
    );
};

export default SocialBlock;