package com.examly.springapp.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "events")
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String title;
    
    @Column(nullable = false, length = 1000)
    private String description;
    
    @Column(nullable = false)
    private LocalDateTime dateTime;
    
    @Column(nullable = false)
    private String organizerName;
    
    @Column(nullable = false)
    private String eventLink;
    
    @ElementCollection
    @CollectionTable(name = "event_attendees", joinColumns = @JoinColumn(name = "event_id"))
    @Column(name = "attendee_name")
    private Set<String> attendees = new HashSet<>();

    // Constructors
    public Event() {}

    public Event(String title, String description, LocalDateTime dateTime, String organizerName, String eventLink) {
        this.title = title;
        this.description = description;
        this.dateTime = dateTime;
        this.organizerName = organizerName;
        this.eventLink = eventLink;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public LocalDateTime getDateTime() { return dateTime; }
    public void setDateTime(LocalDateTime dateTime) { this.dateTime = dateTime; }

    public String getOrganizerName() { return organizerName; }
    public void setOrganizerName(String organizerName) { this.organizerName = organizerName; }

    public String getEventLink() { return eventLink; }
    public void setEventLink(String eventLink) { this.eventLink = eventLink; }

    public Set<String> getAttendees() { return attendees; }
    public void setAttendees(Set<String> attendees) { this.attendees = attendees; }
}