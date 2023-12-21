package RecursionExamples;

public class MyClass {
    
    public static int fact(int n){
        if(n == 0) return 1;
        else return n * fact(n - 1);
    }

    public static int fibonacci(int n){
        if(n == 0) return 0;
        if(n == 1) return 1;
        else return fibonacci(n - 1) + fibonacci(n - 2);        
    }

    public static boolean palindrome(String s){
        if (s.length() < 2) return true;
        else{
            return s.charAt(0) == s.charAt(s.length() - 1) &&
            palindrome(s.substring(1, s.length() - 1));
        }
    }

    public static int recurse(String str, char c){
        if(str.length() == 0) return -1;
        if(str.charAt(0) == c) return 0;

        int temp = recurse(str.substring(1), c);

        if(temp ==-1) return temp;
        return temp + 1;
    }

    public static void main(String[] args){
        System.out.println("5! = " + fact(5));
        System.out.println("fib(7) = " + fibonacci(7));
        System.out.println("It is " + palindrome("AABCCCCBAA") + " that AABCCCCBAA is a palindrome");   
        System.out.println("The index of the character 'e' in the string 'charter' is " + recurse("charter", 'e'));             
    }
}
