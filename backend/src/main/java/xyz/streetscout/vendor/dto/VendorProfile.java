package xyz.streetscout.vendor.dto;

import xyz.streetscout.vendor.entity.Location;
import xyz.streetscout.vendor.entity.MenuItem;
import xyz.streetscout.vendor.entity.OperatingHours;

import java.util.List;
import java.util.Set;

public record VendorProfile(
        Long id,
        String name,
        String description,
        List<String> photos,
        Location location,
        OperatingHours operatingHours,
        Set<MenuItem> menu,
        String email
) {
}
