import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import homeBGImg from "../images/homeBg.jpg";
import ProfilePic from "../images/profilePic.jpg";

const Home = () => {
  return (
    <div style={styles.heroContainer}>
      <div style={styles.overlay}></div>
      <div style={styles.content}>
        <img src={ProfilePic} alt="Adithya Chandra" style={styles.profileImg} />
        <h1 style={styles.name}>Adithya Chandra</h1>
        <p style={styles.subtitle}>Capturing the essence of light and life.</p>
        
        <ScrollLink to="works" smooth={true} duration={500}>
          <button 
            style={styles.button}
            onMouseOver={(e) => { e.target.style.backgroundColor = '#fff'; e.target.style.color = '#000'; }}
            onMouseOut={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#fff'; }}
          >
            Explore Gallery
          </button>
        </ScrollLink>
      </div>
    </div>
  );
};

const styles = {
  heroContainer: { 
    height: '100vh', width: '100%', backgroundImage: `url(${homeBGImg})`,
    backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative',
    display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white'
  },
  overlay: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1 },
  content: { position: 'relative', zIndex: 2, textAlign: 'center' },
  profileImg: { borderRadius: '50%', width: '130px', height: '130px', objectFit: 'cover', border: '3px solid rgba(255, 255, 255, 0.2)', marginBottom: '20px' },
  name: { fontSize: '4rem', margin: '0', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '-1px' },
  subtitle: { fontSize: '1.2rem', color: '#ccc', marginBottom: '40px', letterSpacing: '2px' },
  button: { padding: '15px 40px', fontSize: '1rem', backgroundColor: 'transparent', color: '#fff', border: '2px solid #fff', cursor: 'pointer', fontWeight: '600', transition: '0.3s', textTransform: 'uppercase', letterSpacing: '2px' }
};

export default Home;