package xyz.streetscout.vendor.dto;

import io.swagger.v3.oas.annotations.media.Schema;

import java.util.List;

@Schema(
    name = "VendorList",
    description = "Schema to hold List of Vendors")
public record VendorList(List<VendorProfile> vendors) {
}
