import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        <p style={styles.footerText}>
          &copy; 2024 Event Platform. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: 'center',
    padding: '20px',
    marginTop: '30px',
    borderTop: '1px solid #e9ecef',
  },
  footerContent: {
    maxWidth: '600px',
    margin: '0 auto',
  },
  footerText: {
    margin: '0',
    fontSize: '0.9em',
    color: '#666',
  }
};

export default Footer;