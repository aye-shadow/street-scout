package xyz.streetscout.vendor.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import xyz.streetscout.review.entity.Review;
import xyz.streetscout.user.entity.User;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@Entity
@PrimaryKeyJoinColumn(name = "user_id")
public class Vendor extends User {

    @Column(name = "description")
    private String description;

    @Column(name = "photos")
    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "vendor_photos",
            joinColumns = @JoinColumn(name = "vendor_id"))
    private List<String> photos;

    @OneToOne
    private Location location;

    @OneToOne
    private OperatingHours operatingHours;

    @OneToMany
    private Set<MenuItem> menu = new HashSet<>();

    @OneToMany(mappedBy = "vendor")
    private List<Review> reviews = new ArrayList<>();

    public void addReview(Review review) {
        if (reviews == null) {
            reviews = new ArrayList<>();
        }
        reviews.add(review);
        review.setVendor(this);
    }

    public boolean isActive() {
        return location != null && operatingHours == null;
    }

    public void deactivate() {
        location = null;
        operatingHours = null;
    }
}
