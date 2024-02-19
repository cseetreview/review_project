const taskDescription = [
    "<strong>Task Description: </strong>In the following you will find the description of a system for managing a... "
]

const task3 = [
// Task 1
"Task 1: Implement a class called <strong>Customer</strong> that has the fields: <strong>preferences</strong> of type Set&lt;String&gt; for customer preferences, <strong>advertisements</strong> of type List&lt;String&gt; for a list of advertisements received, and <strong>maxAdvs</strong> of type <strong>int</strong> for the maximum number of advertisements a customer can have.",

// Task 2
"Task 2: Include a constructor to initialize <strong>preferences</strong> and <strong>maxAdvs</strong>, setting <strong>advertisements</strong> as an empty list.",
    
// Task 3
"Task 3: Implement the <strong>addAdvertisement</strong>(String adv) method in the <strong>Customer</strong> class that adds an advertisement to the customer’s list if it does not exceed <strong>maxAdvs</strong>, returning true if added, and false otherwise.", 

// Task 4
"Task 4: Add a method <strong>readAdvertisements</strong>(int n) to the <strong>Customer</strong> class that prints and removes the last advertisements from the list.", 

// Task 5
"Task 5: Implement a class called <strong>AdvertisingPlatform</strong> with private fields: <strong>subscribers</strong> of type List&lt;Customer&gt; for storing subscribed customers, and <strong>forbiddenWords</strong> of type Set&lt;String&gt; for words not allowed in advertisements. Include a constructor to initialize these fields.", 

// Task 6
"Task 6: Add a method <strong>addCustomer</strong>(Customer cm) to the <strong>AdvertisingPlatform</strong> class that adds a customer to the platform, ensuring no duplicates.", 

// Task 7
"Task 7: Implement a method <strong>publishAdv</strong>(String adv, Customer cm) in the <strong>AdvertisingPlatform</strong> class that adds an advertisement to a specific customer’s list based on their preferences.",  

// Task 8
"Task 8: Add a method <strong>checkValidity</strong>(String adv) to the <strong>AdvertisingPlatform</strong> class that checks if an advertisement meets the criteria (no forbidden words, at most 20 words).", 

// Task 9
"Task 9: Implement a method <strong>publishToAll</strong>(String adv) in the <strong>AdvertisingPlatform</strong> class that publishes an advertisement to all subscribers whose preferences match the advertisement, after validating the advertisement."
]