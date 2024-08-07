package xyz.streetscout.vendor.service;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import xyz.streetscout.vendor.dto.*;
import xyz.streetscout.vendor.entity.MenuItem;
import xyz.streetscout.vendor.entity.Vendor;
import xyz.streetscout.vendor.mapper.MenuMapper;
import xyz.streetscout.vendor.mapper.VendorMapper;
import xyz.streetscout.vendor.repository.MenuItemRepository;
import xyz.streetscout.vendor.repository.VendorRepository;

@Service
@RequiredArgsConstructor(onConstructor_ = @Autowired)
public class VendorServiceImpl implements VendorService {

    private final VendorMapper vendorMapper = VendorMapper.INSTANCE;
    private final MenuMapper menuMapper = MenuMapper.INSTANCE;
    private final VendorRepository vendorRepository;
    private final MenuItemRepository menuItemRepository;

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
    public VendorProfile updateVendor(Long vendorId, VendorUpdate vendorUpdate) {
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
        Vendor vendor = findById(vendorId);
        vendor.deactivate();
    }

    /**
     * @param vendorId <code>Vendor</code> id
     * @param menuItemDTO <code>MenuItemDTO</code>
     * @return <code>MenuItemList</code>
     */
    @Override
    public MenuItemList addToMenu(Long vendorId, MenuItemDTO menuItemDTO) {
        Vendor vendor = findById(vendorId);
        MenuItem item = menuMapper.toMenuItem(menuItemDTO);
        vendor.addItem(item);
        item = menuItemRepository.save(item);
        return menuMapper.toMenuItemList(item.getVendor());
    }

    /**
     * @param menuItemId <code>MenuItem</code> id
     */
    @Override
    public void removeMenuItem(Long menuItemId) {
        menuItemRepository.deleteById(menuItemId);
    }
}
