 /*
  Q- What is stacks ? 

  Ans- A collection of Data with last in first Out Structure.
  A last element added to the Structure will be first element to be removed from stacks 


  Q- Where Stacks are used ?

  Ans- Managing Function invocations
       undo and redo in keyboard 
       The history of Browser is a model of Execution Stacks

*/

// Creating the Stacks in array (Implementation)?

var stack = [];

// Adding elements to the Stack using push

stack.push = ('google')
stack.push = ('fb')
stack.push = ('youtube')

// Poping elements from the stack using pop

stack.pop()
stack.pop()
stack.pop()

// Adding elements to the stack using unshift.
stack.unshift = ('google')
stack.unshift = ('fb')
stack.unshift = ('youtube')

// poping elements from the stack using shift.

stack.shift()
stack.shift()
stack.shift()
stack.shift()


// pop — Pulls (removes) the element out of the stack. The location is specified by the pointer

// push — Pushes (inserts) the element in the stack. The location is specified by the pointer.

// peek — returns the item on the top of the stack, without removing it.

// empty — returns true if the stack is empty, false otherwise

// Writing on our own stack from scratch


class stacks {
    constructor() {
        this.arr = []
    }

  push(element) {
// push element into the array 
      this.arr.push(element)
  }



 pop() {  // Put conditionals to check if stack is empty if not than pop element ftom array

           if (this.arr.length == 0) {
               console.log('stack is empty')
           } else {
               return this.arr.push();
           }
 }


// Return element without removing it from the stack.
 peek() {
     return this.arr[this.items.length - 1]
 }

 // check element if it is empty

 isEmpty() {
     if(this.arr.length == 0) {
         return true
     } else {
         return false
     }
 }

 // search the elemt from array

search(element) {
    for (var i =0; i < this.arr.length; i++) {
        if (arr[i] == this.arr.element) {
            return 'found'
        } else {
            return 'not in stack'
        }
     }
}

// print all the element

traverse() {
   

    for(var i = 0; i < this.arr.length; i++) {
       console.log(this.items[i])
    }
}


}