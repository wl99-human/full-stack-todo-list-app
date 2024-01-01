package com.wl99human.todobe.hellouser;

public class HelloUserBean {
    private String message;
    public HelloUserBean(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }


    @Override
    public String toString() {
        return "HelloUserBean{" +
                "message='" + message + '\'' +
                '}';
    }
}
