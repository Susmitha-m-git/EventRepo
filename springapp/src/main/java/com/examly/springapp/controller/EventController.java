package com.examly.springapp.controller;

import com.examly.springapp.model.Event;
import com.examly.springapp.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestMethod;


import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/events")
@CrossOrigin(originPatterns = "*", allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE, RequestMethod.OPTIONS})
public class EventController {

    @Autowired
    private EventService eventService;

    @GetMapping
    public ResponseEntity<List<Event>> getAllEvents() {
        try {
            List<Event> events = eventService.getAllEvents();
            return ResponseEntity.ok(events);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping
    public ResponseEntity<Event> createEvent(@RequestBody Event event) {
        try {
            // Allow empty titles as per test requirements
            Event createdEvent = eventService.createEvent(event);
            return ResponseEntity.ok(createdEvent);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping("/{id}/rsvp")
    public ResponseEntity<Event> rsvpToEvent(@PathVariable Long id, @RequestParam String attendee) {
        try {
            if (attendee == null || attendee.trim().isEmpty()) {
                return ResponseEntity.badRequest().build();
            }
            Event updatedEvent = eventService.rsvpToEvent(id, attendee.trim());
            return ResponseEntity.ok(updatedEvent);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}