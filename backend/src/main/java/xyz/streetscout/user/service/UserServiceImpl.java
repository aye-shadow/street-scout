package xyz.streetscout.user.service;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import xyz.streetscout.exception.InvalidRoleException;
import xyz.streetscout.security.JwtToken;
import xyz.streetscout.security.JwtUtils;
import xyz.streetscout.user.dto.*;
import xyz.streetscout.user.entity.User;
import xyz.streetscout.user.mapper.UserMapper;
import xyz.streetscout.user.repository.UserRepository;

@Service
@RequiredArgsConstructor(onConstructor_ = @Autowired)
public class UserServiceImpl implements UserService{
    private final UserRepository userRepository;

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
//            VendorProfile vendor = vendorService.registerVendor(register.vendorRegistration());
        } else if (register.role().equals("CUSTOMER")) {
            User savedUser = userRepository.save(user);
//            CustomerProfile customerProfile = customerService.addCustomer(register.registerCustomer());
        } else{
            throw new RuntimeException("enter valid details");
        }

        User savedUser = userRepository.save(user);
        return ("Registered successfully");
    }

    @Override
    public Response login(LoginRequest loginRequest) throws Exception {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.email(), loginRequest.password()));
        var user = userRepository.findByEmail(loginRequest.email()).orElseThrow(() -> new Exception("user Not found"));

        var jwt = jwtUtils.generateToken(user);
//        if(user.getRole().equals("VENDOR")){
//            VendorProfile vendorProfile =vendorService.getVendorByEmail(user.getEmail());
//        return new Response("Logged in successfully",jwt.token(), vendorProfile,null);
//        }
//        else if(user.getRole().equals("CUSTOMER")){
//            CustomerProfile customerProfile=customerService.getCustomerProfileByEmail(user.getEmail());
//            return new Response("Logged in successfully",jwt.token(),null,customerProfile);}
//        else{
//            throw new Exception("User not found");
//        }
        return null;
    }

    /**
     * @param registration <code>UserRegistration</code> email, password & role
     * @return <code>UserProfile</code>
     */
    @Override
    public UserProfile registerUser(UserRegistration registration) {
        User user = switch (registration.role()) {
            case "VENDOR" -> userMapper.toVendor(registration);
            case "CUSTOMER" -> userMapper.toCustomer(registration);
            default -> throw new InvalidRoleException("Invalid role " + registration.role());
        };

        user.setPassword(passwordEncoder.encode(registration.password()));
        user = userRepository.save(user);
        return userMapper.toUserProfile(user);
    }

    /**
     * @param login <code>LoginRequest</code> credentials
     * @return <code>LoginResponse</code> with token
     */
    @Override
    public LoginResponse loginUser(LoginRequest login) {
        authenticate(login);
        User user = findByEmail(login.email());
        JwtToken jwtToken = jwtUtils.generateToken(user);
        return new LoginResponse(
                user.getEmail(),
                user.getRole(),
                jwtToken.token(),
                jwtToken.expiration()
        );
    }

    private User findByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new EntityNotFoundException(email + " not found"));
    }

    private void authenticate(LoginRequest loginRequest) {
        authenticationManager.authenticate(
                UsernamePasswordAuthenticationToken.unauthenticated(
                        loginRequest.email(),
                        loginRequest.password()
                )
        );
    }
}
