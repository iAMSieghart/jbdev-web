import './App.css';
import Header from './component/Header';
import HeroSection from './component/HeroSection';
import AboutSection from './component/AboutSection';
import ProjectSection from './component/ProjectsSection';
import ContactSection from './component/ContactSection';
import Footer from './component/Footer';

function App() {
  return (
    <>
      <HeroSection />
      <Header />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
