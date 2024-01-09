/*
      What is a function?
      - A function lets us reuse code
      - to call a function, we type in the function name.
        • This allows us to continually call the function and reuse it over and over again.
        • Can help with get rid of duplications inside of code and make it easier to update code.

      Synatx Rules for a FUNCTION:
      function -> Creates a new function function1 -> function name (argument/parameter){
        console.log('hello');
        console.log(2 + 2);
        INSIDE  THE BRACKETS ARE THE CODE WE WANT TO RUN CALLED: FUNCTION BODY
      }

      Rules for function names:
      1. Can't use special words (EX: function)
      2. Can't start with a number
      3. Can't use special character except: & _
      Best practice = use camelCase
      - Use a verb/action when naming function

      2 SOLUTIONS to call outside the scope of FUNCTIONS:

      - Return Statement (Preferred method)
        • Let's us get a value OUT of a function
        • Return Function can be called when calling a function, giving it a value out of the specific function.
        • When using a return statement, it ends the function immediately.
          - EX: return 'rock'
                console.log('after') -> this code won't run

        SYNTAX RULES for Return Statement:
        • Just type the word 'return' and then a value.
          EX: return 'rock (RETURN VALUE)';
          - If a value is not added, it will return a undefined value
          - It will get a value out of the function
        • Can return a calculation, variable, or anything that will result in a value

      - Global variable: Variable called outside of scope of the function or in general i.e placing let computerMove ='' outside of the function.

      BEST PRACTICE  to keep VARIABLES inside a scope (if we can)

      PARAMETERS:
      - Puts a value INTO a function
      - Works the same way as a variable, save a value inside the parameter and then use it just like a variable.
      - Parameters only exist within the function's scope.
      - Function can have more than one parameter

      SYNTAX RULES for PARAMETERS:
      • To create parameters, type the parameter name in between the brackets
      1. Can't use special words. EXAMPLE: function
      2. Can't start with a number.
      3. Can't use special characters except: $ _
      Best Practice = use camelCase


      */

      //FUNCTIONS
      function function1() {
        console.log("hello");
        console.log(2 + 2);
      } //FUNCTION IN THE EXAMPLE ONLY CREATES A FUNCTION. DOESN'T RUN THE CODE INSIDE, UNLESS IT IS CALLED.

      function1();
      function1(); // Calling the function (running the function, or executing the function)

      //FUNCTION PARAMETERS - acts like a variable for functions
      function calculateTax(/*parameter name*/) {
        console.log(1000 /*replace 1000 with parameter name here*/ * 1);
      }

      calculateTax(/*value you want the parameter to run*/);

      function calculateTax1(cost) {
        console.log(cost * 0.1);
      } //When a function has a parameter, you say 'the function takes a parameter' or if its a numbers say 'the function take a number'

      calculateTax1(2000); // Within the () is the value the parameter is going to run within the function code.
      calculateTax1(5000); //When putting a value into the function its called 'passing a value into the function' or called an ARGUMENT.

      function calculateTax2(cost, taxPercent) {
        console.log(cost * taxPercent);
      } // example of running multiple parameters

      calculateTax2(2000, 0.2); //filling in values for both parameters (cost, taxPercent)
      calculateTax2(5000); //didn't give a value for the second parameter which will get the value undefined.

      function calculateTax3(cost, taxPercent) {
        console.log(taxPercent);
        console.log(cost * taxPercent);
      }

      calculateTax3(5000); //didn't give a value for the second parameter which will get the value undefined.

      //Because taxPercent parameter was not defined, it will lead to an undefined result in the function when running console.log(taxPercent). Then go to the proceeding code console.log(cost * taxPercent), which multiplies cost * taxPercent (which is undefined) leading to a NaN. TO COMBAT THIS, look at the following code below.

      function calculateTax4(cost, taxPercent = 0.1) {
        console.log(cost * taxPercent);
      } //ABOVE SETTING A DEFAULT VALUE FOR A PARAMETER ON taxPercent

      calculateTax4(5000);
