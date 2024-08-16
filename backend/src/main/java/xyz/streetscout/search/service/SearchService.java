package xyz.streetscout.search.service;

import org.springframework.data.domain.PageRequest;
import xyz.streetscout.vendor.dto.LocationDTO;
import xyz.streetscout.vendor.dto.VendorList;

public interface SearchService {
    VendorList nearByVendors(LocationDTO location, double rangeInKm, PageRequest pageRequest);
}
