package xyz.streetscout.customer.service;

import xyz.streetscout.customer.dto.CustomerProfile;
import xyz.streetscout.customer.dto.CustomerUpdate;
import xyz.streetscout.customer.entity.Customer;

public interface CustomerService {
    CustomerProfile getCustomerProfile(Customer customer);

    CustomerProfile updateCustomerProfile(Customer customer, CustomerUpdate customerUpdate);

    CustomerProfile addFavorite(Customer customer, Long vendorId);

    void removeFavorite(Customer customer, Long vendorId);
}
