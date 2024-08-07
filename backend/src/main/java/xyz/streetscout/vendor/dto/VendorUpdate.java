package xyz.streetscout.vendor.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import xyz.streetscout.vendor.entity.Location;
import xyz.streetscout.vendor.entity.OperatingHours;

@Schema(
    name = "VendorUpdate",
    description = "Schema to hold updated Vendor info")
public record VendorUpdate(
        String name,
        String description,
        Location location,
        OperatingHours operatingHours
) { }
