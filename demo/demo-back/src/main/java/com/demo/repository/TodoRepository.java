package com.demo.repository;

import com.demo.model.Todo;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface TodoRepository extends CrudRepository<Todo, Long> {
    List<Todo> findAll();
    List<Todo> findAllByOrderByIdAsc();
    Todo findByName(String name);
    Todo findById(int id);
}
