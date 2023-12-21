public class Vehicle{
	
	// complete the class definition
	// Do not change anything in the main
	// if you implemented correctly, your code should work properly without any error
	// You should also have the output what you see in the comments of each outputline below


	private String make;
	private String model;
	private int mileage;

	// Constructors
    public Vehicle(String make, String model, int mileage){
        set(make, model, mileage);
	}

    public Vehicle(Vehicle vehicle){
        this.make = vehicle.make;
        this.model = vehicle.make;
        this.mileage = vehicle.mileage;
	}	

	// "Set" methods
	public void set (String newMake, String newModel, int newMileage){
        make = newMake;
        model = newModel;
		mileage = newMileage;
	}

    public void setMake(String newMake){
		make = newMake;
	}
	
    public void setModel(String newModel){
		model = newModel;
	}

    public void setMileage(int newMileage){
		mileage = newMileage;
	}

	// "Get" methods
    public String getMake(){
		return make;
	}
	
    public String getModel(){
		return model;
	}

    public int getMileage(){
		if(mileage > 25){
			mileage = 0;
		}
		if(mileage < 0){
			mileage = 0;
		}
		return mileage;
	}	

	public String getFuelEfficiencyCategory(){
		String efficiency = "";
		if(mileage > 15.0){
			efficiency = "best";
		} else if(mileage >= 8){
			efficiency = "average";
		} else{
			efficiency = "worst";
		}
		return efficiency;
	}

	// Main method
	public static void main(String[] args){
		Vehicle v = new Vehicle("Fiat", "City", 0);
		v.setMileage(20);
		System.out.println("Efficiency for mileage 20 is " + v.getFuelEfficiencyCategory()); // best
		v.setMileage(7);
		System.out.println("Efficiency for mileage 7 is " +v.getFuelEfficiencyCategory());    // worst
		v.setMileage(13);
		System.out.println("Efficiency for mileage 13 is " +v.getFuelEfficiencyCategory());    // average
		Vehicle v2 = new Vehicle("Honda", "CR-V", 30);
		System.out.println("Maker is:  " +v2.getMake()); // Honda
		System.out.println("Model is:  " +v2.getModel()); // CR-V
		System.out.println("Mileage is:  " +v2.getMileage()); // 0
		
 
		Vehicle v1 = new Vehicle("Toyota", "Corolla", 10);
		Vehicle v3 = new Vehicle(v1);
		
		System.out.println("Testin copy constructor make " + v3.getMake()); // Toyota
		System.out.println("Testin copy constructor model " + v3.getModel()); // Corolla
		System.out.println("Testin copy constructor mileage " + v3.getMileage()); // 10

		v3.setModel("Camry");
		System.out.println("Testin copy constructor model " + v3.getModel()); // Camry
		System.out.println("Testin copy constructor model " + v1.getModel()); // Corolla
		
		
		
		
		
		
	}
}