package xyz.streetscout.vendor.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import xyz.streetscout.vendor.entity.Vendor;

public interface VendorRepository extends JpaRepository<Vendor, Long> {
}
