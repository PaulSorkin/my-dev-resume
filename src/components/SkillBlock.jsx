import React from 'react';

const SkillBlock = ({name, experience}) => {
    return (
        <div className="skill__block">
            <p className="skill__name">{name}</p>
            <p className="skill__experience">{experience} Years Experience</p>
        </div>
    );
};

export default SkillBlock;