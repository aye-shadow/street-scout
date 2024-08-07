package xyz.streetscout.review.dto;

import io.swagger.v3.oas.annotations.media.Schema;

import java.util.List;

@Schema(
    name = "ReviewList",
    description = "Schema to hold Review List for http response")
public record ReviewList(
        int page,
        int totalPages,
        int pageSize,
        List<ReviewDetails> reviews
) { }
