import React from 'react';
import {motion} from "framer-motion";
import {MCustomLink} from "./CustomLink";
import Wrapper from "./Wrapper";
import {MProjectsItem} from "./ProjectsItem";
import World from "../assets/img/projects/World.jpg"
import Blog from "../assets/img/projects/Blog-MERN.jpg"
import Shelter from "../assets/img/projects/Shelter.png"
import RemodelingTool from "../assets/img/projects/Home-Remodeling-contractors-App.png"
import Gallery from "../assets/img/projects/Image Gallery.png"
import Sounds from "../assets/img/projects/Eco-sounds.png"
import {HashLink} from "react-router-hash-link";

const textAnimation = {
    hidden: {
        x: 100,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: {delay: custom * 0.2},
    }),
};
const picAnimation = {
    hidden: {
        opacity: 0,
    },
    visible: custom => ({
        opacity: 1,
        transition: {delay: custom * 0.2},
    }),
};


const Projects = () => {
    return (
        <Wrapper>
            <motion.section
                initial='hidden'
                whileInView='visible'
                viewport={{amount: 0.1, once: true}}
                className="projects">
                <div className="projects__header">
                    <motion.h2 custom={1} variants={textAnimation}>Projects</motion.h2>
                    <HashLink to="/#contacts" smooth style={{textDecoration: 'none'}}>
                        <MCustomLink custom={3} variants={textAnimation} text="CONTACT ME"/>
                    </HashLink>
                </div>
                <div className="projects__block">
                    <MProjectsItem custom={3} variants={picAnimation}
                                   ProjectPic={World}
                                   stack={['React', 'Styled Components', 'REST API']}
                                   name={'Where is the world?'}
                                   description={'Enhance your knowledge of the world with this interactive, Single-page application. Easily explore facts about various countries, filtered by region or country name. Customize your experience by switching between Dark and Light modes. The application is powered by data from the reputable Restcountries API, ensuring accurate and up-to-date information.'}
                                   deploy={'https://paulsorkin.github.io/where-is-the-world/#/'}
                                   code={'https://github.com/PaulSorkin/where-is-the-world/tree/master'}/>
                    <MProjectsItem custom={3} variants={picAnimation}
                                   ProjectPic={Blog}
                                   stack={['MongoDB', 'ExpressJS', 'React', 'Node.js', 'Redux', 'SASS', 'JWT authentication']}
                                   name={'Pauls\' Blog'}
                                   description={'Create an account and host your blog, easily managing your content with support for CRUD operations. Built using the MERN Stack, this application is designed to provide a seamless user experience for creating, reading, updating, and deleting articles.'}
                                   deploy={'https://blog-mern-frontend-three.vercel.app/'}
                                   code={'https://github.com/PaulSorkin/blog-mern-frontend'}/>
                    <MProjectsItem custom={3} variants={picAnimation}
                                   ProjectPic={Shelter}
                                   stack={['HTML', 'SASS', 'JAVASCRIPT']}
                                   name={'Shelter'}
                                   description={'Discover your new furry friend at the Cozy House pets shelter website. Designed with a user-friendly endless slider and detailed information modal window, it allows you to easily browse and learn about the animals available for adoption. Built entirely on raw JavaScript code, this website is an example of markup and styles that pixel-perfect fit the Figma layout.'}
                                   deploy={'https://shelter-rho.vercel.app/index.html'}
                                   code={'https://github.com/PaulSorkin/shelter'}/>
                    <MProjectsItem custom={3} variants={picAnimation}
                                   ProjectPic={RemodelingTool}
                                   stack={['React', 'Redux Toolkit', 'Styled-Components']}
                                   name={'Home Remodeling contractors\' App'}
                                   description={'“Works contractor” is a person that handles/manages projects in the home remodeling area. A contractor has a web app based dashboard where he could manage his projects. We want to implement a new screen for him to give him the ability to look up his existing projects based on some criteria and represent them in a friendly-user way.'}
                                   deploy={'https://paulsorkin.github.io/homaze-test-task/'}
                                   code={'https://github.com/PaulSorkin/homaze-test-task'}/>
                    <MProjectsItem custom={3} variants={picAnimation}
                                   ProjectPic={Gallery}
                                   stack={['HTML', 'CSS', 'JAVASCRIPT', 'REST API']}
                                   name={'Image Gallery'}
                                   description={'Utilizing the Unsplash API, the application quickly searches and displays high-quality images related to the keywords entered in the search form. Built with HTML, CSS, and raw JavaScript, this application offers a sleek and intuitive interface, making it easy to find the perfect image.'}
                                   deploy={'https://image-galery-omega.vercel.app/'}
                                   code={'https://github.com/PaulSorkin/image-galery'}/>
                    <MProjectsItem custom={3} variants={picAnimation}
                                   ProjectPic={Sounds}
                                   stack={['HTML', 'CSS', 'JAVASCRIPT']}
                                   name={'Eco-sounds'}
                                   description={'Explore the beauty of nature with this simple educational tool. Designed to teach users to distinguish between the singing of different birds, or simply to provide a relaxing listening experience with nature sounds. With various sounds and images, this small application offers a unique and enjoyable way to connect with nature.'}
                                   deploy={'https://rolling-scopes-school.github.io/paulsorkin-JSFEPRESCHOOL/eco-sounds/'}/>
                </div>
            </motion.section>
        </Wrapper>
    );
};

export default Projects;