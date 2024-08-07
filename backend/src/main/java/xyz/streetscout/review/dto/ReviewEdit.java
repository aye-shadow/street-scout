package xyz.streetscout.review.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Size;

@Schema(
    name = "ReviewEdit",
    description = "Schema to hold updated Review info")
public record ReviewEdit(
        @Min(value = 1, message = "Rating must be greater than 1")
        @Max(value = 5, message = "Rating must be less than 5")
        Integer rating,

        @Size(min = 3, message = "Text size must be at least 3 characters")
        String text
) {
}
