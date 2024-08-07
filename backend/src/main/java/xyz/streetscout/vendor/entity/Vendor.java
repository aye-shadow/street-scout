package xyz.streetscout.vendor.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import xyz.streetscout.review.entity.Review;
import xyz.streetscout.user.entity.User;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
@PrimaryKeyJoinColumn(name = "user_id")
public class Vendor extends User {

    @Column(name = "description")
    private String description;

    @Column(name = "photos")
    @ElementCollection(fetch = FetchType.LAZY)
    @CollectionTable(name = "vendor_photos",
            joinColumns = @JoinColumn(name = "vendor_id"))
    private List<String> photos;

    @OneToOne
    private Location location;

    @OneToOne
    private OperatingHours operatingHours;

    @OneToMany(mappedBy = "vendor", fetch = FetchType.LAZY)
    private List<MenuItem> menu = new ArrayList<>();

    @OneToMany(mappedBy = "vendor", fetch = FetchType.LAZY)
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

    public void addItem(MenuItem item) {
        if (menu == null) {
            menu = new ArrayList<>();
        }
        menu.add(item);
        item.setVendor(this);
    }

    @Override
    public String toString() {
        return "Vendor{" +
                "id=" + id +
                ", email='" + email + '\'' +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", location=" + location +
                ", operatingHours=" + operatingHours +
                ", menu=" + menu +
                ", reviews=" + reviews +
                ", photos=" + photos +
                '}';
    }
}
