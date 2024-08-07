package xyz.streetscout.customer.dto;

import io.swagger.v3.oas.annotations.media.Schema;

import java.util.List;

@Schema(
    name = "CustomerProfile",
    description = "Schema to hold Customer Profile")
public record CustomerProfile(
        Long id,
        String name,
        String email,
        List<String> favouriteVendors
) {
}
