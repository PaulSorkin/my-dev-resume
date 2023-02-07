import './App.scss';
import Header from "./components/Header";
import Skills from "./components/Skills";
import Container from "./components/Container";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <>
            <BrowserRouter>
            <Container>
                <Header/>
                <Skills/>
                <Projects/>
            </Container>
            <Contacts/>
            <Footer/>
            </BrowserRouter>
        </>

    );
}

export default App;
