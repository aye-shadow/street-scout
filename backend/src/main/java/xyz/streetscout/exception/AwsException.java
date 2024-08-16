package xyz.streetscout.exception;

public class AwsException extends RuntimeException {
    public AwsException(String message, Exception cause) {
        super(message, cause);
    }
}
