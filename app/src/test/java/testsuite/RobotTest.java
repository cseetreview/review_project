package testsuite;
import org.junit.Test;
import static org.junit.Assert.*;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.util.Map;

public class RobotTest {

    @Test
    public void testRobotInitialization() {
        Robot robot = new Robot(50, 100, 2);
        assertEquals(50, robot.getBatteryLevel());
        assertEquals(100, robot.getMaxLevel());
        assertEquals(2, robot.getChargingRate());
    }

    @Test
    public void testGetMaxLevel() {
        Robot robot = new Robot(50, 100, 2);
        assertEquals(100, robot.getMaxLevel());
    }

    @Test
    public void testPerformTaskSuccess() {
        Robot robot = new Robot(50, 100, 2);
        assertTrue(robot.performTask(30));
        assertEquals(20, robot.getBatteryLevel());
    }

    @Test
    public void testPerformTaskFailure() {
        Robot robot = new Robot(50, 100, 2);
        assertFalse(robot.performTask(60));
        assertEquals(50, robot.getBatteryLevel());
    }

    @Test
    public void testTimeToCharge() {
        Robot robot = new Robot(50, 100, 2);
        assertEquals(100, robot.timeToCharge());
    }

    @Test
    public void testCharge() {
        Robot robot = new Robot(50, 100, 2);
        robot.charge();
        assertEquals(100, robot.getBatteryLevel());
    }
}