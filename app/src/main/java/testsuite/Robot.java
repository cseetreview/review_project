package testsuite;

public class Robot {
    int batteryLevel;

    public int getBatteryLevel() {
        return batteryLevel;
    }

    public int getChargingRate() {
        return chargingRate;
    }

    int maxLevel;
    int chargingRate;

    public Robot(int batteryLevel, int maxLevel, int chargingRate) {
        this.batteryLevel = batteryLevel;
        this.maxLevel = maxLevel;
        this.chargingRate = chargingRate;
    }

    public int getMaxLevel() {
        return this.maxLevel;
    }

    public boolean performTask(int requiredEnergy) {
        if( requiredEnergy <= this.batteryLevel){
            this.batteryLevel -= requiredEnergy;
            return true;
        } else {
            return false;
        }
    }

    public int timeToCharge(){
        int amountToCharge = this.maxLevel-this.batteryLevel;
        return amountToCharge*this.chargingRate;
    }

    public void charge(){
        this.batteryLevel = this.maxLevel;
    }
}  