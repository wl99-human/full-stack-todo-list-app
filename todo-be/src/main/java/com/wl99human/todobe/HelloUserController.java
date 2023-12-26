package com.wl99human.todobe;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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

    @GetMapping(path = "/hello-user/path-variable/{username}")
    public HelloUserBean helloUserPathVariable(@PathVariable String username) {
        return new HelloUserBean(String.format("Hello User, %s", username));
    }
}
