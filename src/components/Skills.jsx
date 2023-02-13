import React from 'react';
import {motion} from "framer-motion";
import {MSkillBlock} from "./SkillBlock";
import Rings from "../assets/svg/skills_rings.svg";
import Wrapper from "./Wrapper";

const textAnimation = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.1 },
    }),
};

const Skills = () => {
    return (
        <Wrapper>
            <motion.section
                initial='hidden'
                whileInView='visible'
                viewport={{amount: 0.2, once: true}}
                className={"skills"}>
                <img src={Rings} alt="Rings" className="skills__block__background"/>
                <MSkillBlock custom={1} variants={textAnimation} name="React" experience={2}/>
                <MSkillBlock custom={2} variants={textAnimation} name="Redux" experience={2}/>
                <MSkillBlock custom={3} variants={textAnimation} name="Javascript" experience={4}/>
                <MSkillBlock custom={4} variants={textAnimation} name="HTML" experience={4}/>
                <MSkillBlock custom={5} variants={textAnimation} name="CSS" experience={4}/>
                <MSkillBlock custom={6} variants={textAnimation} name="Sass" experience={3}/>
                <MSkillBlock custom={7} variants={textAnimation} name="Node.js" experience={1}/>
                <MSkillBlock custom={8} variants={textAnimation} name="Git" experience={4}/>
                <MSkillBlock custom={9} variants={textAnimation} name="Material-UI" experience={2}/>
            </motion.section>
        </Wrapper>
    );
};

export default Skills;