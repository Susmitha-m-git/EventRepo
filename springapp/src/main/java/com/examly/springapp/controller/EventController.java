package com.examly.springapp.controller;

import com.examly.springapp.model.Event;
import com.examly.springapp.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/events")
@CrossOrigin(origins = "*")
public class EventController {
    
    @Autowired
    private EventService eventService;
    
    @GetMapping
    public List<Event> getAllEvents() {
        return eventService.getAllEvents();
    }
    
    @PostMapping
    public Event createEvent(@RequestBody Event event) {
        return eventService.createEvent(event);
    }
    
    @PostMapping("/{id}/rsvp")
    public Event rsvpToEvent(@PathVariable Long id, @RequestParam String attendee) {
        return eventService.rsvpToEvent(id, attendee);
    }
}