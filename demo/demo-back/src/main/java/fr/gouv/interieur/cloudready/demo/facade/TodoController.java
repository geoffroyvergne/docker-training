package fr.gouv.interieur.cloudready.demo.facade;

import fr.gouv.interieur.cloudready.demo.model.Status;
import fr.gouv.interieur.cloudready.demo.model.Todo;
import fr.gouv.interieur.cloudready.demo.service.TodoService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/todo")
public class TodoController {

    private static final Logger logger = LoggerFactory.getLogger(TodoController.class);

    @Autowired
    TodoService todoService;

    @RequestMapping(value="/test", produces= MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET)
    public ResponseEntity<Status> test() {

        logger.info("todo/test");

        return new ResponseEntity<>(new Status(0, "todo/test", "ok"), HttpStatus.OK);
    }

    @RequestMapping(value="/", produces= MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET)
    public ResponseEntity<List<Todo>> list() {
        logger.info("todo/list");

        List<Todo> todoList = todoService.findAllOrderById();

        return new ResponseEntity<>(todoList, HttpStatus.OK);
    }

    @RequestMapping(value="/name/{name}", produces= MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET)
    public ResponseEntity<Todo> findByName(@PathVariable("name") String name) {
        logger.info("todo/name/" + name);

        Todo todo = todoService.findByName(name);

        return new ResponseEntity<>(todo, HttpStatus.OK);
    }

    @RequestMapping(value="/id/{id}", produces= MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET)
    public ResponseEntity<?> findById(@PathVariable("id") int id) {
        logger.info("todo/id/" + id);

        Todo todo = todoService.findById(id);

        if( todo == null) {
            return new ResponseEntity<>(new Status(404, "todo/add", "BAD_REQUEST"), HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(todo, HttpStatus.OK);
    }

    @RequestMapping(value="/", produces= MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.PUT)
    public ResponseEntity<Status> add(@RequestBody Todo todo) {
        logger.info("todo/add/" + todo.toString());

        if( todo == null) {
            return new ResponseEntity<>(new Status(400, "todo/add", "BAD_REQUEST"), HttpStatus.BAD_REQUEST);
        }

        todoService.save(todo);

        return new ResponseEntity<>(new Status(201, "todo/add", "CREATED"), HttpStatus.CREATED);
    }

    @RequestMapping(value="/", produces= MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.DELETE)
    public ResponseEntity<Status> delete(@RequestBody Todo todo) {
        logger.info("todo/delete/" + todo.toString());

        if( todo == null) {
            return new ResponseEntity<>(new Status(404, "todo/add", "NOT_FOUND"), HttpStatus.NOT_FOUND);
        }

        todoService.delete(todo);

        return new ResponseEntity<>(new Status(201, "todo/add", "CREATED"), HttpStatus.CREATED);
    }

    @RequestMapping(value="/id/{id}", produces= MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.DELETE)
    public ResponseEntity<Status> deleteById(@PathVariable("id") int id) {
        logger.info("todo/delete/id/" + id);

        Todo todo = todoService.findById(id);

        if( todo == null) {
            return new ResponseEntity<>(new Status(404, "todo/delete", "NOT_FOUND"), HttpStatus.NOT_FOUND);
        }

        todoService.delete(todo);

        return new ResponseEntity<>(new Status(201, "todo/delete", "CREATED"), HttpStatus.CREATED);
    }
}
