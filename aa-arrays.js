/*
Arrays:
- Arrays are like lists
- a JS global object
- used to store multiple values all within a single structure.
- can hold many types of data as a Composite Data Type:
  - strings
  - integers
  - and other arrays
- arrays can be empty EX: let empty = []
*/

/*
Using Arrays:
- wrapped in [] square brackets and store their comma separated values in sequential order.
- Arrays are a data structure
- Arrays are flexible:
  - put elements into an array
  - replace elements in an array
  - and remove elements from the array
*/

//EX:
let alphabet = [
  "a", "b", "c", "d", "e", "f",
  "g", "h", "i", "j", "k", "l",
  "m", "n", "o", "p", "q", "r",
  "s", "t", "u", "v", "w", "x",
  "y", "z"
];

/*
Indexing Arrays:
- Calculating the length of an array by using the .length property on array
*/

//EX:
console.log([4, 7, 9].length); // => 3
console.log([1, 2].length);    // => 2
console.log([].length);        // => 0

/*
Properly indexing an array:
- Stored in sequential order and the values are numbered by indices starting at 0.
- REMINDER: ARRAYS ALWAYS START AT INDEX OF 0, NOT 1
- To access a value in an array: array[index]
- Any non-existent values in the array you try to access, will return undefined
*/

//EX:
let numbersAndLetters = ["b", "z", 17, "cat"];
console.log(numbersAndLetters[0]); // => "b"
console.log(numbersAndLetters[1]); // => "z"
console.log(numbersAndLetters[2]); // => 17
console.log(numbersAndLetters[3]); // => "cat"

console.log(["a", "b", "c"][0]);   // => "a"
console.log(["a", "b", "c"][1]);   // => "b"
console.log(["a", "b", "c"][2]);   // => "c"
console.log(["a", "b", "c"][3]);   // => undefined
console.log(["a", "b", "c"][-1]);  // => undefined
console.log(["a", "b", "c"][0.5]); // => undefined

/*
The classic 'off by one' error:
- The index of the last value of an array is always one less than its length
- In other words, although the length of [4, 7, 9] is 3, the index of the last value (9) is 2.
- A good rule of thumb of accessing the last index of an array is to find the length and then subtract one:
*/

//EX:
let arr = [4, 7, 9];
console.log(arr.length);      // => 3
console.log(arr[arr.length]); // => undefined
console.log(arr[3]);          // => undefined
console.log(arr[2]);          // => 9

let arr1 = [4, 7, 9];
let lastIndex = arr.length - 1; // => (3 - 1) = 2
console.log(arr[lastIndex]);    // => 9

//WORKING WITH ARRAYS
/*
Containing data in arrays:
- Arrays don't have to just hold single characters- they are capable of holding entire strings, numbers, and even other arrays!
*/

//EX:
let wackyArray = [2, 17, "apple", "cat", ["apple"]];

console.log(wackyArray[0]); // => 2
console.log(wackyArray[1]); // => 17
console.log(wackyArray[3]); // => "cat"
console.log(wackyArray[4]); // => ["apple"]

/*
Replace elements in an array:
- reassign the element at a specific index in array
*/

//EX For example, in an array of [1, 2, 3], you can replace 1 with 4 by reassigning the element of an array at the index of 0.:
let arr2 = [1, 2, 3];
console.log(arr); // [1, 2, 1]
arr[0] = 4;
console.log(arr); // [4, 2, 1] // first element changed to 4

//Note: Although you can index into strings very similarly to arrays, do not attempt to do this with strings! It will not work:
let str = 'hello';
console.log(str); // 'hello'
str[0] = 'j'; // DON'T DO THIS
console.log(str); // 'hello' // did not change

/*
Using indexOf with arrays:
- Calculate the index of a given value within an array using indexOf
- If you attempt to search for a value that is not present in an array, indexOf will return -1.
- This makes sense because you know that -1 is not a valid array index. The smallest index possible is 0!
*/

//EX:
console.log([1, 3, 5, "apple", "jet"].indexOf(3));        // => 1
console.log([1, 3, 5, "apple", "jet"].indexOf(5));        // => 2
console.log([1, 3, 5, "apple", "jet"].indexOf("jet"));    // => 4

// this won't be found in the array
console.log([1, 3, 5, "apple", "jet"].indexOf("potato")); // => -1

/*
Concatenation with arrays:
- If you try to use the + on an array it will try to help you out by converting your arrays into strings.
- Use the .concat method to join arrays
*/

//EX:
console.log("hel" + "lo");          // => hello
console.log([1, 2, 3] + [4, 5, 6]); // => 1,2,34,5,6
console.log("1, 2, 3" + "4, 5, 6"); // => 1,2,34,5,6

console.log([1, 2, 3].concat([4, 5, 6])); // => [1, 2, 3, 4, 5, 6]
