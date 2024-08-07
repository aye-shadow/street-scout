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
     * @return VendorList
     */
    @Override
    public VendorList getAllVendors(PageRequest pageRequest) {
        Page<Vendor> vendors = vendorRepository.findAll(pageRequest);

        return vendorMapper.toVendorList(vendors);
    }

    /**
     * @param vendorId Vendor id
     * @return VendorProfile
     */
    @Override
    public VendorProfile getVendorById(Long vendorId) {
        Optional<Vendor> vendorOptional = vendorRepository.findById(vendorId);

        return vendorOptional.map(entity -> new VendorProfile(
                entity.getId(),
                entity.getName(),
                entity.getDescription(),
                entity.getEmail(),
                entity.getPhotos(),
                entity.getLocation(),
                entity.getOperatingHours(),
                entity.getMenu()
        )).orElseThrow(() -> new EntityNotFoundException("Vendor not found"));
    }

    /**
     * @param vendorUpdate Vendor details to be updated
     * @return VendorProfile with updated values
     */
    @Override
    public VendorProfile updateVendor(Long vendorId, VendorUpdate vendorUpdate) throws Exception {
        Vendor vendor = vendorRepository.findById(vendorId)
                .orElseThrow(() -> new EntityNotFoundException("User not found"));

        if (vendorUpdate.description() != null && !vendorUpdate.description().isEmpty()) {
            vendor.setDescription(vendorUpdate.description());
        }

        if (vendorUpdate.photos() != null && !vendorUpdate.photos().isEmpty()) {
            if (vendor.getPhotos() == null) {
                vendor.setPhotos(vendorUpdate.photos());
            } else {
                vendor.getPhotos().addAll(vendorUpdate.photos());
            }
        }

        if (vendorUpdate.menu() != null && !vendorUpdate.menu().isEmpty()) {
            if (vendor.getMenu() == null) {
                vendor.setMenu(vendorUpdate.menu());
            } else {
                vendor.getMenu().addAll(vendorUpdate.menu());
            }
        }

        if (vendorUpdate.location() != null) {
            vendor.setLocation(vendorUpdate.location());
        }
        if (vendorUpdate.operatingHours() != null) {
            vendor.setOperatingHours(vendorUpdate.operatingHours());
        }


        Vendor updatedVendor = vendorRepository.save(vendor);

        return vendorMapper.toVendorProfile(updatedVendor);
    }

    /**
     * @param vendorId Vendor id
     */
    @Override
    public void deactivateVendor(Long vendorId) {
        vendorRepository.deleteById(vendorId);
    }
}
