import Footer from "../home/footer/Footer";
import Header from "../home/header/Header";
import Contact from './Contact';


const ContactScreen = () => {
    
    document.body.classList.remove('no-scroll') 

    return (
        <div>
            <Header />
            <Contact />
            <Footer />
        </div>
    )
}

export default ContactScreen;
