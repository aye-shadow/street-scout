package xyz.streetscout.search.service;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import xyz.streetscout.vendor.dto.LocationDTO;
import xyz.streetscout.vendor.dto.VendorList;
import xyz.streetscout.vendor.entity.Vendor;
import xyz.streetscout.vendor.mapper.VendorMapper;
import xyz.streetscout.vendor.repository.VendorRepository;
import xyz.streetscout.vendor.repository.VendorSpecification;

@Service
@RequiredArgsConstructor(onConstructor_ = @Autowired)
public class SearchServiceImpl implements SearchService {

    private final VendorMapper vendorMapper = VendorMapper.INSTANCE;
    private final VendorRepository vendorRepository;

    /**
     * @param location    <code>LocationDTO</code> center point
     * @param rangeInKm   distance from <code>location</code> in Kilometers
     * @param pageRequest <code>PageRequest</code> for paginating results
     * @return <code>VendorList</code>
     */
    @Override
    public VendorList nearByVendors(LocationDTO location, double rangeInKm, PageRequest pageRequest) {
        Page<Vendor> vendors = vendorRepository.findAll(
                VendorSpecification.withinRange(location, rangeInKm),
                pageRequest
        );
        return vendorMapper.toVendorList(vendors);
    }
}
