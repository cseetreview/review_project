package testsuite;

import java.util.HashMap;

public class ServiceRobot extends Robot {
    HashMap<String,Integer> taskInfo;

    public ServiceRobot(int m, int b, int c){
        super(b, m, c);
        this.taskInfo = new HashMap<>();
    }
    public void defineTask(String taskName, int requiredEnergy) throws Exception{
        if (requiredEnergy < 0 || requiredEnergy < this.batteryLevel){
            // throw IllegalArgumentException here 
            throw new Exception("The value of required energy is not valid");
        }
        this.taskInfo.put(taskName, requiredEnergy);
    }
    public HashMap<String, Integer> getTaskInfo() {
        return taskInfo;
    }
}