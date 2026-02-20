
import "./App.css"
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link as ScrollLink, Element } from 'react-scroll';
import Home from './pages/Home';
import About from './pages/About';
import MyWorks from './pages/MyWorks';
import Contact from './pages/Contact';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    
    <Router>
      <nav style={styles.nav}>
        <div style={styles.logo}>ADITHYA CHANDRA</div>
        
      
        <div style={styles.hamburger} onClick={toggleMenu}>
          {isOpen ? '✕' : '☰'}
        </div>

  
        <ul style={{
          ...styles.navLinks,
          ...(isOpen ? styles.navLinksActive : styles.navLinksDefault)
        }}>
          <li><ScrollLink onClick={() => setIsOpen(false)} to="home" spy={true} smooth={true} duration={500} style={styles.link}>Home</ScrollLink></li>
          <li><ScrollLink onClick={() => setIsOpen(false)} to="about" spy={true} smooth={true} duration={500} style={styles.link}>About</ScrollLink></li>
          <li><ScrollLink onClick={() => setIsOpen(false)} to="works" spy={true} smooth={true} duration={500} style={styles.link}>Works</ScrollLink></li>
          <li><ScrollLink onClick={() => setIsOpen(false)} to="contact" spy={true} smooth={true} duration={500} style={styles.link}>Contact</ScrollLink></li>
        </ul>
      </nav>

      <Element name="home"><Home /></Element>
      <Element name="about"><About /></Element>
      <Element name="works"><MyWorks /></Element>
      <Element name="contact"><Contact /></Element>

      <footer style={styles.footer}>
        <p>© 2026 Adithya Chandra Photography. All rights reserved.</p>
      </footer>
    </Router>
  );
}

const styles = {
  nav: { 
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: '0 50px', background: 'rgba(0, 0, 0, 0.9)', color: '#fff',
    height: '70px', position: 'fixed', top: 0, width: '100%', zIndex: 1000, boxSizing: 'border-box'
  },
  logo: { fontWeight: 'bold', fontSize: '1.2rem', letterSpacing: '2px' },
  
  // Mobile Menu Button
  hamburger: {
    display: 'none', // We'll hide this on desktop using a real CSS file later
    fontSize: '2rem',
    cursor: 'pointer',
    zIndex: 1001
  },

  navLinks: { 
    display: 'flex', 
    listStyle: 'none', 
    gap: '30px',
    transition: 'all 0.3s ease'
  },
  
  // Add these logic styles for responsiveness
  navLinksDefault: {
    // Desktop defaults
  },

  link: { cursor: 'pointer', textDecoration: 'none', color: '#fff', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' },
};
export default App;