package ca.ucalgary.cpsc331.a2;

public class RedBlackTree implements Dictionary {
    private Node root;
    private Node nil;

    public RedBlackTree() {
        nil = new Node(0);
        nil.red = false;
        nil.left = null;
        nil.right = null;
        root = nil;
    }

    // Interface Methods
    /** Checks to see if a given key is a member of the tree */
    public boolean member(int k) {
        Node node = root;
        while (node != nil){
            if (k == node.key){
                return true;
            }
            else if (k > node.key){
                node = node.right;
            }
            else{
                node = node.left;
            }
        }
        return false;
    }

    /** Checks if the tree is empty */
    public boolean empty() {
        return root == nil;
    }


    /** Inserts the given int key into the Red-Black Tree */
    public boolean insert(int k) {
        Node node = new Node(k);
        node.parent = null;
        node.key = k;
        node.left = nil;
        node.right = nil;
        node.red = true; // New node must be red

        Node y = null;
        Node x = this.root;

        while (x != nil) {
            y = x;
            if (node.key < x.key) {
                x = x.left;
            }
            else if (node.key > x.key) {
                x = x.right;
            }
            else {
                // Duplicate key, do not insert
                return false;
            }
        }

        node.parent = y;
        if (y == null) {
            root = node;
        } else if (node.key < y.key) {
            y.left = node;
        } else {
            y.right = node;
        }

        if (node.parent == null) {
            node.red = false;
        }

        if (node != root) {
            fixInsert(node);
        }

        return true;
    }

    // Red-Black Tree Maintenance Methods
    /** Restores the Red-Black property of the tree following insertion of a node as needed */
    private void fixInsert(Node k) {
        Node u;
        while (k.parent != null && k.parent.red) {
            if (k.parent == k.parent.parent.left) {
                u = k.parent.parent.right;

                if (u.red) {
                    u.red = false;
                    k.parent.red = false;
                    k.parent.parent.red = true;
                    k = k.parent.parent;
                }
                else {
                    if (k == k.parent.right) {
                        k = k.parent;
                        leftRotate(k);
                    }

                    k.parent.red = false;
                    k.parent.parent.red = true;
                    rightRotate(k.parent.parent);
                }
            } else {
                u = k.parent.parent.left;

                if (u.red) {
                    u.red = false;
                    k.parent.red = false;
                    k.parent.parent.red = true;
                    k = k.parent.parent;
                }
                else {
                    if (k == k.parent.left) {
                        k = k.parent;
                        rightRotate(k);
                    }

                    k.parent.red = false;
                    k.parent.parent.red = true;
                    leftRotate(k.parent.parent);
                }
            }

            if (k == root) {
                break;
            }
        }
        root.red = false;
    }

    /** Restores the Red-Black properties of the tree following deletion */
    private void fixDelete(Node x) {
        while (x != root && !x.red) {
            if (x == x.parent.left) {
                Node w = x.parent.right;

                if (w.red) {
                    w.red = false;
                    x.parent.red = true;
                    leftRotate(x.parent);
                    w = x.parent.right;
                }

                if (!w.left.red && !w.right.red) {
                    w.red = true;
                    x = x.parent;
                }
                else {
                    if (!w.right.red) {
                        w.left.red = false;
                        w.red = true;
                        rightRotate(w);
                        w = x.parent.right;
                    }

                    w.red = x.parent.red;
                    x.parent.red = false;
                    w.right.red = false;
                    leftRotate(x.parent);
                    x = root;
                }
            }
            else {
                Node w = x.parent.left;

                if (w.red) {
                    w.red = false;
                    x.parent.red = true;
                    rightRotate(x.parent);
                    w = x.parent.left;
                }

                if (!w.right.red && !w.left.red) {
                    w.red = true;
                    x = x.parent;
                }
                else {
                    if (!w.left.red) {
                        w.right.red = false;
                        w.red = true;
                        leftRotate(w);
                        w = x.parent.left;
                    }

                    w.red = x.parent.red;
                    x.parent.red = false;
                    w.left.red = false;
                    rightRotate(x.parent);
                    x = root;
                }
            }
        }
        x.red = false;
    }

    /** Performs a standard left rotation */
    private void leftRotate(Node x) {
        Node y = x.right;
        x.right = y.left;
        if (y.left != nil) {
            y.left.parent = x;
        }
        y.parent = x.parent;
        if (x.parent == null) {
            this.root = y;
        }
        else if (x == x.parent.left) {
            x.parent.left = y;
        }
        else {
            x.parent.right = y;
        }
        y.left = x;
        x.parent = y;
    }

