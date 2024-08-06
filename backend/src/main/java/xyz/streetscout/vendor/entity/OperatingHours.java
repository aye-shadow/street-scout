package xyz.streetscout.vendor.entity;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "operating_hours")
public class OperatingHours {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "open")
    private LocalDateTime open;

    @Column(name = "close")
    private LocalDateTime close;

    @OneToOne
    private Vendor vendor;

}
