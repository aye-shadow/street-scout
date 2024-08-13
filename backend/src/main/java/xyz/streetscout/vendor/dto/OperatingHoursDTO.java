package xyz.streetscout.vendor.dto;

import io.swagger.v3.oas.annotations.media.Schema;

import java.time.LocalTime;

@Schema(
    name = "OperatingHours",
    description = "Schema to hold vendor operating hours")
public record OperatingHoursDTO(
        LocalTime open,
        LocalTime close
) { }
