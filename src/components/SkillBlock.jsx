import React from 'react';

const SkillBlock = ({name, experience}) => {
    return (
        <div className="skill__block">
            <p className="skill__name">{name}</p>
            <p className="secondary_text">{experience} {experience === 1 ? 'Year' : 'Years'} Experience</p>
        </div>
    );
};

export default SkillBlock;