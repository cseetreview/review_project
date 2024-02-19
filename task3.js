const taskDescription = [
    "In the following you will find the description of an advertisement company in which it is possible to publish advertisements to customers. All the fields should be private and all the methods in the description should be public. In the implementation, you are not allowed to add methods which are not a part of the description unless the method is declared as private."
]

const task3 = [
// Task 1
"Task 1: Implement a class called <strong>Customer</strong> that has the fields: <strong>preferences</strong> of type Set&lt;String&gt; for customer preferences, <strong>advertisements</strong> of type List&lt;String&gt; for a list of advertisements received, and <strong>maxAdvs</strong> of type <strong>int</strong> for the maximum number of advertisements a customer can have.",

// Task 3
"Task 3: Implement a method called <strong>getPreferences</strong> in the <strong>Customer</strong> Class that returns the value of the corresponding field.",

// Task 4
"Task 4: Implement a method called <strong>addAdvertisement</strong> in the <strong>Customer</strong> Class which adds adv after the last item in advertisements list if the number of its items remains less than or equal to maxAdvs and returns true. Otherwise, it just returns false.",

// Task 5
"Task 5: In class <strong>Customer</strong>, implement a method called <strong>addPreferences(String[] newPreferences)</strong> that adds the elements of <strong>newPreferences</strong> to the preferences set. Also, implement a method <strong>remove(String pref)</strong> that removes pref from preferences set.",

// Task 6
"Task 6: Implement the a method <strong>readAdvertisements(int n)</strong> that prints per line the last <strong>n</strong> advertisements in the advertisements list, starting from the end of the list, and deletes them from the list. (note that it prints and deletes all advertisements if the size is less than or equal to n)",

// Task 7
"Task 7: Implement a class called <strong>AdvertisingPlatform</strong> that has the fields <strong>subscribers</strong> of type List&lt;Customer&gt; and <strong>forbiddenWords</strong> of type Set&lt;String&gt;. The constructor <strong>AdvertisingPlatform(Set&lt;String&gt; forbiddenWords)</strong> initializes the <strong>forbiddenWords</strong> field with the parameter of the constructor and initializes the subscribers as an empty list.",

// Task 8
"Task 8: Implement a method called <strong>addCustomer(Customer cm)</strong> that adds the customer <strong>cm</strong> to the subscribers list if it is not already in the list and prints 'customer is added!'. Otherwise, it just prints 'customer already exists!'.",

// Task 9
"Task 9: Implement a method <strong>publishAdv(String adv, Customer cm)</strong> that tries adding the advertisement <strong>adv</strong> to the list of advertisements of the customer <strong>cm</strong> if at least one word in <strong>adv</strong> is an exact match for one of the preferences of the customer <strong>cm</strong>. For example, advertisement \"Java programmer\" matches the preference \"Java\". Note that just containing words is not considered an exact match, for example, \"JavaScript\" is not a match in this example."
]