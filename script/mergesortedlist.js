const list1 = [1,2,4]
const list2 = [1,3,4]




var mergeTwoLists = function(list1, list2) {
    let res = new ListNode();
    let head = res;
	
	// Compare nodes from lists until one of them is finished
    while(list1 != null && list2 != null)
    {
        if(list1.val < list2.val)
        {
            head.next = list1;
            list1 = list1.next;
        }
        else{
            head.next = list2;
            list2 = list2.next;
        }
        head = head.next;
    }
	
	// Add non-finished list elements
    while(list1 != null)
    {
        head.next = list1;
        list1 = list1.next;
        head = head.next;
    }
    while(list2 != null)
    {
        head.next = list2;
        list2 = list2.next;
        head = head.next;
    }
    console.log(res.next)
    return res.next;
    
};