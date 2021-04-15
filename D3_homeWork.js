/* EXERCISE 1
Create an array containing the first 5 positive numbers.
*/
let positiveNumbers = [1, 2, 3, 4, 5];

/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/
let striveStudent = {
  name: "Samuel Obeng",
  surname: "Obeng",
  email_address: "samuelobeng2006@gmail.com",
  age: 28,
};

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license.
*/

striveStudent["License"] = true;
console.log(striveStudent);

/* EXERCISE 4
Remove from the previously created object the age property.
*/
delete striveStudent.age;

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address than the previous one.
*/

let striveStudent2 = {
  name: "David",
  surname: "Obeng",
  email_address: "nanaland2006@gmail.com",
};
console.log(striveStudent["email_address"] !== striveStudent2["email_address"]);

/* EXERCISE 6
You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
Write an algorithm that calculates the total cost to charge the user with.
*/
// 1. totalShoppingCart = total Amount spent by the current user
// 2. if totalShoppingCart > 50, then current user enjoys free shipping else
// 3. Else the shippingCost is 10

let totalShoppingCart = 100;
if (totalShoppingCart > 50) {
  console.log("You'r eligible for free shipping");
} else {
  console.log("You'r eligible for free shipping");
}

/* EXERCISE 7
You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/
let blackFriday = 20 / 100;
totalShoppingCart =  totalShoppingCart - (blackFriday * totalShoppingCart);
if (totalShoppingCart > 50) {
  console.log(totalShoppingCart);
  console.log("You'r eligible for free shipping");
} else {
  console.log("You'r eligible for free shipping");
}

/* EXERCISE 8
Create an object representing a car with properties like brand, model, licensePlate.
After you create the first car, clone it 5 times and change the licensePlate for each cloned car without affecting the original one.
*/
let car = {
  brand: "Toyota", 
  model:"Camery", 
  licensePlate: "AS 192-21"
}
let car2 = Object.assign({}, car);
let car3 = Object.assign({}, car);
let car4 = Object.assign({}, car);
let car5 = Object.assign({}, car);
let car6 = Object.assign({}, car);
car2["licensePlate"] = "KL 283-22";
car3["licensePlate"] = "KL 283-23";
car4["licensePlate"] = "KL 283-24";
car5["licensePlate"] = "KL 283-25";
car6["licensePlate"] = "KL 283-26";

/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise.
*/
let carsForRent = [{car2},{car3},{car4},{car5},{car6}];
console.log(carsForRent);

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/
carsForRent.shift();
carsForRent.pop();

/* EXERCISE 11
Print in the console the TYPES of the car variable, of its licensePlate and of the its brand properties.
*/

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in a variable totalCars the number of cars present in both carsForSale and carsForRent arrays.
*/
let carsForSale = ["BMW","Toyota","Benz"];
let totalCars = carsForSale.length + carsForRent.length;
console.log(totalCars);

/* EXERCISE 13
Print in the console the data from each car in the carsForSale array.
*/
for(let i = 0; i<carsForSale.length; i++){
  console.log(carsForSale[i]);
}