package xyz.streetscout.vendor.dto;

import io.swagger.v3.oas.annotations.media.Schema;

import java.util.List;

@Schema(
    name = "VendorList",
    description = "Schema to hold List of Vendors for HTTP response")
public record VendorList(
        int page,
        int totalPages,
        int pageSize,
        List<VendorProfile> vendors
) { }
