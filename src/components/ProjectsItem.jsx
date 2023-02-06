import React from 'react';
import Link from "./Link";

const ProjectsItem = ({ProjectPic, name, stack}) => {
    return (
        <div className='projects__item'>
            <div className="project__image">
                <img src={ProjectPic} alt={name}/>
                <div className="projects__links_desktop">
                    <Link text="VIEW PROJECT" />
                    <Link text="VIEW CODE" />
                </div>
            </div>
            <p className="project__name">{name}</p>
            <div className="project__stack__list">
                {stack.map((e) => {
                    return (
                        <span className="project__stack__item">{e}</span>
                    );
                })}
            </div>
            <div className="projects__links_small">
                <Link text="VIEW PROJECT" />
                <Link text="VIEW CODE" />
            </div>
        </div>
    );
};

export default ProjectsItem;