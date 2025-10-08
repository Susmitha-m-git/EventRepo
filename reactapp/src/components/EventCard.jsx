import React from 'react';

const EventCard = ({ event, onRSVP }) => {
  if (!event) {
    return <div>Event data not available</div>;
  }

  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        return 'Invalid date';
      }
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      });
    } catch (error) {
      return 'Invalid date';
    }
  };

  const handleRSVP = () => {
    try {
      const attendeeName = prompt('Enter your name to RSVP:');
      if (attendeeName && attendeeName.trim()) {
        onRSVP(event.id, attendeeName.trim());
      }
    } catch (error) {
      console.error('Error handling RSVP:', error);
    }
  };

  return (
    <div style={styles.eventCard}>
      <div style={styles.eventHeader}>
        <h3 style={styles.eventTitle}>{event.title}</h3>
        <span style={styles.eventDate}>Date: {formatDate(event.dateTime)}</span>
      </div>
      
      <p style={styles.eventDescription}>{event.description}</p>
      
      <div style={styles.eventDetails}>
        <div style={styles.eventOrganizer}>
          <strong>Organizer:</strong> {event.organizerName}
        </div>
        
        <div style={styles.eventLink}>
          <a href={event.eventLink} target="_blank" rel="noopener noreferrer" style={styles.eventLinkAnchor}>
            Join Event
          </a>
        </div>
      </div>
      
      <div style={styles.eventActions}>
        <button style={styles.rsvpButton} onClick={handleRSVP}>
          RSVP
        </button>
        
        <div style={styles.attendeesCount}>
          <strong>Attendees:</strong> {event.attendees ? event.attendees.length : 0}
        </div>
      </div>
    </div>
  );
};

const styles = {
  eventCard: {
    background: '#ffffff',
    borderRadius: '12px',
    padding: '24px',
    margin: '16px 0',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    borderLeft: '5px solid #007bff',
    border: '1px solid #e1e5e9',
  },
  eventHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '16px',
    flexWrap: 'wrap',
    gap: '12px',
  },
  eventTitle: {
    color: '#2c3e50',
    margin: '0',
    fontSize: '1.5em',
    fontWeight: '600',
    lineHeight: '1.3',
  },
  eventDate: {
    color: '#6c757d',
    fontSize: '0.9em',
    background: '#f8f9fa',
    padding: '6px 12px',
    borderRadius: '20px',
    border: '1px solid #e9ecef',
    whiteSpace: 'nowrap',
  },

  eventDescription: {
    color: '#495057',
    lineHeight: '1.6',
    marginBottom: '20px',
    fontSize: '1em',
  },
  eventDetails: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    padding: '16px',
    background: '#f8f9fa',
    borderRadius: '8px',
    border: '1px solid #e9ecef',
    flexWrap: 'wrap',
    gap: '12px',
  },
  eventOrganizer: {
    color: '#495057',
    fontSize: '0.95em',
  },
  eventLinkAnchor: {
    color: '#007bff',
    textDecoration: 'none',
    fontWeight: '500',
    padding: '8px 16px',
    border: '2px solid #007bff',
    borderRadius: '6px',
    transition: 'all 0.3s ease',
    display: 'inline-block',
  },
  eventActions: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '16px',
    borderTop: '1px solid #e9ecef',
    flexWrap: 'wrap',
    gap: '12px',
  },
  rsvpButton: {
    background: '#28a745',
    color: 'white',
    border: 'none',
    padding: '10px 24px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '0.95em',
    transition: 'all 0.3s ease',
    minWidth: '100px',
  },
  attendeesCount: {
    color: '#6c757d',
    fontSize: '0.9em',
    background: '#f8f9fa',
    padding: '8px 16px',
    borderRadius: '20px',
    border: '1px solid #e9ecef',
  }
};

export default EventCard;