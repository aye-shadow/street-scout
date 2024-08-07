package xyz.streetscout.vendor.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;

@Schema(
    name = "MenuItem",
    description = "Schema to hold Menu Item")
public record MenuItemDTO(
        @Schema(description = "Item name", example = "Philly Cheese Steak")
        @NotBlank(message = "Name must not be empty")
        String name,

        @Schema(description = "item description", example = "topped with pimento cheese")
        @NotBlank(message = "description must not be empty")
        String description,

        @Schema(description = "Price", example = "12.99")
        @Min(value = 0, message = "Price must be greater than 0")
        Double price
) {
}
