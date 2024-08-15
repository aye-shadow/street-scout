package xyz.streetscout.search.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import xyz.streetscout.search.service.SearchService;
import xyz.streetscout.vendor.dto.LocationDTO;
import xyz.streetscout.vendor.dto.VendorList;

@RestController
@RequestMapping("/api/search")
@RequiredArgsConstructor(onConstructor_ = @Autowired)
public class SearchController {

    private final SearchService searchService;

    @GetMapping("/nearby")
    public ResponseEntity<VendorList> nearByVendors(
            @RequestParam(name = "page", defaultValue = "0") int page,
            @RequestParam(name = "size", defaultValue = "10") int size,
            @RequestParam(name = "lat") double latitude,
            @RequestParam(name = "lng") double longitude,
            @RequestParam(name = "range", defaultValue = "50") double rangeInKm
    ){
        PageRequest pageRequest = PageRequest.of(page, size);
        LocationDTO location = new LocationDTO(latitude, longitude);
        VendorList vendors = searchService.nearByVendors(location, rangeInKm, pageRequest);
        return ResponseEntity.status(HttpStatus.OK).body(vendors);
    }
}
