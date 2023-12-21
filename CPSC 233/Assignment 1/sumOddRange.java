import java.util.Scanner;

public class sumOddRange {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);

		System.out.println("sumOddRange will sum the odd numbers from a user provided start point to the nearest odd number below a user 0provided end point");		
		System.out.println("Please enter a start integer value:");
		int start = sc.nextInt();

		System.out.println("Please enter an end integer value:");
		int end = sc.nextInt();

		int total = 0;

		for (int index = start; index < end; index++){
			if (index % 2 != 0){
				total = total + index;
			}
		}
		
		System.out.println("The sum of odd numbers from " + start + " to the nearest odd below " + end + " is " + total );
		sc.close();
	}
}