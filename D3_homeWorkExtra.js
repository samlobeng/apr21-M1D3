/* EXERCISE 1
Write the code to revert an array.
es:
[1, 3, 5] ==> [5, 3, 1]
*/
let arr = [1, 2, 3, 4, 5, 10];
console.log(arr.reverse());

/* EXERCISE 2
Write the code to get the maximum value in an array.
*/
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > arr[i + 1]) {
    console.log(arr[i] + " is the maximum");
    break;
  }
}

/* EXERCISE 3
Write the code to get the minimum value in an array.
*/
console.log(Math.min.apply(Math, arr));

/* EXERCISE 4
Write the code to get only even numerical values in an array.
*/
for (let j = 0; j <= arr.length; j++) {
  if (arr[j] % 2 == 0) {
    console.log(arr[j]);
  }
}

/* EXERCISE 5
Write the code to delete even entries from an array.
*/
for (let y = 0; y <= arr.length; y++) {
  if ((arr[y] % 2) !== 0) {
    console.log(arr.splice(y,1))
  }
}

/* EXERCISE 6
Write the code to remove all the vowels from a string.
*/

/* EXERCISE 7
Write the code to increase all the numeric values in a array by 1.
*/

