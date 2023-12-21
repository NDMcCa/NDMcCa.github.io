import java.io.*;
import java.util.Scanner;

public class SalesLog {
    
    public static void main(String[] args){

        String txtFile = "ElectronicJournal.txt";
        PrintWriter outputStream = null;

        try{
            outputStream = new PrintWriter(new FileOutputStream(txtFile, true));
            System.out.println(txtFile + " initialized, recording session started");

        }
        catch(FileNotFoundException fnfex){
            System.out.println("Unspecified error opening " + txtFile);
            System.exit(0);
        }


		System.out.println("Enter an item, followed by price, followed by quantity to add to the electronic journal:");
		Scanner input = new Scanner(System.in);        
        boolean flag = true;

        String item = "";
        float price = 0;
        int quant = 0;  
        float subTotal = 0;
        String itemSale = "";
        float grandTotal = 0;

        while(flag){
            System.out.println("Enter an item, type 'end' to exit:");
            item = input.next();
            if(item.equalsIgnoreCase("end")){
                flag = false;
            }
            if(flag){
                System.out.println("Enter item price:");
                price = input.nextFloat();
                System.out.println("Enter quantity purchased:");
                quant = input.nextInt();
                subTotal = (price * quant);
                grandTotal += subTotal;
                itemSale = (item + ": $" + price + "/ea, Quantity: " + quant + ", Total: $" + subTotal + "\n");
                outputStream.println(itemSale);
                                
            }
        }
        outputStream.println("Session Grand Total: $" + grandTotal);
        outputStream.println("End of session\n" + "-----------------------------");
        outputStream.close();
        input.close();
        
        if(grandTotal > 0){
            System.out.println("Session Grand Total: $" + grandTotal);           
        }        
        System.out.println("Done");
    }
        
}