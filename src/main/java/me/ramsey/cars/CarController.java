package me.ramsey.cars;

import me.ramsey.cars.objects.Car;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.Collection;
import java.util.HashMap;
import java.util.concurrent.atomic.AtomicLong;

@RestController
@RequestMapping("/api/cars")
public class CarController {

    private HashMap<Long, Car> carStore = new HashMap<>();
    private AtomicLong idCounter = new AtomicLong(1);

    @GetMapping()
    public ResponseEntity<Collection<Car>> getAllCars() {
        return ResponseEntity.ok(carStore.values());
    }

    @PostMapping("/create")
    public ResponseEntity<Car> createCar(@RequestBody Car car) {
        long carId = idCounter.getAndIncrement();
        car.setId(carId);
        carStore.put(carId, car);
        return ResponseEntity.created(URI.create("/api/cars/" + carId)).body(car);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Car> getCar(@PathVariable Long id) {
        Car car = carStore.get(id);
        return car != null ? ResponseEntity.ok(car) : ResponseEntity.notFound().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Car> updateCar(@PathVariable Long id, @RequestBody Car updatedCar) {
        if (carStore.containsKey(id)) {
            carStore.put(id, updatedCar);
            return ResponseEntity.ok(updatedCar);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCar(@PathVariable Long id) {
        if (carStore.containsKey(id)) {
            carStore.remove(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    public HashMap<Long, Car> getCarStore() {
        return carStore;
    }

}
