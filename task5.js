const taskDescription = [
"In the following you will find the description of a programming problem. All the fields should be private and all the methods in the description should be public. In the implementation, you are not allowed to add methods which are not a part of the description unless the method is declared as private."
]

const task5 = [
// Task 1
"Task 1: Implement a class called <strong>Robot</strong>, that has a field <strong>batteryLevel</strong> of type <strong>int</strong> that shows the current battery level and a field <strong>maxLevel</strong> of type int that shows the maximum capacity of the battery, and <strong>chargingRate</strong> of type int that shows the time (number of minutes) it takes for battery level to increase by one unit.", 

// Task 2
"Task 2: Include a constructor to initialize <strong>batteryLevel, maxLevel<//strong>, and <strong>chargingRate</strong> are initialised in the constructor of the class with the value of the three parameters of the constructor.",

// Task 3
"Task 3: In class <strong>Robot</strong>, implement a method called <strong>getMaxLevel()</strong> that returns the value of <strong>maxLevel</strong> field.",

// Task 4
"Task 4: In class <strong>Robot</strong>, implement a method <strong>performTask(int requiredEnergy)</strong> that checks whether the required energy to perform a task is less than or equal to the <strong>batteryLevel<strong/>. If it is, then it reduces the <strong>batteryLevel</strong> by the required energy and returns <strong>true</strong>. Otherwise it returns <strong>false<strong/>.",

// Task 5
"Task 5: In class <strong>Robot</strong>, implement a method called <strong>timeToCharge()</strong> that returns a whole number representing the number of minutes that it takes to charge the battery to maximum capacity.",

// Task 6
"Task 6: In class Robot, implement a method called charge() that sets the batteryLevel to the maximum capacity.",

// Task 7
"Task 7: Implement a class called ServiceRobot, that is a subclass of Robot. This class has a field called taskInfo of type Map<String,Integer> that contains the name of tasks mapped to their required energy. Implement the constructor of the class ServiceRobot(int m, int b, int c). The taskInfo should be initialised as an empty map in the constructor.",

// Task 8
"Task 8: In class ServiceRobot, implement a method defineTask(), that reads a task name and its required energy (included in two consecutive lines) from user input. If the required energy is negative or greater than the maximum battery capacity, it throws an IllegalArgumentException with message 'The value of required energy is not valid'. Otherwise, it adds the task name mapped to its required energy in tasksInfo map. Example of user input is: 'Clean windows 100' ",

// Task 9
"Task 9: In class ServiceRobot, implement a method charge() that prints 'Time to charge is <x> minutes' where <x> is the number of minutes it takes to charge the battery to the maximum capacity and sets the batteryLevel to maxLevel.",

// Task 10
"Task 10: In class ServiceRobot, implement a method service(int n) that reads n task names from the user input (each task name is in a line). Every time it reads a task name, if it is not in taskInfo it prints 'Sorry the task <name> is not among my defined tasks!' where <name> is the name of the task. Otherwise, it performs the task such that if the batteryLevel is adequate, it reduces the battery level with required energy of the task and prints 'performing task <name>'. Otherwise it prints 'Sorry I do not have enough battery'. In any case, the method should continue until all n tasks are read from the user input."
]