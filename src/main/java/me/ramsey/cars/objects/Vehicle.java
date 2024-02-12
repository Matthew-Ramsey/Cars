package me.ramsey.cars.objects;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class Vehicle {

    private long id;
    private boolean preOwned;

    @JsonProperty("make")
    private String make;

    @JsonProperty("model")
    private String model;

    @JsonProperty("engine")
    private Engine engine;

    @JsonProperty("colour")
    private String colour;

    public Vehicle() {
    }

    public Vehicle(long id, boolean preOwned, String make, String model, Engine engine, String colour) {
        this.id = id;
        this.preOwned = preOwned;
        this.make = make;
        this.model = model;
        this.engine = engine;
        this.colour = colour;
    }

    @JsonProperty("id")
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    @JsonProperty("preOwned")
    public boolean isPreOwned() {
        return preOwned;
    }

    public void setPreOwned(boolean preOwned) {
        this.preOwned = preOwned;
    }

    @JsonProperty("make")
    public String getMake() {
        return make;
    }

    public void setMake(String make) {
        this.make = make;
    }

    @JsonProperty("model")
    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    @JsonProperty("engine")
    public Engine getEngine() {
        return engine;
    }

    public void setEngine(Engine engine) {
        this.engine = engine;
    }

    @JsonProperty("colour")
    public String getColour() {
        return colour;
    }

    public void setColour(String colour) {
        this.colour = colour;
    }

}
