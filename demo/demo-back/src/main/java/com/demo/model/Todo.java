package com.demo.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.Objects;

@Entity
@Table(name = "todo")
@NamedQueries({
        @NamedQuery(name = "Todo.findAll", query = "SELECT t FROM Todo t")
})
public class Todo implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    // @GeneratedValue(strategy = GenerationType.AUTO)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(columnDefinition = "serial")
    private int id;

    private String name;

    private Date todate;

    private Boolean done;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getTodate() {
        return todate;
    }

    public void setTodate(Date todate) {
        this.todate = todate;
    }

    public Boolean getDone() {
        return done;
    }

    public void setDone(Boolean done) {
        this.done = done;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Todo todo = (Todo) o;
        return id == todo.id &&
                Objects.equals(name, todo.name) &&
                Objects.equals(todate, todo.todate) &&
                Objects.equals(done, todo.done);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, todate, done);
    }

    @Override
    public String toString() {
        return "Todo{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", todate=" + todate +
                ", done=" + done +
                '}';
    }
}
