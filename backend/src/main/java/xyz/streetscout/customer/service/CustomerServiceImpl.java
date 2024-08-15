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
import xyz.streetscout.vendor.service.VendorService;

import java.util.HashSet;
import java.util.Set;

@Service
@RequiredArgsConstructor(onConstructor_ = @Autowired)
public class CustomerServiceImpl implements CustomerService {

    private final CustomerMapper customerMapper = CustomerMapper.INSTANCE;
    private final CustomerRepository customerRepository;
    private final VendorRepository vendorRepository;
    private final VendorService vendorService;

    /**
     * @return CustomerProfile
     */
    @Override
    public CustomerProfile getCustomerProfile(Customer customerDetails) {
        return customerMapper.toProfile(customerDetails);
    }

    /**
     * @param customer       <code>Customer</code> original
     * @param customerUpdate <code>CustomerUpdate</code> updated info
     * @return CustomerProfile
     */
    @Override
    public CustomerProfile updateCustomerProfile(Customer customer, CustomerUpdate customerUpdate) {
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
     * @param customer Customer id
     * @param vendorId Vendor id
     * @return FavoritesList
     */
    @Override
    public CustomerProfile addFavorite(Customer customer, Long vendorId) {
        Vendor vendor = findVendorById(vendorId);
        vendorService.addFavouriteByCustomer(vendorId);
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
     * @param customer Customer id
     * @param vendorId Vendor id
     */
    @Override
    public void removeFavorite(Customer customer, Long vendorId) {
        Vendor vendor = findVendorById(vendorId);
        vendorService.deleteFavouriteByCustomer(vendorId);
        customer.removeFavorite(vendor);
        customerRepository.save(customer);
    }
}
