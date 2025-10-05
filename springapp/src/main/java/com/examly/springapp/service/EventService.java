package com.examly.springapp.service;

import com.examly.springapp.model.Event;
import com.examly.springapp.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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
    
    public Event rsvpToEvent(Long eventId, String attendee) {
        Event event = eventRepository.findById(eventId).orElseThrow();
        event.getAttendees().add(attendee);
        return eventRepository.save(event);
    }
}