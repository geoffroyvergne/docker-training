package fr.gouv.interieur.cloudready.demo.model;

public class Status {

    public Status() {}

    public Status(int code, String message, String result) {
        this.code = code;
        this.message = message;
        this.result = result;
    }

    private int code;
    private String message;
    private String result;

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }
}
