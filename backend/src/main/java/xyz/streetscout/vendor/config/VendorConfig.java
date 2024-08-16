package xyz.streetscout.vendor.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.security.crypto.password.PasswordEncoder;
import xyz.streetscout.vendor.entity.Location;
import xyz.streetscout.vendor.entity.Vendor;
import xyz.streetscout.vendor.repository.VendorRepository;

import java.util.List;

@Profile("!prod")
@Configuration
public class VendorConfig {

    @Bean
    CommandLineRunner vendorCommandLineRunner(VendorRepository vendorRepository, PasswordEncoder passwordEncoder) {

        return args -> {
            createVendor(vendorRepository, passwordEncoder);
        };
    }

    private static void createVendor(VendorRepository vendorRepository, PasswordEncoder passwordEncoder) {

        vendorRepository.saveAll(List.of(
            featuredVendor(
                    "Spice Delight",
                    "spicedelight@streetscout.xyz",
                    "Tasty Indian dishes, from curries to biryanis.",
                    "https://street-scout-images.s3.amazonaws.com/90c1394b-889e-4967-abdd-724257542cfc_indian.jpg",
                    new Location(20.5937, 78.9629),
                    passwordEncoder
            ),
            featuredVendor(
                    "Arabian Nights",
                    "arabiannights@streetscout.xyz",
                    "Authentic Middle Eastern eats",
                    "https://street-scout-images.s3.amazonaws.com/633858e6-6bc4-4017-a803-69e73ad16de0_arabic.jpg",
                    new Location(33.9391, 67.7100),
                    passwordEncoder
            ),
            featuredVendor(
                    "Sweet Treats Bakery",
                    "sweettreatsbakery@streetscout.xyz",
                    "Fresh bakery goods, breads to cakes and pastries.",
                    "https://street-scout-images.s3.amazonaws.com/60d745ad-d5a7-493b-a6c4-7132ed0cf4ce_bakery.jpg",
                    new Location(46.8182, 8.2275),
                    passwordEncoder
            ),
            featuredVendor(
                    "Chow Town",
                    "chowtown@streetscout.xyz",
                    "Tasty dishes.",
                    "https://street-scout-images.s3.amazonaws.com/54fdbacb-cc16-484d-ab9f-85efa3bc2cdd_login.png",
                    new Location(46.14263014490314, -70.24882355824539),
                    passwordEncoder
            )
        ));
    }

    private static Vendor featuredVendor(String name, String email, String desc, String photoUrl, Location location, PasswordEncoder passwordEncoder) {
        Vendor vendor = new Vendor();
        vendor.setName(name);
        vendor.setEmail(email);
        vendor.setDescription(desc);
        vendor.setLocation(location);
        vendor.setPassword(passwordEncoder.encode("password"));
        vendor.setPhotoUrl(photoUrl);
        vendor.setRole("VENDOR");
        vendor.setFavouriteByCustomers(1000);
        return vendor;
    }
}
