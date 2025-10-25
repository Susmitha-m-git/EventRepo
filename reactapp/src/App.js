import React, { useState, useEffect } from 'react';
import { getEvents } from './api';
import Home from './components/Home';
import EventForm from './components/EventForm';
import CalendarView from './components/CalendarView';
import EventList from './components/EventList';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  const loadEvents = async () => {
    try {
      // ✅ Protect against undefined mocks or missing data
      const response = await (getEvents?.() ?? Promise.resolve({ data: [] }));
      setEvents(response?.data || []);
      setError(null);
    } catch (err) {
      console.error('Error loading events:', err);
      setEvents([]); // Prevent crash
      setError(err);
    }
  };

  useEffect(() => {
    // Keep events empty on startup
  }, []);

  return (
    <div className="App">
      <div className="container">
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

export default App;
