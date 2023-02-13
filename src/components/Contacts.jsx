import React from 'react';
import {motion} from "framer-motion";
import Wrapper from "./Wrapper";
import ContactsForm from "./ContactsForm";
import Rings from "../assets/svg/header_rings.svg";

const leftAnimation = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 },
    }),
};

const Contacts = () => {
    return (
        <div className="contacts__container">
            <Wrapper>
                <motion.section
                    initial='hidden'
                    whileInView='visible'
                    viewport={{amount: 0.2, once: true}}
                    className="contacts" id="contacts">
                    <img src={Rings} alt="Rings" className="contscts__block__background"/>
                    <motion.div custom={1} variants={leftAnimation}
                        className="contacts__info">
                        <h2>Contact</h2>
                        <p className="secondary_text">I would love to hear about your project and how I could help.
                            Please fill in the form, and I’ll get back to you as soon as possible.</p>
                    </motion.div>
                    <ContactsForm />
                </motion.section>
            </Wrapper>
        </div>
    );
};

export default Contacts;