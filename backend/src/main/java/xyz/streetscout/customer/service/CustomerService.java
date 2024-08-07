package xyz.streetscout.customer.service;

import xyz.streetscout.customer.dto.CustomerProfile;
import xyz.streetscout.customer.dto.CustomerUpdate;

public interface CustomerService {
    CustomerProfile getCustomerProfile(Long customerId);

    CustomerProfile updateCustomerProfile(Long customerId, CustomerUpdate customerUpdate);

    CustomerProfile addFavorite(Long customerId, Long vendorId);

    void removeFavorite(Long customerId, Long vendorId);
}
