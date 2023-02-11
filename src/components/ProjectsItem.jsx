import React from 'react';
import CustomLink from "./CustomLink";

const ProjectsItem = ({ProjectPic, name, stack, description, deploy, code=null}) => {
    return (
        <div className='projects__item'>
            <div className="project__image">
                <img src={ProjectPic} alt={name}/>
                <div className="projects__links_desktop">
                    <CustomLink text="VIEW PROJECT" to={deploy} />
                    {!code ? null :
                    <CustomLink text="VIEW CODE" to={code} />}
                </div>
            </div>
            <p className="project__name">{name}</p>
            <div className="project__stack__list">
                {stack.map((e) => {
                    return (
                        <span key={e} className="project__stack__item">{e}</span>
                    );
                })}
            </div>
            <p className="project__description">{description}</p>
            <div className="projects__links_small">
                <CustomLink text="VIEW PROJECT" to={deploy} />
                {!code ? null :
                    <CustomLink text="VIEW CODE" to={code} />}
            </div>
        </div>
    );
};

export default ProjectsItem;