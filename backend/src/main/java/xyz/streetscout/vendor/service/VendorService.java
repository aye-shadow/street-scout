package xyz.streetscout.vendor.service;

import org.springframework.data.domain.PageRequest;
import xyz.streetscout.vendor.dto.*;

public interface VendorService {

    VendorList getAllVendors(PageRequest pageRequest);

    VendorProfile getVendorById(Long vendorId);

    VendorProfile updateVendor(Long vendorId, VendorUpdate vendorUpdate) throws Exception;

    void deactivateVendor(Long vendorId);

    MenuItemList addToMenu(Long vendorId, MenuItemDTO menuItem);

    void removeMenuItem(Long menuItemId);

    int addFavouriteByCustomer(Long vendorId);

    int deleteFavouriteByCustomer(Long vendorId);

    VendorList topFavouriteByCustomer(PageRequest pageRequest);
}
