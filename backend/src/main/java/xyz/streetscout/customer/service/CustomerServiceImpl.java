package xyz.streetscout.customer.service;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import xyz.streetscout.customer.dto.CustomerProfile;
import xyz.streetscout.customer.dto.CustomerUpdate;
import xyz.streetscout.customer.entity.Customer;
import xyz.streetscout.customer.mapper.CustomerMapper;
import xyz.streetscout.customer.repository.CustomerRepository;
import xyz.streetscout.vendor.entity.Vendor;
import xyz.streetscout.vendor.repository.VendorRepository;

import java.util.HashSet;
import java.util.Set;

@Service
@RequiredArgsConstructor(onConstructor_ = @Autowired)
public class CustomerServiceImpl implements CustomerService {

    private final CustomerMapper customerMapper = CustomerMapper.INSTANCE;
    private final CustomerRepository customerRepository;
    private final VendorRepository vendorRepository;

    /**
     * @return CustomerProfile
     */
    @Override
    public CustomerProfile getCustomerProfile(Long customerId) {
        Customer customer = findById(customerId);
        return customerMapper.toProfile(customer);
    }

    /**
     * @param customerUpdate CustomerUpdate details
     * @return CustomerProfile
     */
    @Override
    public CustomerProfile updateCustomerProfile(Long customerId, CustomerUpdate customerUpdate) {
        Customer customer = findById(customerId);

        if (customerUpdate.favouriteVendors() != null && !customerUpdate.favouriteVendors().isEmpty()) {
            Set<String> updatedVendors = customer.getFavouriteVendors();
            updatedVendors.addAll(customerUpdate.favouriteVendors());
            Set<String> uniqueVendors = new HashSet<>(updatedVendors);;
            customer.setFavouriteVendors(uniqueVendors);
        }

        customerMapper.update(customerUpdate, customer);
        customer = customerRepository.save(customer);
        return customerMapper.toProfile(customer);

    }

    /**
     * @param customerId Customer id
     * @param vendorId   Vendor id
     * @return FavoritesList
     */
    @Override
    public CustomerProfile addFavorite(Long customerId, Long vendorId) {
        Customer customer = findById(customerId);
        Vendor vendor = findVendorById(vendorId);
        customer.addFavorite(vendor);
        customer = customerRepository.save(customer);
        return customerMapper.toProfile(customer);
    }

    private Vendor findVendorById(Long vendorId) {
        return vendorRepository.findById(vendorId)
                .orElseThrow(() -> new EntityNotFoundException("vendor not found"));
    }

    private Customer findById(Long customerId) {
        return customerRepository.findById(customerId)
                .orElseThrow(() -> new EntityNotFoundException("customer not found"));
    }

    /**
     * @param customerId Customer id
     * @param vendorId   Vendor id
     */
    @Override
    public void removeFavorite(Long customerId, Long vendorId) {
        Customer customer = findById(customerId);
        Vendor vendor = findVendorById(vendorId);
        customer.removeFavorite(vendor);
        customerRepository.save(customer);
    }
}
