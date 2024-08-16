package xyz.streetscout.vendor.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import xyz.streetscout.vendor.entity.Vendor;

import java.util.List;

public interface VendorRepository extends
        JpaRepository<Vendor, Long>,
        JpaSpecificationExecutor<Vendor>
{ }
