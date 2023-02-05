import React from 'react';
import Rings from "../assets/svg/skills_rings.svg";

const SkillBlock = ({name, experience}) => {
    return (
        <div className="skill__block">
            <p className="skill__name">{name}</p>
            <p className="skill__experience">{experience} Years Experience</p>
            <img src={Rings} alt="Rings" className="skills__block__background"/>
        </div>
    );
};

export default SkillBlock;