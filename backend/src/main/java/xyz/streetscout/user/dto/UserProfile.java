package xyz.streetscout.user.dto;

import io.swagger.v3.oas.annotations.media.Schema;

@Schema(
    name = "UserProfile",
    description = "Schema to hold User Profile")
public record UserProfile(
        Long id,
        String email,
        String name,
        String role
) {
}
