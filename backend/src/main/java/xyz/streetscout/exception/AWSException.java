package xyz.streetscout.exception;

public class AWSException extends RuntimeException {
    public AWSException(String s, Exception e) {
        super(s, e);
    }
}
