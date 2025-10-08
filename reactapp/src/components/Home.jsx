import React from 'react';

const Home = () => {
  return (
    <div style={styles.home}>
      <div style={styles.heroSection}>
        <h1 style={styles.heroTitle}>Virtual Event Hosting Platform</h1>
        <p style={styles.heroSubtitle}>
          Streamline your virtual events with our comprehensive hosting platform
        </p>
      </div>
    </div>
  );
};

const styles = {
  home: {
    width: '100%',
  },
  heroSection: {
    textAlign: 'center',
    color: 'white',
    marginBottom: '40px',
    padding: '40px 0',
  },
  heroTitle: {
    fontSize: '3em',
    marginBottom: '15px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
    fontWeight: 'bold',
  },
  heroSubtitle: {
    fontSize: '1.2em',
    opacity: '0.9',
    margin: '0',
  }
};

export default Home;