package xyz.streetscout.vendor.service;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import xyz.streetscout.vendor.dto.VendorList;
import xyz.streetscout.vendor.dto.VendorProfile;
import xyz.streetscout.vendor.dto.VendorUpdate;
import xyz.streetscout.vendor.entity.Vendor;
import xyz.streetscout.vendor.mapper.VendorMapper;
import xyz.streetscout.vendor.repository.VendorRepository;

import java.util.Optional;

@Service
@RequiredArgsConstructor(onConstructor_ = @Autowired)
public class VendorServiceImpl implements VendorService {

    private final VendorMapper vendorMapper = VendorMapper.INSTANCE;
    private final VendorRepository vendorRepository;

    /**
     * @return <code>VendorList</code>
     */
    @Override
    public VendorList getAllVendors(PageRequest pageRequest) {
        Page<Vendor> vendors = vendorRepository.findAll(pageRequest);
        return vendorMapper.toVendorList(vendors);
    }

    /**
     * @param vendorId <code>Vendor</code> id
     * @return <code>VendorProfile</code>
     */
    @Override
    public VendorProfile getVendorById(Long vendorId) {
        Vendor vendor = findById(vendorId);
        return vendorMapper.toVendorProfile(vendor);
    }

    private Vendor findById(Long vendorId) {
        return vendorRepository.findById(vendorId)
                .orElseThrow(() -> new EntityNotFoundException("Vendor with id " + vendorId + " not found"));
    }

    /**
     * @param vendorUpdate <code>VendorUpdate</code> with updated details
     * @return <code>VendorProfile</code> with updated values
     */
    @Override
    public VendorProfile updateVendor(Long vendorId, VendorUpdate vendorUpdate) throws Exception {
        Vendor vendor = findById(vendorId);
        vendorMapper.update(vendorUpdate, vendor);
        vendor = vendorRepository.save(vendor);
        return vendorMapper.toVendorProfile(vendor);
    }

    /**
     * @param vendorId Vendor id
     */
    @Override
    public void deactivateVendor(Long vendorId) {
        vendorRepository.deleteById(vendorId);
    }
}
