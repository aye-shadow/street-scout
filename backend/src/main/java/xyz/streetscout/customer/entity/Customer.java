package xyz.streetscout.customer.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import xyz.streetscout.user.entity.User;
import xyz.streetscout.vendor.entity.Vendor;

import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@PrimaryKeyJoinColumn(name = "user_id")
@NoArgsConstructor
public class Customer extends User {

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "favourite_vendors",
            joinColumns = @JoinColumn(name = "customer_id"))
    @Column(name = "vendor_name")
    private Set<String> favouriteVendors = new HashSet<>();

    public void addFavorite(Vendor vendor) {
        if (favouriteVendors == null) {
            favouriteVendors = new HashSet<>();
        }

        favouriteVendors.add(vendor.getName());
    }

    public void removeFavorite(Vendor vendor) {
        if (favouriteVendors == null) {
            favouriteVendors = new HashSet<>();
        }

        favouriteVendors.remove(vendor.getName());
    }
}
