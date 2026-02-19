import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        
        {/* IMAGE SIDE */}
        <div style={styles.imageSection}>
          <div style={styles.imageFrame}>
            <img 
              src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=2070&auto=format&fit=crop" 
              alt="The Photographer" 
              style={styles.image} 
            />
            <div style={styles.imageDecoration}></div>
          </div>
        </div>
        
        {/* TEXT SIDE */}
        <div style={styles.textSection}>
          <span style={styles.tagline}>Since 2014</span>
          <h1 style={styles.heading}>The Man <br/>Behind The Lens.</h1>
          
          <p style={styles.bio}>
            I am a professional photographer , specializing in 
            street photography and cinematic portraits. My journey started with a vintage 
            film camera, and since then, I've been obsessed with the way light interacts 
            with urban landscapes.
          </p>

          <div style={styles.detailsGrid}>
            {/* <div style={styles.detailBox}>
              <h3 style={styles.subHeading}>My Gear</h3>
              <ul style={styles.list}>
                <li>Sony A7R IV</li>
                <li>35mm f/1.4 G-Master</li>
                <li>85mm f/1.8 Portrait</li>
              </ul>
            </div> */}

            {/* <div style={styles.detailBox}>
              <h3 style={styles.subHeading}>Awards</h3>
              <ul style={styles.list}>
                <li>NatGeo Urban Award</li>
                <li>Vogue Featured '23</li>
                <li>LensCulture Winner</li>
              </ul>
            </div> */}
          </div>

          <div style={styles.statsBar}>
            <div style={styles.statItem}><strong>6+</strong> <span>Years Exp.</span></div>
            <div style={styles.statItem}><strong>100+</strong> <span>Shoots</span></div>
            {/* <div style={styles.statItem}><strong>20+</strong> <span>Awards</span></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '120px 20px',
    backgroundColor: '#000',
    color: '#fff',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
  },
  content: {
    display: 'flex',
    maxWidth: '1100px',
    margin: '0 auto',
    gap: '80px',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  imageSection: {
    flex: '1',
    minWidth: '320px',
    position: 'relative',
  },
  imageFrame: {
    position: 'relative',
    padding: '15px',
    border: '1px solid #333',
  },
  image: {
    width: '100%',
    display: 'block',
    filter: 'grayscale(100%) contrast(1.1)',
    transition: 'filter 0.5s ease',
  },
  imageDecoration: {
    position: 'absolute',
    top: '-20px',
    right: '-20px',
    width: '100px',
    height: '100px',
    borderTop: '2px solid #fff',
    borderRight: '2px solid #fff',
    zIndex: -1,
  },
  textSection: {
    flex: '1.2',
    minWidth: '320px',
  },
  tagline: {
    fontSize: '0.8rem',
    textTransform: 'uppercase',
    letterSpacing: '5px',
    color: '#888',
    display: 'block',
    marginBottom: '10px',
  },
  heading: {
    fontSize: '3.5rem',
    fontWeight: '800',
    marginBottom: '25px',
    lineHeight: '1.1',
    textTransform: 'uppercase',
  },
  bio: {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: '#ccc',
    marginBottom: '40px',
  },
  detailsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
    marginBottom: '40px',
  },
  subHeading: {
    fontSize: '1rem',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    color: '#fff',
    marginBottom: '15px',
    borderBottom: '1px solid #333',
    paddingBottom: '5px',
    display: 'inline-block',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    color: '#888',
    fontSize: '0.9rem',
    lineHeight: '2',
  },
  statsBar: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '30px 0',
    borderTop: '1px solid #222',
  },
  statItem: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  },
};

export default About;