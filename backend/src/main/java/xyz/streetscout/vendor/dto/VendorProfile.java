package xyz.streetscout.vendor.dto;

import xyz.streetscout.vendor.entity.Location;
import xyz.streetscout.vendor.entity.OperatingHours;

import java.util.List;

public record VendorProfile(
        Long id,
        String name,
        String email,
        String description,
        List<String> photos,
        Location location,
        OperatingHours operatingHours,
        List<MenuItemDetails> menu,
        Boolean active
) { }
