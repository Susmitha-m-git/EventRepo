import React from 'react';

const EventCard = ({ event, onRSVP, onDelete }) => {
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

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      onDelete(event.id);
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
        <button style={styles.deleteButton} onClick={handleDelete}>
          Delete
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
    background: 'white',
    borderRadius: '12px',
    padding: '25px',
    margin: '15px 0',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    border: '1px solid #e9ecef',
    transition: 'all 0.3s ease',
  },
  eventHeader: {
    marginBottom: '15px',
  },
  eventTitle: {
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    margin: '0 0 8px 0',
    fontSize: '1.4rem',
    fontWeight: '700',
  },
  eventDate: {
    color: '#666',
    fontSize: '14px',
    fontWeight: '500',
  },
  eventDescription: {
    color: '#555',
    lineHeight: '1.6',
    marginBottom: '20px',
    fontSize: '15px',
  },
  eventDetails: {
    marginBottom: '20px',
    padding: '15px',
    background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)',
    borderRadius: '8px',
  },
  eventOrganizer: {
    color: '#555',
    fontSize: '14px',
    marginBottom: '10px',
    fontWeight: '500',
  },
  eventLinkAnchor: {
    background: 'linear-gradient(135deg, #007bff, #6610f2)',
    color: 'white',
    textDecoration: 'none',
    fontWeight: '600',
    padding: '8px 16px',
    borderRadius: '6px',
    fontSize: '14px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  eventActions: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '20px',
    borderTop: '2px solid #e9ecef',
  },
  rsvpButton: {
    background: 'linear-gradient(135deg, #28a745, #20c997)',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '14px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    transition: 'all 0.3s ease',
  },
  attendeesCount: {
    color: '#666',
    fontSize: '14px',
    fontWeight: '500',
  },
  deleteButton: {
    background: 'linear-gradient(135deg, #dc3545, #c82333)',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '14px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    transition: 'all 0.3s ease',
  }
};

export default EventCard;