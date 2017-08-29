package com.eci.cosw.springbootsecureapi.controller;


import com.eci.cosw.springbootsecureapi.model.Todo;
import com.eci.cosw.springbootsecureapi.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/todo")
public class TodoController {

    @Autowired
    TodoService todoService;

    public TodoController() {

    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Todo> GetTodo() {
        return todoService.getTodoList();
    }

    @RequestMapping(method = RequestMethod.POST)
    public void postTodo(@RequestBody Todo todo) {
        todoService.addTodo(todo);
    }
}