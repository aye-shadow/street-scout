package xyz.streetscout.vendor.service;

import org.springframework.data.domain.PageRequest;
import xyz.streetscout.vendor.dto.VendorList;
import xyz.streetscout.vendor.dto.VendorProfile;
import xyz.streetscout.vendor.dto.VendorUpdate;

public interface VendorService {

    VendorList getAllVendors(PageRequest pageRequest);

    VendorProfile getVendorById(Long vendorId);

    VendorProfile updateVendor(Long vendorId, VendorUpdate vendorUpdate);

    void deactivateVendor(Long vendorId);
}
