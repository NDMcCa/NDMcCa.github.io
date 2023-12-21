public class Assignment3 {
    public static void main(String[] args){
        Aircraft[] aircraft = new Aircraft[6];
        aircraft[0] = new Aircraft("Piper", "J-3 Cub", 0.35, 65.0);
        aircraft[1] = new JetAircraft("Airbus", "A321-200", 48.5, 146.795, "kN", 2);
        aircraft[2] = new JetAircraft("McDonnell Douglas", "MD-11", 128.8, 232.2, "kN", 3);
        aircraft[3] = new JetAircraft("Boeing", "757-300", 68.1, 43000, "lbf", 2);
        aircraft[4] = new GliderAircraft("Schempp-Hirth", "Ventus-3", 0.3, 22.0, 1, 46);
        aircraft[5] = new GliderAircraft("Schweizer", "SGS 2-33", 0.3, 22.0, 0 , 22);

        for(Aircraft a: aircraft){
            a.writeOutput();
            System.out.println();
        }

    }
}
