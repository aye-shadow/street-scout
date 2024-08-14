package xyz.streetscout.user.dto;

import io.swagger.v3.oas.annotations.media.Schema;

import java.util.Date;

@Schema(
    name = "LoginResponse",
    description = "Schema to hold Auth token after login")
public record LoginResponse(
        Long id,
        String email,
        String role,
        String token,
        Date expiration
) {
}
