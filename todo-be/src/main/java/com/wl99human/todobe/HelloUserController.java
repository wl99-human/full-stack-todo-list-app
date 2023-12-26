package com.wl99human.todobe;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloUserController {
    @GetMapping(path = "/hello-user")
    public String helloUser() {
        return "Hello User!";
    }

    //hello-user-bean
    @GetMapping(path = "/hello-user-bean")
    public HelloUserBean helloUserBean() {
        return new HelloUserBean("Hello User!");
    }
}
