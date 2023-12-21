public class GliderAircraft extends Aircraft{
    private int hasEngine;
    private int glideRatio;

    public GliderAircraft(){
        super();
        hasEngine = 0;
        glideRatio = 0;
    } 
    public GliderAircraft(String initialManufacturer, String initialType, double initialEmptyWeight, double initialPerformanceMetric, int initialHasEngine, int intialGlideRatio){
        super(initialManufacturer, initialType, initialEmptyWeight, initialPerformanceMetric);
        hasEngine = initialHasEngine;
        glideRatio = intialGlideRatio;
    } 

	public void setHasEngine(int newHasEngine){
        hasEngine = newHasEngine;
    }

    public void setGlideRatio(int newGlideRatio){
        glideRatio = newGlideRatio;
    }

    public int getHasEngine(){
        return hasEngine;
    }

    public int getGlideRatio(){
        return glideRatio;
    }

    // GliderAircraft may or may not have a small electric propellor with output measured in kW
    // kW will be converted to horsepower
    // enginePowerKW == 0 signifies the glider has no engine
    // glideRatio is the distance forwards to downwards when a glider is flying
    public String TotalPerformanceMetric(double performanceMetric){
        if(hasEngine == 1){
            double enginePowerHP = performanceMetric * 1.34102;
            int intEnginePowerHP = (int)enginePowerHP;
            String performanceResult = "Engine Output: " + intEnginePowerHP + " HP\n"
                                        + "Glide Ratio: " + glideRatio + ":1";
            return performanceResult;
        }
        String performanceResult = "Glide Ratio: " + glideRatio + ":1";
        return performanceResult;

    }
}
