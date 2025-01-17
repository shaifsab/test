import { useContext } from 'react';
import { ThemeContext } from './contexts/theme';
import Header from './components/header/Header';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import ScrollToTop from './components/scrollToTop/ScrollToTop';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  const { themeName } = useContext(ThemeContext); 

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />
      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
