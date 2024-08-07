package xyz.streetscout.review.dto;

import java.time.LocalDateTime;

public record ReviewDetails(
        Long id,
        Long reviewerId,
        String reviewerName,
        Long vendorId,
        String vendorName,
        Integer rating,
        String text,
        LocalDateTime createdAt,
        LocalDateTime updatedAt
) {
}
