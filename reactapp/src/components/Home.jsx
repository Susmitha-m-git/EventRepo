import React from 'react';

const styles = {
  home: {},
  heroSection: {},
  heroTitle: {},
  heroSubtitle: {}
};

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

export default Home;