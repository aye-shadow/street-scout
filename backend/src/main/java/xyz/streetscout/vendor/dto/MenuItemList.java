package xyz.streetscout.vendor.dto;

import io.swagger.v3.oas.annotations.media.Schema;

import java.util.List;

@Schema(
    name = "MenuItemList",
    description = "Schema to hold Menu Items for a vendor")
public record MenuItemList(
        String vendorId,
        String vendorName,
        List<MenuItemDetails> items
) { }
