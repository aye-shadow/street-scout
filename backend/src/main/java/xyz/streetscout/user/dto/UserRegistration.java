package xyz.streetscout.user.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Schema(
    name = "UserRegistration",
    description = "Schema to hold User Registration info")
public record UserRegistration(
        @Schema(description = "User email", example = "jon@bones.com")
        @NotNull(message = "Email must not be null")
        @Email(message = "Must have valid email")
        String email,

        @Schema(description = "User password", example = "thisisabadpassword")
        @NotBlank(message = "Password must not be empty")
        @NotNull(message = "Password must not be null")
        String password,

        @Schema(description = "The user's name", example = "Jon Jones")
        @NotNull(message = "Name must not be null")
        String name,

        @Schema(description = "User role (VENDOR | CUSTOMER)", example = "CUSTOMER")
        @NotNull
        String role
) {
}