    /** Performs a standard right rotation */
    private void rightRotate(Node y) {
        Node x = y.left;
        y.left = x.right;
        if (x.right != nil) {
            x.right.parent = y;
        }
        x.parent = y.parent;
        if (y.parent == null) {
            this.root = x;
        }
        else if (y == y.parent.right) {
            y.parent.right = x;
        }
        else {
            y.parent.left = x;
        }
        x.right = y;
        y.parent = x;
    }


    // Standard Binary Tree Operations
    /** Queries the tree for some desired node and returns all data of that node */
    private Node queryNode(int k) {
        Node node = root;
        if (node == nil || k == node.key) {
            return node;
        }
        while (node!= nil && k != node.key) {
            if (k < node.key) {
                node = node.left;
            } else node = node.right;
        }
        return node;
    }
    /** Deletes the given int key into the Red-Black Tree */
    public boolean delete(int k) {
        Node deleteNode = queryNode(k);

        if (deleteNode == nil) {
            return false;
        }

        Node y = deleteNode;
        Node x;
        boolean yOriginalColor = y.red;

        if (deleteNode.left == nil) {
            x = deleteNode.right;
            transplant(deleteNode, deleteNode.right);
        }
        else if (deleteNode.right == nil) {
            x = deleteNode.left;
            transplant(deleteNode, deleteNode.left);
        }
        else {
            y = minimum(deleteNode.right);
            yOriginalColor = y.red;
            x = y.right;

            if (y.parent == deleteNode) {
                x.parent = y;
            }
            else {
                transplant(y, y.right);
                y.right = deleteNode.right;
                y.right.parent = y;
            }

            transplant(deleteNode, y);
            y.left = deleteNode.left;
            y.left.parent = y;
            y.red = deleteNode.red;
        }

        if (!yOriginalColor) {
            fixDelete(x);
        }
        return true;
    }

    /** Finds the minimum node of the tree */
    private Node minimum(Node node) {
        while (node.left != nil) {
            node = node.left;
        }
        return node;
    }

    /** Transplant method */

    private void transplant(Node u, Node v) {
        if (u.parent == null) {
            root = v;
        }
        else if (u == u.parent.left) {
            u.parent.left = v;
        }
        else {
            u.parent.right = v;
        }
        v.parent = u.parent;
    }

    // ToString
    /** Converts the Red-Black tree into a printable String with a specific preorder walk format */
    public String toString() {
        String treeString = "";
        if (empty()) return treeString;

        treeString = address(root) + ":" + colourString(root) + ":" + root.key + "\n";

        if (root.left != nil && root.right != nil) {
            treeString = treeString + insideToString(root.left)
                    + insideToString(root.right);
        }
        else if (root.left != nil ) {
            treeString = treeString + insideToString(root.left);
        }
        else if (root.right != nil) {
            treeString = treeString + insideToString(root.right);
        }
        return treeString;
    }

    /** Helper method for toString that can recursively concatenate more nodes to the String
     * required for recursion if toString doesn't take arguments*/
    public String insideToString(Node node){

        String insideTreeString = "";

        insideTreeString = insideTreeString + address(node) + ":" + colourString(node) + ":" + node.key + "\n";

        if (node.left != nil && node.right != nil) {
            insideTreeString = insideTreeString + insideToString(node.left)
                    + insideToString(node.right);
        }
        else if(node.left != nil) {
            insideTreeString = insideTreeString + insideToString(node.left);
        }
        else if (node.right != nil) {
            insideTreeString = insideTreeString + insideToString(node.right);
        }
        else return insideTreeString;
        return insideTreeString;
    }

    /** Returns a String value representing the colour of a given node*/
    public String colourString(Node node){
        if (node.red){
            return "red";
        }
        else return "black";
    }

    /** Returns a String value representing the address of a given node*/
    public String address(Node node){
        if (node.parent != null) {
            if (node == node.parent.right) {
                return address(node.parent) + "R";
            }
            else if (node == node.parent.left) {
                return address(node.parent) + "L";
            }
        }
        if (node.parent == null ) {
            return "*";
        }
        return "";
    }

//    public static void main(String[] args){
//        RedBlackTree rbt = new RedBlackTree();
//        rbt.insert(60);
//        rbt.insert(0);
//        rbt.insert(47);
//        rbt.insert(56);
//        rbt.insert(2);
//        rbt.insert(12);
//        System.out.println(rbt.toString());
//        rbt.delete(56);
//        rbt.delete(2);
//        rbt.delete(12);
//        System.out.println(rbt.member(60));
//        System.out.println(rbt.toString());
//
//    }
}