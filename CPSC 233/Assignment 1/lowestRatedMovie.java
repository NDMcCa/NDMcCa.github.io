import java.util.ArrayList;
import java.util.Scanner;

public class lowestRatedMovie {
   public static void main(String[] args) { 
        Scanner keyboard = new Scanner(System.in);
        Scanner keyboardFloat = new Scanner(System.in);
        boolean end = false;
        ArrayList<String> movieList = new ArrayList<String>();
        ArrayList<Float> ratingList = new ArrayList<Float>();
		while (!end){
			System.out.println("Type a move entry:");
			String movEntry = keyboard.nextLine();
			movieList.add(movEntry);
            System.out.println("Enter the movie's rating:");
			float ratEntry = keyboardFloat.nextFloat();
			ratingList.add(ratEntry);
			System.out.println("Type 'continue' to add more movies:");
			String answer = keyboard.nextLine();
			if (!answer.equalsIgnoreCase("continue")){
				end = true;
            }
        }

        float minRating = 10;
        int minIndex = 0;
        for (float index : ratingList){
            if (index < minRating){
                minIndex = ratingList.indexOf(index);
                minRating = index;
            }
            
        }

        String worstMovie = ("The lowest rated movie in the list is " + movieList.get(minIndex) + " with a rating of " + minRating +"/10.0.");
        System.out.println(worstMovie);
        keyboard.close();
        keyboardFloat.close();			

    }
}