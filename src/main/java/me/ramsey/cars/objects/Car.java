package me.ramsey.cars.objects;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class Car extends Vehicle {

    @JsonProperty("doorCount")
    private int doorCount;

    public Car() {
    }

    public Car(int doorCount) {
        this.doorCount = doorCount;
    }

    @JsonProperty("doorCount")
    public int getDoorCount() {
        return doorCount;
    }

    public void setDoorCount(int doorCount) {
        this.doorCount = doorCount;
    }

}
