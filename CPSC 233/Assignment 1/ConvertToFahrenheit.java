import java.util.Scanner;

public class ConvertToFahrenheit {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Please enter a tempurature in Celsius to convert to Farenheit:");
		
		double a = sc.nextFloat();
		double b = a * (9.0 / 5.0) + 32;


		System.out.println(a + " degrees Celsius converts to " + b + " degrees Fahrenheit.");
		sc.close();
	}
}