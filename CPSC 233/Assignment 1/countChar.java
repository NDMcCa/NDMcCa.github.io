import java.util.Scanner;

public class countChar {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);

		System.out.println("Please enter a string value:");
		String word = sc.nextLine();

		System.out.println("Please enter a character that is in the given string to count the number of times it is present:");
		char character = sc.next().charAt(0);

		int totalCount = 0;

		for (int index = 0; index < word.length(); index++){
			if (word.charAt(index) == character){
				totalCount += 1;
			}
		}
		
		System.out.println("The character, " + character + ", appears " + totalCount + " times in delete" + word );
		sc.close();
	}
}