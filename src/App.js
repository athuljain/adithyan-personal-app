

// import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { Link as ScrollLink, Element } from 'react-scroll';
// import Home from './pages/Home';
// import About from './pages/About';
// import MyWorks from './pages/MyWorks';
// import Contact from './pages/Contact';

// function App() {
//   return (
//     <Router>
//       <nav style={styles.nav}>
//         <div style={styles.logo}>Adithya Chandra</div>
//         <ul style={styles.navLinks}>
//           <li><ScrollLink to="home" smooth={true} duration={500} style={styles.link}>Home</ScrollLink></li>
//           <li><ScrollLink to="about" smooth={true} duration={500} style={styles.link}>About</ScrollLink></li>
//           <li><ScrollLink to="works" smooth={true} duration={500} style={styles.link}>My Works</ScrollLink></li>
//           <li><ScrollLink to="contact" smooth={true} duration={500} style={styles.link}>Contact</ScrollLink></li>
//         </ul>
//       </nav>

//       {/* All sections stacked on one page */}
//       <Element name="home"><Home /></Element>
//       <Element name="about"><About /></Element>
//       <Element name="works"><MyWorks /></Element>
//       <Element name="contact"><Contact /></Element>
//     </Router>
//   );
// }

// const styles = {
//   nav: { 
//     display: 'flex', 
//     justifyContent: 'space-between', 
//     alignItems: 'center',
//     padding: '0 50px', 
//     background: 'rgba(26, 26, 26, 0.95)', 
//     color: '#fff',
//     height: '70px',
//     position: 'fixed', // Keep nav at the top
//     top: 0,
//     width: '100%',
//     zIndex: 1000,
//     boxSizing: 'border-box'
//   },
//   logo: { fontWeight: 'bold', fontSize: '1.2rem', letterSpacing: '2px' },
//   navLinks: { display: 'flex', listStyle: 'none', gap: '30px', margin: 0, padding: 0 },
//   link: { cursor: 'pointer', textDecoration: 'none', color: '#fff', fontSize: '0.9rem', textTransform: 'uppercase' }
// };

// export default App;



import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link as ScrollLink, Element } from 'react-scroll';
import Home from './pages/Home';
import About from './pages/About';
import MyWorks from './pages/MyWorks';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <nav style={styles.nav}>
        <div style={styles.logo}>ADITHYA CHANDRA</div>
        <ul style={styles.navLinks}>
          <li><ScrollLink to="home" spy={true} smooth={true} duration={500} style={styles.link}>Home</ScrollLink></li>
          <li><ScrollLink to="about" spy={true} smooth={true} duration={500} style={styles.link}>About</ScrollLink></li>
          <li><ScrollLink to="works" spy={true} smooth={true} duration={500} style={styles.link}>Works</ScrollLink></li>
          <li><ScrollLink to="contact" spy={true} smooth={true} duration={500} style={styles.link}>Contact</ScrollLink></li>
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
  navLinks: { display: 'flex', listStyle: 'none', gap: '30px' },
  link: { cursor: 'pointer', textDecoration: 'none', color: '#fff', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' },
  footer: { textAlign: 'center', padding: '40px', background: '#000', color: '#444', borderTop: '1px solid #111' }
};

export default App;