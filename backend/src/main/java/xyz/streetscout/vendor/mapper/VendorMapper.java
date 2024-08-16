package xyz.streetscout.vendor.mapper;

import org.mapstruct.*;
import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;
import xyz.streetscout.vendor.dto.VendorCount;
import xyz.streetscout.vendor.dto.VendorList;
import xyz.streetscout.vendor.dto.VendorProfile;
import xyz.streetscout.vendor.dto.VendorUpdate;
import xyz.streetscout.vendor.entity.Vendor;
import xyz.streetscout.vendor.service.AwsS3Service;


@Mapper(uses = MenuMapper.class)
public interface VendorMapper {

    VendorMapper INSTANCE = Mappers.getMapper(VendorMapper.class);

    @Mapping(target = "active", expression = "java(vendor.isActive())")
    VendorProfile toVendorProfile(Vendor vendor);

    @Mapping(target = "page", source = "pageable.pageNumber")
    @Mapping(target = "pageSize", source = "pageable.pageSize")
    @Mapping(target = "vendors", source = "content")
    VendorList toVendorList(Page<Vendor> vendors);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    void update(VendorUpdate vendorUpdate, @MappingTarget Vendor vendor);

    @Mapping(target = "favouriteByCustomers", source = "count")
    void updateFavouriteCount(VendorCount vendorCount, @MappingTarget Vendor vendor);

    @Mapping(target = "vendorPhotoUrl", source = "photo")
    void updatePhotoUrl(String photo, @MappingTarget Vendor vendor);

}
