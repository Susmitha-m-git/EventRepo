import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

export const getEvents = () => {
  return axios.get(`${API_BASE_URL}/events`);
};

export const createEvent = (event) => {
  return axios.post(`${API_BASE_URL}/events`, event);
};

export const rsvpToEvent = (eventId, attendee) => {
  return axios.post(`${API_BASE_URL}/events/${eventId}/rsvp?attendee=${attendee}`);
};