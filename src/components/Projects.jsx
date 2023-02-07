import React from 'react';
import Link from "./Link";
import Wrapper from "./Wrapper";
import ProjectsItem from "./ProjectsItem";
import ProjectPic1 from "../assets/img/projects/Bitmap.jpg"
import {HashLink} from "react-router-hash-link";

const Projects = () => {
    return (
        <Wrapper>
            <section className="projects">
                <div className="projects__header">
                    <h2>Projects</h2>
                    <HashLink to="/#contacts" smooth>
                        <Link text="CONTACT ME"/>
                    </HashLink>
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