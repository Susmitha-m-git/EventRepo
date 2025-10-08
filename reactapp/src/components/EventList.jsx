import React, { useState, useEffect } from 'react';
import EventCard from './EventCard';
import { getEvents, rsvpToEvent } from '../api';

const EventList = ({ events = [], onEventsUpdated = () => {} }) => {
  const [localEvents, setLocalEvents] = useState(events);

  useEffect(() => {
    if (events.length === 0) {
      loadEvents();
    } else {
      setLocalEvents(events);
    }
  }, [events]);

  const loadEvents = async () => {
    try {
      const response = await getEvents();
      setLocalEvents(response.data || []);
    } catch (error) {
      console.error('Error loading events:', error);
    }
  };
  const handleRSVP = async (eventId, attendeeName) => {
    try {
      await rsvpToEvent(eventId, attendeeName);
      onEventsUpdated();
    } catch (error) {
      alert('Failed to RSVP. Please try again.');
    }
  };

  const sortedEvents = [...(localEvents || [])].sort((a, b) => 
    new Date(a.dateTime) - new Date(b.dateTime)
  );

  return (
    <div style={styles.eventList}>
      <h2 style={styles.eventListTitle}>Upcoming Events</h2>
      {sortedEvents.length === 0 ? (
        <p style={styles.noEvents}>No events scheduled yet.</p>
      ) : (
        sortedEvents.map(event => (
          <EventCard
            key={event.id}
            event={event}
            onRSVP={handleRSVP}
          />
        ))
      )}
    </div>
  );
};

const styles = {
  eventList: {
    margin: '20px 0',
  },
  eventListTitle: {
    color: '#333',
    marginBottom: '20px',
    textAlign: 'center',
    fontSize: '1.5em',
  },
  noEvents: {
    textAlign: 'center',
    color: '#666',
    fontStyle: 'italic',
    padding: '40px',
    background: 'white',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  }
};

export default EventList;