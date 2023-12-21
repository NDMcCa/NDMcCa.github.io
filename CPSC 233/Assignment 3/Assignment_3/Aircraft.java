public class Aircraft{
    private String manufacturer;
    private String type;
    private double emptyWeight;
    private double performanceMetric;

    public Aircraft(){
        manufacturer = "Unspecified";
        type = "Unspecified";
        emptyWeight = 0;
        performanceMetric = 0;
    }

    public Aircraft(String initialManufacturer, String initialType, double initialEmptyWeight, double initialPerformanceMetric){
        manufacturer = initialManufacturer;
        type = initialType;
        emptyWeight = initialEmptyWeight;
        performanceMetric = initialPerformanceMetric;
    }


    // Engine configuration/type unspecified, It will be assumed to be single engine
    // output is measured in horsepower thus horsepower = performanceMetric
    public String TotalPerformanceMetric(double performanceMetric){ 
            int horsepower = (int)performanceMetric;
            String totalPerformanceMetric = "Engine output: " + horsepower + " HP";
            return totalPerformanceMetric;           
        }

	// public void set(String newManufacturer, String newType, double newEmptyWeight, double newPerformanceMetric){
    //     manufacturer = newManufacturer;
    //     type = newType;
    //     emptyWeight = newEmptyWeight;
    //     performanceMetric = newPerformanceMetric;
    // }

	public void setManufacturer(String newManufacturer){
        manufacturer = newManufacturer;
    }

	public void setType(String newType){
        type = newType;
    }

	public void setEmptyWeight(double newEmptyWeight){
        emptyWeight = newEmptyWeight;
    }

    public void setPerformanceMetric(double newPerformanceMetric){
        performanceMetric = newPerformanceMetric;
    }

    public String getManufacturer(){
        return manufacturer;
    }

    public String getType(){
        return type;
    }

    public double getEmptyWeight(){
        return emptyWeight;
    }

    public double getPerformanceMetric(){
        return performanceMetric;
    }

    public void writeOutput(){
        System.out.println("Manufacturer: " + getManufacturer());
        System.out.println("Type: " + getType());
        System.out.println("Empty Weight: " + getEmptyWeight() + "t");
        System.out.println(TotalPerformanceMetric(performanceMetric));
    }
}
