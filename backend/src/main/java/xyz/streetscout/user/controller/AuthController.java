package xyz.streetscout.user.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import xyz.streetscout.user.dto.LoginRequest;
import xyz.streetscout.user.dto.Response;
import xyz.streetscout.user.dto.UserProfile;
import xyz.streetscout.user.dto.UserRegistration;
import xyz.streetscout.user.service.UserService;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor(onConstructor_ = @Autowired)
public class AuthController {

    private final UserService userService;

    @PostMapping("/register")
    public ResponseEntity<UserProfile> registerCustomer(@Valid @RequestBody UserRegistration userRegistration){
        UserProfile response = userService.registerUser(userRegistration);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @PostMapping("/login")
    public ResponseEntity<Response> login(@Valid @RequestBody LoginRequest login) throws Exception {
        Response response = userService.login(login);
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }
}
