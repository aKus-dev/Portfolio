import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AboutScreen from "../components/about/AboutScreen"
import ContactScreen from "../components/contact/ContactScreen"
import HomeScreen from "../components/home/HomeScreen"
import ScrollToTop from "./ScrollToTop"

const AppRouter = () => {
    return (

        <Router>
            <ScrollToTop>
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="about" element={<AboutScreen />} />
                    <Route path="contact" element={<ContactScreen />} />
                </Routes>
            </ScrollToTop>
        </Router>
    )
}

export default AppRouter
