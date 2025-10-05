import React, { useState } from 'react';
import { createEvent } from '../api';

const EventForm = ({ onEventCreated }) => {
  const [event, setEvent] = useState({
    title: '',
    description: '',
    dateTime: '',
    organizerName: '',
    eventLink: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createEvent(event);
      if (onEventCreated) onEventCreated();
      setEvent({ title: '', description: '', dateTime: '', organizerName: '', eventLink: '' });
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Event Title"
        value={event.title}
        onChange={(e) => setEvent({ ...event, title: e.target.value })}
        required
      />
      <textarea
        placeholder="Description"
        value={event.description}
        onChange={(e) => setEvent({ ...event, description: e.target.value })}
      />
      <input
        type="datetime-local"
        value={event.dateTime}
        onChange={(e) => setEvent({ ...event, dateTime: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Organizer Name"
        value={event.organizerName}
        onChange={(e) => setEvent({ ...event, organizerName: e.target.value })}
        required
      />
      <input
        type="url"
        placeholder="Event Link"
        value={event.eventLink}
        onChange={(e) => setEvent({ ...event, eventLink: e.target.value })}
        required
      />
      <button type="submit">Create Event</button>
    </form>
  );
};

export default EventForm;