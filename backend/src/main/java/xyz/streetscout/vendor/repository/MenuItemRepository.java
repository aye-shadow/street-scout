package xyz.streetscout.vendor.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import xyz.streetscout.vendor.entity.MenuItem;

public interface MenuItemRepository extends JpaRepository<MenuItem, Long> {
}
