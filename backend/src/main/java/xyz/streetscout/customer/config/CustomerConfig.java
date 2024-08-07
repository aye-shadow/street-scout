package xyz.streetscout.customer.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.security.crypto.password.PasswordEncoder;
import xyz.streetscout.customer.entity.Customer;
import xyz.streetscout.customer.repository.CustomerRepository;

@Profile("!prod")
@Configuration
public class CustomerConfig {

    @Bean
    CommandLineRunner customerCommandLineRunner(CustomerRepository customerRepository, PasswordEncoder passwordEncoder) {

        return args -> {
            createCustomer(customerRepository, passwordEncoder);
        };
    }

    private static void createCustomer(CustomerRepository customerRepository, PasswordEncoder passwordEncoder) {
        Customer customer = new Customer();
        customer.setName("Mark Jacobs");
        customer.setEmail("mark@jacobs.com");
        customer.setPassword(passwordEncoder.encode("password"));
        customerRepository.save(customer);
    }
}
