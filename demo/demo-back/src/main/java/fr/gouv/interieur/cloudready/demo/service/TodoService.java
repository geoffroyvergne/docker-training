package fr.gouv.interieur.cloudready.demo.service;

import fr.gouv.interieur.cloudready.demo.model.Todo;
import fr.gouv.interieur.cloudready.demo.repository.TodoRepository;
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
