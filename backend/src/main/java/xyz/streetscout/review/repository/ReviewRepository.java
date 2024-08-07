package xyz.streetscout.review.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import xyz.streetscout.review.entity.Review;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    @Query("SELECT r FROM Review r WHERE " +
            "r.vendor.id = :vendorId AND " +
            "r.disabled = false")
    Page<Review> findAllByVendorId(@Param("vendorId") Long vendorId, Pageable pageable);
}
