package xyz.streetscout.review.service;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import xyz.streetscout.review.dto.ReviewCreation;
import xyz.streetscout.review.dto.ReviewDetails;
import xyz.streetscout.review.dto.ReviewEdit;
import xyz.streetscout.review.dto.ReviewList;
import xyz.streetscout.review.entity.Review;
import xyz.streetscout.review.mapper.ReviewMapper;
import xyz.streetscout.review.repository.ReviewRepository;
import xyz.streetscout.vendor.entity.Vendor;
import xyz.streetscout.vendor.repository.VendorRepository;

@Slf4j
@Service
@RequiredArgsConstructor(onConstructor_ = @Autowired)
public class ReviewServiceImpl implements ReviewService {

    private final ReviewMapper reviewMapper = ReviewMapper.INSTANCE;
    private final ReviewRepository reviewRepository;
    private final VendorRepository vendorRepository;

    /**
     * @param vendorId    Vendor id
     * @param pageRequest <code>PageRequest</code> with page and size
     * @return ReviewList
     */
    @Override
    public ReviewList getAllReviews(Long vendorId, PageRequest pageRequest) {
        Page<Review> byVendorId = reviewRepository.findAllByVendorId(vendorId, pageRequest);
        return reviewMapper.toReviewList(byVendorId);
    }

    /**
     * @param vendorId <code>Vendor</code> id
     * @param reviewCreation <code>ReviewCreation</code> info
     * @return Review
     */
    @Override
    public ReviewDetails createReview(Long vendorId, ReviewCreation reviewCreation) {
        Vendor vendor = findVendorById(vendorId);
        Review review = reviewMapper.toReview(reviewCreation);
        vendor.addReview(review);
        review = reviewRepository.save(review);
        return reviewMapper.toReviewDetails(review);
    }

    
    private Vendor findVendorById(Long vendorId) {
        return vendorRepository.findById(vendorId)
                .orElseThrow(() -> new EntityNotFoundException("vendor not found"));
    }

    /**
     * @param reviewId   Review <code>id</code>
     * @param reviewEdit <code>ReviewEdit</code> info
     * @return <code>ReviewDetails</code>
     */
    @Override
    public ReviewDetails editReview(Long reviewId, ReviewEdit reviewEdit) {
        Review review = findById(reviewId);
        reviewMapper.update(reviewEdit, review);
        review = reviewRepository.save(review);
        return reviewMapper.toReviewDetails(review);
    }

    private Review findById(Long reviewId) {
        return reviewRepository.findById(reviewId)
                .orElseThrow(() -> new EntityNotFoundException("Review not found"));
    }

    /**
     * @param vendorId Vendor id
     * @param reviewId Review id
     */
    @Override
    public void disableReview(Long vendorId, Long reviewId) {
        Review review = findById(reviewId);
        review.setDisabled(true);
        reviewRepository.save(review);
    }
}
