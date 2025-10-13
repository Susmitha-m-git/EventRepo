import React, { useState, useEffect } from 'react';
import { getEvents, rsvpToEvent } from '../api';
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

  if (loading) {
    return <div>Loading events...</div>;
  }

  return (
    <div>
      <h2>Event List</h2>
      {events.length === 0 ? (
        <p>No events available</p>
      ) : (
        events.map(event => (
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

export default EventList;