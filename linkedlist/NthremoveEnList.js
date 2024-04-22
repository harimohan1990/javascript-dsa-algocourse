class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

function length(head) {
    let temp = head;
    let count = 0;
    while (temp != null) {
        count++;
        temp = temp.next;
    }
    return count;
}

function printList(head) {
    let ptr = head;
    while (ptr != null) {
        process.stdout.write(ptr.data + " ");
        ptr = ptr.next;
    }
    console.log();
}

function deleteNthNodeFromEnd(head, n) {
    let Length = length(head);
    let nodeFromBeginning = Length - n + 1;
    let prev = null;
    let temp = head;
    for (let i = 1; i < nodeFromBeginning; i++) {
        prev = temp;
        temp = temp.next;
    }
    if (prev == null) {
        head = head.next;
        return head;
    } else {
        prev.next = prev.next.next;
        return head;
    }
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log("Linked List before Deletion:");
printList(head);

head = deleteNthNodeFromEnd(head, 4);

console.log("Linked List after Deletion:");
printList(head);
