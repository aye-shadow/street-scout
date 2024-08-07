package xyz.streetscout.vendor.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import xyz.streetscout.vendor.entity.Location;
import xyz.streetscout.vendor.entity.OperatingHours;

@Schema(
    name = "VendorUpdate",
    description = "Schema to hold updated Vendor info")
public record VendorUpdate(
        @Schema(description = "Vendor name", example = "Chow Town")
        String name,
        @Schema(description = "Description", example = "Nice place to eat")
        String description,
        @Schema(description = "Location (lat,long)")
        Location location,
        @Schema(description = "Operating hours (open and close)")
        OperatingHours operatingHours
) { }
