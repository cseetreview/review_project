const taskDescription = [
"In the following you will find the description of a programming problem. All the fields should be private and all the methods in the description should be public. In the implementation, you are not allowed to add methods which are not a part of the description unless the method is declared as private."
]

const robot_tasks = [
// Task 1
"Task 1: Implement a class called <code>Robot</code>, that has a field <code>batteryLevel</code> of type <code>int</code> that shows the current battery level and a field <code>maxLevel</code> of type <code>int</code> that shows the maximum capacity of the battery, and <code>chargingRate</code> of type <code>int</code> that shows the time (number of minutes) it takes for battery level to increase by one unit.", 

// Task 2
"Task 2: Include a constructor to initialize <code>batteryLevel</code>, <code>maxLevel</code>, and <code>chargingRate</code> are initialised in the constructor of the class with the value of the three parameters of the constructor.",
// Task 3
"Task 3: In class <code>Robot</code>, implement a method called <code>getMaxLevel()</code> that returns the value of <code>maxLevel</code> field.",

// Task 4
"Task 4: In class <code>Robot</code>, implement a method <code>performTask(int requiredEnergy)</code> that checks whether the required energy to perform a task is less than or equal to the <code>batteryLevel</code>. If it is, then it reduces the <code>batteryLevel</code> by the required energy and returns <code>true</code>. Otherwise it returns <code>false</code>.",

// Task 5
"Task 5: In class <code>Robot</code>, implement a method called <code>timeToCharge()</code> that returns a whole number representing the number of minutes that it takes to charge the battery to maximum capacity.",

// Task 6
"Task 6: In class <code>Robot</code>, implement a method called <code>charge()</code> that sets the <code>batteryLevel</code> to the maximum capacity.",

// Task 7
"Task 7: Implement a class called <code>ServiceRobot</code>, that is a subclass of <code>Robot</code>. This class has a field called <code>taskInfo</code> of type <code>Map&lt;String,Integer&gt;</code> that contains the name of tasks mapped to their required energy. Implement the constructor of the class <code>ServiceRobot(int m, int b, int c)</code>. The <code>taskInfo</code> should be initialised as an empty map in the constructor.",

// Task 8
"Task 8: In class <code>ServiceRobot</code>,, implement a method <code>defineTask()</code>, that reads a task name and its required energy (included in two consecutive lines) from user input. If the required energy is negative or greater than the maximum battery capacity, it throws an <code>IllegalArgumentException</code> with message <strong>'The value of required energy is not valid'</strong>. Otherwise, it adds the task name mapped to its required energy in <code>tasksInfo</code> map. <br>Example of user input is:<br> 'Clean windows' <br> '100' ",

// Task 9
"Task 9: In class <code>ServiceRobot</code>,, implement a method <code>charge()</code> that prints <strong>'Time to charge is &lt;x&gt; minutes'</strong> where &lt;x&gt; is the number of minutes it takes to charge the battery to the maximum capacity and sets the <code>batteryLevel</code> to <code>maxLevel</code>.",

// Task 10
//"Task 10: In class <code>ServiceRobot</code>,, implement a method service(int n) that reads n task names from the user input (each task name is in a line). Every time it reads a task name, if it is not in taskInfo it prints 'Sorry the task <name> is not among my defined tasks!' where <name> is the name of the task. Otherwise, it performs the task such that if the batteryLevel is adequate, it reduces the battery level with required energy of the task and prints 'performing task <name>'. Otherwise it prints 'Sorry I do not have enough battery'. In any case, the method should continue until all n tasks are read from the user input."
]