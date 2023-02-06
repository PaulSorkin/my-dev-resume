import React from 'react';
import Link from "./Link";
import Wrapper from "./Wrapper";
import ProjectsItem from "./ProjectsItem";
import ProjectPic1 from "../assets/img/projects/Bitmap.jpg"

const Projects = () => {
    return (
        <Wrapper>
            <section className="projects">
                <div className="projects__header">
                    <h2>Projects</h2>
                    <Link text="CONTACT ME"/>
                </div>
                <div className="projects__block">
                    <ProjectsItem ProjectPic={ProjectPic1} stack={['HTML', 'CSS', 'JAVASCRIPT']} name={'TODO WEB APP'} />
                    <ProjectsItem ProjectPic={ProjectPic1} stack={['HTML', 'CSS', 'JAVASCRIPT']} name={'TODO WEB APP'} />
                    <ProjectsItem ProjectPic={ProjectPic1} stack={['HTML', 'CSS', 'JAVASCRIPT']} name={'TODO WEB APP'} />
                    <ProjectsItem ProjectPic={ProjectPic1} stack={['HTML', 'CSS', 'JAVASCRIPT']} name={'TODO WEB APP'} />
                    <ProjectsItem ProjectPic={ProjectPic1} stack={['HTML', 'CSS', 'JAVASCRIPT']} name={'TODO WEB APP'} />
                    <ProjectsItem ProjectPic={ProjectPic1} stack={['HTML', 'CSS', 'JAVASCRIPT']} name={'TODO WEB APP'} />
                </div>
            </section>
        </Wrapper>
    );
};

export default Projects;