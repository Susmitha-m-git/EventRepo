import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        <p style={styles.footerText}>
          &copy; 2024 Virtual Event Hosting Platform. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    background: '#333',
    color: 'white',
    textAlign: 'center',
    padding: '20px',
    marginTop: '40px',
  },
  footerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  footerText: {
    margin: '0',
    fontSize: '0.9em',
  }
};

export default Footer;