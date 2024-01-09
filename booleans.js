/*
Booleans are another type of value
      - there are only 2 boolean values: true, false

      What is the purpose of booleans?
      A boolean value represents whether something is true or false

      Syntax Rule: just true or false, no ''

      Comparison Operators:
      > greater than
      < less than
      >= greater than or equal to
      <= less than or equal to
      === equal to
      '!== not equal to' -> quotes on these because syntax error on !==
      • Comparison operators are second-lowest priority in the order of operations:
        1. (...)
        2. * /
        3. + -
        4. Comparison operators

      If-Statements
      - lets us write multiple groups of code
      - and then decide which code to run
      - Syntax Rules:
        if (in here is called the condition){
          in here is called branches}
      - else-if statement adds another condition
      - IF-statements creates SCOPE within the curly brackets:
          • Limits where a variable exists
          • any variables created between {...}, only exists between the (...)
          • To combat scope, we need to create or call a variable outside the {...}

      Else-Statements
      - If within () statement results in a boolean value 'true' then the preceding code in the {} will work
      - If within () statement results in a boolean value 'false' then the computer will skip the preceding code in the {} and run the else code within the {}. If there is no else statement, then the computer will not show anything.
/
      Logical Operators:
      - Lets us combine boolean values
      AND Operator && (Checks if both booleans are true, if both are not true, will result in false)
      OR Operator || (Checks if either booleans is true, if its false || false, console will result in false)
      NOT Operator ! (Only uses 1 boolean value and flips it to opposite value)

      • Logical operators are lowest priority in the order of operations:
        1. (...)
        2. * /
        3. + -
        4. Comparison operators
        5. Logical operators
/
      Truthy and Falsy Values
      - Falsy Values are:
          • false
          • 0
          • ''
          • NaN (Not a Number)
          • undefined (Something doesn't have a value)
          • null
      - Any values other than above are Truthy Values
*/

 ///Booleans

 true;
 false;

 ///Comparison Operators

 console.log(3 > 5 - 5);

 console.log(5 === "5.00"); // double = converts both values into the same type. === won't convert them into the same type

 ///If-Else Statements

 if (false) {
   console.log("hello");
 } else {
   console.log("else");
 }

 const age = 15; // using variables in the if-else statements

 if (age >= 16) {
   console.log("You can drive");
   console.log("Congrats");
 } else if (age >= 14) {
   console.log("Almost there");
 } else {
   console.log("You can not drive");
 }

 /// Logical Operators

 console.log(true && false);
 console.log(0.2 >= 0 && 0.2 < 1 / 3);

 console.log(true || false);
 console.log(!false);

 /// Truthy and Falsy Values

 if (0) {
   console.log("truthy");
 }

 const cartQuantity = 5;
 /*
 cartQuantity = 5
 - cartQuantity > 0 => true
 - cartQuantity     => truthy

 cartQuantity = 0
 - cartQuantity > 0 => false
 - cartQuantity     => falsy
 */
 if (cartQuantity) {
   console.log("cart has products");
 }

 console.log(!0); //Logical operators can be used with truthy and falsy values

 console.log("text" / 5); //NaN

 let variable1;
 console.log(variable1); //undefined

 ///Shortcuts for If-Statements

 //Ternary Operator ? :
 const result1 = true ? "truthy" : "falsy";
 console.log(result1); // result in truthy
 const result = 0 ? "truthy" : "falsy";
 console.log(result); // result in falsy

 /* true (condition) ? 'truthy' : 'falsy'

 - ? is the if branch
 - : else branch

 - Advantage over if-else is that ternary operators can be saved in a variable
 - Ternary Operator acts similar to if-else statement

 Short-cut for an if statement:
 let result;

 if (condition) {
   result = 'truthy';
 } else {
   result = 'falsy';
 }
 */

 //Guard Operator &&
 false && console.log("hello");

 const message1 = false && "hello";
 console.log(message1); // result in false
 const message = 5 && "hello";
 console.log(message); // result in truth showing string 'hello'
 /* in the AND Operator, if the first value is false, it's impossible for both sides to be truthy.
 Stops code early and doesn't need to run code on the right.

 This is called the SHORT-CIRCUIT EVALUATION.

 As a result, we can use the code on the left to GUARD to code on the right.
 This is a GUARD Operator

 - Guard operators can be saved in a variable as well

 Short-cut for an if-statement:
 let message;

 if (condition) {
   message = 'hello'
 }
 */

 //Default Operator ||
 const currency1 = "EUR" || "USD";
 console.log(currency1); // truth which results in EUR
 const currency = undefined || "USD";
 console.log(currency); // falsey which results in USD
 /* in the OR Operator, if the first value is true, the code SHORT-CIRCUITS.
 - As a result of this, this operator is called the Default Operator

 Short-cut for an if statement:
 let currency;

 if(!condition) {
   currency = 'USD'
 }
 */
