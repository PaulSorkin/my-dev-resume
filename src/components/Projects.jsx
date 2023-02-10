import React from 'react';
import CustomLink from "./CustomLink";
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
                        <CustomLink text="CONTACT ME"/>
                    </HashLink>
                </div>
                <div className="projects__block">
                    <ProjectsItem ProjectPic={World}
                                  stack={['React', 'Styled Components', 'REST API']}
                                  name={'Where is the world?'}
                                  deploy={'https://paulsorkin.github.io/where-is-the-world/#/'}
                                  code={'https://github.com/PaulSorkin/where-is-the-world/tree/master'}/>
                    <ProjectsItem ProjectPic={Blog}
                                  stack={['MongoDB', 'ExpressJS', 'React', 'Node.js', 'Redux', 'SASS', 'JWT authentication']}
                                  name={'Pauls\' Blog'}
                                  deploy={'https://blog-mern-frontend-three.vercel.app/'}
                                  code={'https://github.com/PaulSorkin/blog-mern-frontend'}/>
                    <ProjectsItem ProjectPic={Shelter}
                                  stack={['HTML', 'SASS', 'JAVASCRIPT']}
                                  name={'Shelter'}
                                  deploy={'https://rolling-scopes-school.github.io/paulsorkin-JSFE2022Q1/shelter/'}/>
                    <ProjectsItem ProjectPic={Firebase}
                                  stack={['React', 'TypeScript', 'Redux Toolkit', 'Google Firebase Authentication']}
                                  name={'Google Firebase Authentication'}
                                  deploy={'https://paulsorkin.github.io/google-firebase-authentication/#/login'}
                                  code={'https://github.com/PaulSorkin/google-firebase-authentication'}/>
                    <ProjectsItem ProjectPic={Gallery}
                                  stack={['HTML', 'CSS', 'JAVASCRIPT', 'REST API']}
                                  name={'Image Gallery'}
                                  deploy={'https://rolling-scopes-school.github.io/paulsorkin-JSFEPRESCHOOL/image-galery/'}/>
                    <ProjectsItem ProjectPic={Sounds}
                                  stack={['HTML', 'CSS', 'JAVASCRIPT']}
                                  name={'Eco-sounds'}
                                  deploy={'https://rolling-scopes-school.github.io/paulsorkin-JSFEPRESCHOOL/eco-sounds/'}/>
                </div>
            </section>
        </Wrapper>
    );
};

export default Projects;