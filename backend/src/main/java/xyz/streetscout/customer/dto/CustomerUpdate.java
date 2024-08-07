package xyz.streetscout.customer.dto;

import io.swagger.v3.oas.annotations.media.Schema;

import java.util.Set;

@Schema(
    name = "CustomerUpdate",
    description = "Schema to hold updated Customer details")
public record CustomerUpdate(
        String name,
        Set<String> favouriteVendors
) {
}
