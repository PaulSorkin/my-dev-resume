import React from 'react';
import SkillBlock from "./SkillBlock";

const Skills = () => {
    return (
        <section className={'skills'}>
            <SkillBlock name="HTML" experience={4} />
            <SkillBlock name="CSS" experience={4} />
            <SkillBlock name="Javascript" experience={4} />
            <SkillBlock name="Accessibility" experience={4} />
            <SkillBlock name="React" experience={3} />
            <SkillBlock name="Sass" experience={3} />
        </section>
    );
};

export default Skills;