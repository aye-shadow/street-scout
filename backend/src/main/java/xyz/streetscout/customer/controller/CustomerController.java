package xyz.streetscout.customer.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import xyz.streetscout.customer.dto.CustomerProfile;
import xyz.streetscout.customer.dto.CustomerUpdate;
import xyz.streetscout.customer.service.CustomerService;

@Tag(
    name = "REST APIs for Customers",
    description = "REST APIs to UPDATE, FETCH Customers")
@RestController
@RequestMapping("/api/customers/{userId}")
@RequiredArgsConstructor(onConstructor_ = @Autowired)
public class CustomerController {

    private final CustomerService customerService;

    @GetMapping("")
    @Operation(
            summary = "Get Customer Profile",
            description = "REST API to fetch customer profile")
    @ApiResponse(
            responseCode = "200",
            description = "HTTP Status OK")
    public ResponseEntity<CustomerProfile> getCustomerProfile(@PathVariable Long userId){
        CustomerProfile customer = customerService.getCustomerProfile(userId);
        return ResponseEntity.status(HttpStatus.OK).body(customer);
    }

    @PutMapping("")
    @Operation(
            summary = "Update Customer Profile",
            description = "REST API to update customer profile")
    @ApiResponse(
            responseCode = "200",
            description = "HTTP Status OK")
    public ResponseEntity<CustomerProfile> updateCustomerProfile(
            @PathVariable Long userId,
            @Valid @RequestBody CustomerUpdate customerUpdate
    ) {
        CustomerProfile updatedCustomer = customerService.updateCustomerProfile(userId, customerUpdate);
        return ResponseEntity.status(HttpStatus.OK).body(updatedCustomer);
    }

    @PostMapping("/favorites/{vendorId}")
    public ResponseEntity<CustomerProfile> addVendorToFavorites(
            @PathVariable("vendorId") Long vendorId,
            @PathVariable("userId") Long customerId
    ) {
        CustomerProfile profile = customerService.addFavorite(customerId, vendorId);
        return ResponseEntity.status(HttpStatus.CREATED).body(profile);
    }

    @DeleteMapping("/favorites/{vendorId}")
    public ResponseEntity<Void> removeVendorFromFavorites(
            @PathVariable("vendorId") Long vendorId,
            @PathVariable("userId") Long customerId)
    {
        customerService.removeFavorite(customerId, vendorId);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
