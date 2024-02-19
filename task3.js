const taskDescription = [
    "<strong>Task Description: </strong>In the following you will find the description of a system for managing a... "
]

const task3 = [
// Task 1
"<strong>Task 1: </strong>Implement the Customer Class: Implement a class called ‘Customer’ with private fields: ‘preferences’ of type ‘Set<String>’ for customer preferences, ‘advertisements’ of type ‘List<String>’ for a list of advertisements received, and ‘maxAdvs’ of type ‘int’ for the maximum number of advertisements a customer can have. Include a constructor to initialize ‘preferences’ and ‘maxAdvs’, setting ‘advertisements’ as an empty list.",
    
// Task 2
"<strong>Task 2: </strong>Manage Customer Preferences: Add methods to the ‘Customer’ class to manage preferences: ‘addPreferences(String[] newPreferences)’ to add new preferences and ‘removePreference(String pref)’ to remove a preference.",  

// Task 3
"<strong>Task 3: </strong>Advertisement Management: Implement the ‘addAdvertisement(String adv)’ method in the ‘Customer’ class that adds an advertisement to the customer’s list if it does not exceed ‘maxAdvs’, returning true if added, and false otherwise.", 

// Task 4
"<strong>Task 4: </strong>Reading Advertisements: Add a method ‘readAdvertisements(int n)’ to the ‘Customer’ class that prints and removes the last advertisements from the list.", 

// Task 5
"<strong>Task 5: </strong>Implement the AdvertisingPlatform Class: Implement a class called ‘AdvertisingPlatform’ with private fields: ‘subscribers’ of type ‘List<Customer>’ for storing subscribed customers, and ‘forbiddenWords’ of type ‘Set<String>’ for words not allowed in advertisements. Include a constructor to initialize these fields.", 

// Task 6
"<strong>Task 6: </strong>Subscription Management: Add a method ‘addCustomer(Customer cm)’ to the ‘AdvertisingPlatform’ class that adds a customer to the platform, ensuring no duplicates.", 

// Task 7
"<strong>Task 7: </strong>Advertisement Publishing: Implement a method ‘publishAdv(String adv, Customer cm)’ in the ‘AdvertisingPlatform’ class that adds an advertisement to a specific customer’s list based on their preferences.",  

// Task 8
"<strong>Task 8: </strong>Validity Check for Advertisements: Add a method ‘checkValidity(String adv)’ to the ‘AdvertisingPlatform’ class that checks if an advertisement meets the criteria (no forbidden words, at most 20 words).", 

// Task 9
"<strong>Task 9: </strong>Publish to All: Implement a method ‘publishToAll(String adv)’ in the ‘AdvertisingPlatform’ class that publishes an advertisement to all subscribers whose preferences match the advertisement, after validating the advertisement."
]