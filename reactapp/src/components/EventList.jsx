import React, { useState, useEffect } from 'react';
import { getEvents, rsvpToEvent, deleteEvent } from '../api';
import EventCard from './EventCard';

const EventList = ({ events: propEvents, onEventsUpdated }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (propEvents) {
      setEvents(propEvents);
    } else {
      loadEvents();
    }
  }, [propEvents]);

  const loadEvents = async () => {
    try {
      setLoading(true);
      const response = await getEvents();
      setEvents(response?.data || []);
    } catch (error) {
      console.error('Error loading events:', error);
      setEvents([]);
    } finally {
      setLoading(false);
    }
  };

  const handleRSVP = async (eventId, attendeeName) => {
    try {
      await rsvpToEvent(eventId, attendeeName);
      if (onEventsUpdated) {
        onEventsUpdated();
      } else {
        loadEvents();
      }
    } catch (error) {
      console.error('Error with RSVP:', error);
    }
  };

  const handleDelete = async (eventId) => {
    try {
      await deleteEvent(eventId);
      if (onEventsUpdated) {
        onEventsUpdated();
      } else {
        loadEvents();
      }
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  if (loading) {
    return <div>Loading events...</div>;
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Event List</h2>
      {events.length === 0 ? (
        <p style={styles.noEvents}>No events available</p>
      ) : (
        events.map(event => (
          <EventCard 
            key={event.id} 
            event={event} 
            onRSVP={handleRSVP}
            onDelete={handleDelete}
          />
        ))
      )}
    </div>
  );
};

const styles = {
  container: {
    background: 'white',
    padding: '30px',
    flex: 1,
    overflowY: 'auto',
  },
  title: {
    color: '#333',
    marginBottom: '25px',
    fontSize: '1.5rem',
    fontWeight: '600',
    borderBottom: '2px solid #667eea',
    paddingBottom: '10px',
  },
  noEvents: {
    textAlign: 'center',
    color: '#666',
    fontSize: '16px',
    padding: '40px 20px',
  }
};

export default EventList;