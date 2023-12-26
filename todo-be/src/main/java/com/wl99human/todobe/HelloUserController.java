package com.wl99human.todobe;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloUserController {
    @GetMapping(path = "/hello-user")
    public String helloUser() {
        return "Hello User!";
    }
}
