package xyz.streetscout.user.dto;

import java.util.Date;

public record LoginResponse(
        String email,
        String role,
        String accessToken,
        Date expiresAt
) {
}
