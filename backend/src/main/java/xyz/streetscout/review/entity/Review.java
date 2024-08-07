package xyz.streetscout.review.entity;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import xyz.streetscout.customer.entity.Customer;
import xyz.streetscout.vendor.entity.Vendor;
import jakarta.persistence.*;

import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "reviews")
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @OneToOne(fetch = FetchType.EAGER)
    private Customer reviewer;

    @ManyToOne(fetch = FetchType.LAZY,
            cascade = {CascadeType.PERSIST, CascadeType.MERGE,
                        CascadeType.DETACH, CascadeType.REFRESH})
    private Vendor vendor;

    @Column(name = "rating", nullable = false)
    private Integer rating;

    @Column(name = "text")
    private String text;

    @CreationTimestamp
    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;


    @Column(name = "is_disabled", nullable = false)
    private boolean disabled = false;

    @Override
    public String toString() {
        String reviewerName = reviewer != null ? reviewer.getName() : "";
        String vendorName = vendor != null ? vendor.getName() : "";
        return "Review{" +
                "id=" + id +
                ", reviewer='" + reviewerName + '\'' +
                ", vendor='" + vendorName + '\'' +
                ", rating=" + rating +
                ", text='" + text + '\'' +
                ", createdAt=" + createdAt +
                ", disabled=" + disabled +
                '}';
    }
}
