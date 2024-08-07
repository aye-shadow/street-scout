package xyz.streetscout.review.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import xyz.streetscout.review.dto.ReviewCreation;
import xyz.streetscout.review.dto.ReviewDetails;
import xyz.streetscout.review.dto.ReviewEdit;
import xyz.streetscout.review.dto.ReviewList;
import xyz.streetscout.review.service.ReviewService;

@Tag(
    name = "REST APIs for Vendor Reviews",
    description = "REST APIs to CREATE, UPDATE, FETCH and DELETE Vendor Reviews")
@RestController
@RequestMapping("/api/vendors/{vendorId}/reviews")
@RequiredArgsConstructor(onConstructor_ = @Autowired)
public class ReviewController {

    private final ReviewService reviewService;

    @GetMapping("")
    @Operation(
            summary = "Get All Reviews",
            description = "REST API to fetch reviews by vendor")
    @ApiResponse(
            responseCode = "200",
            description = "HTTP Status OK")
    public ResponseEntity<ReviewList> getAllReviews(
            @PathVariable("vendorId") Long vendorId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size
    ){
        PageRequest pageRequest = PageRequest.of(page, size);
        ReviewList reviews = reviewService.getAllReviews(vendorId, pageRequest);
        return ResponseEntity.status(HttpStatus.OK).body(reviews);
    }

    @PostMapping("")
    @Operation(
            summary = "Create Review",
            description = "REST API to create a review")
    @ApiResponse(
            responseCode = "201",
            description = "HTTP Status CREATED")
    public ResponseEntity<ReviewDetails> createReview(
            @PathVariable("vendorId") Long vendorId,
            @Valid @RequestBody ReviewCreation reviewCreation
    ){
        ReviewDetails review = reviewService.createReview(vendorId, reviewCreation);
        return ResponseEntity.status(HttpStatus.CREATED).body(review);
    }

    @PutMapping("/{reviewId}")
    @Operation(
            summary = "Edit Review",
            description = "REST API to edit existing review")
    @ApiResponse(
            responseCode = "200",
            description = "HTTP Status OK")
    public ResponseEntity<ReviewDetails> editReview(
            @PathVariable("reviewId") Long reviewId,
            @RequestBody ReviewEdit reviewEdit
    ){
        ReviewDetails editedReview = reviewService.editReview(reviewId, reviewEdit);
        return ResponseEntity.status(HttpStatus.OK).body(editedReview);
    }

    @DeleteMapping("/{reviewId}")
    @Operation(
            summary = "Disable Review",
            description = "REST API to disable a review from vendor")
    public ResponseEntity<Void> disableReview(
            @PathVariable("vendorId") Long vendorId,
            @PathVariable("reviewId") Long reviewId
    ){
        reviewService.disableReview(vendorId, reviewId);
        return ResponseEntity.status(HttpStatus.OK).build();
    }
}
