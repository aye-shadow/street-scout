package xyz.streetscout.review.mapper;

import org.mapstruct.*;
import org.mapstruct.factory.Mappers;
import org.springframework.data.domain.Page;
import xyz.streetscout.review.dto.ReviewCreation;
import xyz.streetscout.review.dto.ReviewDetails;
import xyz.streetscout.review.dto.ReviewEdit;
import xyz.streetscout.review.dto.ReviewList;
import xyz.streetscout.review.entity.Review;

@Mapper
public interface ReviewMapper {
    ReviewMapper INSTANCE = Mappers.getMapper(ReviewMapper.class);

    @Mapping(target = "page", source = "pageable.pageNumber")
    @Mapping(target = "pageSize", source = "pageable.pageSize")
    @Mapping(target = "reviews", source = "content")
    ReviewList toReviewList(Page<Review> reviews);

    @Mapping(target = "rating", source = "rating")
    @BeanMapping(ignoreByDefault = true)
    Review toReview(ReviewCreation reviewCreation);

    @Mapping(target = "reviewerId", source = "reviewer.id")
    @Mapping(target = "reviewer", source = "reviewer.name")
    @Mapping(target = "vendorId", source = "vendor.id")
    @Mapping(target = "vendor", source = "vendor.name")
    ReviewDetails toReviewDetails(Review review);

    @BeanMapping(ignoreByDefault = true, nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    void update(ReviewEdit reviewEdit, @MappingTarget Review review);
}
