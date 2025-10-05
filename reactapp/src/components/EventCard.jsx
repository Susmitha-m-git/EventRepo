import React from 'react';

const EventCard = ({ event }) => {
  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <p>Organizer: {event.organizerName}</p>
      <p>Date: {new Date(event.dateTime).toLocaleString()}</p>
      <p>Attendees: {event.attendees ? event.attendees.length : 0}</p>
      <a href={event.eventLink} target="_blank" rel="noopener noreferrer">Join Event</a>
    </div>
  );
};

export default EventCard;