const taskDescription = [
    "<strong>Task Description: </strong>In the following you will find the description of a system for managing a laboratory. A laboratory has a set of available equipment and students can sign up to and sign off from a laboratory. Additionally, they can book equipment to work with. Implement the classes for laboratory and students as described below. "
]

const task1 = [
    // Task 1
    "<strong>Task 1: </strong>Create two classes, one named Lab and the other Student.",
    
    // Task 2
    "<strong>Task 2: </strong>Within the Lab class, incorporate two properties: name and capacity. Ensure that these properties are set up through the class constructor using two arguments corresponding to each property.",
    
    // Task 3
    "<strong>Task 3: </strong>In the Student class, introduce two attributes: name and age. The constructor of this class should be designed to initialize the name attribute using its argument.",
    
    // Task 4
    "<strong>Task 4: </strong>Equip the Student class with a pair of methods: one for altering the age attribute and another for retrieving it. Name these methods appropriately to reflect their purposes.",
    
    // Task 5
    "<strong>Task 5: </strong>Introduce a list-type attribute in the Lab class that can store multiple Student objects. This list should be named to suggest its function of holding student records.",
    
    // Task 6
    "<strong>Task 6: </strong>Add a functionality to the lab class: A method to enroll a Student object into the lab's student list, checking if there's space available and if the student isn't already enrolled. This method should return a boolean indicating the success of the enrollment.",
    
    // Task 7
    "<strong>Task 7: </strong>Add a functionality to the lab class: A method to remove a Student object from the lab's student list if they are currently enrolled. This should also return a boolean indicating the success of the removal.",
    
    // Task 8
    "<strong>Task 8: </strong>In the Student class, implement a couple of methods for enlisting and delisting the student from a specified lab. These methods should utilize the corresponding methods in the Lab class and be able to indicate whether the operation was successful or not.",
    
    // Task 9
    "<strong>Task 9: </strong>In the Lab class, create a storage for equipment names. This field should have a name that clearly indicates its purpose of storing available lab equipment. This type should only be able to contain unique equipment names.",
    
    // Task 10
    "<strong>Task 10: </strong>Develop a method in the Lab class to add new equipment items. This method should read input from the standard input, starting with a number indicating how many equipment items will follow, and then reading each equipment name. For example, an input of 3, followed by 'hammer', 'spanner', and 'mallet', should result in these three items being added to the equipment storage.",
    
    // Task 11
    "<strong>Task 11: </strong>Add a field to the Lab class that maps each Student to a set of equipment names, representing the equipment that the student has booked. This field should use a data structure that allows associating each Student with a unique set of equipment names.",
    
    // Task 12
    "<strong>Task 12: </strong>Implement a method in the Lab class with the functionality of booking a specific piece of equipment for a student. If the equipment is not available, the method should trigger a specific exception with an appropriate error message.",
    
    // Task 13
    "<strong>Task 13: </strong>Create a method in the Lab class to handle the return of all equipment booked by a student. This method should update the lab's equipment availability and the student's booked equipment record appropriately.",
    
    // Task 14
    "<strong>Task 14: </strong>Define a new class, a subclass of the Student class, to represent graduate students.",
    // Task 15
    "<strong>Task 15: </strong>Modify the enrollment capabilities for graduate students to restrict them to a maximum of three labs at any given time. This requires adding relevant attributes and modifying the existing enrollment methods to enforce this constraint. Ensure the state of the graduate student is only updated upon successful lab registration or deregistration.",
];
