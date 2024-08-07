package xyz.streetscout.user.service;

import xyz.streetscout.user.dto.*;

public interface UserService {
    String register(Register register);

    Response login(LoginRequest loginRequest) throws Exception;

    UserProfile registerUser(UserRegistration userRegistration);
}
