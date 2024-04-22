

/* JavaScript program to check if
linked list is palindrome recursively */

    class Node {
        constructor(val) {
            this.data = val;
            this.ptr = null;
        }
    }
    
var one = new Node(1);
var two = new Node(2);
var three = new Node(3);
var four = new Node(4);
var five = new Node(3);
var six = new Node(2);
var seven = new Node(1);
        one.ptr = two;
        two.ptr = three;
        three.ptr = four;
        four.ptr = five;
        five.ptr = six;
        six.ptr = seven;
        var condition = isPalindrome(one);
        document.write("isPalidrome: " + condition);
    

    function isPalindrome(head) {

var slow = head;
        var ispalin = true;
        var stack = [];

        while (slow != null) {
            stack.push(slow.data);
            slow = slow.ptr;
        }

        while (head != null) {

            var i = stack.pop();
            if (head.data == i) {
                ispalin = true;
            } else {
                ispalin = false;
                break;
            }
            head = head.ptr;
        }
        return ispalin;
    }




