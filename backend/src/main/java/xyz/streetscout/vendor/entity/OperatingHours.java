package xyz.streetscout.vendor.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.OffsetDateTime;
import java.time.OffsetTime;

@Data
@Entity
@Table(name = "operating_hours")
public class OperatingHours {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "open")
    private LocalTime open;

    @Column(name = "close")
    private LocalTime close;


    public static OperatingHours allDay() {
        OperatingHours operatingHours = new OperatingHours();
        operatingHours.open = LocalTime.of(0, 0);
        operatingHours.close = LocalTime.of(23, 59);
        return operatingHours;
    }

    @Override
    public String toString() {
        return "OperatingHours{" +
                "id=" + id +
                ", open=" + open +
                ", close=" + close +
                '}';
    }
}
