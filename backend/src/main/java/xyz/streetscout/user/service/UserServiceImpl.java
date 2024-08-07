package xyz.streetscout.user.service;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import xyz.streetscout.customer.dto.CustomerProfile;
import xyz.streetscout.customer.entity.Customer;
import xyz.streetscout.customer.service.CustomerService;
import xyz.streetscout.exception.UserRegistrationException;
import xyz.streetscout.security.JwtUtils;
import xyz.streetscout.user.dto.*;
import xyz.streetscout.user.entity.User;
import xyz.streetscout.user.mapper.UserMapper;
import xyz.streetscout.user.repository.UserRepository;
import xyz.streetscout.vendor.dto.VendorProfile;
import xyz.streetscout.vendor.entity.Vendor;
import xyz.streetscout.vendor.service.VendorService;

@Service
@RequiredArgsConstructor(onConstructor_ = @Autowired)
public class UserServiceImpl implements UserService{
    private final UserRepository userRepository;

    private final VendorService vendorService;

    private final CustomerService customerService;

    private final PasswordEncoder passwordEncoder;

    private final JwtUtils jwtUtils;

    private final AuthenticationManager authenticationManager;

    private final UserMapper userMapper = UserMapper.INSTANCE;


    @Override
    public String register(Register register){
        User user = new User();
        user.setEmail(register.vendorRegistration().email());
        user.setRole(register.role());
        user.setPassword(passwordEncoder.encode(register.password()));

        if (register.role().equals("VENDOR")) {
            VendorProfile vendor = vendorService.registerVendor(register.vendorRegistration());
        } else if (register.role().equals("CUSTOMER")) {
            User savedUser = userRepository.save(user);
            CustomerProfile customerProfile = customerService.addCustomer(register.registerCustomer());
        } else{
            throw new UserRegistrationException("enter valid details");
        }

        User savedUser = userRepository.save(user);
        return ("Registered successfully");
    }

    @Override
    public Response login(LoginRequest loginRequest) throws Exception {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.email(), loginRequest.password()));
        var user = userRepository.findByEmail(loginRequest.email()).orElseThrow(() -> new Exception("user Not found"));

        var token = jwtUtils.generateToken(user);
        if(user.getRole().equals("VENDOR")){
            VendorProfile vendorProfile =vendorService.getVendorByEmail(user.getEmail());
        return new Response("Logged in successfully",token, vendorProfile,null);
        }
        else if(user.getRole().equals("CUSTOMER")){
            CustomerProfile customerProfile=customerService.getCustomerProfileByEmail(user.getEmail());
            return new Response("Logged in successfully",token,null,customerProfile);}
        else{
            throw new Exception("User not found");
        }
    }

    /**
     * @param registration <code>UserRegistration</code> email, password & role
     * @return <code>RegistrationResponse</code>
     */
    @Override
    public UserProfile registerUser(UserRegistration registration) {
        User user = switch (registration.role()) {
            case "VENDOR" -> userMapper.toVendor(registration);
            case "CUSTOMER" -> userMapper.toCustomer(registration);
            default -> throw new UserRegistrationException("Invalid role " + registration.role());
        };

        user.setPassword(passwordEncoder.encode(registration.password()));
        user = userRepository.save(user);
        return userMapper.toUserProfile(user);
    }
}
