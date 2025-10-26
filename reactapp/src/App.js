import React, { useState, useEffect } from 'react';
import { getEvents } from './api';
import Home from './components/Home';
import EventForm from './components/EventForm';
import CalendarView from './components/CalendarView';
import EventList from './components/EventList';
import Footer from './components/Footer';
import Login from './components/Login';
import './App.css';

function App() {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const loadEvents = async () => {
    try {
      const response = await (getEvents?.() ?? Promise.resolve({ data: [] }));
      setEvents(response?.data || []);
      setError(null);
    } catch (err) {
      console.error('Error loading events:', err);
      setEvents([]);
      setError(err);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  const handleLogin = (token) => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="App">
      <div className="container">
        <button onClick={handleLogout} style={styles.logoutBtn}>Logout</button>
        <Home />
        <div className="main-content">
          <div className="left-panel">
            <EventForm onEventCreated={loadEvents} />
          </div>
          <div className="right-panel">
            <EventList events={events} onEventsUpdated={loadEvents} />
            <CalendarView events={events} />
          </div>
        </div>
        <Footer />
        {error && (
          <p style={{ color: 'red', textAlign: 'center' }}>
            Failed to load events
          </p>
        )}
      </div>
    </div>
  );
}

const styles = {
  logoutBtn: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    padding: '8px 16px',
    background: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    zIndex: 1000
  }
};

export default App;
