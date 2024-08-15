package xyz.streetscout.vendor.repository;


import org.springframework.data.jpa.domain.Specification;
import xyz.streetscout.vendor.dto.LocationDTO;
import xyz.streetscout.vendor.entity.Vendor;

public class VendorSpecification {

    private static String HAVERSINE_FORMULA = "6371 * acos(cos(radians(:latitude)) " +
            "* cos(radians(v.latitude)) * cos(radians(v.longitude) " +
            "- radians(:longitude)) + sin(radians(:latitude)) " +
            "* sin(radians(v.latitude)))";

    public static Specification<Vendor> withinRange(LocationDTO center, double rangeInKm) {
        return (root, query, criteriaBuilder) -> {

            query.distinct(true);

            return criteriaBuilder.le(
                    criteriaBuilder.function("", Double.class, criteriaBuilder.literal(HAVERSINE_FORMULA)),
                    rangeInKm
            );
        };
    }

}
