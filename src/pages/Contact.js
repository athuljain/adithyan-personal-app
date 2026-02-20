import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then(() => {
          alert("Message Sent successfully!");
          form.current.reset();
      }, (error) => {
          alert("Failed to send: " + error.text);
      });
  };

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.container}>
        <div style={styles.headerSection}>
          <h2 style={styles.heading}>Get In Touch</h2>
          
          <div style={styles.contactInfo}>
            {/* Phone Number Section */}
            <div style={styles.infoItem}>
              <span style={styles.icon}>📞</span>
              <a href="tel:+971562980445" style={styles.link}>+971 56 298 0445</a>
            </div>

            {/* Email Section - ADDED THIS */}
            <div style={styles.infoItem}>
              <span style={styles.icon}>✉️</span>
              <a href="mailto:yourname@example.com" style={styles.link}>Adithyachandra9745@gmail.com</a>
            </div>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} style={styles.form}>
          <div style={styles.inputGroup}>
            <input type="text" name="user_name" placeholder="Name" required style={styles.input} />
            <input type="email" name="user_email" placeholder="Email" required style={styles.input} />
          </div>
          <textarea name="message" placeholder="Tell me about your project..." rows="6" style={styles.textarea} required />
          <button type="submit" style={styles.button} className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  pageWrapper: {
    padding: '120px 20px',
    backgroundColor: '#000', // Matches your other pages
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
  },
  container: {
    maxWidth: '900px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
    // Glassmorphism effect
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    padding: '50px',
    borderRadius: '20px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
  headerSection: {
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    letterSpacing: '3px',
    textTransform: 'uppercase',
    margin: '0 0 10px 0',
  },
  subtext: {
    color: '#888',
    marginBottom: '30px',
    fontSize: '1.1rem',
  },
  contactInfo: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    flexWrap: 'wrap',
  },
  infoItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'color 0.3s',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  inputGroup: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap', // Responsive helper
  },
  input: {
    flex: '1',
    minWidth: '250px',
    padding: '15px',
    backgroundColor: '#111',
    border: '1px solid #333',
    borderRadius: '5px',
    color: '#fff',
    fontSize: '1rem',
    outline: 'none',
  },
  textarea: {
    padding: '15px',
    backgroundColor: '#111',
    border: '1px solid #333',
    borderRadius: '5px',
    color: '#fff',
    fontSize: '1rem',
    resize: 'none',
    outline: 'none',
  },
  button: {
    padding: '15px 40px',
    backgroundColor: '#fff',
    color: '#000',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    transition: 'all 0.3s ease',
    alignSelf: 'center',
  }
};

export default Contact;