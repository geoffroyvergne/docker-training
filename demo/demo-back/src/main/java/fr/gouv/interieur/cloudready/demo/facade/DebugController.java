package fr.gouv.interieur.cloudready.demo.facade;

import fr.gouv.interieur.cloudready.demo.model.Status;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/debug")
public class DebugController {
    private static final Logger logger = LoggerFactory.getLogger(DebugController.class);

    @RequestMapping(value="/test", produces= MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET)
    public ResponseEntity<Status> test() {

        logger.info("debug/test");

        return new ResponseEntity<>(new Status(0, "debug/test", "ok"), HttpStatus.OK);
    }

    @RequestMapping(value="/date", produces= MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET)
    public ResponseEntity<Status> date() {

        logger.info("debug/date");

        return new ResponseEntity<>(new Status(0, new Date().toString(), "ok"), HttpStatus.OK);
    }

    @RequestMapping(value="/host", produces= MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET)
    public ResponseEntity<Status> host() throws UnknownHostException {

        logger.info("debug/host");

        return new ResponseEntity<>(new Status(0, InetAddress.getLocalHost().getHostName(), "ok"), HttpStatus.OK);
    }
}
