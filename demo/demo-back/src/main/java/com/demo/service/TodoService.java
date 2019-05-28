package com.demo.service;

import com.demo.repository.TodoRepository;
import com.demo.model.Todo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class TodoService {

    @Autowired
    TodoRepository todoRepository;

    public List<Todo> findAll() {
        return todoRepository.findAll();
    }

    public List<Todo> findAllOrderById() {
        return todoRepository.findAllByOrderByIdAsc();
    }

    public Todo findByName(String name) {
        return todoRepository.findByName(name);
    }

    public Todo findById(int id) {
        return todoRepository.findById(id);
    }

    public void save(Todo todo) { todoRepository.save(todo); }

    public void delete(Todo todo) { todoRepository.delete(todo); }
}
