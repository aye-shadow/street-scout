package xyz.streetscout.user.dto;

import xyz.streetscout.customer.dto.RegisterCustomer;
import xyz.streetscout.vendor.dto.VendorRegistration;

@Deprecated
public record Register(String password,String role, VendorRegistration vendorRegistration, RegisterCustomer registerCustomer) {
    public Register {
        if (vendorRegistration == null && registerCustomer == null) {
            throw new IllegalArgumentException("Either vendorRegistration or registerCustomer must be non-null.");
        }
    }
    public Register(String password, String role, VendorRegistration vendorRegistration) {
        this(password, role, vendorRegistration,null);
    }
    public Register(String password, String role, RegisterCustomer registerCustomer) {
        this(password, role, null,registerCustomer);
    }
}
