import React from 'react';
import CustomLink from "./CustomLink";
import Wrapper from "./Wrapper";
import ProjectsItem from "./ProjectsItem";
import World from "../assets/img/projects/World.jpg"
import Blog from "../assets/img/projects/Blog-MERN.jpg"
import Shelter from "../assets/img/projects/Shelter.png"
import Firebase from "../assets/img/projects/Google Firebase Authentication.png"
import Gallery from "../assets/img/projects/Image Gallery.png"
import Sounds from "../assets/img/projects/Eco-sounds.png"
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
                                  description={'Enhance your knowledge of the world with this interactive, Single-page application. Easily explore facts about various countries, filtered by region or country name. Customize your experience by switching between Dark and Light modes. The application is powered by data from the reputable Restcountries API, ensuring accurate and up-to-date information.'}
                                  deploy={'https://paulsorkin.github.io/where-is-the-world/#/'}
                                  code={'https://github.com/PaulSorkin/where-is-the-world/tree/master'}/>
                    <ProjectsItem ProjectPic={Blog}
                                  stack={['MongoDB', 'ExpressJS', 'React', 'Node.js', 'Redux', 'SASS', 'JWT authentication']}
                                  name={'Pauls\' Blog'}
                                  description={'Create an account and host your blog, easily managing your content with support for CRUD operations. Built using the MERN Stack, this application is designed to provide a seamless user experience for creating, reading, updating, and deleting articles.'}
                                  deploy={'https://blog-mern-frontend-three.vercel.app/'}
                                  code={'https://github.com/PaulSorkin/blog-mern-frontend'}/>
                    <ProjectsItem ProjectPic={Shelter}
                                  stack={['HTML', 'SASS', 'JAVASCRIPT']}
                                  name={'Shelter'}
                                  description={'Discover your new furry friend at the Cozy House pets shelter website. Designed with a user-friendly endless slider and detailed information modal window, it allows you to easily browse and learn about the animals available for adoption. Built entirely on raw JavaScript code, this website is an example of markup and styles that pixel-perfect fit the Figma layout.'}
                                  deploy={'https://rolling-scopes-school.github.io/paulsorkin-JSFE2022Q1/shelter/'}/>
                    <ProjectsItem ProjectPic={Firebase}
                                  stack={['React', 'TypeScript', 'Redux Toolkit', 'Google Firebase Authentication']}
                                  name={'Google Firebase Authentication'}
                                  description={'Ensure a secure and personalized user experience with this ready-to-use client-side authentication tool. Built on top of the reliable Google Firebase API, it allows apps to identify users and save user data securely in the cloud. With this tool, your app can provide a seamless experience across all of the user\'s devices.'}
                                  deploy={'https://paulsorkin.github.io/google-firebase-authentication/#/login'}
                                  code={'https://github.com/PaulSorkin/google-firebase-authentication'}/>
                    <ProjectsItem ProjectPic={Gallery}
                                  stack={['HTML', 'CSS', 'JAVASCRIPT', 'REST API']}
                                  name={'Image Gallery'}
                                  description={'Utilizing the Unsplash API, the application quickly searches and displays high-quality images related to the keywords entered in the search form. Built with HTML, CSS, and raw JavaScript, this application offers a sleek and intuitive interface, making it easy to find the perfect image.'}
                                  deploy={'https://rolling-scopes-school.github.io/paulsorkin-JSFEPRESCHOOL/image-galery/'}/>
                    <ProjectsItem ProjectPic={Sounds}
                                  stack={['HTML', 'CSS', 'JAVASCRIPT']}
                                  name={'Eco-sounds'}
                                  description={'Explore the beauty of nature with this simple educational tool. Designed to teach users to distinguish between the singing of different birds, or simply to provide a relaxing listening experience with nature sounds. With various sounds and images, this small application offers a unique and enjoyable way to connect with nature.'}
                                  deploy={'https://rolling-scopes-school.github.io/paulsorkin-JSFEPRESCHOOL/eco-sounds/'}/>
                </div>
            </section>
        </Wrapper>
    );
};

export default Projects;