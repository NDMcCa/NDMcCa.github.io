public class JetAircraft extends Aircraft{
    private double engineNumber;
    private String outputUnit;

    public JetAircraft(){
        super();
        engineNumber = 0;
        outputUnit = "lbf";
    } 

    public JetAircraft(String initialManufacturer, String initialType, double initialEmptyWeight, double initialPerformanceMetric, String initialOutputUnit, int initialEngineNumber){
        super(initialManufacturer, initialType, initialEmptyWeight, initialPerformanceMetric);
        engineNumber = initialEngineNumber;
        outputUnit = initialOutputUnit;
    } 

	public void setEngineNumber(double newEngineNumber){
        engineNumber = newEngineNumber;
    }

    public void setOutputUnit(String newOutputUnit){
        outputUnit = newOutputUnit;
    }

    public double getEngineNumber(){
        return engineNumber;
    }

    public String getOutputUnit(){
        return outputUnit;
    }

    // TwinJetAircraft will have 2 jet engines thus output is measured in thrust and totalThrust = performanceMetric * 2
    // TwinJetAircraft will take single engine kN (kilo Newton) measurement and convert it to total engine lbf (pounds force) measurement
    // If the inputted measurement is not stated as kN, it will default to assuming lbf
    public String TotalPerformanceMetric(double performanceMetric){
        if(outputUnit == "kN"){
            double thrust = performanceMetric * 224.80894387096183;
            int intThrust = (int)thrust * (int)engineNumber;
            String totalThrust = "Total thrust rating: " + intThrust + " lbf (" + (int)engineNumber + " engines combined)";
            if(intThrust <= 0){
                totalThrust = "Total thrust rating: Invalid engine Parameter";
            }
            return totalThrust;
        }   
        int intThrust = (int)performanceMetric * (int)engineNumber;
        String totalThrust = "Total thrust rating: " + intThrust + " lbf (" + (int)engineNumber + " engines combined)";
        if(intThrust <= 0){
            totalThrust = "Total thrust rating: Invalid engine Parameter";
        } 
        return totalThrust;
        
    }
}
