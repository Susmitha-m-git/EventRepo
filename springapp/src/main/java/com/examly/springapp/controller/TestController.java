package com.examly.springapp.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @GetMapping("/")
    public String home() {
        return "Backend is running on port 8081";
    }

    @GetMapping("/api/test")
    public String test() {
        return "API is working";
    }

    @GetMapping("/api/protected")
    public String protectedEndpoint() {
        return "This is a JWT protected endpoint!";
    }
}