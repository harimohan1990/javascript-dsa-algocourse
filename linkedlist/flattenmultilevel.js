// Javascript Program to flatten list with next and child pointers 

	// A linked list node has data, 
	// next pointer and child pointer 
	class Node { 
        constructor() { 
            this.data; 
            this.next; 
            this.child; 
        } 
        } 
    
        // A utility function to create a linked list 
        // with n nodes. The data of nodes is taken 
        // from arr[]. All child pointers are set as null 
        function createList(arr, n) { 
        head = null; 
        var p; 
    
        let i; 
        for (i = 0; i < n; ++i) { 
            if (head == null) head = p = new Node(); 
            else { 
            p.next = new Node(); 
            p = p.next; 
            } 
            p.data = arr[i]; 
            p.next = p.child = null; 
        } 
        return head; 
        } 
    
        // A utility function to print 
        // all nodes of a linked list 
        function printList(head) { 
        while (head != null) { 
            console.log(head.data + " "); 
            head = head.next; 
        } 
        } 
    
        // This function creates the input 
        // list. The created list is same 
        // as shown in the above figure 
        function createsList() { 
        arr1 = [10, 5, 12, 7, 11]; 
        arr2 = [4, 20, 13]; 
        arr3 = [17, 6]; 
        arr4 = [9, 8]; 
        arr5 = [19, 15]; 
        arr6 = [2]; 
        arr7 = [16]; 
        arr8 = [3]; 
    
        /* create 8 linked lists */
        head1 = createList(arr1, arr1.length); 
        head2 = createList(arr2, arr2.length); 
        head3 = createList(arr3, arr3.length); 
        head4 = createList(arr4, arr4.length); 
        head5 = createList(arr5, arr5.length); 
        head6 = createList(arr6, arr6.length); 
        head7 = createList(arr7, arr7.length); 
        head8 = createList(arr8, arr8.length); 
    
        /* modify child pointers to 
            create the list shown above */
        head1.child = head2; 
        head1.next.next.next.child = head3; 
        head3.child = head4; 
        head4.child = head5; 
        head2.next.child = head6; 
        head2.next.next.child = head7; 
        head7.child = head8; 
    
        /* Return head pointer of first 
            linked list. Note that all nodes are 
            reachable from head1 */
        return head1; 
        } 
    
        /* The main function that flattens 
        a multilevel linked list */
        function flattenList(head) { 
        /*Base case*/
        if (head == null) return; 
    
        var tmp; 
    
        /* Find tail node of first level linked list */
        tail = head; 
        while (tail.next != null) tail = tail.next; 
    
        // One by one traverse through all nodes of first level 
        // linked list till we reach the tail node 
        cur = head; 
        while (cur != tail) { 
            // If current node has a child 
            if (cur.child) { 
            // then append the child at the end of current list 
            tail.next = cur.child; 
    
            // and update the tail to new last node 
            tmp = cur.child; 
            while (tmp.next) tmp = tmp.next; 
            tail = tmp; 
            } 
    
            // Change current node 
            cur = cur.next; 
        } 
        } 
    
        // Driver code 
    
        head = null; 
        head = createsList(); 
        flattenList(head); 
        printList(head);
    