package xyz.streetscout.exception;

import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public class UserRegistrationException extends RuntimeException {

    private final HttpStatus statusCode = HttpStatus.BAD_REQUEST;

    public UserRegistrationException(String message) {
        super(message);
    }
}
