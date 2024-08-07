package xyz.streetscout.vendor.dto;

import java.util.List;

public record MenuItemList(
        String vendorId,
        String vendorName,
        List<MenuItemDetails> items
) { }
