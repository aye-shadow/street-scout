package xyz.streetscout.vendor.service;

import xyz.streetscout.vendor.dto.VendorList;
import xyz.streetscout.vendor.dto.VendorProfile;
import xyz.streetscout.vendor.dto.VendorUpdate;

public interface VendorService {

    VendorList getAllVendors();

    VendorProfile getVendorById(Long vendorId);

    VendorProfile updateVendor(Long vendorId, VendorUpdate vendorUpdate) throws Exception;

    void deactivateVendor(Long vendorId);
}
