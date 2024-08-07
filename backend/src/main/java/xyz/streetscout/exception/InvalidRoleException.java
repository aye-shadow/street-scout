package xyz.streetscout.exception;

import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public class InvalidRoleException extends RuntimeException {

    private final HttpStatus statusCode = HttpStatus.BAD_REQUEST;

    public InvalidRoleException(String message) {
        super(message);
    }
}
