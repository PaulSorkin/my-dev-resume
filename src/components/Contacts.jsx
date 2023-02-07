import React from 'react';
import Wrapper from "./Wrapper";
import ContactsForm from "./ContactsForm";
import Rings from "../assets/svg/header_rings.svg";

const Contacts = () => {
    return (
        <div className="contacts__container">
            <Wrapper>
                <section className="contacts" id="contacts">
                    <img src={Rings} alt="Rings" className="contscts__block__background"/>
                    <div className="contacts__info">
                        <h2>Contact</h2>
                        <p className="secondary_text">I would love to hear about your project and how I could help.
                            Please fill in the form, and I’ll get back to you as soon as possible.</p>
                    </div>
                    <ContactsForm/>
                </section>
            </Wrapper>
        </div>
    );
};

export default Contacts;