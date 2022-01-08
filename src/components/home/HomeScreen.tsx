import Header from "./header/Header";
import Hero from './hero/Hero';
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";
import Contact from './contact/Contact';
import Footer from "./footer/Footer";

const HomeScreen = () => {

    document.body.classList.remove('no-scroll') 

    return (
        <>
            <Header />
            <Hero />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </>
    )
}

export default HomeScreen;
