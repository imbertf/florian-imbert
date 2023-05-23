//react
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";

//utils
import { LightModeContext } from "./utils/Context";

//pages
import HomePage from "./pages/HomePage";
import Portfolio from "./pages/Portfolio";
import About from "./pages/Presentation";
import MenuPage from "./pages/MenuPage";
import Contact from "./pages/ContactPage";

//components
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import ContactButton from "./components/ContactButton";
import Footer from "./components/Footer";

function App() {
    const { lightMode } = useContext(LightModeContext);
    return (
        <div className={`app ${lightMode && "light-theme"}`}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/menu" element={<MenuPage />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/presentation" element={<About />} />
                </Routes>
                <Footer />
                <ScrollToTop />
                <ContactButton />
            </BrowserRouter>
        </div>
    );
}

export default App;
