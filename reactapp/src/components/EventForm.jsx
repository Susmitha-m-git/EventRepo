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
    borderRadius: '10px',
    padding: '25px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    margin: '20px 0',
  },
  formTitle: {
    color: '#333',
    marginBottom: '20px',
    textAlign: 'center',
    fontSize: '1.5em',
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
    fontWeight: 'bold',
    marginBottom: '5px',
    color: '#333',
  },
  input: {
    padding: '12px',
    border: '2px solid #e1e5e9',
    borderRadius: '5px',
    fontSize: '16px',
    transition: 'border-color 0.3s',
  },
  textarea: {
    padding: '12px',
    border: '2px solid #e1e5e9',
    borderRadius: '5px',
    fontSize: '16px',
    transition: 'border-color 0.3s',
    resize: 'vertical',
    minHeight: '80px',
    fontFamily: 'inherit',
  },
  submitButton: {
    background: '#007bff',
    color: 'white',
    border: 'none',
    padding: '15px',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background 0.3s',
  }
};

export default EventForm;