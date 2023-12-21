import java.util.Scanner;


public class isPalindrome {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Please enter a word to determine if it is a palindrome:");
		
		String word = sc.next();

		StringBuilder sbWord = new StringBuilder(word);
		StringBuilder revWord = sbWord.reverse();
		
		boolean isPal = false;	
		if(word.equals(revWord.toString())) {
			isPal = true;
		}

		if(isPal){
			System.out.println(word + " is a palindrome.");
		} else {
			System.out.println(word + " is not a palindrome.");
		}
		sc.close();
	}
}