package xyz.streetscout.vendor.dto;

import io.swagger.v3.oas.annotations.media.Schema;

@Schema(
    name = "MenuItem",
    description = "Schema to hold Menu Item")
public record MenuItemDTO(
        String name,
        String description,
        Double price
) {
}
