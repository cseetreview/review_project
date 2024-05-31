package testsuite;
import org.junit.Test;
import org.junit.Before;
import org.junit.After;
import java.io.ByteArrayOutputStream;
import java.io.PrintStream;
import java.util.HashMap;
import java.io.ByteArrayInputStream;
import java.io.InputStream;
import static org.junit.Assert.*;

public class ServiceRobotTest {

    @Test
    public void testServiceRobotInitialization() {
        ServiceRobot serviceRobot = new ServiceRobot(50, 100, 2);
        assertTrue(serviceRobot.getTaskInfo().isEmpty());
    }

    @Test
    public void testDefineTaskValid() {
        ServiceRobot serviceRobot = new ServiceRobot(50, 100, 2);
        String input = "Clean windows\n100\n";
        InputStream in = new ByteArrayInputStream(input.getBytes());
        System.setIn(in);

        try {
            serviceRobot.defineTask(input, 0);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        HashMap<String, Integer> taskInfo = serviceRobot.getTaskInfo();
        assertEquals(1, taskInfo.size());
        assertEquals(100, (int) taskInfo.get("Clean windows"));
    }

    @Test(expected = IllegalArgumentException.class)
    public void testDefineTaskInvalid() {
        ServiceRobot serviceRobot = new ServiceRobot(50, 100, 2);
        String input = "Clean windows\n150\n"; // 150 is greater than maxLevel
        InputStream in = new ByteArrayInputStream(input.getBytes());
        System.setIn(in);

        try {
            serviceRobot.defineTask(input, 0);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }

    @Test
    public void testChargeOverride() {
        ServiceRobot serviceRobot = new ServiceRobot(50, 100, 2);
        ByteArrayOutputStream outContent = new ByteArrayOutputStream();
        System.setOut(new PrintStream(outContent));

        serviceRobot.charge();

        assertEquals("Time to charge is 100 minutes\n", outContent.toString());
        assertEquals(100, serviceRobot.getBatteryLevel());
    }
}