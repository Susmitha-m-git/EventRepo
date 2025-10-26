const API_BASE_URL = 'http://localhost:8081/api';

const createHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` })
  };
};

export const getEvents = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/events`, {
      headers: createHeaders()
    });
    if (!response.ok) {
      const errorData = await response.text();
      throw new Error(`Failed to fetch events: ${response.status} ${errorData}`);
    }
    const data = await response.json();
    return { data };
  } catch (error) {
    console.error('Error fetching events:', error);
    throw new Error(`Network error: ${error.message}`);
  }
};

export const createEvent = async (event) => {
  if (!event || !event.title) {
    throw new Error('Invalid event data');
  }
  try {
    const response = await fetch(`${API_BASE_URL}/events`, {
      method: 'POST',
      headers: createHeaders(),
      body: JSON.stringify(event),
    });
    if (!response.ok) {
      const errorData = await response.text();
      throw new Error(`Failed to create event: ${response.status} ${errorData}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error creating event:', error);
    throw new Error(`Network error: ${error.message}`);
  }
};

export const rsvpToEvent = async (eventId, attendeeName) => {
  if (!eventId || !attendeeName?.trim()) {
    throw new Error('Invalid RSVP data');
  }
  try {
    const response = await fetch(`${API_BASE_URL}/events/${eventId}/rsvp?attendee=${encodeURIComponent(attendeeName.trim())}`, {
      method: 'POST',
      headers: createHeaders()
    });
    if (!response.ok) {
      const errorData = await response.text();
      throw new Error(`Failed to RSVP: ${response.status} ${errorData}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error RSVPing to event:', error);
    throw new Error(`Network error: ${error.message}`);
  }
};

export const deleteEvent = async (eventId) => {
  const response = await fetch(`${API_BASE_URL}/events/${eventId}`, {
    method: 'DELETE',
  });
  return response.json();
};