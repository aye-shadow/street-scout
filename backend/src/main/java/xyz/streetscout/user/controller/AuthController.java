package xyz.streetscout.user.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import xyz.streetscout.user.dto.*;
import xyz.streetscout.user.service.UserService;

import static xyz.streetscout.user.constants.AuthConstants.AUTHORIZATION_HEADER;

@Tag(
    name = "REST APIs for Authorization",
    description = "REST APIs for User login and registration")
@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor(onConstructor_ = @Autowired)
public class AuthController {

    private final UserService userService;

    @PostMapping("/register")
    @Operation(
            summary = "Register Customer",
            description = "REST API to register a Customer or Vendor")
    @ApiResponse(
            responseCode = "201",
            description = "HTTP Status CREATED")
    public ResponseEntity<UserProfile> registerCustomer(@Valid @RequestBody UserRegistration userRegistration){
        UserProfile response = userService.registerUser(userRegistration);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @PostMapping("/login")
    @Operation(
            summary = "Login",
            description = "REST API to login with credential")
    @ApiResponse(
            responseCode = "200",
            description = "HTTP Status OK")
    public ResponseEntity<LoginResponse> login(@Valid @RequestBody LoginRequest login) {
        LoginResponse loginResponse = userService.loginUser(login);
        return ResponseEntity.status(HttpStatus.OK)
                .header(AUTHORIZATION_HEADER, loginResponse.accessToken())
                .body(loginResponse);
    }
}
