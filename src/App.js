import './App.scss';
import Header from "./components/Header";
import Skills from "./components/Skills";
import Container from "./components/Container";
import Projects from "./components/Projects";

function App() {
    return (
        <Container>
            <Header/>
            <Skills />
            <Projects />
        </Container>
    );
}

export default App;
