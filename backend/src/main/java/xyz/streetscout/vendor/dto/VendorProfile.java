package xyz.streetscout.vendor.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import xyz.streetscout.vendor.entity.Location;
import xyz.streetscout.vendor.entity.OperatingHours;

import java.util.List;

@Schema(
    name = "VendorProfile",
    description = "Schema to hold Vendor Profile")
public record VendorProfile(
        Long id,
        String name,
        String email,
        String description,
        String vendorPhotoUrl,
        List<String> photos,
        LocationDTO location,
        OperatingHoursDTO operatingHours,
        List<MenuItemDetails> menu,
        Boolean active
) { }
