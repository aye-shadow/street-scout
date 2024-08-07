package xyz.streetscout.security;

import java.util.Date;

public record JwtToken(String token, Date expiration) {
}
