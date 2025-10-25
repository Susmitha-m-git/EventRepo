package com.examly.springapp.service;

import com.examly.springapp.model.Event;
import com.examly.springapp.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EventService {

    @Autowired
    private EventRepository eventRepository;

    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    public Event createEvent(Event event) {
        return eventRepository.save(event);
    }

    public Event rsvpToEvent(Long id, String attendee) {
        if (id == null || attendee == null || attendee.trim().isEmpty()) {
            throw new IllegalArgumentException("Invalid input parameters");
        }
        
        Optional<Event> optionalEvent = eventRepository.findById(id);
        if (optionalEvent.isPresent()) {
            Event event = optionalEvent.get();
            String trimmedAttendee = attendee.trim();
            if (!event.getAttendees().contains(trimmedAttendee)) {
                event.getAttendees().add(trimmedAttendee);
                return eventRepository.save(event);
            }
            return event;
        }
        throw new RuntimeException("Event not found with id: " + id);
    }

    public void deleteEvent(Long id) {
        eventRepository.deleteById(id);
    }
}