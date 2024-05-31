package testsuite;
import java.util.*;

public class AdvertisingPlatform {
    private List<Customer> subscribers;   // list of subscribers
    private Set<String> forbiddenWords;  // set of forbidden words

    public AdvertisingPlatform(Set<String> forbiddenWords) {
        this.forbiddenWords = forbiddenWords;
        this.subscribers = new ArrayList<>();   // initialize subscribers as an empty list
     }
 
      // Getters and setters for all fields
    public List<Customer> getSubscribers() {
        return new ArrayList<>(this.subscribers);   // Return a copy to prevent direct modification
     }

    public Set<String> getForbiddenWords() {
        return new HashSet<>(this.forbiddenWords);  // Return a copy to prevent direct modification
     }

    public void setSubscribers(List<Customer> subscribers) {
        this.subscribers = new ArrayList<>(subscribers);
     }

    public void setForbiddenWords(Set<String> forbiddenWords) {
        this.forbiddenWords = new HashSet<>(forbiddenWords);
     }

     public void addCustomer(Customer cm) {
        if (this.subscribers.contains(cm)) {
            System.out.println("customer already exists!");
        } else {
            this.subscribers.add(cm);
            System.out.println("customer is added!");
         }
    }

    public boolean checkValidity(String adv) {
        // Check if advertisement has more than 20 words
        String[] words = adv.trim().split("\\s+"); // Use regex to split on any whitespace
        System.out.println("Word count: " + words.length);
        System.out.println("Words: " + Arrays.toString(words));
        
        if (words.length > 20) {
            return false;
        }
    
        // Check if the advertisement contains any forbidden words
        for (String word : words) {
            if (this.forbiddenWords.contains(word)) {
                return false;
            }
        }
    
        return true;  // If not returned yet, then it means the advertisement is valid
    }
    
}
