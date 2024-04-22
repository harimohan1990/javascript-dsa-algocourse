// JS code for finding intersection point
class Node {
    constructor(d) {
        this.data = d;
        this.next = null;
    }
}

function getIntesectionNode(head1, head2) {
    while (head2) {
        let temp = head1;
        while (temp) {
            if (temp == head2) {
                return head2;
            }
            temp = temp.next;
        }
        head2 = head2.next;
    }
    return null;
}

let newNode = new Node();

let head1 = new Node();
head1.data = 10;


let head2 = new Node();
head2.data = 3;

newNode = new Node();
newNode.data = 6;
head2.next = newNode;

newNode = new Node();
newNode.data = 9;
head2.next.next = newNode;

newNode = new Node();
newNode.data = 15;
head1.next = newNode;
head2.next.next.next = newNode;

newNode = new Node();
newNode.data = 30;
head1.next.next = newNode;

head1.next.next.next = null;

let intersectionPoint = getIntesectionNode(head1, head2);

if (!intersectionPoint)
    console.log(" No Intersection Point");
else
    console.log("Intersection Point: ", intersectionPoint.data);


// This code is contributed by adityamaharshi21
