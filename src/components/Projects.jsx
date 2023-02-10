import React from 'react';
import Link from "./Link";
import Wrapper from "./Wrapper";
import ProjectsItem from "./ProjectsItem";
import World from "../assets/img/projects/World.png"
import Blog from "../assets/img/projects/Blog-MERN.PNG"
import Shelter from "../assets/img/projects/Shelter.PNG"
import Firebase from "../assets/img/projects/Google Firebase Authentication.PNG"
import Gallery from "../assets/img/projects/Image Gallery.PNG"
import Sounds from "../assets/img/projects/Eco-sounds.PNG"
import {HashLink} from "react-router-hash-link";

const Projects = () => {
    return (
        <Wrapper>
            <section className="projects">
                <div className="projects__header">
                    <h2>Projects</h2>
                    <HashLink to="/#contacts" smooth style={{textDecoration: 'none'}}>
                        <Link text="CONTACT ME"/>
                    </HashLink>
                </div>
                <div className="projects__block">
                    <ProjectsItem ProjectPic={World} stack={['React', 'Styled Components', 'REST API']} name={'Where is the world?'} />
                    <ProjectsItem ProjectPic={Blog} stack={['MongoDB', 'ExpressJS', 'React', 'Node.js', 'Redux', 'SASS', 'JWT authentication']} name={'Pauls\' Blog'} />
                    <ProjectsItem ProjectPic={Shelter} stack={['HTML', 'SASS', 'JAVASCRIPT']} name={'Shelter'} />
                    <ProjectsItem ProjectPic={Firebase} stack={['React', 'TypeScript', 'Redux Toolkit', 'Google Firebase Authentication']} name={'Google Firebase Authentication'} />
                    <ProjectsItem ProjectPic={Gallery} stack={['HTML', 'CSS', 'JAVASCRIPT', 'REST API']} name={'Image Gallery'} />
                    <ProjectsItem ProjectPic={Sounds} stack={['HTML', 'CSS', 'JAVASCRIPT']} name={'Eco-sounds'} />
                </div>
            </section>
        </Wrapper>
    );
};

export default Projects;