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
        Vendor vendor = new Vendor();
        vendor.setLocation(46.14263014490314, -70.24882355824539);

        vendorRepository.saveAll(List.of(
            featuredVendor(
                    "Chow Town",
                    "chowtown@streetscout.xyz",
                    "Tasty Indian dishes, from curries to biryanis.",
                    new Location(46.14263014490314, -70.24882355824539),
                    passwordEncoder
            ),
            featuredVendor(
                    "Spice Delight",
                    "spicedelight@streetscout.xyz",
                    "Tasty Indian dishes, from curries to biryanis.",
                    new Location(20.5937, 78.9629),
                    passwordEncoder
            ),
            featuredVendor(
                    "Arabian Nights",
                    "arabiannights@streetscout.xyz",
                    "Authentic Middle Eastern eats",
                    new Location(33.9391, 67.7100),
                    passwordEncoder
            ),
            featuredVendor(
                    "Sweet Treats Bakery",
                    "sweettreatsbakery@streetscout.xyz",
                    "Fresh bakery goods, breads to cakes and pastries.",
                    new Location(46.8182, 8.2275),
                    passwordEncoder
            )
        ));
    }

    private static Vendor featuredVendor(String name, String email, String desc, Location location, PasswordEncoder passwordEncoder) {
        Vendor vendor = new Vendor();
        vendor.setName(name);
        vendor.setEmail(email);
        vendor.setDescription(desc);
        vendor.setLocation(location);
        vendor.setPassword(passwordEncoder.encode("password"));
        vendor.setRole("VENDOR");
        vendor.setFavouriteByCustomers(1000);
        return vendor;
    }
}
