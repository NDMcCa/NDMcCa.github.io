import java.io.*;
import java.util.Scanner;
import java.util.ArrayList;

public class NameCorrector {
    
    public static void main(String[] args){

        String txtFile = "NamesList.txt";
        Scanner inputStream = null;
        System.out.println("The file " + txtFile + " has been opened.\n" + "Name correction in progress...");
						   
        try {
            inputStream = new Scanner(new File(txtFile));
        }

        catch(FileNotFoundException fnfex){
            System.out.println("Failed to open " + txtFile);
            System.exit(0);
        }
 
        ArrayList<String> namesList = new ArrayList<String>();       

        while (inputStream.hasNextLine())
        {            
            String line = inputStream.nextLine();
            String[] nameArr = line.split(" ");
            for(String name : nameArr)
            
                namesList.add(name);
        }

        inputStream.close();    

        String outTxtFile = "CorrectedNamesList.txt";

        PrintWriter outputStream = null;
        try {
            outputStream = new PrintWriter(outTxtFile);

        }

        catch(FileNotFoundException fnfex) {
            System.out.println("Error creating " + outTxtFile);
            System.exit(0);
        }


        for (int index = 0; index < namesList.size(); index += 2){
            String completeName = namesList.get(index) + " " + namesList.get(index + 1);
            outputStream.println(completeName);   
        }     
        outputStream.close();
        System.out.println("Operation Complete, names stored in " + outTxtFile);
    }
        
}