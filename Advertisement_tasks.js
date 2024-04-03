const taskDescription = [
    "In the following you will find the description of an advertisement company in which it is possible to publish advertisements to customers. All the fields should be private and all the methods in the description should be public. In the implementation, you are not allowed to add methods which are not a part of the description unless the method is declared as private."
]

const advertisement_tasks = [
// Task 1
"Task 1:<br> Implement a class called <code>Customer</code> that has the fields: <code>preferences</code> of type <code>Set&lt;String&gt;</code> for customer preferences, <code>advertisements</code> of type List&lt;String&gt; for a list of advertisements received, and <code>maxAdvs</code> of type <code>int</code> for the maximum number of advertisements a customer can have.",

// Task 2
"Task 2:<br> Include a constructor to initialize <code>preferences</code> and <code>maxAdvs</code> with its two parameters, setting <code>advertisements</code> as an empty list.",

// Task 3
// "Task 3: Implement a method called <code>getPreferences</code> in the <code>Customer</code> Class that returns the value of the corresponding field.",

// Task 4
"Task 3:<br> Implement a method called <code>addAdvertisement(String adv)</code> in the <code>Customer</code> Class which adds <code>adv</code> after the last item in advertisements list if the number of its items remains less than or equal to <code>maxAdvs</code> and returns <code>true</code>. Otherwise, it just returns <code>false</code>.",

// Task 5
// "Task 5: In class <code>Customer</code>, implement a method called <code>addPreferences(String[] newPreferences)</code> that adds the elements of <code>newPreferences</code> to the preferences set. Also, implement a method <code>remove(String pref)</code> that removes pref from preferences set.",

// Task 6
"Task 4:<br> Implement the a method <code>readAdvertisements(int n)</code> that prints per line the last <code>n</code> advertisements in the advertisements list, starting from the end of the list, and deletes them from the list. (note that it prints and deletes all advertisements if the size is less than or equal to n)",

// Task 7
"Task 5:<br> Implement a class called <code>AdvertisingPlatform</code> that has the fields <code>subscribers</code> of type <code>List&lt;Customer&gt;</code> and <code>forbiddenWords</code> of type <code>Set&lt;String&gt;</code>. The constructor <code>AdvertisingPlatform(Set&lt;String&gt; forbiddenWords)</code> initializes the <code>forbiddenWords</code> field with the parameter of the constructor and initializes the <code>subscribers</code> as an empty list.",

// Task 8
"Task 6:<br> Implement a method called <code>addCustomer(Customer cm)</code> that adds the customer <code>cm</code> to the subscribers list if it is not already in the list and prints <strong>'customer is added!'</strong>. Otherwise, it just prints <strong>'customer already exists!'</strong>.",

// Task 9
//"Task 9: Implement a method <code>publishAdv(String adv, Customer cm)</code> that tries adding the advertisement <code>adv</code> to the list of advertisements of the customer <code>cm</code> if at least one word in <code>adv</code> is an exact match for one of the preferences of the customer <code>cm</code>. For example, advertisement \"Java programmer\" matches the preference \"Java\". Note that just containing words is not considered an exact match, for example, \"JavaScript\" is not a match in this example."

// Task 10
"Task 7:<br> In class <code>AdvertisingPlatform</code>, implement a method called <code>checkValidity(String adv)</code> that checks the validity of advertisement <code>adv</code> by checking that the advertisement has at most 20 words and does not have any of the words in the forbidden words. If the advertisement is valid it returns <code>true</code>. Otherwise it returns <code>false</code>. (Again only consider exact matches.)",
]