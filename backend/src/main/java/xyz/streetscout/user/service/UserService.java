package xyz.streetscout.user.service;

import xyz.streetscout.user.dto.*;

public interface UserService {
    @Deprecated
    String register(Register register);

    @Deprecated
    Response login(LoginRequest loginRequest) throws Exception;

    UserProfile registerUser(UserRegistration userRegistration);

    LoginResponse loginUser(LoginRequest login);
}
