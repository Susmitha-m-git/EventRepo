import React, { useState } from 'react';
import { createEvent } from '../api';

const EventForm = ({ onEventCreated }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    dateTime: '',
    organizerName: '',
    eventLink: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createEvent(formData);
      setFormData({
        title: '',
        description: '',
        dateTime: '',
        organizerName: '',
        eventLink: ''
      });
      onEventCreated();
      alert('Event created successfully!');
    } catch (error) {
      alert('Failed to create event. Please try again.');
    }
  };



  return (
    <div style={styles.formContainer}>
      <h2 style={styles.formTitle}>Create Event</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="title" style={styles.label}>Event Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="Enter event title"
            style={styles.input}
          />
        </div>

       
        <div style={styles.formGroup}>
          <label htmlFor="description" style={styles.label}>Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            placeholder="Enter event description"
            rows="3"
            style={styles.textarea}
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="dateTime" style={styles.label}>Date & Time</label>
          <input
            type="datetime-local"
            id="dateTime"
            name="dateTime"
            value={formData.dateTime}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="organizerName" style={styles.label}>Organizer Name</label>
          <input
            type="text"
            id="organizerName"
            name="organizerName"
            value={formData.organizerName}
            onChange={handleChange}
            required
            placeholder="Enter organizer name"
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="eventLink" style={styles.label}>Event Link</label>
          <input
            type="url"
            id="eventLink"
            name="eventLink"
            value={formData.eventLink}
            onChange={handleChange}
            required
            placeholder="https://example.com/event"
            style={styles.input}
          />
        </div>

        <button type="submit" style={styles.submitButton}>
          Create Event
        </button>
      </form>
    </div>
  );
};

const styles = {
  formContainer: {
    background: 'white',
    padding: '30px',
    height: '100%',
  },
  formTitle: {
    color: '#333',
    marginBottom: '25px',
    fontSize: '1.5rem',
    fontWeight: '600',
    borderBottom: '2px solid #667eea',
    paddingBottom: '10px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontWeight: '600',
    marginBottom: '8px',
    color: '#495057',
    fontSize: '14px',
  },
  input: {
    padding: '15px',
    border: '2px solid #e9ecef',
    borderRadius: '8px',
    fontSize: '16px',
    transition: 'all 0.3s ease',
    fontFamily: 'inherit',
  },
  textarea: {
    padding: '15px',
    border: '2px solid #e9ecef',
    borderRadius: '8px',
    fontSize: '16px',
    transition: 'all 0.3s ease',
    resize: 'vertical',
    minHeight: '100px',
    fontFamily: 'inherit',
  },
  submitButton: {
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    color: 'white',
    border: 'none',
    padding: '15px 30px',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginTop: '10px',
  }
};

export default EventForm;