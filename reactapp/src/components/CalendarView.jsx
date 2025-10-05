import React from 'react';

const CalendarView = ({ events = [] }) => {
  return (
    <div>
      <h2>Event Calendar</h2>
      {events.length > 0 ? (
        <div>
          <p>Event</p>
          {events.map(event => (
            <div key={event.id}>
              <p>{event.title} - {new Date(event.dateTime).toLocaleDateString()}</p>
              <p>Attendees: {event.attendees ? event.attendees.length : 0}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No events to display</p>
      )}
    </div>
  );
};

export default CalendarView;