package com.eci.cosw.springbootsecureapi.service;

import org.springframework.stereotype.Service;

import com.eci.cosw.springbootsecureapi.model.Todo;

import java.util.ArrayList;
import java.util.List;

@Service
public class TodoServiceImpl implements TodoService {

    private List<Todo> todos= new ArrayList<>();
    @Override
    public List<Todo> getTodoList() {
        return  todos;
    }

    @Override
    public void addTodo(Todo todo) {
        todos.add(todo);
    }
}