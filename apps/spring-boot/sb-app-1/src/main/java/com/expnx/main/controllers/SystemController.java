package com.expnx.main.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SystemController {

    @GetMapping("/version")
    public String getVersion() {
        return "0.0.1";
    }
}
