import java.util.ArrayList;
import java.util.Scanner;

public class highestRatedMovie {
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

        float maxRating = 0;
        int maxIndex = 0;
        for (float index : ratingList){
            if (index > maxRating){
                maxIndex = ratingList.indexOf(index);
                maxRating = index;
            }
            
        }

        String bestMovie = ("The highest rated movie in the list is " + movieList.get(maxIndex) + " with a rating of " + maxRating +"/10.0.");
        System.out.println(bestMovie);
        keyboard.close();
        keyboardFloat.close();			

    }
}