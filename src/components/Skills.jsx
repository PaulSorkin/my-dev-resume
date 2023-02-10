import React from 'react';
import SkillBlock from "./SkillBlock";
import Rings from "../assets/svg/skills_rings.svg";
import Wrapper from "./Wrapper";

const Skills = () => {
    return (
        <Wrapper>
            <section className={"skills"}>
                <img src={Rings} alt="Rings" className="skills__block__background"/>
                <SkillBlock name="React" experience={2}/>
                <SkillBlock name="Redux" experience={2}/>
                <SkillBlock name="Javascript" experience={4}/>
                <SkillBlock name="HTML" experience={4}/>
                <SkillBlock name="CSS" experience={4}/>
                <SkillBlock name="Sass" experience={3}/>
                <SkillBlock name="Node.js" experience={1}/>
                <SkillBlock name="Git" experience={4}/>
                <SkillBlock name="Material-UI" experience={2}/>
            </section>
        </Wrapper>
    );
};

export default Skills;