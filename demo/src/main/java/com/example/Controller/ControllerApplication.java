package com.example.Controller;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@SpringBootApplication
public class ControllerApplication {

    @GetMapping("/test")
    public String test() {
        return "Hello from Spring!";
    }

    public static void main(String[] args) {
        SpringApplication.run(ControllerApplication.class, args);
    }
}
