import React, { useState, useEffect } from 'react';
import { getEvents, rsvpToEvent } from '../api';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await getEvents();
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const handleRSVP = async (eventId) => {
    const attendee = prompt('Enter your name:');
    if (attendee) {
      try {
        await rsvpToEvent(eventId, attendee);
        fetchEvents();
      } catch (error) {
        console.error('Error RSVPing to event:', error);
      }
    }
  };

  return (
    <div>
      <h2>Events</h2>
      {events.length === 0 ? (
        <p>No events available</p>
      ) : (
        events.map(event => (
          <div key={event.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p>Organizer: {event.organizerName}</p>
            <p>Date: {new Date(event.dateTime).toLocaleString()}</p>
            <p>Attendees: {event.attendees ? event.attendees.length : 0}</p>
            <a href={event.eventLink} target="_blank" rel="noopener noreferrer">Join Event</a>
            <br />
            <button onClick={() => handleRSVP(event.id)}>RSVP</button>
          </div>
        ))
      )}
    </div>
  );
};

export default EventList;