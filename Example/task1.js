/*

Below are **8 new real-life scenario-based JavaScript array examples** using `push()`, `pop()`, `shift()`, `unshift()`, and `splice()`.

### 1. Shopping Cart

* Create an array `cart` with products `['Laptop', 'Mouse', 'Keyboard']`.
* Use `push()` to add `'Monitor'` to the cart.
* Use `pop()` to remove the last product.
* Print the cart after each operation.*/

// var cart=['Laptop', 'Mouse', 'Keyboard'];
// cart.push('Monitor');
// console.log(cart);

// cart.pop();
// console.log(cart);


/* ### 2. Hospital Patient Queue

* Create an empty array `patients`.
* Use `push()` to add patients `'Rahul'`, `'Priya'`, and `'Amit'`.
* Use `shift()` to remove patients one by one as they are treated.
* Print the queue after each operation.*/


// var patients=[];

// patients.push('Rahul');
// console.log(patients);
// patients.push('Priya');
// console.log(patients);
// patients.push('Amit');
// console.log(patients);
// patients.shift();
// console.log(patients);
// patients.shift();
// console.log(patients);
// patients.shift();
// console.log(patients);


/*### 3. Browser History

* Create an array `history` with `['Google', 'YouTube', 'GitHub']`.
* Use `push()` to add `'ChatGPT'` to the history.
* Use `pop()` to remove the most recently visited page.
* Print the history after each operation.*/

// var historys=['Google', 'YouTube', 'GitHub'];
// console.log(historys);
// historys.push('ChatGPT');
// console.log(historys);
// historys.pop();
// console.log(historys);




/*### 4. Restaurant Order System

* Create an array `orders` with `['Pizza', 'Burger']`.
* Use `unshift()` to add `'Pasta'` as a priority order at the beginning.
* Use `shift()` to remove the first order after it is prepared.
* Print the orders after each operation.*/

// var orders=['Pizza', 'Burger'];
// console.log(orders);
// orders.unshift('Pasta');
// console.log(orders);
// orders.shift();
// console.log(orders);



/*### 5. Music Playlist

* Create an array `playlist` with `['Song A', 'Song B', 'Song C']`.
* Use `push()` to add `'Song D'`.
* Use `unshift()` to add `'Favorite Song'` at the beginning.
* Use `pop()` to remove the last song.
* Print the playlist after each operation.*/

// var playlist=['Song A', 'Song B', 'Song C'];
// console.log(playlist);
// playlist.push('Song D');
// console.log(playlist);
// playlist.unshift('Favorite Song');
// console.log(playlist);
// playlist.pop();
// console.log(playlist);


/*### 6. Employee Attendance

* Create an array `employees` with `['Raj', 'Amit', 'Neha', 'Priya']`.
* Use `push()` to add a new employee `'Karan'`.
* Use `splice()` to remove `'Neha'` from the array.
* Print the employee list after each operation.*/


// var employees = ['Raj', 'Amit', 'Neha', 'Priya'];

// employees.push('Karan');
// console.log(employees);
// employees.splice(2,1);
// console.log(employees);



/*### 7. Bus Passenger Management

* Create an array `passengers` with `['Rahul', 'Jay', 'Vivek']`.
* Use `push()` to add `'Aman'` when a passenger boards.
* Use `shift()` to remove the first passenger when they leave the bus.
* Use `unshift()` to add `'Riya'` at the front.
* Print the passengers after each operation.*/


// var passengers=['Rahul', 'Jay', 'Vivek'];
// passengers.push('Aman');
// console.log(passengers);
// passengers.shift();
// console.log(passengers);
// passengers.unshift('Riya');
// console.log(passengers);




/*### 8. Remove Product from Inventory

* Create an array `products` with `['Mobile', 'Laptop', 'Tablet', 'Headphone', 'Camera']`.
* Use `splice()` to remove `'Tablet'` from the inventory.
* Add `'Smart Watch'` using `push()`.
* Add `'Printer'` at the beginning using `unshift()`.
* Print the inventory after each operation.
*/

var products=['Mobile', 'Laptop', 'Tablet', 'Headphone', 'Camera'];
console.log(products);
products.splice(2,1);
console.log(products);
products.push('Smart Watch');
console.log(products);
products.unshift('Printer');
console.log(products);