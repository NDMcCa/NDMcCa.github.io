package ca.ucalgary.cpsc331.a3;

public class HashTable implements Dictionary {
    private int size;
    private String[] tableArray;

    private final String DELETED = "deleted";
    public HashTable() {
        this.tableArray = new String[17];
        this.size = 0;
    }

    // Dictionary Interface Methods

    /** Checks to see if the HashTable is full */
    public boolean full() {
        return size == 17;
    }

    /** Checks membership */
    public boolean member(String k) {
        int hashIndex = hash(k);
        while (tableArray[hashIndex] != null) {
            if (tableArray[hashIndex].equals(k)) return true;
            if(hashIndex < 16) hashIndex = (hashIndex + 1) % tableArray.length;
            else return false;
        }
        return false;
    }

    /** Inserts something */
    public boolean insert(String k) {
        if (full()) {
            throw new RuntimeException("Sorry the Hash Table is full");
        }
        int hashIndex = hash(k);
        while (tableArray[hashIndex] != null && !tableArray[hashIndex].equals(k) && !tableArray[hashIndex].equals(DELETED)) {
            if(hashIndex < 16) hashIndex = (hashIndex + 1) % tableArray.length;
            else return false;
        }

        tableArray[hashIndex] = k;
        size++;
        return true;
    }

    /** Deletes something by replacing what is stored in the slot with the string "deleted" */
    public boolean delete(String k) {
        int hashIndex = hash(k);
        while (tableArray[hashIndex] != null) {
            if (tableArray[hashIndex].equals(k)) {
                tableArray[hashIndex] = DELETED;
                size--;
                return true;
            }
            if(hashIndex < 16) hashIndex = (hashIndex + 1) % tableArray.length;
            else return false;
        }
        return false;
    }


    // HashTable Methods
   /** A function that calls java.lang.String.hashCode() on k and applies <i>mod</i> tableArray.length */
    public int hash(String k){
        return k.hashCode() % tableArray.length;
    }

    // toString
    /** toString override that will produce the expected format */
    public String toString() {
        String hashString = "";
        for (int i = 0; i < tableArray.length; i++){
            if (tableArray[i] != null){
                if(tableArray[i].equals(DELETED)){
                    hashString += Integer.toString(i)+":"+DELETED+"\n";
                } else {
                    hashString += Integer.toString(i)+":\""+tableArray[i]+"\"\n";
                }
            }
        }
        return hashString;
    }
}


