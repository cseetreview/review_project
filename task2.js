const taskDescription = [
    "<strong>Task Description: </strong>In the following you will find the description of the programming problem. In this part, you need to implement a service robot that transfers boxes from an original position to a specified destination for each box. The boxes have labels and the priority of transferring a box depends on its label. Implement the Robot and Box classes as described below."
]

const tasks = [
    // Task 1
    "Develop two classes: one named Robot and the other Box.",
    // Task 2
    "For the Box class, create three attributes: two named destination (numeric type) and label (textual type), initialized via the class constructor, and a third attribute position (numeric type) with a default initial value.",
    // Task 3
    "Construct the Robot class with a single text-type attribute named name. Additionally, include a list to store Box objects and a map to associate string labels with integer priorities. The name field should be set using the class constructor.",
    // Task 4
    "In the Box class, develop three methods that return the box's position, destination, and label. These methods should not require any parameters.",
    // Task 5
    "Add a method named forward to the Box class, which increments the box's position by one unit without taking any parameters.",
    // Task 6
    "In the Robot class, create a method for appending Box objects to its transfer list. This method accepts a Box object and returns a boolean indicating the success of the addition.",
    // Task 7
    "Override the toString method in the Box class to return the box's position and label in a specified string format.",
    // Task 8
    "Implement a method in the Robot class to display details of each box in its transfer list, utilizing the overridden toString method of the Box class. This method should iterate over each box and print its details.",
    // Task 9
    "Inside the Robot class, craft a main method to demonstrate the creation of a Robot and a couple of Box objects, adding these boxes to the robot's transfer list and displaying the list.",
    // Task 10
    "Add a moveForward method to the Robot class, which takes a Box and a step count as parameters. This method moves the box forward by the specified steps but not beyond its destination.",
    // Task 11
    "In the Robot class, implement a setLabelPriority method. This method should associate a given label (string) with a priority (integer) within the robot's label priority map.",
    // Task 12
    "Create a getBoxPriority method in the Robot class to return the priority of a box based on its label. If the label doesn't exist in the map, throw an exception with a specific message.",
    // Task 13
    "Implement a selectNextBox method in the Robot class, which selects the box with the highest priority from the transfer list and removes it. If multiple boxes have the same highest priority, select any one of them. Return null if the list is empty.",
    // Task 14
    "Add a removeFromTransferList method to the Robot class, which removes all boxes from the transfer list that match a given label."
];
