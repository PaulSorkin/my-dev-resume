import React, {forwardRef} from 'react';
import {motion} from "framer-motion";

const SkillBlock = forwardRef(({name, experience}, ref) => {
    return (
        <div ref={ref} className="skill__block">
            <p className="skill__name">{name}</p>
            <p className="secondary_text">{experience} {experience === 1 ? 'Year' : 'Years'} Experience</p>
        </div>
    );
});

export const MSkillBlock = motion(SkillBlock);
export default SkillBlock;