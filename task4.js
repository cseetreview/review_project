const taskDescription = [
    "In the following you will find the description of an advertisement company in which it is possible to publish advertisements to customers. All the fields should be private and all the methods in the description should be public. In the implementation, you are not allowed to add methods which are not a part of the description unless the method is declared as private."
]

const task4 = [
// Task 1
"Task 1: Implement a class called <strong>Member</strong> with the following fields: <strong>name</strong> of type <strong>String</strong>, <strong>email</strong> of type <strong>String</strong>, and <strong>borrowedBooks</strong> of type <strong>List<Book></strong>.",

// Task 2
"Task 2: Implement a constructor for the <strong>Member</strong> class with its three parameters. Initialize the <strong>borrowedBooks</strong> list as an empty list.",

// Task 3
// "Task 3: Implement a class called <strong>Book</strong> with the following fields: <strong>title</strong> of type <strong>String</strong> representing the book's title, <strong>author</strong> of type <strong>String</strong> representing the book's author, <strong>genre</strong> of type <strong>String</strong> representing the book's genre, and <strong>publicationYear</strong> of type <strong>int</strong> representing the book's publication year.",

// Task 4
// "Task 4: Implement a constructor for the <strong>Book</strong> class that takes four arguments: <strong>title</strong> (a <strong>String</strong>) representing the book's title, <strong>author</strong> (a <strong>String</strong>) representing the book's author, <strong>genre</strong> (a <strong>String</strong>) representing the book's genre, and <strong>publicationYear</strong> (an <strong>int</strong>) representing the book's publication year.",

// Task 5
// "Task 5: Implement a class called <strong>Library</strong> with the following fields: <strong>books</strong> of type <strong>List<Book></strong> representing the books in the library, and <strong>members</strong> of type <strong>List<Member></strong> representing the registered members.",

// Task 6
// "Task 6: Implement a constructor for the <strong>Library</strong> class that initializes both the <strong>books</strong> and <strong>members</strong> lists as empty lists.",

// Task 7
"Task 7: Implement a method called <strong>borrowBook</strong>. This method takes two arguments: <strong>member</strong> of type <strong>Member</strong> representing the member who wants to borrow a book, and <strong>book</strong> of type <strong>Book</strong> representing the book the member wants to borrow. The method should check if the member has already borrowed the maximum allowed number of books and if the book is available. If both conditions are met, add the book to the member's <strong>borrowedBooks</strong> list and remove it from the library's available books list. Return <strong>true</strong> if successful, <strong>false</strong> otherwise.",

// Task 8
"Task 8: Implement a method called <strong>returnBook</strong> in the <strong>Library</strong> class. This method takes two arguments: <strong>member</strong> of type <strong>Member</strong> representing the member who wants to return a book, and <strong>book</strong> of type <strong>Book</strong> representing the book the member wants to return. The method should check if the member has borrowed the book. If the book is found in the member's <strong>borrowedBooks</strong> list, remove it from the list and add it back to the library's available books list.",

// Task 9
"Task 9: Implement a method called <strong>searchBooks</strong> in the <strong>Library</strong> class. This method takes one argument: <strong>searchTerm</strong> of type <strong>String</strong> representing the search term. The method should return a list of <strong>Book</strong> objects that match the search term in title, author, or genre (case-insensitive search).",

// Task 10
"Task 10: Implement a method called <strong>listBorrowedBooks</strong> in the <strong>Library</strong> class. This method takes one argument: <strong>member</strong> of type <strong>Member</strong> representing the member whose borrowed books you want to list. The method should print a list of all books currently borrowed by the specified member."
]