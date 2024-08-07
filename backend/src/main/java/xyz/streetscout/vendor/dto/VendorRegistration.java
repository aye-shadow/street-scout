package xyz.streetscout.vendor.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import xyz.streetscout.vendor.entity.Location;
import xyz.streetscout.vendor.entity.MenuItem;
import xyz.streetscout.vendor.entity.OperatingHours;

import java.util.Set;

@Schema(
    name = "VendorRegistration",
    description = "Schema to hold new Vendor details")
public record VendorRegistration(
        String email,
        String password,
        String name,
        String description,
        Location location,
        OperatingHours operatingHours,
        Set<MenuItem> menu
) {
}
