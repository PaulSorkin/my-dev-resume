import React from 'react';
import SkillBlock from "./SkillBlock";
import Rings from "../assets/svg/skills_rings.svg";

const Skills = () => {
    return (
        <section className={'skills'}>
            <SkillBlock name="HTML" experience={4} />
            <SkillBlock name="CSS" experience={4} />
            <SkillBlock name="Javascript" experience={4} />
            <SkillBlock name="Accessibility" experience={4} />
            <SkillBlock name="React" experience={3} />
            <SkillBlock name="Sass" experience={3} />
            <img src={Rings} alt="Rings" className="skills__block__background"/>
        </section>
    );
};

export default Skills;