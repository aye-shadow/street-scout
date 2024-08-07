package xyz.streetscout.vendor.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;
import xyz.streetscout.vendor.dto.MenuItemDTO;
import xyz.streetscout.vendor.dto.MenuItemDetails;
import xyz.streetscout.vendor.dto.MenuItemList;
import xyz.streetscout.vendor.entity.MenuItem;
import xyz.streetscout.vendor.entity.Vendor;

@Mapper
public interface MenuMapper {
    MenuMapper INSTANCE = Mappers.getMapper(MenuMapper.class);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "vendor", ignore = true)
    MenuItem toMenuItem(MenuItemDTO menuItemDTO);

    @Mapping(target = "vendorId", source = "id")
    @Mapping(target = "vendorName", source = "name")
    @Mapping(target = "items", source = "menu")
    MenuItemList toMenuItemList(Vendor vendor);

    MenuItemDetails toMenuItemDetails(MenuItem menuItem);
}
