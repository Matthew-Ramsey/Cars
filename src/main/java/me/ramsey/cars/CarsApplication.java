package me.ramsey.cars;

import me.ramsey.cars.objects.Engine;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Scanner;



@RestController
@SpringBootApplication
public class CarsApplication {

    private static EngineController engineControllerInstance;

    @Autowired
    private void setEngineController(EngineController engineController) {
        engineControllerInstance = engineController;
    }

    public static void main(String[] args) {
        SpringApplication.run(CarsApplication.class, args);

        // Using Scanner for terminal input was simply to test engine store was working correctly before front-end development.
        Scanner in = new Scanner(System.in);
        while(in.hasNext()) {
            in.nextLine();
            HashMap<Long, Engine> engineStore = engineControllerInstance.getEngineStore();
            System.out.println(engineStore);
        }
    }
}
