import React from 'react';
import Link from "./Link";
import SocialBlock from "./SocialBlock";

const Header = () => {
    return (
        <>
            <SocialBlock/>
            <div className="greeting__block">
                <h1>Nice to meet you! I’m Paul Sorkin.</h1>
                <p className="about_text">Based in the UK, I’m a front-end developer passionate about building
                    accessible web apps that users love.</p>
            </div>
            <Link text="CONTACT ME"/>
        </>
    );
};

export default Header;