package me.ramsey.cars;

import me.ramsey.cars.objects.Engine;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.Collection;
import java.util.HashMap;
import java.util.concurrent.atomic.AtomicLong;

@RestController
@RequestMapping("/api/engines")
public class EngineController {

    private HashMap<Long, Engine> engineStore = new HashMap<>();
    private AtomicLong idCounter = new AtomicLong(1);

    @GetMapping()
    public ResponseEntity<Collection<Engine>> getAllEngines() {
        return ResponseEntity.ok(engineStore.values());
    }

    @PostMapping("/create")
    public ResponseEntity<Engine> createEngine(@RequestBody Engine engine) {
        long engineId = idCounter.getAndIncrement();
        engine.setId(engineId);
        engineStore.put(engineId, engine);
        return ResponseEntity.created(URI.create("/api/engines/" + engineId)).body(engine);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Engine> getEngine(@PathVariable Long id) {
        Engine engine = engineStore.get(id);
        return engine != null ? ResponseEntity.ok(engine) : ResponseEntity.notFound().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Engine> updateEngine(@PathVariable Long id, @RequestBody Engine updatedEngine) {
        if (engineStore.containsKey(id)) {
            engineStore.put(id, updatedEngine);
            return ResponseEntity.ok(updatedEngine);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEngine(@PathVariable Long id) {
        if (engineStore.containsKey(id)) {
            engineStore.remove(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    public HashMap<Long, Engine> getEngineStore() {
        return engineStore;
    }

}