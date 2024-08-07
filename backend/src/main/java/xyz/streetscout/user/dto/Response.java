package xyz.streetscout.user.dto;

import xyz.streetscout.customer.dto.CustomerProfile;
import xyz.streetscout.vendor.dto.VendorProfile;

@Deprecated
public record Response(String message, String token, VendorProfile vendorProfile, CustomerProfile customerProfile) {

}
