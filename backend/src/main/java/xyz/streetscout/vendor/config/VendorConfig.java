package xyz.streetscout.vendor.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.security.crypto.password.PasswordEncoder;
import xyz.streetscout.vendor.entity.Location;
import xyz.streetscout.vendor.entity.Vendor;
import xyz.streetscout.vendor.repository.VendorRepository;

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
        vendor.setName("Chow Town");
        vendor.setEmail("chow@town.com");
        vendor.setRole("VENDOR");
        vendor.setPassword(passwordEncoder.encode("password"));
        vendor.setLocation(46.14263014490314, -70.24882355824539);
        vendorRepository.save(vendor);
    }
}
