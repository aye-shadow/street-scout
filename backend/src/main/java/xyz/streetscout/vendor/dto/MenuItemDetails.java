package xyz.streetscout.vendor.dto;

import io.swagger.v3.oas.annotations.media.Schema;

@Schema(
    name = "MenuItemDetails",
    description = "Schema to hold Menu Item Details")
public record MenuItemDetails(
        Long id,
        String name,
        String description,
        Double price
) {
}
