
/*

  Intro to JavaScript

  What is Javascript?
    * JavaScript is a programming language that was originally developed to increase user interactivity with websites, and has grown to become a useful programming language in the backend of applications as well. JavaScript is now one of the most popular and widely used programming languages for building web applications today.

  Why is javascript so useful?
    * Perform asynchronous task
    * Render dynamic content
    * Enables more responsive, performant websites
    * Integrates seamlessly with two core languages of web development, HTML and CSS

   * We want to learn JavaScript!

  What is learning?
    * 1. Learning new skills and being able to apply them in the future
    * 2. Retaining useful information

  Active vs Passive Learning
    * Active learning  - lets you engage, get hands on!
    * Passive learning -  watching not applying

  We will be doing both!

  * Passive followed by active learning!
  * Lecture followed by self practice

  Desirable difficulty
    * it's challenging, but not discouraging
    * Possible given proper skill level
    * Hard but not too hard
    * But also not easy
    * Find a Happy Medium

  Spaced Repetition
    * Repeating concepts with time between
    * Rest your brain
    * Pomodoro Method

  What is debugging?
    * Figuring out what is wrong with the code
    * Identifying and solving an error

  How do we debug?
    * console.log() - show them on mdn
    * if you want to see something on the screen use a console.log
    * debugger
    * go line by line
    * developer tools
    * error messages
    * trial and error

  How to style/format?
    * Style Guide
    * https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript

  Whats the deal with semicolons?
    * JS Automatic semicolon insertion
    * semicolons Js doesn't strictly need semi colons because its smart, it uses something called automatic semicolon insertion, But it is best practice to use them for finishing statements
    * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion


  * Comments
  Why do we use comments?
    * explain what your code is doing
    * creating a plan using polya's framework!
    * notes

  * Console.logs
  When do we use a console.log?
    * When we want to see something in the terminal


*/

//comments - single line comment
//you can use this command (cmd +)

/*
this
a
multi line
comment
*/

//console.logs
// we use to see something in terminal
//console.log('hello world');

let string = 'hello world';
let sentence = 'a really long sentence'
console.log('a really long sentence')
console.log('a really long sentence')
console.log('a really long sentence')
//use variables to save typing
console.log(string);


/*

  Numbers and Booleans!
  * Use numbers to run math, calculate values, represent an amount

  Numbers!
    * whole numbers
    * decimals
    * negative numbers
    * few other special cases

  What is PEMDAS?
    * Order of operations
    * parentheses, exponents, multiplication, modulo, division, addition, subtraction

    * Unlike many other programming languages, JavaScript does not define different types of numbers, like integers, short, long, floating-point etc.
    * JavaScript numbers are always stored as double precision floating point numbers, following the international IEEE 754 standard.
    * A number literal like 37 in JavaScript code is a floating-point value, not an integer.
    * There is no separate integer type in common everyday use. (JavaScript also has a BigInt type, but it's not designed to replace Number for everyday uses. 37 is still a number, not a BigInt.)
    * The JavaScript Number type is a double-precision 64-bit binary format IEEE 754

*/


console.log(2 + 4 * 3);// 14
console.log(12 - 6 - 2);// 4
console.log((3 + 2) - 1);// 4
console.log(1.11 + 4);// 5.11
// modulo
console.log(13 % 5);// 3
// how many times does 5 go into 13 and whats the remainder - 3
console.log(5 % 13);// 5

if(10 % 2 === 0) {
  console.log('is even');
}

// null and undefined
let name;
console.log(name)//undefined

console.log(null + 12)//12
console.log(null && true); //null
//null is treated as zero

console.log(10**2); //100 (Exponentiation Operator)


/*

  Booleans
    * Booleans can be used to represent true and false
    * We can perform actions based on true/false

  Logical operators
    ! - not (bang)
    && - and
    || - or

  Order of operators
    * not, and, or

    * Logical operators return a boolean

*/

// console.log(false);// false
// console.log(!true);// false
// console.log(true || false);// true
// console.log(true && false);// false

