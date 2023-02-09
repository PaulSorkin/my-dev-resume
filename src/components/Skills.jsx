import React from 'react';
import SkillBlock from "./SkillBlock";
import Rings from "../assets/svg/skills_rings.svg";
import Wrapper from "./Wrapper";

const Skills = () => {
    return (
        <Wrapper>
            <section className={"skills"}>
                <img src={Rings} alt="Rings" className="skills__block__background"/>
                <SkillBlock name="HTML" experience={4}/>
                <SkillBlock name="CSS" experience={4}/>
                <SkillBlock name="Javascript" experience={4}/>
                <SkillBlock name="Accessibility" experience={4}/>
                <SkillBlock name="React" experience={3}/>
                <SkillBlock name="Sass" experience={3}/>
            </section>
        </Wrapper>
    );
};

export default Skills;