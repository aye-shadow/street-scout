package xyz.streetscout.vendor.dto;

import io.swagger.v3.oas.annotations.media.Schema;

@Schema(
        name = "VendorCount",
        description = "Schema to hold number of customers added as favourites")
public record VendorCount(int count) {

}
