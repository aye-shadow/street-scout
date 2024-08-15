package xyz.streetscout.vendor.repository;


import jakarta.persistence.criteria.Expression;
import jakarta.persistence.criteria.Join;
import org.springframework.data.jpa.domain.Specification;
import xyz.streetscout.vendor.dto.LocationDTO;
import xyz.streetscout.vendor.entity.Location;
import xyz.streetscout.vendor.entity.Vendor;

public class VendorSpecification {

    private static final double EARTH_RADIUS_KM = 6371; // Approx Earth radius in KM

    /**
     * Uses Haversine formula to calculate distance
     * <br/><br/>
     * <code>`a = sin²(Δφ/2) + cos(φ1) * cos(φ2) * sin²(Δλ/2)`</code>
     *
     * @param center    <code>Location</code> with latitude and longitude
     * @param rangeInKm range in kilometers
     * @return <code>Comparable</code> for filtering list of <code>Vendor</code>
     */
    public static Specification<Vendor> withinRange(LocationDTO center, double rangeInKm) {
        return (root, query, cb) -> {
            Join<Vendor, Location> locationJoin = root.join("location");

            // Convert degrees to radians
            Expression<Double> vendorLatInRadians = cb.function("radians", Double.class, locationJoin.get("latitude"));
            Expression<Double> vendorLonInRadians = cb.function("radians", Double.class, locationJoin.get("longitude"));
            Expression<Double> centerLatInRadians = cb.function("radians", Double.class, cb.literal(center.latitude()));
            Expression<Double> centerLonInRadians = cb.function("radians", Double.class, cb.literal(center.longitude()));

            // Haversine formula calculation using native SQL functions
            Expression<Double> latDiff = cb.diff(centerLatInRadians, vendorLatInRadians);
            Expression<Double> lonDiff = cb.diff(centerLonInRadians, vendorLonInRadians);

            Expression<Double> haversineFormulaComponent = cb.sum(
                    cb.prod(
                            cb.function("sin", Double.class, cb.quot(latDiff, 2)),
                            cb.function("sin", Double.class, cb.quot(latDiff, 2))),
                    cb.prod(
                            cb.prod(
                                    cb.function("cos", Double.class, centerLatInRadians),
                                    cb.function("cos", Double.class, vendorLatInRadians)),
                            cb.prod(
                                    cb.function("sin", Double.class, cb.quot(lonDiff, 2)),
                                    cb.function("sin", Double.class, cb.quot(lonDiff, 2)))
                    )
            );

            Expression<Double> angularDistanceInRadians = cb.function("atan2", Double.class,
                    cb.sqrt(haversineFormulaComponent),
                    cb.sqrt(cb.diff(cb.literal(1), haversineFormulaComponent))
            );

            // Final distance in KM: distance = Earth's radius * c
            Expression<Double> distance = cb.prod(
                    cb.literal(EARTH_RADIUS_KM),
                    cb.prod(cb.literal(2.0), angularDistanceInRadians)
            );

            // Compare distance with the provided range
            return cb.lessThanOrEqualTo(distance, rangeInKm);

        };
    }

}
