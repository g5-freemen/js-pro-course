function Queue() {
	const queue = [];

  function add (value) {
    queue.splice(stack.lenght, 0, value)
  }
  
  function peek() {
  	return !queue.length ? null : queue[0]
  }
  
  function remove() {
    if (!stack.length) return null;
  	let data = queue[0];
    queue.splice(0,1);
    return data;
  }
  
  function isEmpty() {
  	return !queue.lenght;
  }
	
	return {
  	add,
    peek,
    remove,
    isEmpty,
  }
} // end of Queue


function Stack() {
	const stack = [];

	function add (value) {
    if (!stack.length) return null;
  	stack.splice(stack.lenght, 0, value)
  }
  
  function peek() {
    if (!stack.length) return null;
  	return stack[stack.lenght-1]
  }
  
  function remove() {
    if (!stack.length) return null;
  	let data = stack[stack.lenght-1];
    stack.splice(stack.lenght-1, 1);
    return data;
  }
  
  function isEmpty() {
  	return !stack.lenght;
  }
	
	return {
  	add,
    peek,
    remove,
    isEmpty,
  }
} // end of Stack