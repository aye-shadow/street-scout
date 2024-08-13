package xyz.streetscout.vendor.dto;

import io.swagger.v3.oas.annotations.media.Schema;

@Schema(
    name = "Location",
    description = "Schema to hold Location latitude and longitude")
public record LocationDTO(
        Double latitude,
        Double longitude
) {
}
