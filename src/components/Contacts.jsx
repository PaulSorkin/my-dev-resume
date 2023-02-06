import React from 'react';
import SocialBlock from "./SocialBlock";
import Wrapper from "./Wrapper";

const Contacts = () => {
    return (
        <div className="contacts__container">
        <Wrapper>
            <section className="contacts">
                <div className="contacts__block">
                    <div className="contacts__info">
                        <h2>Contact</h2>
                        <p className="secondary_text">I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
                    </div>
                </div>
                <SocialBlock/>
            </section>
        </Wrapper>
        </div>
    );
};

export default Contacts;