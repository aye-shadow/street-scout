package xyz.streetscout.user.mapper;

import org.mapstruct.BeanMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;
import xyz.streetscout.customer.entity.Customer;
import xyz.streetscout.user.dto.UserProfile;
import xyz.streetscout.user.dto.UserRegistration;
import xyz.streetscout.user.entity.User;
import xyz.streetscout.vendor.entity.Vendor;

@Mapper
public interface UserMapper {
    UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);

    @Mapping(target = "name", source = "name")
    @Mapping(target = "role", source = "role")
    @Mapping(target = "email", source = "email")
    @Mapping(target = "password", ignore = true)
    @BeanMapping(ignoreByDefault = true)
    Customer toCustomer(UserRegistration userRegistration);

    @Mapping(target = "name", source = "name")
    @Mapping(target = "role", source = "role")
    @Mapping(target = "email", source = "email")
    @Mapping(target = "password", ignore = true)
    @BeanMapping(ignoreByDefault = true)
    Vendor toVendor(UserRegistration userRegistration);

    UserProfile toUserProfile(User user);
}
