package xyz.streetscout.user.dto;

public record UserProfile(
        Long id,
        String email,
        String name,
        String role
) {
}