// DeMorgan's Law
// !(A && B) => !A || !B
// !(A || B) => !A && !B
// * distribute the sign, and flip the symbol
// console.log(!true || !false);// true
// console.log(!(true && false));//true

//short circuiting
// console.log(true && 12)// 12
// console.log(false || 12)// 12


let a = true;
let b = false;

// console.log(a || b);
// true || false


/*

  Comparison Operators
  * used to compare values, to perform an action

  What are the comparison operators?
    * <, <=, ==, ===, >=, >

  What do they return?
     * A boolean

    < - less than
    > - greater than
    == - loose equality
    === - strict equality
    <= - less than equal too
    >= - greater than equal too

*/
// predict the output?
console.log(2 < 3);// true
console.log(3 > 12);// false
console.log(23 === '23');// false
console.log(23 == '23');// true
console.log(23 === 23);// true


// console.log(10 === 10);// true
// strict equality - ===
// checking both the value and the data type
// value - 10 datatype - number === value - 10 datatype - number

// console.log(10 === '10');// false
// checking both the value and the data type
// value - 10 datatype - number === value - 10 datatype - string

// console.log(10 == '10');// true
// checks the value does not check data type
// value 10 == value 10

//check data type using typeof

// console.log(typeof 10);// number
// console.log(typeof '10');// string
// console.log(10 * '10');// 1010


// console.log(10 + Number('10'));// 20
// console.log('hey' * 2);// NaN
// console.log('+' - '/');


let expression = 2 + 3 + 17
/*

  Variables!
    * A variable is a named reference to a value.
    * That way an unpredictable value can be accessed through a predetermined name.
    * Can be used to store the result of an expression
    * Think of it like placing an item in a box

  Value could be
    * string
    * numbers
    * boolean
    * function
    * and more!

  Variable naming guide
    * https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript

  Variable initialization
    * both declaring and assignment
  Variable declaration
    * declaring the variable
  Variable assignment
    * assigning a value to a variable

  = - is the assignment operator
  * Used to assign and save a value to a variable

  When should you use a variable?
  * When you want to alias data through a specific name
  * Make code more readable
  Cons
  * Uses up the global name space; decide if we want to do that or not

  If we don't assign a variable a value it will default to undefined.

*/


// Variable declaration
// * declaring the variable
let variableName;

// Variable assignment
// * assigning a value to a variable
variableName = 'hello';

// Variable initialization
// * both declaring and assignment
let variableName2 = 'hello2';

// use the let keyword,
// * followed by variable name,
// * then assignment operator - =
// * then the value to assign to the variable
// * we can store many data types in a variable

let firstName = 'brandon';
let age = 27;
let isSoftwareEngineer = true;
let myFunc = function() {};
let arrowFunc = () => {};

//find what is to the right if the equal sign
// console.log(firstName, age, isSoftwareEngineer, myFunc);
//'brandon' 27 true  [Function: myFunc]


// we can store expressions as well
let math = 1 + 2 + 3;
// console.log('LOOOK HERE =====>',math);

let sentence1 = 'hey ' + 'dude';
// console.log(sentence);// hey dude


//variable reassignment
let num = 0;
// console.log('before',num)

num = 100;
// console.log('after',num);


//Assignment shorthand
let number = 0;
number++;

console.log(number);// 1

number += 1;
console.log(number);// 2

number = number + 1;
console.log(number);// 3

number + 1;
console.log(number);// 3

number += 1;
console.log(number);// 4

console.log(number + 1);// 5
console.log(number)// 4

console.log(typeof (number + '1'));// string

/*
+
-
*
=
*/

let ten = 10;
let two = 2;
let expression7 = (ten % 6) * two - 3;

console.log('=>',expression7);// 5

let expression8 = ('ten' % 6) * 'two' - 3;
console.log(expression8);// NaN


// console.log('100')
// console.log(+'100')

console.log('12' + 4);// 124 - string
let result = '12' + 4;
console.log(+result);// 124 - number
//type casted number into a string

console.log(null + +'10');
console.log(Number('10'))

let num1 = 10;
num1 + 10;
console.log('string',12, true, () => {}, num1);
// string 12 true [Function (anonymous)] 10
